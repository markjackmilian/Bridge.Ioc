Bridge.assembly("Bridge.Ioc.Test", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System];
    $m("Bridge.Ioc.Test.SingleInstance", function () { return {"att":1048577,"a":2,"at":[new Bridge.EasyTests.Attributes.TestAttribute.$ctor1("Single Instance Resolving")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("RegisterFunc(()=> theTest)")],"a":2,"n":"FuncResolve","t":8,"sn":"FuncResolve","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("container.RegisterSingleInstance<TheTest>()")],"a":2,"n":"GenericClass","t":8,"sn":"GenericClass","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("RegisterSingleInstance<ITest,TheTest>()")],"a":2,"n":"GenericInterface","t":8,"sn":"GenericInterface","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("RegisterInstance(new TheTest())")],"a":2,"n":"InstanceResolve","t":8,"sn":"InstanceResolve","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("container.RegisterSingleInstance(typeof(TheTest))")],"a":2,"n":"NonGenericClass","t":8,"sn":"NonGenericClass","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("RegisterSingleInstance(typeof(ITest),typeof(TheTest))")],"a":2,"n":"NonGenericInterface","t":8,"sn":"NonGenericInterface","rt":$n[0].Void}]}; });
    $m("Bridge.Ioc.Test.TransientInstance", function () { return {"att":1048577,"a":2,"at":[new Bridge.EasyTests.Attributes.TestAttribute.$ctor1("Transient Resolving")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("RegisterFunc(()=> new TheTest())")],"a":2,"n":"FuncResolve","t":8,"sn":"FuncResolve","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("Register<TheTest>()")],"a":2,"n":"GenericClass","t":8,"sn":"GenericClass","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("Register<ITest,TheTest>()")],"a":2,"n":"GenericInterface","t":8,"sn":"GenericInterface","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("Register(typeof(TheTest))")],"a":2,"n":"NonGenericClass","t":8,"sn":"NonGenericClass","rt":$n[0].Void},{"at":[new Bridge.EasyTests.Attributes.TestMethodAttribute("Register(typeof(ITest),typeof(TheTest))")],"a":2,"n":"NonGenericInterface","t":8,"sn":"NonGenericInterface","rt":$n[0].Void}]}; });
    $m("Bridge.Ioc.Test.Classes.ITest", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Id","t":16,"rt":$n[0].Guid,"g":{"ab":true,"a":2,"n":"get_Id","t":8,"rt":$n[0].Guid,"fg":"Bridge$Ioc$Test$Classes$ITest$Id"},"fn":"Bridge$Ioc$Test$Classes$ITest$Id"}]}; });
    $m("Bridge.Ioc.Test.Classes.Impl.TheTest", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Id","t":16,"rt":$n[0].Guid,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[0].Guid,"fg":"Id"},"fn":"Id"},{"a":1,"n":"__Property__Initializer__Id","t":4,"rt":$n[0].Guid,"sn":"__Property__Initializer__Id"}]}; });
});
