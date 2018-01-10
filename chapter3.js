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

一、数据类型与函数
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


二、操作符（算数操作符、位操作符、关系操作符、相等操作符）
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

三、语句（流控制语句）
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

四、函数
<<<<<<< HEAD:chapter1-3.js
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
=======
	1> function functionName(arg0,arg1,arg2,...,ageN){statement}
	2> 1
>>>>>>> origin/master:Js_learn_diary.js
