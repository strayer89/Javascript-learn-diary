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
	* 全局执行环境是 window 对象
	* 所有变量和函数都是 window 对象的属性和方法创建的。
	* 某个执行环境的所有代码执行完毕后，该环境被销毁。
	* 保存在该环境的所有变量和函数也随之销毁
	* 全局执行环境直到浏览器退出---关闭页面或者浏览器才会被销毁
	* 每个函数都有自己的执行环境。
	* 当执行环境流入一个函数时，函数的环境会被推入一个环境栈中。
	* 函数执行完毕后，栈将其环境推出，把控制权返回给之前的执行环境
	* ECMAScript中的执行流就是由这个方便的机制控制的。
	* 全局执行环境的变量对象始终都是作用域链中的最后一个对象。
	* 标识符解析时沿着作用域链一级一级地搜索标识符的过程。
	* 下例
		var color = "blue";
		function changeColor(){
			if(color == "blue"){
				color = "red";
			} else {
				color = "blue";
			}
		}
		changeColor();
		alert("color is now" + color);
	* 在局部作用域中定义的变量可以和全局变量互换使用；
		var color = "blue";
		function changeColor(){
			var anotherColor = "red";
			function swapColors(){
				var tempColor = anotherColor;
				anotherColor = color;
				color = tempColor;
			}
			swapColors();
		}
		changeColor();
	* 函数的参数也会被当做变量来对待，相当于函数内部 var 一个变量；
	4.2.1 延长作用域链
		* with 语句；
		* try-catch 语句的 catch 块；
	4.2.2 没有块级作用域
		* js没有块级作用域 {里面的都是一个作用域}
			if(true){
				var color = "blue";
			}
			alert(color) ---"blue";
			{}里面的外面应该访问不到，但js可以；
		* 反例
			for(var i = 0; i<10; i++){
				doSomethint(i);
			}
			alert(i); //10
			i 相当于全局变量；
		* var 申明的变量自动添加到最接近的环境中。
		* 未用 var 申明自动添加到全局变量；
		! 查询标识符规则
			var color = "blue";
			function getColor(){
				return color;
			}
			alert(getColor()); //"blue";
			-首先在 getColor() 内部寻找，没找到才会向外部查找。
			-如果找到了，则不会向上一级查找。
			var color = "blue";
			function getColor(){
				var color = "red";
				return color;
			}
			alert(getColor()); // "red";
		/变量是 window 的属性， function 是window 的方法/
4.3.垃圾收集
	4.3.1 标记清除
	4.3.2 引用计数
	4.3.3 性能问题
	4.3.4 管理内存
		* 解除引用（dereferencing）
		* 局部变量会在它们离开执行环境时自动被解除引用
			function createPerson(name){
				var localPerson = new Object();
				localPerson.name = name;
				return localPerson;
			}
			var globalPerson = createPerson("Nicholas");

			--手工解除 globalPerson 的引用
			globalPerson = null;
			--localPerson对象在函数运行完毕后已经被删除。

		* 解除一个值的引用并不意味着自动回收该值所占的内存。解除引用的真正作用是让值脱离执行环境，以便下次回收；

	小结：
		* js变量可以保存两种类型的值：基本类型值和引用类型值。
		*特点：
			a> 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
			b> 从一个变量向另一个变量赋值基本类型值，会创建这个值得一个副本；
			c> 引用类型的值是对象，保存在堆内存中；
			d> 包含引用类型值得变量实际上包含的并不是对象本身，而是一个纸箱该对象的指针；
			e> 从一个变量向另一个变量赋值引用类型的值，赋值的其实是指针，因此两个变量最终都指向同一个对象；
			f> 确定一个值是那种基本类型可以使用 typeof 操作符，而确定一个值是那种引用类型可以使用 instanceof 操作符。
			g> 所有变量都存在一个执行环境（作用域）当中，这个执行环境决定了变量的生命周期，以及那一部分代码可以访问其中的变量 
			h> 执行环境有全局执行环境和函数执行环境之分；
			i> 每次进入一个新的执行环境，都会创建一个用于搜索变量和函数的作用域链；
			j> 函数的局部环境有权访问所有环境
			k> 全局环境只能访问在全局中定义的变量或者函数
			l> 变量的执行环境有助于确定应该合适释放内存。
			m> 垃圾收集算法："标记清除"、"引用计数"
			n>
			o>