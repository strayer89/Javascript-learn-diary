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
 	5.2.6 操作方法
 		1> concat() 方法
			* 基于当前数组创建新数组
			* 先创建当前数组的一个副本；
			* 将接收到的参数添加到副本的末尾
			* 返回新的数组
				var colors = ["red","green","blue"];
				var addColors = colors.concat("yellow",["kk","zz","tt"]);
				console.log(colors);
				console.log(addColors);
		2> slice() 方法
			* 一个参数时：从这个参数位置起始向后，返回全部的项的一个新的数组；
			* 两个参数时：返回起始位置到结束位置的项，不包含结束位置；
			* 例子：
				var color = ["red","blue","yellow","green","black"];
				var colorSlice1 = color.slice(1); ---["blue","yellow","green","black"];
				var colorSlice2 = color.slice(1,4); ---["blue","yellow","green"]
			* 如果参数是负数，则加上数组长度
			* 如果结束位置小于开始位置，返回空数组
		3> splice() 方法
			直接作用原数组
			* 删除：可以删除任意数量的项，指定2个参数：要删除项的第一项位置和要删除的项数
				- splice(0,2); 删除数组的前两项
			* 插入：可以向指定位置插入任意数量的项，需要三个参数：起始位置、要删除的项数、要插入的项。
				- splice(2,0,"red","green"); 从当前数组位置2开始插入两个字符串项
			* 替换：起始位置、要删除的项数、要插入的项
				- splice(2,1,"kkk"); 删除一项，添加“"kkk"
 	5.2.7 位置方法
 			* 两个参数：要查找的项和表示朝赵起点位置的索引；
 			* 返回查找到的项的位置下标
 			* 未找到返回-1
 			* 只要找到就返回，不会继续查找
 		1> indexOf() 方法
 			* 从前向后查找
 			* 例子：
 				var arr = [1,2,3,4,5,6,7,6,5,4,3,2,1];
 				var fNum = arr.indexOf(4);
 				console.log(fNum);
 		2> lasetIndexOf() 方法
 			* 从后向前查找
 	5.2.8 迭代方法
 			* ECMAScript为数组定义了5个迭代方法。每个方法都接收两个参数
 		1> every():   对数组的每一项运行给定的函数，如果每一项都返回 true ,则返回 true;
 		2> filter():  对数组的每一项运行给定的函数，返回该函数会返回 true 的项组成的数组
 		3> forEach(): 对数组的每一项运行给定的函数，这个方法没有返回值
 		4> map():     对数组的每一项运行给定的函数，返回每次函数调用的结果组成的数组
 		5> some():    对数组的每一项运行给定的函数，如果该函数对任一项返回 true,则返回 true
 		* 例子： 
 			var num = [1,2,3,4,5,4,3,2,1];
 			var everyResult = num.every(function(item,index,array){
 				return (item > 2);
 			});
 			var somgResult = num.some(function(item,index,array){
 				return (item > 2);
 			});
 			var filterResult = num.filter(function(item,index,array){
 				return (item > 1);
 			});
 			var mapResult = num.map(function(item,index,array){
 				return item*2;
 			});
 		* 支持：ie9+ 、 firefox 3+ 、 opera9.5+ 、 chrome
 	5.2.9 缩小方法
 		* 都接收两个参数：一个在每一项上调用的函数和作为缩小基础的初始值
 		1> reduce() 方法
 		2> reduceRight() 方法
 5.3 Date 类型
 	* 1970年1月1日午夜开始进过毫秒数来保存日期；精确度 28 万年
 	* UTC 国际协调时间
 	* 创建对象
 		* var now = new Date();
 		* 不传参的情况下获取当前时间；
 		* 传递的参数必须以毫秒记
	 	* 返回日期毫秒数的方法：将具体日期返回成数字型字符串，以毫秒记；
	 		1> Date.parse();
	 			- 接收一个表示日期的字符串参数，然后根据参数返回毫秒数。
	 		2> Date.UTC();
	 			- 参数：年份、基于0的月份、月中的那一天、小时数、分钟、秒、毫秒
	 			- 只有年份和月份参数时必须的
	 			- 例子：
	 				-- 生日
	 				var myBirthday = new Date(Date.UTC(1989, 11, 11));
	 				-- 具体日期 2005年5月5日下午5：:5:55
	 				var allFive = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
	* 所以创建具体日期时间
		- var tme = new Date(2005, 11, 22, 12, 30, 55);
	* ECMAScript 5 新方法
		- Date.now();
			var start = Date.now();
			doSomething();
			var stop = Date.now();
			result = stop - start; //doSomething() 所用的时间
			console.log(result);

			在向下兼容模式中如下：
			var start = +Date.now();
			doSomething();
			var stop = +Date.now();
			result = stop - start;
			console.log(result);
 	5.3.1 继承的方法
 	5.3.2 日期格式化方法
 		* Date 类型还有一些专门用于将日期格式转化为字符串的方法；
 			1> toDateString(); 于特定于实现的格式显示星期、月、日和年
 			2> toTimeString(); 以特定于实现的格式显示时、分、秒和时区
 			3> toLocaleDateString() 以特定于地区的格式显示星期、月、日和年
 			4> toLocaleTimeString(); 以特定于实现的格式显示时、分秒
 			5> toUTCString(); 以特定于实现的格式完整的UTC日期
 	5.3.3 日期、时间组件方法
 		* UTC 日期：在没有时区偏差的情况下（将日期转换为GMT时间）的日期值；
 		* 方法：
 			a> 获取日期对象的参数：
	 			1> getTime();		-- 返回表示日期的毫秒数
	 			2> getFullYear();	-- 返回年份
	 			3> getMonth();		-- 返回月份
	 			4> getDate();		-- 返回月份中的天数
	 			5> getDay();		-- 返回星期		
	 			6> getHours();		-- 返回小时
	 			7> getMinutes();	-- 返回分钟
	 			8> getSeconds();	-- 返回秒数
	 			9> getMilliseconds();- 返回毫秒数
	 		b> 设置对象的参数(返回的是毫秒数)
	 			1> setTime();
	 			2> setFullYear();
	 			3> setMonth();
	 			4> setDate();
	 			5> setDay();
	 			6> setHours();
	 			7> setMinutes();
	 			8> setSeconds();
	 			9> setMilliseconds();
	 		c> getTimezoneOffset(); 返回本地时间与UTC时间相差的分钟数。
 5.4 RegExp 类型
 	* 基础：
 		1> .	匹配任意单个字符 （除了\n）
 		2> \w 	匹配数组、字母、下划线
 		3> \s 	匹配任何空白字符
 		4> \d 	匹配单个数字字符
 		5> \b 	匹配单词的开始、结尾字母
 		6> ^ 	匹配字符串的开始
 		7> $ 	匹配字符串的结尾
 		8> *	出现0到多次
 		9> + 	出现一次或多次
 		10> ? 	出现零次或一次
 		11> {n} 出现n次
 		12> {n,m} 出现n-m次
 		13> {n,} 出现n-多次
 	* ECMAScript通过 RegExp 类型来支持正则表达式。
 	* 创建字面量正则表达式：
 		var expression = / pattern / flags;
	 	* 每个正则表达式都可以带有一个或多个标志（flags）；
	 		1> g : 表示全局（global）模式；发现第一个匹配的也不会停止；
	 		2> i : 表示不区分大小写（case-insensitive）模式；
	 		3> m : 表示多行（multiline）模式，到达一行文本末尾时还有继续朝赵下一行；
	 	* 例子：
	 		a> 匹配字符串中素有"at"的实例
	 			var pattern1 = /at/g;
	 		b> 匹配第一个"bat"或"cat",不区分大小写；
	 			var pattern2 = /[bc]at/i;
	 		c> 匹配所有以"at"结尾的三个字符的组合，不区分大小写
	 		 	var pattern3 = /.at/gi;
	 	* 正则表达式元字符/     ( [ { \ ^ $ | ) ? * + . ] }
		* 如果要匹配的字符串中有元字符，需要转义 \
			a> 匹配第一个"[bc]at",不区分大小写；
				var pattern1 = /\[bc\]at/;
			b> 匹配所有".at",不区分大小写；
				var pattern2 = /\.at/gi;
	* new 操作符创建正则
		字面量： 	var pattern1 = /[bc]at/gi;
		构造函数：	var pattern1 = new RegExp("[bc]at","gi");
				字面量模式				等价的字符串
				/\[bc\]at/			"\\[bc\\]at"			
				/\.at/				"\\.at"
				/name\/age/			"name\\/age"
				/\d.\d(1,2)/		"\\d.\\d(1,2)"
				/w\\hello\\123/		"\\/w\\\\hello\\\\123"
	* 使用字面量创建和 RegExp 构造函数创建正则时不一样的。
	* !bug 在ECMAScript3 中，字面量始终会共享同一个 RegExp 实例，而使用构造函数创建的每一个新的 RegExp 都是一个新的实例；
		var re = null,
				 i;
		for(i=0; i<10; i++){
			re = /cat/g; //(ECMAScript 3中只创建一次)
			var test1 = re.test("catastrophe");
			console.log(test1);
		};
		for(i=0; i<10; i++){
			re = new RegExp("cat","g");
			var test2 = re.test("catastrophe");
			console.log(test2);
		}
	5.4.1 RegExp 的实例属性
		1> global: 布尔值，表示是否设置了"g"标志
		2> ignoreCase: 布尔值，表示是否设置了"i"标志
		3> lastIndex: 整数，表示开始搜索下一个匹配项的字符位置，从0算起。
		4> multiline: 布尔值，表示是否设置了"m"标志。
		5> source: 正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。
	5.4.2 RegExp 的实例方法
		1> exec() 方法；
			* 专门为捕获组而设计的
			* 接收一个参数，要应用模式的字符串
			* 包含两个属性 index 和 input，index 表示匹配项在字符串中的位置，input 表示应用正则表达式的字符串
				- 例子：
					var text = "mom and dad and baby";
					var pattern = /mom( and dad( and baby)?)?/gi;
					
					var matches = pattern.exec(text);
					alert(matches.index); //0
					alert(matches.input);
					alert(matches[0]);
					alert(matches[1]);
					alert(matches[2]);
					
		2> test() 方法；
			* 接收一个字符串参数。匹配返回 true ,不匹配返回 false
			* 例子：
				var text = "000-00-0000";
				var pattern = /\d{3}-\d{2}-\d{4}/;	
				if(pattern.test(text)){
					alert("the pattern was matched");
				}
			* RegExp 实例继承的 toLocaleString() 和 toString() 方法返回正则表达式的字面量
				var pattern = new RegExp("\\[bc\\]at","gi");
				alert(pattern.toString());
				alert(pattern.toLocaleString());
			* 正则表达式的 valueOf() 方法返回正则表达式本身；
	5.4.3 RegExp 构造函数的属性
		1> 例子：	
			var text = "this has been a short summer";
			var pattern = /(.)hort/g;
			if(pattern.test(text)){
				alert(RegExp.input);		// this has been a short summmer
				alert(RegExp.leftContest);	// this has been a
				alert(RegExp.rightContest); // summer
				alert(RegExp.lastMatch);	// short
				alert(lastParen);			// s
				alert(multiline);			// false
			}
		2> 用短属性名表示
			var text = "this has been a short summer";
			var pattern = /(.)hort/g;
			if(pattern.test(text)){
				alert(RegExp.$_);		// this has been a short summmer
				alert(RegExp.["$`"]);	// this has been a
				alert(RegExp.["$'"]); 	// summer
				alert(RegExp.["$&"]);	// short
				alert(RegExp.["$+"]);	// s
				alert(RegExp.["$*"]);	// false
			}
 5.5 Function 类型
 	* 函数实际上是对象
 	* 每个函数都是 Function 类型的实例，具有属性和方法
 	* 字面量创建：
 		function sum(num1,num2){
 			return num1 + num2;
 		}
 		等同于：
 		var function(num1,num2){
 			return num1 + num2;
 		};
 	* 构造函数创建
 		var sum = new Function("num1","num2","return num1 + num2"); //不推荐
 	* 理解“函数是对象，函数名是指针”；
 	* 理解指针与调用函数
 		function sum(num1,num2){
 			return num1 + num2;
 		}
 		alert(sum(10,10));		//20

 		var anotherSum = sum;
 		alert(anotherSum(10,10)); //20

 		sum = null;
 		alert(anotherSum(10,10)); //20

 		* 只写函数名 sum,而没有括号 sum(); 表示对指针的操作；
 		* sum = null; 意思是将指针与函数断绝；
 	5.5.1 没有重载
 		* 意思是多次命名函数，只有最后一次有效
 	5.5.2 函数声明与函数表达式
 		* 解析器会通过一个函数声明提升的过程（"function declaration hoisting"）;
 			console.log(sum(10,10));
 			function sum(num1,num2){
 				return num1 + num2;
 			}
 			- 可以正常运行
 	5.5.3 作为值得函数
 		* 访问函数指针而不执行函数：去掉括号 sum;
 		* 对数组中的 Object 项通过指定属性排序；
 			var arr = [{"name":"kkk","age":"22"},{"name":"mmm","age":"33"}];
 			function comparePropertyName(propname){
 				return function(obj1,obj2){
 					var val1 = obj1[propname];
 					var val2 = obj2[propname];
 					if(val1 > val2){
 						return 1;
 					}else if(val1 <val2){
 						return -1;
 					}else{
 						return 0;
 					}
 				}
 			}

 			arr.sort(comparePropertyName("age"));
 			console.log(arr);
 			arr.sort(comparePropertyName("name"));
 			console.log(arr)
 	5.5.4 函数内部属性
 		* 函数的内部有两个特殊的对象
 		* this / arguments
 		* 特殊对象： arguments 的属性 callee();
	 		* callee 属性是一个指针，指向拥有这个 arguments 对象的函数；
	 		* 例子：
	 			1> 与函数名称有耦合现象
		 			function factorial(num){
		 				if(num <=1){
		 					return 1;
		 				} else{
		 					return num * factorial(num-1);
		 				}	
		 			}
		 			- 这是一个阶乘函数
		 			- 阶乘中与函数名耦合（有直接的关系；函数名变更会导致错误）
		 			- 如果下面这样
		 				var testFun = factorial;
		 				factorial = null;
		 				testFun(10);	// 
		 		2> 与函数名称无耦合现象
		 			function factorial(num){
		 				if(num <=1){
		 					return 1;
		 				} else {
		 					return num * arguments.callee(num-1)
		 				}
		 			}
		* this 对象
			- this 引用的是函数根据以执行的环境对象；
			- 例子：
				window.color = "red";
				var o = { color:"blue"};
				function sayColor(){
					alert(this.color);
				}

				sayColor(); // red

				o.sayColor = sayColor; 
				o.sayColor();   // blue
			- 函数的名字仅仅是一个包含指针的变量。即使是在不同的环境中执行，全局的 sayColor() 函数与 o.sayColor() 指向的任然是同一个函数；
		* caller属性
			- 这个属性保存着调用当前函数的函数引用
			- 如果在全局作用域中调用当前函数，它的值为 null;
			- 例子：	
				function outer(){
					inner();
				}	
				function inner(){
					console.log(inner.caller);
				}
				outer();

			- 松散耦合
				function outer(){
					inner();
				}
				function inner(){
					console.log(arguments.collee.caller;
				}
	5.5.5 函数属性和方法
		* 每个函数都包含两个属性： length / prototype
		* length 属性
			- 表示函数希望接收的命名参数个数
			- 例子：
				function sum(num1,num2,num3){
					return num1 + num2 + num3;
				}
				console.log(sum.length);
		* prototype 属性
			- 对于ECMAScript中的引用类型而言，prototpe是保存它们所有实例方法的真正所在。
			- toString() / valueOf() ... 都保存在 prototype 属性内
			- 只不过是通过各自对象的实例访问
		* 每个函数都包含两个非继承而来的方法：apply() 和 call();
			- 用途: 在特定的作用域中调用函数
			- 实际上等于设置函数体内 this 对象的值。
			- apply() 方法
				*接收两个参数：
					1> 在其中运行函数的作用域
					2> 参数数组,可以是 Array 实例，也可以是 arguments 对象
						- L例子
						function sum(num1, num2){
							return num1 + num2;
						} 
						function callSum1(num1,num2){
							return sum.apply(this, arguments);
						}
						function callSum2(num1,num2){
							return sum.apply(this,[num1,num2]);
						}
						alert(callSum1(10,10));
						alert(callSum2(10,10));
					3> 在严格模式下，未指定环境对象而调用函数，则 this 值不会转型为 windows;否则 this 值为 undefined;
			- call() 方法;
				* 接收两个参数,同 apply();
				* 不同点：第二个参数必须一一列举出来
				* 例子： 
					function sum(num1,num2){
						return num1 + num2;
					}
					function callSum(num1, num2){
						return sum.call(this, num1, num2);
					}
					alert(callSum(10,10));
			- call() 和 apply() 真正强大在于扩充函数赖以运行的作用域
				* 例子：
					window.color = "red";
					var o = {color:"blue"};

					function sayColor(){
						alert(this.color);
					}

					sayColor.call(this);	// red
					sayColor.call(window);	// red
					sayColor.call(o);		// blue
			- 使用 call() 和 apply() 扩充作用域最大的好处是对象不需要与方法有任何耦合关系。
			- bind()方法 （ECMAScirpt5） ie9+
				* 通过将函数绑定给对象创建新的实例
				* 例子：
					window.color = "red";
					var o = { color: "blue"};
					function sayColor(){
						alert(this.color);
					}
					var objectSayColor = sayColor.bind(o);
					objectSayColor();				
 5.6 基本包装类型
 	* 为了便于操作基本类型值，ECMAScript 还提供了3个特殊的引用类型： Boolean/Number/String
 	* 例子：
 		var s1 = "some text";
 		var s2 = s1.substring(2);
 		后台的操作：
 		var s1 = new String("some text");
 		var s2 = s1.substring(2);
 		s1 = null;
 	* 引用类型值与基本包装类型值区别：对象的生存期不同
 		- 引用类型值对象一直存在
 			* 引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。
 			* 自动黄建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁；
 		- 基本包装类型值在操作完成后销毁
 		- 不能为基本包装类型值添加方法属性
 		- 例子：
 				var s1 = "some text";
 				s1.color = "red";
 				alert(s1.color);  // undefined；
 		- 可以显式调用 Boolean / String / Number 来创建基本的包装类型的对象。
 		- 例子：
 			var obj = new Object("some text");
 			alert(obj instanceof String) // true
 		- 调用 new 操作符和 运用转型函数时不同的
 		- 例子：
 			var num = Number("333");
 			console.log(typeof num) // number

 			var num = new Number("333");
 			consolelog(typeof num);	// object
 	5.6.1 Boolean 类型
 		* 创建 Boolean 引用类型容易让人误解
 		* 例子： 
 			var bool = new Boolean(false);
 			var jug = bool && true;
 			console.log(jug) 	// true 因为bool 时非null object， 返回第二个值

 			var bool = false;
 			var jug = bool && true;
 			console.log(jug); 	// false // 因为bool 为false；
 	5.6.2 Number 类型
 		* Number 类型也重写了 valueOf() / toLocalString() / toString() 方法
 		* 重写后的 valueOf() 方法返回对象表示的基本类型的数值
 		* 另外两个方法返回字符串形式的数值。
 		* toFixed() 方法
 			var num1 = 10;
 			var num2 = 10.005;
 			console.log(num1.toFixed(2));	// 10.00
 			console.log(num2.toFixed(2));	// 10.01
 			- 参数为保存小数点后面位数
 			- 可以四舍五入
 			- IE8之前的版本不能正确地舍入 ：[-0.94,-0.5] 与 [0.5,0.94] 之间的值
 		* toExponential() 方法
 			- 格式化数值的方法
 			- 例子：
 				var num = 100;
 				console.log(num.toExponential(1));  1.0e+2  10的2次幂
 		* toPrecision() 方法
 			- 这个方法接收一个参数，即表示数值的所有数字的位数。
 			- 例子：
 				var num = 99;
 				console.log(num.toPrecision(1));	//	1.0e+2   100四舍五入
 				console.log(num.toPrecision(2));	//99
 				console.log(num.toPrecision(3));	// 99.0
 			- toPrecision() 可以表现1到21位小数，某些支持更大
 	5.6.3 String 类型
 		1> 字符方法
 			* 访问字符串中特定字符的方法
 			* charAt() 和 charCodeAt();
 			* 都只接受一个参数，基于0的字符位置。
 			* charAt() 方法
 				- 返回下标位置的单个字符
 				- 例子：
 					var str = "hello world";
 					alert(str.charAt(1))	// "e"
 			* charCodeAt() 方法
 				- 返回下标位置的字符编码
 				- 例子：
 					var str = "hello world";
 					alert(str.charCodeAt(1))	// "101"
 			* ECMAScirpt5 定义了 /[] 下标访问方法  IE8+
 				- 例子：
 					var str = "hello world";
 					alert(str[0]);
 		2> 字符串操作方法
 			* 全部都是基于子字符串创建新的字符串方法，不会对原字符串影响
 			* concat()方法 // 不如使用 + 拼接字符串；
 				- 拼接字符串，返回新的字符串
 				- 例子：
 					var str = "hello";
 					var str1 = str.concat("world","!");
 					console.log(str1) // "hello world!"；
 			* slice() / substr() / substring() 方法
 				- 接收1-2个参数
 				- 第一个是开始位置，第二个是结束位置，没有第二个那就截取到尾部
 				- substr() 第二个参数为截取参数个数
 				- 例子：
 					var str = "hello world";
 					console.log(str.slice(3));		// "lo world"
 					console.log(str.substr(3));		// "lo world"
 					console.log(str.substring(3));	// "lo world"
 					console.log(str.slice(3,7));	// "lo w"
 					console.log(str.substr(3,7));	// "lo w"
 					console.log(str,substring(3,7));// "lo worl"
 				- 传递负值例子：
 					var str = "hello wrold";
 					console.log(str.slice(-3))		// "old"
 					console.log(str.substr(-3))		// "old"
 					console.log(str.substring(-3))	// "hello world"
 					console.log(str.slice(3,-4))	// "lo w"
 					console.log(str.substr(3,-4))	// ""
 					console.log(str.substring(3,-4))// "hel"	
 		3> 字符串位置
 			* indexOf() 和 lastIndexOf() 方法
 			* 从一个字符串中搜索子字符串的方法
 			* 搜索不到返回 -1；
 			* indexOf() 从前向后搜索，
 			* lastIndexOf() 从后向前搜索
 				- 例子：
	 				var str = "hello world";
	 				console.log(str.indexOf("o"));			//4
	 				console.log(str.lastIndexOf("o"));		//7
 			* 两个参数时指定搜索开始位置
 				- 例子：
	 				var str = "hello world";
	 				console.log(str.indexOf("o",6));		// 7
	 				console.log(str.lastIndexOf("o",6));	//4
 			* 通过第二个参数可以从字符串中搜索所有符合的字符串
 				- 例子
 					var str = "Lore ipsum dolor sit amet, consectetur adipisicing elit";
 					var arr = new Array();
 					var loc = str.indexOf("s");
 					while(loc > -1){
 						arr.push(loc);
 						loc = str.indexOf("s",loc+1);
 					}
 					console.log(arr)
 		4> trim() 方法返回对象表示的基本类型的数值 IE9+
 			* ECMAScirpt5 消除前置后置空格
 				- 例子：
 					var str = "  hello world  ";
 					var strTrim = str.trim();
 					console.log(strTrim);
 		5> 字符串大小写转换
 			* toLowerCase()	转小写
 			* toUpperCase() 转大写
 			* toLocaleLowerCase()	转当地小写
 			* toLocaleUpperCase()	转当地大写
 		6> 字符串的模式匹配方法
 		7> 
 		8>
 5.7 单体内置对象
 5.8 小结
