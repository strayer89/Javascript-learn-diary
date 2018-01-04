# Javascript-learn-diary
this respository record my study
# JavaScript高级程序设计（第三版）
## 第一章 JavaScript简介
	JavaScript开始用于用户端的数据验证。
	JavaScript从一个简单的数据验证器发展成为一门强大的编程语言
	真正掌握这一门语言需要数年，要想全面理解和掌握JavaScript，关键在于弄清楚他的本质、历史和局限性。
### 1.1 JavaScript 简史
	javaScript是由Netscape Navigator 和 Sun公司开发的。其后微软开发Jscript。
	1997年JavaScript 1.1提交给ECMA, 完成了ECMA-262 ----定义一种名为ECAMScript的新脚本语言的标准。           
### 1.2 JavaScript 实现
	javaScrip实现由三个不同的部分组成
	1、核心（ECMAScript）
	2、文档对象模型（DOM）
	3、浏览器对象模型（BOM）
#### 1.2.1  ECMAScript
	Web浏览器只是ECMAScript实现可能的宿主环境之一。
	宿主环境不仅提供基本的ECMAScript实现，同时也提供给语言的扩展（如DOM，利用ECMAScript的核心类型和语法提供更具体的功能）
	其他的宿主环境包括Node（一种服务端的JavaScript平台）和Adobe Flash
	ECMA-262规定了这门语言的语法、类型、语句、关键字、保留字、操作符、对象
#### 1.2.2 文档对象模型（DOM）
	DOM是针对XML但经过扩展 用于HTML的应用程序接口API (application programming interface）      
## 小结
	JavaScript是一种专为与网页交互而设计的脚本语言，由下列三个不同部分组成：
	1、ECMAScript，由ECMA-262定义，提供核心语言功能；
	2、文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
	3、浏览器对象模型（BOM），提供与浏览器交互的方法和接口。
												
## 第二章 在HTML中使用JavaScript
### 2.1 <script>元素
		1、<script>元素的6个属性：async / charset / defer / language / src / type 只要记住src路径和type类型就可以了，其他没用
		2、<script>内部嵌套时必须加上type="text/javascript".
		3、包含在<script>标签内部的代码将被从上至下解释。在解释完毕之前，页面中的其他内容不会被浏览器加载或者显示。
		4、外部引用js文件的<script>标签之间不能有内容，否则内容被忽略
		5、<script>标签的属性src可以跨域，同理<img>标签的src属性
		6、<script>标签放在<body>标签的最后面
#### 2.1.1 延迟脚本
		1、说了一堆，还是推荐把<script>应用外部脚本放在body标签最后面
### 2.2 嵌入代码与外部文件    
		1、推荐使用外部js代码，可维护性高，可缓存，适应未来
### 2.3文档模式（有用吗？？）
		1、混杂模式（quirks mode）
		2、标准模式（standards mode）
		3、准标准模式（almost standards mode）
## 小结
	1、在引用外部js文件时，src属性既可以导入同一个服务器上的文件也可以导入不同服务器上的文件
	2、所有script标签都会按照他们在页面上的先后顺序解析。在不使用defer和async属性时，所有浏览器都是先解析完成前一个script才会解析下一个。
	3、使用defer属性可以让脚本在文档完全呈现之后再执行。延迟脚本总是按照指定它们的顺序执行
	4、使用async属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现。不能保证异步脚本按照先后顺序执行。               












