chapter 4 变量作用域与内存问题
4.1 基本类型和引用类型的值
		* ECMAScript中|变量|可能包含两种数据类型：（基本类型值/引用类型值）
		* 对变量赋值时，解析器首先确定是 基本数据类型/ 复杂数据类型
		* 引用类型的值是保存在内存中的对象；
		* JavaScript 不能直接操作内存空间
		* 在操作对象时，实际上是在操作对象的引用而不是实际的对象。
		* 引用类型的值是按引用访问的
	4.1.1 动态的属性
		var person = new Object();
		person.age = 12;
		console.log(person.age);

	4.1.2 复制变量值
		* 复制基本类型值如下
			var num1 = 1;
			var num2 = num1;
			/初始化==赋值？？/
			num1 = 1;
			num2 = 1;
			num1 和 num2 互相独立，互不影响

		* 复制引用类型值时
			var obj1 = new Object();
			var obj2 = obj1;
			obj1.name = "kang";
			console.log(obj2.name);
			-- 输出"kang"
			所谓对象只是一个指针！
		* 对象保存在堆内存中

	4.1.3 传递参数
		* ECMAScript中所有的函数的参数都是|按值传递的|；
			function addTen(num){
				num += 10;
			};
			var num1 = 10;
			var result = addTen(num1);
			console.log(num1);
			console.log(result);
			只是将值传递进去，数据并没有改变；
		* 使用对象传递时
			function addName(obj){
				obj.name = "kang";
				var obj = new Object();
				obj.name = "zhi";
			};
			var testObj = new Object();
			var person = addName(testObj);
			console.log(testObj);
			console.log(person);
		* 函数内部定义的对象时|局部对象|， 会在函数执行完毕后立即销毁；
		* 可以把函数的参数想象成局部变量；

	4.1.4 检测指针指向对象类型
		* var nu = null;
		console.log(nu instanceof Object)
		console.log(nu instanceof Array)
		console.log(nu instanceof RegExp)
4.2.执行环境及作用域
	4.2.1 延长作用域链
	4.2.2 没有块级作用域
4.3.垃圾收集
	4.3.1 标记清除
	4.3.2 引用计数
	4.3.3 性能问题
	4.3.4 管理内存