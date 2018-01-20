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
			* 匿名函数的 this 属性具有全局性
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
		7.2.1 闭包与变量
			* 作用域链的这种配置机制引出了一个值得注意的副作用，闭包只能取得包含函数中任何变量的最后一个值
			* 闭包所保存的是整个变量对象，而不是某个特殊的变量
				- 例子；
				 function createFunctions(){
				 	var result = new Array();

				 	for(var i=0; i<10; i++){
				 		result[i] = function () {
				 			return i;
				 		};
				 	}
				 	return result;
				 }
				* 这个函数会返回一个函数数组。每个函数的返回值都是10；
				* 每个函数的作用域链中都保存着 createFuncitons() 函数的活动对象，所以它们引用的都是同一个变量 i。
				* 我们可以通过创建拎一个匿名函数强制让闭包的行为符合预期
					function createFunctions(){
						var result = new Array();
						for(var i=0; i<10; i++){
							result[i] = function(num){
								return function(){
									return num;
								};
							}(i)；
						}
						return result;
					}
					- 在重写了前面的函数后，每个函数都会返回各自不同的索引值。
					- 在这个版本中，我们没有直接把闭包赋值给数；
					- 而是定义了一个匿名函数，并将立即执行该匿名函数的结果赋值给数组；
					- 这里的匿名函数有一个参数num, 也就是最终的函数要返回的值。
					- 在调用每个匿名函数时，我们传入了变量 i;
					- 由于函数参数时按值传递的，所以就会将变量 i 的当前值赋值给参数 num;
					- 而在这个匿名函数内部，又创建并反悔了一个访问 num 的闭包。
					- 这样一来， result 数组中的每个函数都有自己的 num 变量的一个副本，因此就可以返回各自不同的数值了。
		--------------------------------------------------------------------
		| 执行环境、作用域、作用域、闭包。。。
		|	1> "执行环境"：执行环境定义了变量或者函数有权访问的其他数据；
		|	2> 每个执行环境都有一个与之关联的 "变量对象";
		|		"执行环境" <=======> "变量对象";
		|	3> 环境中定义的所有 "变量和函数" 都保存在这个 "变量对象中";
		|	4> 如果这个环境是函数，则将其 "活动对象" 作为 "变量对象";
		|			"活动对象"(初始只有 arguments 对象) >>>>>>>>> "变量对象"
		|	5> "作用域链"：保存 "变量对象" 的有序列表;
		|
		|	1> 每个函数 "第一次被调用" 时，会创建一个 "执行环境" & "作用域链";
		|	2> 并把 "作用域链"赋值给一个特殊的内部属性 "[[Scope]]";
		|	3> 然后用 this/arguments/其他命名参数的值来初始化函数的"活动对象"
		|	4> "作用域链"是"执行环境"的属性，"[[Scope]]"是"函数"的属性；
		|
		|
		|	1> 创建函数 function compare(){}
		|		-- 自动创建包含"全局变量对象"的作用域链 ,保存在内部"[[Scope]]"属性中;
		|	2> 调用函数 compare();
		|		-- 创建"执行环境",通过复制"[[Scope]]"属性中的对象构建执行环境的"作用域链";
		|		-- 又一个活动对象（在此作为变量对象使用）被创建并推入执行环境作用域链前端；
		|	3> 了解匿名函数！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		--------------------------------------------------------------------

		7.2.2 关于 this 对象
			* 在全局环境中，this 等于 window, 而当函数被作为某个对象的方法调用时， this 等于那个对象。
			* 不过，匿名函数的执行环境具有全局性()，因此其 this 对象通常指向 window;
			* 也就是说匿名函数内部的 this 指向全局对象 window;
			* 例子：
				var name = "the windows";
				var object = {
					name:"my object",
					getName:function () {
						return function () {
							return this.name;
						};
					}
				};
				alert(object.getNameFunc()());   //"the window"；（非严格模式）
			* 解决办法
				- 将外部作用域中的 this 对象保存在一个闭包能够访问的变量例，就可以让闭包访问该对象了
				- 例子：
					var name = "the windows";
					var obj = {
						name : "myobject",
						getNameFunc : function(){
							var that = this;
							return function(){
								return that.name;
							}
						}
					};
				1> 匿名函数的 this 对象指向全局。
				2> 函数的 this 对象不会访问外部函数的 this 对象，所以直接访问到 window 对象
				3> 内部匿名函数访问变量会访问到外部对象的变量
				4> 所以将外部的 this 对象保存在变量中，以便查找
		7.2.3 内存泄漏
			* 由于 ie9 之前的版本对js对象和COM对象使用不同的垃圾收集历程，因此闭包在 IE 的这些版本中会导致一些特殊的问题。
			* 如果闭包的作用域链中保存着HTML元素，该元素将无法被销毁；
				function assignHandler(){
					var element = document.getElementById("someElement");
					element.onclick = function(){
						alert(element.id);
					};
				}
				- 以上代码创建了一个作为 element 元素事件处理程序的闭包，而这个闭包又创建了一个循环引用;
			* 通过以下代码可以解决问题
				function assignHandler(){
					var element = document.getElementById("someElement");
					var id = element.id;

					element.onclick = function(){
						alert(id);
					};
					elsement = null;
				}