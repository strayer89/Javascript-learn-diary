1.typeof 操作符
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
	1> 	大写的懵B

8.