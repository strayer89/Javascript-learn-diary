# Javascript-learn-diary
record my study


JavaScript高级程序设计（第三版）

第一章 JavaScript简介
	    JavaScript开始用于用户端的数据验证。
	    JavaScript从一个简单的数据验证器发展成为一门强大的编程语言
	    真正掌握这一门语言需要数年，要想全面理解和掌握JavaScript，关键在于弄清楚他的本质、历史和局限性。

	1.1 JavaScript 简史
	        javaScript是由Netscape Navigator 和 Sun公司开发的。其后微软开发Jscript。
	        1997年JavaScript 1.1提交给ECMA, 完成了ECMA-262 ----定义一种名为ECAMScript的新脚本语言的标准。 
	     
	1.2 JavaScript 实现
	          javaScrip实现由三个不同的部分组成
	        1、核心（ECMAScript）
	        2、文档对象模型（DOM）
	        3、浏览器对象模型（BOM）
	    1.2.1  ECMAScript
	        Web浏览器只是ECMAScript实现可能的宿主环境之一。
	        宿主环境不仅提供基本的ECMAScript实现，同时也提供给语言的扩展（如DOM，利用ECMAScript的核心类型和语法提供更具体的功能）
	        其他的宿主环境包括Node（一种服务端的JavaScript平台）和Adobe Flash
	        ECMA-262规定了这门语言的语法、类型、语句、关键字、保留字、操作符、对象
	    1.2.2 文档对象模型（DOM）
	         DOM是针对XML但经过扩展 用于HTML的应用程序接口API (application programming interface）
	            
	小结
	  JavaScript是一种专为与网页交互而设计的脚本语言，由下列三个不同部分组成：
	  1、ECMAScript，由ECMA-262定义，提供核心语言功能；
	  2、文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
	  3、浏览器对象模型（BOM），提供与浏览器交互的方法和接口。

第二章 在HTML中使用JavaScript
	2.1 <script>元素
	   1、<script>元素的6个属性：async / charset / defer / language / src / type 只要记住src路径和type类型就可以了，其他没用
	   2、<script>内部嵌套时必须加上type="text/javascript".
	   3、包含在<script>标签内部的代码将被从上至下解释。在解释完毕之前，页面中的其他内容不会被浏览器加载或者显示。
	   4、外部引用js文件的<script>标签之间不能有内容，否则内容被忽略
	   5、<script>标签的属性src可以跨域，同理<img>标签的src属性
	   6、<script>标签放在<body>标签的最后面
	    2.1.1 延迟脚本
	    1、说了一堆，还是推荐把<script>应用外部脚本放在body标签最后面
	2.2 嵌入代码与外部文件    
	    1、推荐使用外部js代码，可维护性高，可缓存，适应未来
	2.3文档模式（有用吗？？）
	    1、混杂模式（quirks mode）
	      2、标准模式（standards mode）
	      3、准标准模式（almost standards mode）

	小结
	    1、在引用外部js文件时，src属性既可以导入同一个服务器上的文件也可以导入不同服务器上的文件
	    2、所有script标签都会按照他们在页面上的先后顺序解析。在不使用defer和async属性时，所有浏览器都是先解析完成前一个script才会解析下一个。
	    3、使用defer属性可以让脚本在文档完全呈现之后再执行。延迟脚本总是按照指定它们的顺序执行
	    4、使用async属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现。不能保证异步脚本按照先后顺序执行。               

3.1 语法
    3.1.1 区分大小写
        --ECMAscript中的一切（变量、函数名和操作符）都区分大小写。

    3.1.2 标识符（自己定义的名字或者参数）
        --标识符：变量、函数、属性的名字，或者函数的参数。
        --第一个字符必须是一个字母、_ 或者 $ 。
        --其他字符可以是字母、_ 、$ 、数字 。（数字不可以开头）

    3.1.3 注释
        -- 单行注释 //
        -- 多行注释 /****/

    3.1.4 严格模式  （支持浏览器 ie10+  firefox 4+ safari 5.1+ opera 12+）
        -- ECMAScript 5 引入的严格模式
        -- 严格模式下 ECMAScript 3中的不确定行为得到处理，不安全的操作也会抛出错误。
        -- 整个脚本启用严格模式 ，在顶部写*use strict*
        -- 函数内部上方 *use strict* 也可以指定函数在严格模式
    3.1.5 语句
        -- 分号结尾

    3.2 关键字和保留字
         
    3.3 变量
        -- ECMAscirpt 的变量是松散类型的。（可以用来保存任何类型的数据，每一个变量只是一个占位符  ）
        -- var message;  (未初始化默认 var message = undefined )
        -- 函数内部定义的变量在外部不会显示 ---局部变量

        function test1(){
            var message = "abc";
        }
        test1();
        console.log(message)  //报错

        function test1(){
            message = "abc";  //定义了一个全局变量
        }
        test1();
        console.log(message)  //出来abc 只要调用过test1（）； message就有意义
    

        -- 最好不要这样操作，严格模式下会出错

    3.4 数据类型
        -- ECMAScript 有5种简单数据类型 Number / String / Boolean / Undefined / Null
        -- 一种复杂数据类型 Object 本质是由一组无序的名值对组成
       3.4.1 typeof 操作符
            -- typeof 操作符返回字符串 “undefined” “boolean” “string” “number” “object” "function"
            -- typeof null  返回object
            -- typeof 正则表达式 返回 { Safari 5 以及 chrome 7 之前 "“function”"  其他的浏览器返回 “object”}

        3.4.2 Undefined 类型
                  -- 建议声明并初始化（赋值）变量； 这样typeof操作符出现undefined 就有了具体含义（未声明变量）
        3.4.3 Null 类型
            -- 如果定义变量将来用于储存对象，那么最好初始化未null而不是其他值
            -- 
        3.4.4 Boolean 数据类型
        
        3.4.5 Number 数据类型
            

        3.4.6 String 数据类型 
        3.4.7 Object 数据类型

3.4 数据类型与函数
	1.typeof 操作符 new 操作符
		typeof test
		1> 如果test未声明   "undeined"
		2> 如果test是布尔值 "boolean"
		3> 如果test是字符串 "string"
		4> 如果test是数值   "number"
		5> 如果test是对象或者null "object"
		6> 如果test是函数   "function"
		7> 如果test已声明未初始化 "undefined"

	2.undefined 数据类型
		1> 申明但未初始化的变量默认赋值 "undefined"
			var test ;
			console.log(test == undefined);  "true"
		2> 未声明会浏览器会出错
			console.log(mess)
		3> 申明和未声明的变量typeof操作符都会返回"undefined"

	3.null 数据类型
		1> null == undefined  返回true;
		2> 初始化对象最好 var obj = null;

	4.boolean 数据类型
		1> 只有 true 和 false 两种字面值
		2> Boolean() boolean 转型函数，只返回两个值
			a> string    非空    ---true
			b> number    非零    ---true
			c> object    任何对象---true  null      --- false
			d> undefined 不适用  ---true  undefined --- false

	5.number 数据类型
		1> 八进制在严格模式无用
		2> 进行计算时，八进制和十六进制都会转换十进制
		3> 3.1e3 == 3.1 乘以 10的三次方
		4> 浮点值精度 17位小数
		5> 0.1+0.2 != 0.3  (!!!!!!!不要用于判断)
		6> NaN （not a number）
			a> 用于本来要返回数值却未返回数值的情况
			isNaN()函数 只返回 true or false (可以自动转化字符串、boolean为数字)
			b> isNaN(NaN)   --- true
			c> isNaN(10)    --- false
			d> isNaN("10")  --- false
			e> isNaN("blue")--- true
			f> isNaN(true)  --- false
			g> isNaN(object) 先检测 object.valueOf(),如果false，调用 toString()方法
		7> Number()  任何数值转化
			a> boolean   --- 0/1
			b> null      --- 0
			c> undefined --- NaN
			d> string (必须严格数字型字符串)
				*Number("123") --- 123
				*Number("1.1") --- 1.1
				*Number("0xf") --- 十六进制/十进制
				*Number("")    --- 0
				*Number(除了上述情况) ---NAN
				*Number(true)  --- 1
		8> parseInt() 字符串 转化 数字
				parseInt("12") / parseInt("12",2/8/10/16) 最好用这个
			a> 第一个非数字或者+ - 号 ---返回NaN
			b> 只显示数字 （"123abc"只显示123）
			c> parseInt(1.9) --- 1 小数点不是数字字符
			d> 可以将任何进制数字型字符串转化为 整数型
		9> parseFloat() 字符串 转化 数字
			a> 区别：only第一个小数点有效
			b> 区别：忽略前导0

	6.string 数据类型
		1> length属性 test.length 字符长度 （单字节字符有效
		2> 特点：新的字符串生成，前面的销毁
			var lang = "Java";
			lang = lang + "Script";
			lang = "JavaScript"; "Java"和"Script"销毁
		3> 转化字符串
			a> toString() 除了null 和 undefined ,其他数据类型都有 toString()方法 
			b> toString() 可以输出2、8、16 进制字符串
				var num = 100;
				num.toString(2/8/10/16)
			c> String() 转型函数
				*如果有 toString()方法 用 toString();
				*如果是 String(undefined) --- "undefined"
				*如果是 String(null)      --- "null"	

	7.object 数据类型
		1> 创建新的对象 var obj = new Object();  构造函数？？？
		2> Object 的每个实例（？？）都具有以下的属性和方法
			*Constructor属性 保存用于创建当前对象的函数。 上面构造函数就是 Object();
			*hasOwnProperty("propertyName")方法; 返回 true or false 查看当前属性是否在当前对象实例中存在； 返回true/false
			*isPropertyOf(object); 返回 true or false 检查传入的对象是不是另一个对象的原形
			*propertyIsEnumerable("propertyname")方法; 返回 true or false 检查给定的属性是否能够使用for-in语句来枚举
			*toLocaleString()方法; 返回对象的字符串表示。该字符串与执行环境的地区对应
			*toString()方法; 返回对象的字符串表示  |返回 [object Object]？？？|
			*valueOf()方法; 返回对象的字符串、数值或者布尔值表示 |obj.valueOf()???|


  3.5 操作符（算数操作符、位操作符、关系操作符、相等操作符）
	（可操作 数字、字符串、布尔值、对象）
	1.一元递增和递减算数操作符
		*计算规则/区别 
			当前计算/下次提取占位符计算
			var age = 11; var num = ++age;         num = 11; 语句求值之前已经+1
			var age = 11; var num = age++;         num = 11; age++ 语句求值之后才 +1
			var age = 11; var num = age++ + age++; num = 23(11+12);
		*非number类型数据（转成number类型）
			var str1 = "2";
			var str2 = "abc"
			var bool = true;
			var flo  = 1.1;
			var obj = {
				valueOf:function(){
					return -1;
				}
			}

			console.log(str1++) --- 3 
			console.log(str2++) --- NaN
			console.log(bool++) --- 2 
			console.log(flo++)  --- 2.1 
			console.log(str1++) --- 0 

	2.一元加减算数操作符
		*var num = 1; num = +num; num = 1; number数据不会改变
		*var num = 1; num = -num; num = -1; 功能相当于加一个负号
		*其他数据同 Number()转型函数相同
		
	3.位操作符
		*ECMAScript中的所有|数值|都以64位格式储存
		*位操作符先将64位的值转换成32位整数，然后操作；最后转换64位
		*有符号的整数：前31位表示整数值，最后一位 0 == + ; 1 == -;
		*...没用

	4.布尔操作符
		1>逻辑非 !data（Boolean()转型再取反）
			*console.log(!"")		--- true 
			*console.log(!0)		--- true 			
			*console.log(!null)		--- true 
			*console.log(!NaN)		--- true 
			*console.log(!obj)		--- false 
			*console.log(!"str")	--- false 
			*console.log(!123)		--- false 
			*console.log(!undefined)--- false
			*console.log(!!data == Boolean(data) ) 无论data是什么，都是true

		2>逻辑与 data1 && data2
			*逻辑与可以应用任何类型的操作数（not only boolean）
			*有一个操作数不是布尔值，逻辑与不一定返回布尔值
				a> 如果data1是对象，则返回data2
				b> 如果dada2是对象，只有data1 == true ; 才会返回 data2
				c> 如果data1、data2都是 object 返回第二个
				d> data1 or data2 == null ; 	data1 && data2 == null;
				e> data1 or data2 == NaN ; 		data1 && data2 == NaN;
				f> data1 or data2 == undefined; data1 && data2 == undefined;
			
		3>逻辑或 data1 || data2
			*逻辑或可以应用任何类型的操作数（not only boolean）	 
			*data1是对象，返回data1
			*data1 == true or false ;data2是对象，返回data2
			*data1 和 data2 都是对象 ； 返回data1；
			*data1 和 data2 都是 null/undefined/NaN 返回相应 null/undefined/NaN；
			*data1 = undefined ; data2 = NaN ; data1 || data2 返回 data2;
	 		*var myObject = preferredObject || backupObject;
	 			a> 如果preferredObject != null; 将preferredObject 赋值 myObject;
	 			b> 如果preferredObject == null; 将backupObject    赋值 myObject;

	5.乘性操作符 data1 * data2 （乘法、除法、求模）
		1> 不是数字的数据会后台用 Number() 转型函数转换；
		2> 乘法 (data1 * data2)
			*data1 与 data2 都是 number类型；正常计算；超过ECMAScript范围；返回 Infinity/-Infinity
			*data1 或 data2 有一个是 NaN ; 返回 NaN;
			*Infinity * 0 ;返回 NaN;
			*Infinity * !0 ; 返回 Infinity/-Infinity;
		3> 除法 (data1 / data2)
			*data1 与 data2 都是 number类型；正常计算；超过ECMAScript范围；返回 Infinity/-Infinity
			*data1 或 data2 == NaN ; 返回 NaN;
			*Infinity/Infinity  ;返回 Infinity;
			*0/0 ; 返回 NaN
			*0/number; 返回 Infinity/-Infinity;
			*number/Infinity; 返回 Infinity/-Infinity;
		4> 求模 ( data1 % data2)
			*意思：取余数；
			*都是数值，常规
			*Infinity/number = NaN;
			*number/0 = NaN;
			*Infinity/Infinity = NaN;
			*number/Infinity = number;
			*0/number = 0;
	6> 加性操作符
		1> 不是数字的数据会后台用 Number() 转型函数转换；
		2> 加法(data1 + data2)
			*data1 或者 data2 是 NaN; 返回 NaN；
			*Infinity + -Infinity; 返回 NaN;
			*其他数据类型相加，自动转化字符串拼接
				a>如果有一个是 String，将另一个转化字符串后拼接；
				b>如果两个都是 String, 直接拼接
				c>如果是 Object/Boolean/Number,则用 toString()转成字符串
				d>如果是 null / undefined ; 用 String() 转成"null"/"undefined"
			 	e>Number + String
			 		var num1 = 1;
			 		var num2 = 2;
			 		var str = "1 + 2 = ";
			 		console.log(str + num1 + num2) --- "1 + 2 = 12";
			 		console.log(str + (num1 + num2)) --- "1 + 2 = 3" 告诉计算机先执行括号；
		3> 减法 (data1 - data2)
			*都是数字，正常减法
			*有一个是 NaN ；返回 NaN;
			*Infinity - Infinity = NaN;
			*-Infinity - -Infinity = NaN;
			*非number类型数据;后台调用 Number();
	7> 关系操作符 返回 Boolean;	
		1> data1 >= 或 <= 或 = 或 > 或 < data2;
		2> 都是 Number; 比较
		3> 都是 String; 比较字符编码值
		4> 有一个是 Number，将另一个转化 Number 后比较
		5> 有一个是 Object, valueOf() --> toString()后比较
		6> 有一个是 Boolean, 转化数值后比较
			*"Break" < "alphabet"   --- true;   "B"的字符编码<"a"字符编码
			*"23" < "3"  --- true;  "2"的字符编码50，"3"的字符编码51
			*"23" < 3  --- false;  字符串与数值比较会 Number();
			*"a" < 3   --- true;   "a" 未NaN
			*NaN < 3 与 NaN >= 3 都返回false；
	8> 相等操作符
		1> String/Boolean/Number 直接进行比较
		2> Object 相等和不等 先转换再比较
		3> Object 全等和不全等 先比较再转换
		4> 相等和不等 data1 == data2 or data1 != data2
			*先转换操作数再比较
			*有一个是 Boolean 转换 0/1
			*String == Number ;字符串转换数值
			*Object == not Object; 对象调用 valueOf()方法;
			*在比较相等性之前，不能将 null 和 undefined 转换成任何值
			*Object == Object ; 比较操作数是不是指向同一个对象
			*特殊情况
				- null == undefined --- true;
				- "5" == 5			--- true;
				- false == 0 		--- true;
				- true == 1 		--- true;
				- "NaN" == NaN      --- false;
				- 5 == NaN          --- false;
				- NaN == NaN   		--- false;
				- NaN != NaN 		--- true;
				
				- true == 2 		--- false;
				- undefined == 0	--- false;
				- null == 0			--- false;
				 
		5> 全等和不全等 data1 === data2 or data1 !== data2;
			*首先是相同数据类型
			*其次进行相等比较

	9> 条件操作符
		* variable = boolean_experssion ? true_value : false_value;
		* var max = (num1 > num2) ? num1 : num2;
		* 基于 boolean_experssion的求值结果；true 赋值true_value; false 赋值 false_value;
		* var data = Boolean ? true : false ;
	10> 赋值操作符
		* var num = 10; num = num + 10;
		* var num +=10;
		* "*=" | "+=" | "/=" | "%=" | "-=" | "<<=" | "<<=" |
		* 只是简化操作，不能带来性能提升；
	11> 逗号操作符
		* 使用","可以在一条语句执行多个操作
		* var num1 = 1, num2 = 2, num3 = 3;

 3.6 语句（流控制语句）
	1> if 语句
		* if (consition) statement1 else statement2;
		* 	if(任何数据 非 Boolean 将调用 Boolean()){
				statement1;
			}else{
				statement2;
			}

	2> do-while 语句 （后测试循环语句）
		* 最常用于循环体中的代码至少执行型一次
		*	do {
				statement1;
			}while(expression){
				statement2;
			}

	3> while 语句 （前测试循环语句）
		* while(expression) statement

	4> for 语句
		* for(var i=0; i<10; i++){}
		* for(var i=0; i<10;){
				statement;
				i++;
			}
		*以上两个句子相同意思
		* i的值外部可以访问

	5> for-in 语句
		* 在执行 for-in 循环之前，最好保证 Object 不是 null / undefined;
		* for-in 是一种精准的迭代语句，可以用来枚举对象的属性
		* for (property in expression) statement;
		* for (var propName in window){
			console.log(propName)
	8> label 语句
		*label : statement;
		*start : for(var i=0; i<10; i++){
			alert(i);
		}
		*上面例子中定义的start标签将来可以由 break 或者 continue 语句引用；
		*label语句一般与 for 循环语句配合使用；

	9> break 和 continue 语句
		* 用于在循环中精确控制代码执行；
		* break 立即退出循环，执行后面的语句；
		* continue 立即退出循环，退出循环后从循环的顶部继续执行；会缺少循环次数；
		* 与label配合使用
			var num = 0;
			outermost:
			for(var i=0; i<10; i++){
				for(var j=0; j<10; j++){
					if(i==5 && j==5){
						continue outermost;
					}
					num++;
				}
			}
			num = 95;

			var num = 0;
			outermost:
			for(var i=0; i<10; i++){
				for(var j=0; j<10; j++){
					if(i==5 && j==5){
						continue outermost;
					}
					num++;
				}
			}
			num = 95;
			上侧去掉outmost，num=99;
		*label加载 continue 和 break 后面；意思是跳出后继续执行；
		*continue 和 label区别 continue 跳出本个循环； label跳出到label循环；
	10> with 语句
		* 将代码的作用域设置到一个特定的对象中
		* 语法 with (expression) statement;
		* with 语句主要作用：简化多次编写同一个对象的工作；
			var qs = location.search.substring(1);
			var hostName = location.hostname;
			var url = location.href;
			---
			with(location){
				var qs = search.substring(1);
				var hostName = hostname;
				var url = href;
			}
		*大量使用 with 语句会使性能下降；
		*会给代码调试造成苦难；
		*严格模式下不允许使用 with 语句；

	11> switch 语句
		* 每个case都会返回布尔值
		* switch在比较时使用的是全等操作符；===
		* switch(expression){
			case value:
				statement
				break;
			case value:
				statement
				break;
			case value:
				statement
				break;
			default: 
			statement
			}
		* 如果表达式等于这个值（value），则执行后面的代码（statement）；
		*等同于
			if(i == 25){
				alert("25")
			}else if(i == 35){
				alert("35")
			}else if(i == 45){
				alert("45")
			}else{
				alert("other");
			}

  3.7 函数
	0> function functionName(arg0,arg1,arg2,...,ageN){statement}
	1> 严格模式对函数的一些限制
		* 不能把函数命名为 eval 或 arguments
		* 不能把参数命名为 eval 或 arguments;
		* 不能出现两个命名参数同名的情况
		* 出现以上情况，就会导致语法错误，代码无法执行；
	2> 理解参数
		* arguments 属性
		* 在函数内部， arguments 属性为参数对象，可以通过 arguments.length 确定参数个数
		* 单独访问每个参数可以用 arguments[0] ...
		* 通过传递参数个数进行不同操作
			function(){
				if(arguments.length ==0){
					statement;
				}else if(arguments.length == 1){
					statement;
				}
			}
		* ECMAScirpt严格模式通过 arguments[0] = 10; 这样的操作无效；
		* 没有的参数为 undefined；
		* ECMAScirpt中传递的都是值，不可能通过引用传递参数； ？？？？
	3> 没有重载
		* 两个函数同名，则后定义函数覆盖先定义函数；

	小结：
		* ECMAScript 中的基本数据类型 Undefined / Boolean / String/ Number / null 
		* ECMAScript 中的复杂数据类型 Object; 该类型是这门语言中 |所有对象的基础类型|
		* 严格模式为这门语言中容易出错的地方施加了限制
		* ECMAScript 提供了 算数操作符、布尔操作符、关系操作符、相等操作符、复制操作符；
		* 无需指定函数的返回值，因为 ECMAScript 函数可以在任何时候返回任何值；
		* 实际上，未指定返回值的函数返回的是一个特殊的 undefined 值；
		* ECMAScript 没有函数签名的概念，因为其函数参数是以一个包含零活多个值得数组的形式传递。
		* 可以向 ECMAScript函数传递任意数量参数，并通过arguments对象访问这些参数。
		* 由于不存在函数签名的特性，ECMAScript函数不能重载

第四章 变量作用域与内存问题
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

 					console.log(str.substring(3,0)); // "hel"
 					console.log(str.substring(0,3)); // "hel"

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
 			* match() 方法
 				- 值接收一个参数（正则表达式、RegExp 对象）;
 				- 返回匹配字符串组成的数组对象;
 				- 未找到返回 "null"
 				- 例子：
 					var text = "cat, bat, sat, fat";
 					var pattern = /.at/;
 					var matches = text.match(pattern);
 					console.log(matches);	// ["cat", "bat", "hat", "rat"]
 			* search() 方法
 				- 唯一参数与 math() 相同
 				- 未找到返回 -1；
 				- 例子：
 					var text = "cat, bat, hat, sat, fat";
 					var pattern = /.at/;
 					var textArr = text.search(pattern);
 					console.log(textArr);
 			* replace() 方法 ECMAScirpt 5
 				- 接收两个参数
 				- 第一个参数：RegExp 对象 / 字符串；
 				- 第二个参数：字符串 / 函数；
 				- 字符串参数只能替换一个
 				- 例子：
 					var text = "cat, bat, sat, fat";
 					var result = text.replace("at","ond");
 					alert(result);
 				- 正则表达式可以替换全局
 					var result = text.replace(/at/g,"ond");
 				- 第二个参数时函数时
 					function htmlEscape(text){
 						return text.replace(/[<>"&]/g,function(match, pos, originalText){
 							switch(match){
 								case "<":
 									return "&lt;";
 								case ">":
 									return "&gt;";
 								case "&":
 									return "&amp;";
 								case "\"": 
 									return "&quot;";
 							}
 						})
 					}
 					alert(htmlEscape("<p class=\"greeting\">Hello World!</p>"));
 			* split() 方法
 				- 基于指定分隔符将字符串分隔多个字符串
 				- 两个参数
 				- 第一个是分隔符号或者正则表达式对象
 				- 第二个是指定数组大小
 				- 返回数组
 				- 例子：
 					var str = "cat, hat, jat, mat, abc/bbc, new|old, blue^yellow";
 					var strArr1 = str.split(","，2);
 					var strArr2 = str.split(/[,/|]/g);
 					console.log(strArr1,strArr2);
 		7> localeCompare() 方法
 			- 比较字母表位置
 			- 例子：
 				var stringValue = "yellow";
 				alert(stringValue.localeCompare("brick")); // -1
 				alert(stringValue.localeCompare("yes")); // 0
 				alert(stringValue.localeCompare("zoo")); // 1
 				alert()
 		8> fromCharCode()方法
 			- 接收一到多个字符编码，转换成字符串
 			- 例子：
 				alert(String.fromCharCode(104,101,108,108,111));	//"hello"

 5.7 单体内置对象
 	* 定义：由ECMAScript提供的、不依赖于宿主环境的对象，这些对象在ECMAScript程序执行之前就已经存在了
 	* Global 和 Math
 	5.7.1 Global 对象
 		- 所有在全局环境中定义的变量和函数都是 Global 的属性和方法
 		- isNaN() / isFinite() / parseInt() / parseFloat() 都是Global的方法
 		1> URI 编码方法
 			* Global 对象的 encodeURI() 和 encodeURIComponent() 方法可以对 URI(Uniform Resource Identifiers, 通用资源标识符)进行编码，以便发送给浏览器
 			* encodeURI() 主要用于整个RUI（如：http://www.wrox.com.illegal value.htm）
 				var uri = "http://www.wrox.com.illegal value.html#start";
 				console.log(encodeURI(uri));
 				// http://www.wrox.com.illegal%20value.html#start
 				console.log(encodeURIComponent(uri));
 				// http%3A%2Fwww.wrox.com%2Fillegal%20value.htm%23start
 			* 使用 encodeURI() 除了空格其他不动
 			* 使用 encodeURIConponent() 将所有非数字字母字符转化
 			* 与之对应的是 decodeURI() 和 decodeURIComponment() 反解码；
 		2> eval()方法
 			* ECMAScirpt中最强大的一个方法 eval();
 			* 像一个完整的ECMAScript解析器
 			* 值接收一个字符串参数；
 			* 例子：
 				eval("alert('hi')");
 				等同于：
 				alert("hi");
 			* 在 eval()中创建的函数不会被提升；它们只有在 eval()执行的时候才会创建；
 			* 严格模式 eval()不能用
 		3> Global 对象的属性
 			undefined 特殊值			Date			构造函数	
 			NaN		  特殊值			RegExp  		构造函数
 			Infinity  特殊值			Error  			构造函数
 			Object	  构造函数			EvalError   	构造函数
 			Array 	  构造函数			RangeError  	构造函数
 			Function  构造函数			ReferenceError  构造函数
 			Boolean   构造函数			SyntaxError  	构造函数
 			String 	  构造函数			TypeError  		构造函数
 			Number 	  构造函数			URIError  		构造函数
 		4> window 对象
 			* Web 浏览器都是讲 Global 作为 window 对象的一部分加以实现的。
 	5.7.2 Math 对象
 		* 与js直接计算相比，Math 对象提供的计算功能执行起来要快的多
 		* Math 对象中还提供了辅助完成这些计算的属性和方法
 		1> Math 对象的属性
 			Math.E 			自然对数的地鼠，即常量e的值
 			Math.LN10		10的自然对数
 			Math.LN2		2的自然对数
 			Math.LOG2E		以2为底e的对数
 			Math.LOG10E		以10为底e的对数
 			Math.PI 		π的值
 			Math.SQRT1_2 	1/2的平方根（2的平方根的倒数）
 			Math.SQRT2 		2的平方根
 		2> min() / max() 方法
 			* 确定一组数中的最大值最小值
 			* 接收任意多个数值参数
 			* 例子：
 				var max = Math.max(2,33,45,234,221);
 				console.log(max)

 				var min = Math.min(2,33,45,234,221);
 				console.log(min)
 			* 获取数组中的最大值最小值
 				var arr = [1,2,2,3.4,55,85,65];
 				var max = Math.max.apply(Math,arr);
 				console.log(max);
 				-- 关键是 Math.max()不能传递参数
 				-- 而 max() 的方法可以确定执行环境并以数组形式传递参数
 		3> 舍入方法
 			* Math.ceil()  执行向上舍入	-- Math.ceil(10.1)  // 11
 			* Math.floor() 执行向下舍入 -- Math.floor(10.9) // 10
 			* Math.round() 执行标准舍入 -- Math.round(10.5) // 11
 		4> random() 方法
 			* 返回介于0-1之间的一个随机数，不包括0-1；
 			* 获取随机数的技巧
 				var value = Math.floor(Math.random()*可能的总数 + 第一个可能的值);
 				获取 1-100 的随机数
 				var value = Math.floor(Math.random()*100 + 1);

 5.8 小结 ECMAScript
 	对象在 JavaScript 中被称为引用类型的值，而且有一些内置的引用类型可以用来创建特定的对象
 		1> 引用类型与传统面向对象程序设计中的类相似，但实现不同；
 		2> Object 是一个基础类型，其他所有类型都从 Object 继承了基本的行为
 		3> Array 类型是一组值得有序列表，同事还提供了操作和转换这些值的功能；
 		4> Date 类型提供了有关日期和时间的信息，包括当前日期和时间以及相关的计算功能；
 		5> RegExp 类型是 ECMAScript 支持正则表达式的一个接口，提供了最基本的和一些高级的正则表达式功能
 	函数实际上是 Function 类型的实例，因此函数也是对象；而这一点正是 JavaScript 最有特色的地方。由于函数时对象，所以函数也拥有方法，可以用来增强行为。
 	因为有了基本包装类型，所有JavaScript 中的基本类型值可以被当做对象来访问。三种基本包装类型分别是： Boolean/Number/String;特征如下
 		1> 每个包装类型都映射到同名的基本类型
 		2> 在读取模式下访问基本类型时，就会创建对应的基本包装类型的一个对象，从而方便了数据操作；
 		3> 操作基本类型值得语句一经执行完毕，就会立即销毁新创建的包装对象。
 	在所有代码执行之前，作用域中就已经存在两个内置对象：Global 和 Math 。大多数 ECMAScirpt 实现中都不能直接访问 Global 对象；不过， Web浏览器实现了继承该角色的 window 对象。 全局变量和函数都是 Global 对象的属性。 Math 对象提供了很多属性和方法，用于辅助完成复杂的数学计算任务。



 第六章 面向对象的程序设计
	* 面向对象都有"类"的概念，通过"类"可以创建任意多个具有相同属性和方法的对象；
	* 可以把 ECMAScript 的对象想象成"散列表"：一组名值对，值可以是函数或者数据；
	* 每个对象都是基于一个"引用类型"创建的，这个引用类型可以是原生类型，也可以是开发人员定义的类型。
	6.1 理解对象
		* 创建自定义对象的最简单方式：创建一个 Object 的实例，然后再为它添加属性和方法；
		* 例子：
			=== 早期开发人员：
			var person = new Object();
			person.name = "kkk";
			person.age = 30;
			person.job = "FE";
			// 添加方法
			person.sayName = function(){
				alert(this.name)
			}
			=== 现在
			var person = {
				name:"kkk",
				age:30,
				job:"FE",
				sayName: function(){
					alert(this.name)
				}
			};
		6.1.1 属性类型
			* ECMAScript 5 定义了只有内部采用的特性（attribute）时，描述了属性（property）的各种特征。
			* 这些特征是为了实现js引擎用的，在js中不能访问它们。
			* ECMAScript中有两种属性：数据属性和访问器属性
			
			1> 数据属性
				数据属性包含一个数据值的位置。在这个位置可以读取和写入值。
				a> [[Configurable]] 表示能否通过 delete 删除属性从而重新定义，能否修改属性的特性，或者能否把属性修改为访问器属性; 上例 true
				b> [[Enumerable]] 表示能否通过 for-in 循环访问属性; 上例 true
				c> [[Writable]] 表示能否修改属性的值; 上例 true
				d> [[Value]] 包含这个属性的数据值；默认 undefined
				------------------------------------------------------
				Object.defineProperty() 方法 *ECMAScript 5 ie8+
				--------------------------------------------------------
				- 接收三个参数：属性所在的对象、属性的名字、描述符对象
				- 例子：
					var person = {};
					Object.defineProperty(person,"name",{
						writable:false,
						value:"kkk"
					});
			2> 访问器属性
				a> [[Configurable]] 表示能否通过 delete 删除属性从而重新定义，能否修改属性的特性，或者能否把属性修改为访问器属性; 上例 true
				b> [[Enumerable]] 表示能否通过 for-in 循环访问属性; 上例 true
				c> [[Get]] 在读取属性是调用的函数，默认：undefined；
				d> [[Set]] 在写入属性是调用的函数，默认：undefined；
				--------------------------------------------------------
				- 访问器属性的常见方式：设置一个属性的值会导致其他属性发生变化
				- 例子：
					var book = {
						_year:2004,
						edition:1
					};

					Object.defineProperty(book,"year",{
						get: function(){
							return this._year;
						},
						set: function(newValue){
							if(newValue > 2004){
								this._year = newValue;
								this.edtion += newValue - 2004;
							}
						}
					});

					book.year = 2005;
					console.log(book.edition);
				* _year 下划线表示只能通过对象方法访问的属性
				* 定义访问器属性的旧方法
					var book = {
						_year: 2004,
						edition:1
					};

					book.__defineGetter__("year", function(){
						return this._year; 
					});
					book.__defineSetter__("year", function(newValue){
						if (newValue > 2004) {
							this._year = newValue;
							this.edition += newValue - 2004;
						} 
					});
					book.year = 2005;
					alert(book.edition); //2

		6.1.2 定义多个属性
			--------------------------------------------------------
			* Object.defineProperties() 方法
			--------------------------------------------------------
			* 接收两个对象参数：
				- 第一个对象时要添加和修改其属性的对象；
				- 第二个对象与第一个对象中要添加或修改的属性一一对应。
				- 例子：
					var book = {};

					Object.defineProperties(book,{
						_year:{
							value: 2004
						},
						edition:{
							value: 1
						},

						year:{
							get: function(){
								return this._year;
							},
							set: function(newValue){
								if(newValue > 2004){
									this._year = newValue;
									this.edition += newValue - 2004;
								}
							}
						}
					});
				* _year 下划线表示只能通过对象方法访问的属性
				
		6.1.3 读取属性的特性（内部特性，特定读取方法）
			---------------------------------------------------------
			 Object.getOwnPropertyDescriptor() 方法	ECMAScript 5 
			---------------------------------------------------------			
			* 接收两个参数：属性所在的对象和尧都区其描述符的属性名称。
			* 返回值是一个对象
			* 例子：
				var book = {};

				Object.defineProperties(book,{
					_year:{
						value: 2004
					},
					edition:{
						value: 1
					},

					year:{
						get: function(){
							return this._year;
						},
						set: function(newValue){
							if(newValue > 2004){
								this._year = newValue;
								this.edition += newValue - 2004;
							}
						}
					}
				});
				var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
				alert(descriptor.value);	//2004
				alert(descriptor.configurable);	// false
				alert(typeof descriptor.get); // undefined

				var descriptor = Object.getOwnPropertyDescriptor(book,"year");
				alert(descriptor.value);  // undefined
				alert(descriptor.enumerable); // false
				alert(typeof descriptor.get); // "function"
				数据属性：_year
				访问器属性： year
	6.2 创建对象
		* Object 对象字面量创建单个对象：使用同一个接口创建很多对象，会产生大量的重复代码
		6.2.1 工厂模式
			--------------------------------------------------------
			function createPerson(name, age, job){
				var o = new Object();
				o.name = name;
				o.age = age;
				o.job = job;
				o.sayName = function(){
					console.log(this.name);
				}
				return o;
			}

			var person1 = createPerson("kk",23,"FE");
			var person2 = createPerson("zz",30,"eng");
			console.log(person1);
			--------------------------------------------------------
		6.2.2 构造函数模式
			--------------------------------------------------------
			function Person(name, age, job){
				this.name = name;
				this.age = age;
				this.job = job;
				this.sayName = function(){
					alert(this.name);
				}
			}
			var person1 = new Person("kkk",23,"FE");
			console.log(person1);
			--------------------------------------------------------
			* 创建自定义构造函数意味着将来可以将它的实例标识为一种特定的类型；
			* 这正是构造函数胜过工厂模式的地方。
			* 以自定义构造函数创建的对象时定义在Global对象（在浏览器中是 window 对象）中的。
			1> 将构造函数当做函数
				* 构造函数与函数的唯一区别，在于调用它们的方式不同
				* 任何函数，只要通过 new 操作符调用，那它就可以作为构造函数；
				// 当构造函数使用
				var perosn = new Person("kk",34,"PE");
				person.sayName();
				// 当普通函数使用
				Person("kk",23,"PE");
				window.sayName();
				// 在拎一个对象作用域中调用
				var o = new Object();
				Person.call(o,"kk","23","FE");
				o.sayName();
			2> 构造函数的问题
				* 使用构造函数的主要问题：
					- 每个方法都要在每个实例上重新创建一遍
					- 不同实例上的同名函数时不相等的；
						alert(person1.sayName == person2.sayName);
				* 通过把函数定义转移到构造函数外部解决问题

					function Person(name,age,job){
						this.name = name;
						this.age = age;
						this.job = job;
						this.sayName = sayName;
					}
					function sayName(){
						alert(this.name);
					}
				* 通过上述方式将函数放在全局作用域中，如果函数很多，那就没有封装可言了。解决方法：(原型模式)
		6.2.3 原型模式
			* 每个函数都有一个 prototype 属性
			* 这个属性是一个指针，指向一个对象
			* 这个对象的用途是：包含可以由特定类型的所有实例共享的属性和方法
			* 不必再构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中
				function Person(){};

				Person.prototype.name = "Nicholas";
				Person.prototype.age = 29;
				Person.prototype.job = "FE";
				Person.prototype.sayName = function(){
					alert(this.name);
				};
				var person1 = new Person();
				person1.sayName();	
				var person2 = new Person();
				person2.sayName();
				console.log(person1.sayName = person2.sayName);	// true

			1> 理解原型对象
				* 创建任何一个函数都会为该函数创建一个 prototype 属性
				* 这个属性指向函数的 原型对象()
				* 默认情况下，所有原型对象都会自动获取一个 constructor(构造函数)属性
				* constructor 属性包含一个指向 prototype 属性所在函数的指针
					- Person.prototype.constructor 指向 Person
				* 通过这个构造函数，还可以继续为原型对象添加其他属性和方法
				* 创建自定义的构造函数之后，其原型对象默认只会取得 constructor 属性。其他方法，则从 Object 继承而来。
				* 这个链接存在于实例与构造函数原型对象之间，而不是存在于实例与构造函数之间。
				* 通过构造函数创建的实例可以直接将构造函数原型对象的属性和方法定义为实例的属性和方法
				* 上述是通过查找对象属性的过程来实现的。
				* 判断一个实例对象是不是指向某个原型对象 
				--------------------------------------------------------
				* isPrototypeOf() 方法
				--------------------------------------------------------
					console.log(Person.prototype.isPrototypeOf(person1));
					返回 true / false
				--------------------------------------------------------
				* getPrototypeOf();		ie9+
				--------------------------------------------------------
					- 获取一个实例对象的原型对象
					console.log(Object.getPrototypeOf(person1) == Person.prototype);
				* 搜索机制
					- 例子：
						person1.sayName();
						首先在实例 person1 中查找是否有属性
						其次在person1的原型中搜索 
				* 实例中的属性优先原型对象属性
					- 例子：
						function Person(){};

						Person.prototype.name = "kk";
						Person.prototype.age = 23;
						Person.prototype.job = "FE";
						Person.sayName = function(){
							console.log(this.name);
						}
						var person1 = new Person();
						console.log(person1.name);	// kk
						
						person1.constructor.prototype.age = "100";
						console.log(person1.age);	// 100

						person1.name = "kang";
						console.log(person1.name);	//kang

						console.log(person1.prototype);	// undefined

						使用 delete 操作符删除实例对象的属性

						delete person1.name; 删除的是实例对象的属性
				--------------------------------------------------------
				* hasOwnProperty() 继承自 Object 方法
				--------------------------------------------------------
					- 只能访问实例是不是有自己的属性
					- 不能访问实例原型对象属性
				* ECMAScript 5 的 Object.getOwnPropertyDescriptor()方法只能用于实例属性。要取得原型属性的描述符，必须直接在原型对象上调用 Object.getOwnPropertyDescriptor();
			2> 原型与 in 操作符
				* 可以单独使用和 for-in 使用
					function Person(){};

					Person.prototype.name = "kkk";
					Person.prototype.age = "23";
					Person.prototype.job = "FE";
					Person.prototype.sayName = function(){
						alert(this.name);
					};

					var person1 = new Person();
					console.log(person1.hasOwnProperty("name"));	// false
					console.log("name" in person1);	// true 可以访问构造函数的原型对象
				* 判断实例的构造函数原型对象中是否有一个属性
					function hasPrototypeProperty(obj,name){
						return !obj.hasOwnProperty(name) && (name in obj);
					}
					console.log(hasPrototypeProperty(person1,"name"));
				* ie8及早期版本 for-in 循环中不可枚举的属性不会显示 enumerable
					- 例子：
						var o = {
							toString :function(){
								return "My Object";
							}
						};

						for(var prop in o){
							if(prop == "toString"){
								alert("Found toString");
							}
						}
				* 取得对象上所有可枚举的实例属性
					- Object.keys() 方法 ECMAScript 5 ie9+
						- 接收一个对象参数
						- 返回包含所有可美剧属性的字符串数组
						- 例子：
							function Person(){};
							Person.prototype.name = "kkk";
							Person.prototype.age = "23";
							Person.prototype.job = "FE";
							Person.prototype.sayName = function(){
								alert(this.name);
							}
							var proStr = Object.keys(Person.prototype);
							alert(proStr);	// "name,age,job,sayName"

							var person1 = new Person();
							person1.name = "kz";
							person1.age = 32;
							var perKeys = Object.keys(person1);
							console.log(perKeys);	// "name,age"
					- Object.getOwnPropertyName(); ie9+ 
						- 罗列包括不可枚举的属性
						- var keys = Object.getOwnPropertyName(Person.prototype);		// "constructor,name,age,job,sayName"
			3> 更简单的原型语法
				- 字面量创建原型属性方法
				- 例子：
					function Person(){};
					Person.prototype = {
						name:"kkk",
						age:23,
						job:"FE",
						sayName:function(){
							alert(this.name);
						}
					}
				- 上述例子创建了一个新的原型对象
				- constructor 属性不再指向 Person 构造函数，指向 Object;
				- 如果 constructor 属性真的重要，可以如下
					function Person(){};
					Person.prototype = {
						constructor:Person,
						name:"kkk",
						age:23,
						job:"FE",
						sayName:function(){
							alert(this.name);
						}
					}
				- 上述定义的 constructro 属性的 enumerable 数据属性是可读的，如果是兼容 ECMAScript 5， 则可以用 Object.defineProperty()设置为不可读
					Object.defineProperty(Person.prototype,"constructor",{
						enumerable: false,
						value: Person
					});
			4> 原型的动态性
				* 由于在原型中查找值得过程试一次搜索，因此我们队原型对象所做的任何修改都能立即从实例上反映出来--即使先创建的实例后修改原型也是如此。
					- 例子：
						// 先创建实例对象
						var friend = new Person();
						// 修改构造函数的原型对象方法
						Person.prototype.sayHi = function(){
							alert("hi");
						};

						friend.sayHi();
						- 原因：实例与原型之间的松散链接关系
						- 实例与原型之间的链接只不过是一个指针，而非一个副本
				* 如果重写整个原型对象，情况就不一样了。
					- 例子：
						function Person(){};
						// 构造函数已经将指针赋值给原型对象了
						var friend = new Person();  
						// 重新定义了原型对象，指针指向改变了
						Person.prototype = {
							name:"kk",
							age:23,
							job:"FE",
							sayName: function(){
								alert(this.name);
							}
						}

						console.log(friend.name); 	// 所以：undefined
			5> 原生对象的原型
				* 从原型对象中可以找到原生的方法
					- L例子：
						console.log(typeof Array.prototype.sort);
						console.log(typeof String.prototype.subString);
				* 在原生对象中添加属性、方法
					- 例子：
						String.prototype.startWith = function(text){
							return this.indexOf(text) == 0;
						};
						var msg = "Hello world!";
						alert(msg.startWith("Hello")); 	// true
				* 最好不要在原生原型对象中添加，容易出错
			6> 原型对象的问题
				* （小问题）没有实例对象初始化参数这个环节，所有的实例在默认情况下都取得了相同的属性值
				* （大问题）通过实例添加一个同名属性，可以隐藏原型中的对应属性。而对于包含引用类型值得属性来说，问题比较突出。
					- 例子：
						function Person(){};
						Person.prototype = {
							constructor: Person,
							name:"kk",
							age:23,
							job:"FE";
							friends:["amy","json"],
							sayName:function(){
								console.log(this.name);
							}
						}
						var person1 = new Person();
						var person2 = new Person();

						person1.friends.push("kkk");
						console.log(person1.friends);
						console.log(person2.friends);

		6.2.4 组合使用构造函数模式和原型模式
			* 构造函数模式用于定义实例属性
			* 原型模式用于定义方法和共享的属性
			* 将不同的实例相同的属性和方法放在原型对象中
			* 将不同的属性和方法放在构造函数中
				- 例子：
				function Person(name,age,job){
					this.name = name;
					this.age = age;
					this.job = job;
					this.friends = ["amy","json"];
				}
				Person.prototype = {
					constructor: Person,
					sayName:function(){
						alert(this.name);
					}
				}
				var person1 = new Person("kkk",33,"FEW");
				var person2 = new Person("BBB",22,"bbb");
		6.2.5 动态原型模式
			* 通过检查应该存在的方法是否有效，来决定是否需要初始化原型
				- 例子 
				function Person(name,age,job){
					this.name = name;
					this.age = age;
					this.job = job;
					if(typeof this.sayName != "function"){
						Person.prototype.sayName = function(){
							alert(this.name);
						}
					};
				}
				var friend = new Person("Nicholas",23,"software engineer");
				friend.sayName();
				- 这段代码只有在初次调用构造函数时才会执行

		6.2.6 寄生构造函数模式
			* 在不改变原生对象属性和方法的情况下创建新的构造函数
			* 例子-创建一个拥有特殊方法的数组
				function SpecialArray(){
					var value = new Array();
					value.push.apply(value,arguments);
					value.toPipedString = function(){
						return this.join("|");
					};
					return value;
				}
				var colors = new SpecialArray("red","blue","green");
				console.log(colors.toPipedString());
			* 将一个数组的项全部推进另一个数组
				arr.push.apply(arr,arguments)

		6.2.7 稳妥构造函数模式
			* 不使用 new 操作符实例化对象
			* 不使用 this 属性
				function Person(name,age,job){
					var o = new Object();
					o.sayName = function(){
						console.log(name);
					};
					return o;
				}
				var friends = Person("kkk",23,"FE");
				friends.sayName();
	6.3 继承
			* OO语言支持两种继承方式：接口继承和实现继承。
			* 接口继承：只继承方法签名 (js没有)
			* 实现继承：继承实际的方法
			* ECMAScript只支持实现继承，而其实现继承主要是依靠原型链来实现的。
		6.3.1 原型链
			* 基本思想：利用原型让一个引用类型继承另一个引用类型的属性和方法
			* 实现方法：构造函数实例化时，实例化对象默认获取内部指针指向原型对象
				- 例子
					function Person(){
						this.manKind = "human";
					}
					Person.prototype.getManKind = function(){
						return this.manKind;
					};

					function Dog(){
						this.dogKind = "dog";
					}

					Dog.prototype = new Person();

					Dog.prototype.getDogKind = function(){
						return this.dogKind;
					};
					
					var instance = new Dog();
					console.log(instance.getDogKind());		// dog
					console.log(Dog.prototype);	// Person {manKind:"human",getDogKind:fun(){})}
					console.log(Person.prototype);	// {constructor:Person,getManKind:"human"}
			1> 别忘记默认原型
				* 所有的引用类型都默认继承了 Object，而继承通过原型链实现的
			2> 确定原型和实例的关系
				* 第一种：instanceof 操作符
					console.log(instance instanceof Object);
				* 第二种：isPrototypeOf()方法
					console.log(Object.prototype.isPrototypeOf(instance));
			3> 谨慎地定义方法
				* 给原型添加方法的代码放在替换原型的语句之后
					function SuperType(){
						this.property = true;
					}
					SuperType.prototype.getSuperValue = function(){
						return this.property;
					};
					function subType(){
						this.subproperty = false;
					}
					//继承了SuperType 
					SubType.prototype = new SuperType();
					//添加新的方法
					SubType.prototype.getSubValue = function(){
						return this.subproperty;
					};
					// 重写超类型中的方法
					SubType.prototype.getSuperValue = function(){
						return false;
					};
					var instance = new SubType();
					console.log(instance.getSuperValue());
				* 在通过原型链实现继承时，不能使用对象字面量创建原型方法。这样做会重写原型链
					function SuperType(){
						this.property = true;
					}
					SuperType.prototype.getSuperValue = function(){
						return this.property;
					};
					function SubType(){
						this.subproperty = false;
					}

					// 继承了SuperType
					SubType.prototype = new SuperType();
					// 使用字面量添加新方法，会导致上一行代码无效
					SubType.prototype = {
						getSubValue : function(){
							return this.subproperty;
						},
						someOtherMethod : function(){
							return false;
						}
					};
					var instance = new SubType();
					console.log(instance.getSuperValue());
			4>  原型链的问题
				* 第一个问题
					同不能全部用原型对象创建构造函数一样，一个实例修改了原型对象的引用类型属性的属性值，其他实例共享这个修改
						function SuperType(){
							this.color = ["red","blue","yellow"];
						}
						function SubType(){}
						SubType.prototype = new Subtype();

						var instance1 = new SubType();
						instance1.color.push("green");
						var instance2 = new SubType();
						console.log(instance2.color); //["red","blue","yellow","green"]

				* 第二个问题
					- 在创建子类型的实例时，不能向超类型的构造函数中传递参数。
					- 或者说在不影响所有对象实例的情况下，给超类型的构造函数传递参数
					- 实践中很少会单独使用原型链
		6.3.2 借用构造函数 (很少使用)
			* 在解决原型中包含引用类型值所带来问题的过程中，开发人员使用一种叫做借用构造函数（constructor stealing）的技术
			* 又叫做伪造对象或经典继承()
				function SuperType(){
					this.color = ["red","blue","yellow"];
				}
				function SubType(){
					SuperType.call(this);
				}

				var instance1 = new SubType();
				instance1.color.push("green");
				console.log(instance1.color);
				var instance2 = new SubType();
				console.log(instance2.color);
			1> 传递参数
				* 相对原型链而言，借用构造函数有一个很大的优势：可以在子类型构造函数中向超类型构造函数传递参数；
				function SuperType(){
					this.name = name;
				}
				function SubType(){
					SuperType.call(this,"kkk");
					this.age = 29;
				}

				var instance = new SubType();
				console.log(instance.name);
				console.log(instance.age);
			2> 问题
				* 没有共用的方法，函数复用无从谈起
				* 在超类型的原型中定义的方法，在子类型中是不可见的。
		6.3.3 组合继承（伪经典继承）
			* 将原型链和组合构造函数的技术组合到一起，发挥二者之长的一种继承模式
			* 用调用构造函数继承构造函数的属性和方法
			* 用原型链继承超类型的原型对象的属性和方法
				function SuperType(name){
					this.name = name;
					this.colors = ["red","blue","green"];
				}
				SuperType.prototype.sayName = function(){
					alert(this.name);
				}
				function SubType(name, age){
					SuperType.call(this, name);
					this.age = age;
				}
				SubType.prototype = new SuperType();
				SubType.prototype.sayAge = function(){
					alert(this.age);
				};
				var instance1 = new SubType("Nicholas",29);
				instance1.colors.push("black");
				alert(instance1.colors);
				instance1.sayName();
				instance1.sayAge();

				var instance2 = new SubType("Greg",38);
				alert(instance2.colors);
				instance2.sayName();
				instance2.sayAge();
		6.3.4 原型式继承
			* 借助原型可以基于已有对象创建新对象，同时还不必因此创建自定义类型
				function object(o){
					function F(){}
					F.prototype = o;
					return new F();
				}
				// 可以创建对象副本
				var person = {
					name:"Nicholas",
					friends:["Shelby","Court","Van"]
				};
				var anotherPerson = object(person);
				anotherPerson.name = "Greg";
				anotherPerson.friends.push("Rob");

				var yetAnotherPerson = object(person);
				yetAnotherPerson.name = "Linda";
				yetAnotherPerson.friends.push("Barbie");
				alert(person.friends);
			-------------------------------------------
			* Object.create() 方法
			-------------------------------------------
				- 接收两个参数
				- 第一个参数：一个用做新对象原型的对象
				- 第二个参数：为新对象定义额外属性的对象（可选）
				- 例子：
					var person = {
						name:"kkk",
						friends:["Shelby","Court","Van"]
					}
					var anotherPerson = Object.create(person);
					anotherPerson.name = "Greg";
					anotherPerson.friends.push("Rob");

					var yetAnotherPerson = Object.create(person);
					yetAnotherPerson.name = "Linda";
					yetAnotherPerson.friends.push("Barbie");
					alert(person.friends);
				- 这种方法共享原型对象中引用类型的值，所以和原型一样

		6.3.5 寄生式继承
			* 例子：
				function object(o){
					function F(){}
					F.prototype = o;
					return new F();
				}
				function createAnother(original){
					var clone = object(original);
					clone.sayHi = function(){
						alert("hi");
					};
				}

				var person = {
					name: "kkk",
					friends: ["Shelby","Court","Van"]
				};
				var anotherPerson = createAnother(person);
				anotherPerson.sayHi();
			* 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，这一点与构造函数模式类似。
		6.3.6 寄生组合式继承
			* 组合式继承的不足：无论什么情况下，都会调用两次超类型构造函数；
			=========


			=========

	6.4 小结
		ECMAScript 支持面向对象（OO）编程，但不实用类或者接口。对象可以在代码执行过程中创建和增强，因此具有动态性和非严格定义的实体。在没有类的情况下，可以采用下列模式创建对象。
		1> 工厂模式，使用简单的函数创建独享，为对象添加属性和方法，然后返回对象。这个模式后来被构造模式所取代。
		2> 构造函数模式，可以创建自定义引用类型，可以像创建内置对象实例一样使用 new 操作符。不过，构造函数模式也有缺点，每个成员无法得到复用，包括函数。由于函数可以不局限于任何对象，因此没有理由不在多个对象间共享函数。
		3> 原型模式，使用构造函数的 prototype 属性指定那些应该共享的属性和方法。组合使用构造函数模式和原型模式时，使用构造函数定义实例属性，使用原型定义共享的属性和方法。
	此外，还存在一下可供选择的继承模式
		1> 原型式继承：可以再不必预先定义构造函数的情况下实现继承，其本质是执行对给定对象的浅赋值。而赋值得到的副本还可以得到进一步改造。
		2> 寄生式继承： 与原型式继承非常相似，也是基于某个对象或某些信息创建的一个对象，然后增强对象，最后返回对象。为了解决组合继承模式由于多次调用超类型构造函数而导致的低效率问题，可以将这个模式与组合继承一起使用。
		3> 寄生组合式继承，寄生组合式继承和组合继承的优点与一身，是实现基于类型继承的最有效方式。
	



