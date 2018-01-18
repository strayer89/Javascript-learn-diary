
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




