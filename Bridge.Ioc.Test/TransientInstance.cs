﻿using Bridge.EasyTests.Asserts;
using Bridge.EasyTests.Attributes;
using Bridge.Ioc.Test.Classes;
using Bridge.Ioc.Test.Classes.Impl;

namespace Bridge.Ioc.Test
{
    [Test("Transient Resolving")]
    public class TransientInstance
    {
        [TestMethod("Register<ITest,TheTest>()")]
        public void GenericInterface()
        {
            var container = new BridgeIoc();
            
            container.Register<ITest,TheTest>();

            var first = container.Resolve<ITest>();
            var second = container.Resolve<ITest>();

            first.ShouldBeNotEquals(second);
            first.Id.ShouldBeNotEquals(second.Id);
        }
        
        [TestMethod("Register(typeof(ITest),typeof(TheTest))")]
        public void NonGenericInterface()
        {
            var container = new BridgeIoc();
            
            container.Register(typeof(ITest),typeof(TheTest));

            var first = container.Resolve<ITest>();
            var second = container.Resolve<ITest>();
            
            first.ShouldBeNotEquals(second);
            first.Id.ShouldBeNotEquals(second.Id);
        }
        
        [TestMethod("Register<TheTest>()")]
        public void GenericClass()
        {
            var container = new BridgeIoc();
            
            container.Register<TheTest>();

            var first = container.Resolve<TheTest>();
            var second = container.Resolve<TheTest>();
            
            first.ShouldBeNotEquals(second);
            first.Id.ShouldBeNotEquals(second.Id);
            
        }
        
        [TestMethod("Register(typeof(TheTest))")]
        public void NonGenericClass()
        {
            var container = new BridgeIoc();
            
            container.Register(typeof(TheTest));

            var first = container.Resolve<TheTest>();
            var second = container.Resolve<TheTest>();
            
            first.ShouldBeNotEquals(second);
            first.Id.ShouldBeNotEquals(second.Id);
        }
        
        [TestMethod("RegisterFunc(()=> new TheTest())")]
        public void FuncResolve()
        {
            var container = new BridgeIoc();
            container.RegisterFunc(()=> new TheTest());

            var first = container.Resolve<TheTest>();
            var second = container.Resolve<TheTest>();
            
            first.ShouldBeNotEquals(second);
            first.Id.ShouldBeNotEquals(second.Id);
        }
    }
}