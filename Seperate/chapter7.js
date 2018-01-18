第七章 函数表达式
	* 重要特性：函数声明提升
		- 在执行代码之前会先读取函数声明
		- 函数放在任何地方都可以
			sayHi();
			function sayHi(){
				console.log("hi");
			}
		- 函数放在后面也可以
		- 函数表达式方式创建不可以声明提升
			sayHi();
			var sayHi = function(arg1,arg2,arg3){
				console.log("hi");
			}  // 导致错误
			* 这种创建方式的函数：匿名函数()
			* 匿名函数的 name 属性是空字符串
	7.1 递归
		* 递归函数时在一个函数通过名字调用自身的情况下构成的
			- 例子：
				function factorial(num){
					if(num <=1 ){
						return 1;
					} else {
						return num * factorial(num-1);
					}
				}
			-- 函数名赋值给另外的变量时会出错，所以用下面
			function factorial(num){
				if(num <=1 ){
					return 1;
				} else {
					return num * arguments.callee(num - 1);
				};
			}
			-- 在严格模式下，不能通过脚本访问 arguments.callee,可以用下面
			var factorial = (function f(num){
				if(num <= 1){
					return 1;
				} else {
					return num * f(num-1);
				}
			});
			-- 这种模式在严格模式和非严格模式下都行得通
			-- 上面的函数没有小括号同样适用,只是颜色改了：
				var factorial = function f(num){
					if(num <= 1){
						return 1;
					} else {
						return num * f(num-1);
					}
				};
	7.2 闭包
		* 匿名函数：没有在 "function" 后面添加函数名的都是匿名函数
		* 闭包：有权访问另一个函数作用域中变量的函数
		* 常见创建方式：在一个函数内部创建另一个函数
			function createCompareFunction(propertyName){
				return function(object1, object2){
					var value1 = object1[propertyName];
					var value1 = object1[propertyName];
					if(value1 > value2){
						return 1;
					} else if(value1 < value2) {
						return -1;
					} else {
						return 0;
					}
				}
			}
		* 作用域链
			- 本质：指向变量对象的指针列表，它只引用但不实际包含变量对象。
			- 当某个函数第一次被调用时，会创建一个执行环境及相应的作用域链，
			- 并把作用域链赋值给一个特殊的内部属性 "[[scope]]";
			- 然后，使用 this / arguments 和其他命名参数的值来初始化函数的活动对象；
			- 在函数执行过程中，为读取和写入变量的值，就需要在作用域链中查找变量；
			- 例子；
				function compare(value1,value2){
					if(value1 > value2){
						return 1;
					} else if(value1 < value2) {
						return -1;
					} else {
						return 0;
					}
				}
				var result = compare(5, 10)；
			- 定义 compare() 函数，又在全局作用域中调用了它；
			- 第一次调用时，会创建一个包含 this/arguments/value1/value2的活动对象；
			- 全局执行环境的变量对象（this/result/compare）在 compare()执行环境的作用域链中出于第二位；

			- 后台的每个执行环境都有一个表示变量的对象 - 变量对象
			- 全局环境的变量对象始终存在；
			- 像 compare() 函数这样的局部环境的变量对象，则只在函数执行过程中存在；
			- 在创建 compare() 函数时，会创建一个预先包含全局变量对象的作用域链，这个作用域链被保存在内部的"[[scope]]"属性中；
			- 当调用 compare() 函数时，会为函数创建一个执行环境；
			- 然后通过赋值函数的"[[scope]]"属性中的对象构建起执行环境的作用域链；
			- 此后，又有一个活动对象被创建并推入执行环境作用域链前端
			- 对于这个例子中的 compare()函数的执行环境而言，其作用域链中包含两个变量对象：本地活动对象和全局变量对象；
			- 作用域链本质上是一个指向变量对象的指针列表，它只引用但不实际包含变量对象；
			- 无论什么时候在函数中访问一个变量时，就会从作用域链中搜索具有相同名字的变量；
			- 一般而言，当函数执行完毕后，局部活动对象就会销毁，内存中仅保存全局作用域（全局执行环境的变量对象）。
			- 闭包情况不同；
			- 上述例子；
				var compare = createComparisonFunction("name");
				var result = compare({name:"kkk"},{name:"bbb"});
				* 匿名函数从 createComparisonFunciton() 返回后，它的作用域链被初始化为包含	createComparisonFunciton() 函数的执行环境而言，其作用域链中包含两个变量对象：本地活动对象和全局变量对象；
				* 这样，匿名函数就可以访问在 createComparisonFunciton() 中定义的所有变量。
				* 更重要的是，createComparisonFunciton() 函数执行完毕后，其活动对象也不会被销毁，因为匿名函数的作用域链任然在引用这个活动对象，换句话说，当 createComparisonFunciton() 函数返回后，其执行环境的作用域链会被销毁，但它的|活动对象|任然会保留在内存中，知道你们函数被销毁后， createComparisonFunciton() 的活动对象才会被销毁；
				* 例子；
					var compareName = createComparisonFunction("name");
					var result = compareName({ name:"kkk"},{name:"bbb"});
					compareNames = null; 
					// 解除对匿名函数的引用（以便释放内存）
			* 谨慎使用闭包，闭包会比其他函数多占内存