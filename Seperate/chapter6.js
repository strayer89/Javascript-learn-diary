
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

				Object.defineProperty() 方法 *ECMAScript 5 ie8+
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
			* Object.defineProperties() 方法
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
			Object.getOwnPropertyDescriptor() 方法	ECMAScript 5
			
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
		6.2.2 构造函数模式
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
			* 创建自定义构造函数意味着将来可以将它的实例标识为一种特定的类型；
			* 这正是构造函数胜过工厂模式的地方。
			* 以自定义构造函数创建的对象时定义在Global对象（在浏览器中是 window 对象）中的。