#webpack plugin
plugin实际上是按照约定的方式对webpack运行过程中的步骤打标签，然后对每个步骤执行相应的操作

##COMPILER 实例
插件函数需要加到Compiler实例的原型链中，来获取该对象：
``
function MyPlugin() {};
MyPlugin.prototype.apply = function (compiler) {
    //now you have access to all the compiler instance methods
}
module.exports = MyPlugin;
''
