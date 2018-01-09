1.typeof 操作符
	*console.log(typeof test1)   --- "undefined"
	*var test; console.log(typeof test)   --- "undefined"
	*console.log(typeof true)   --- "boolean"   
	*console.log(typeof "abc")  --- "string"  
	*console.log(typeof 123)    --- "number" 
	*console.log(typeof obj)    --- "object"  
	*console.log(typeof null); --- "object" 
	*function test(){}  console.log(typeof test)   --- "function"  
	 
2.Boolean()转型函数
	*Boolean("");    ---false
	*Boolean("ABC"); ---true

	*Boolean(0);       --- false;
	*Boolean(123);     --- true;

	*Boolean(null);    --- false;
	*Boolean(obj);     --- true;

	*Boolean(undefined); --- false;
	*Boolean(！undefined)--- true;

4.isNaN()函数 
	*只返回 true or false (可以自动转化字符串、boolean为数字)
	*用于本来要返回数值却未返回数值的情况
	*isNaN(NaN)   --- true
	*isNaN(10)    --- false
	*isNaN("10")  --- false
	*isNaN("blue")--- true
	*isNaN(true)  --- false
	*isNaN(object) 先检测 object.valueOf(),如果false，调用 toString()方法

5.Number()转型函数
	*Number(true);   	--- 1
	*Number(null);   	--- 0
	*Number(undefined); --- NaN

	*Number("123") 		--- 123
	*Number("1.1") 		--- 1.1
	*Number("0xf") 		--- 十六进制/十进制
	*Number("")    		--- 0
	*Number(除了上述情况)---NAN
	*Number(true)  		--- 1

6.pareInt()函数
	*parseInt("12",10)   	--- 12
	*parseInt("+12",10)   	--- +12
	*parseInt("-12",10)   	--- -12
	*parseInt("12abc",10)    --- 12
	*parseInt("12.99",10)    --- 12
	*parseInt("0xf",16)      --- 15

7.parseFloat()函数
	*parseFloat("12.21.11") --- 12.21
	*parseFloat("0xf")      --- 0

8.toString()方法
	*var obj = null;  console.log(obj.toString());  --- err
	*var und = undefined;  console.log(und.toString());  ---err
	*var num = 17;  num.toString(16);  --- "11"
	*var num = 17;  num.toString(10);  --- "17"
	*var num = 17;  num.toString(8);   --- "21"
	*var num = 17;  num.toString(2);   --- "10001"

9.String()转型函数
	*参数有 toString()方法，用 toString()方法
	*String(null);  --- "null";
	*String(undefined)  ---- "undefined";

