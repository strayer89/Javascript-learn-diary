第五章 引用类型
	* 引用类型的值（对象）是引用类型的一个实例。
 	* 引用类型也被称为对象定义，它们描述的是一类对象所具有的属性和方法；
 	* 构造函数（Object()）本身就是一个函数，它们的目的是出于创建新对象；
 	* var person = new Object();
 5.1 Object 类型
 	* 两种创建方法
 		1> new 操作符创建
 			var person = new Object();
 		    person.name = "kang";
 		    person.age = 22;
 		2> 字面量创建
 			var person = {
 				name:"kang",	// "," 分隔不同的属性
 				age:"22"
 			}
 			-使用字面量创建对象时，属性名可以使用字符串
 				var person = {
 					"name":"kang",
 					"age": 22,
 					5:true
 				}
 				--这里的"5"会自动转化字符串；
 			-通过对象字面量定义对象时，不会调用 Object 构造函数；
 	* 访问对象属性
 		1> 一般来说，访问对象属性时使用的都是点表示法。 obj.name
 		2> javascript 也可以用方括号表示法来访问对象属性。property要加 "property"
 			console.log(person.name);
 			console.log(person["name"]);
 		3> 一般来说这两种没有区别，但是，方括号可以通过变量访问属性；
 			var propertyName = "name";
 			console.log(person[propertyName]);
 5.2 Array 类型
 	* Array 数组的每一项都可以保存任何类型的数据
 	* 创建数组方式
 		1> var arr = new Array();
 			a> 通过向构造函数传递数值可以定义数组的长度
 				var arr = new Array(20);
 			b> 通过构造函数传递数组中包含的项
 				var arr = new Array("red","blue","green");
 			c> 向构造函数传递一个参数的时候通过判断数值与非数值来创建数组；
 		2> var arr = [];
 	* 在读取数组时，方括号内从零开始索引
 		var arr = new Array();
 		console.log(arr[0]);
 	* 数组的 length 很有特点----它不是只读的。因此通过设置这个属性可以从数组的末尾移除项或者添加新项；
 		1> 删除项
 			var arr = ["red","blue","yellow"];
 			arr.length = arr.length -1;
 			console.log(arr);
 		2> 添加项
 			var arr = ["red","blue","yellow"];
 			arr.length = "black";
 			console.log(arr);
 	* 数组的项最多能够添加42亿个，超过了会发生异常
 	5.2.1 检测数组
 		* 对于一个网页或者一个全局作用域而言，使用 isinstanceof 就可以了	
 		* 多个框架（全局执行环境）
 			var arr = new Array("abc","dea");
 			Array.isArray(arr);
 			返回 true or false;
 	5.2.2 转换方法 |将数组转化为字符串|
 		* 所有对象都有 toString() / toLocalString() / valueOf() 方法
 		1> toString() 返回的是以逗号隔开的字符串格式
 		2> valueOf() 返回的还是数组
 		3> toLocalString() 有时返回 toString() 一样的字符串，有时返回数组每一项的 toLocalString() 的值
 			var person1 = {
 				toLocalString : funciton(){
 					return "张三";
 				},
 				toString : function(){
 					return "李四"
 				}
 			}	
 			var person2 = {
 				toLocalString : function(){
 					return "赵武"
 				}，
 				toString : function(){
 					return "王六"
 				}
 			}
 			var arr = [person1,person2];
 			console.log(arr);
 			console.log(arr.toString());
 			console.log(arr.toLocalString());
 		4> join() 方法
 			等同于 toString() 方法，获得字符串的间隔符可以改变
 			var arr = ["red","blue","yellow"];
 			var arrStr = arr.join("+");
 			console.log(arrStr); ---"red+blue+yellow";
 			如果不传参， join() == toString();
 		5> 如果数组中的某一项的值是 null 或者 undefined, 那么以上四种方法的间隔符以空字符串表示
 	5.2.3 栈方法
 			* ECMAScript推出的让数组类似其他数据类型的方法；
 			* 栈：后进先出（LIFO）last in first out;
 		1> push() 方法
 			* 接收任何参数，将其逐个添加到数组的末尾
 			* 返回修改后数组的长度
 		2> pop() 方法
 			* 移除数组最后一项
 			* 返回移除的项
 	5.2.4 队列方法
 			* 队列：先进先出（FIFO）
 		1> shift() 方法
 			* 移除数组的第一项
 			* 返回该项
 		2> unshift() 方法
 			* 在数组前端添加任意多个项
 			* 返回修改后数组的长度
 	5.2.5 重排序方法
 		1> reverse() 方法
 			* 直接颠倒数组内项的前后顺序
 			* arr.reverse();
 		2> sort() 方法
 			a> 无参数时：调用数组内每一项的 toString() 方法，即使是数字也转换成字符串，然后排序；
 				arr.sort();
 			b> 有参数：只是接收一个比较函数作为参数；
 				*比较函数接收两个参数，如果第一个应该位于第二个之前，返回负数，如果两个相等，返回零，如果第一个应该位于第二个之后，返回正数。
 				*简单比较参数例子
 					function compare(arg1,arg2){
 						if(arg1>arg2){
 							return 1;
 						} else if(arg1 < arg2){
 							return -1;
 						} else {
 							return 0;
 						}
 					};
 					var arr = [1,5,6,8,15,32,65,85,95,75];
 					arr.sort(compare);
 					console.log(arr);

 				* 如果是数值类型或者 valueOf()的对象，直接使用
 					function compare(arg1,arg2){
 						return arg1 - arg2;
 					}
 		3> reverse() 和 sort() 返回值都是重新排序的数组
 5.3 Date 类型
 5.4 RegExp 类型
 5.5 Function 类型
 5.6 基本包装类型
 5.7 单体内置对象
 5.8 小结
