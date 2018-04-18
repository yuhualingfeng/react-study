# React

## 快速开始(QUICK START)

### 入门(Geting Started)

简单介绍以下几点
1. JSFiddle(一款在线代码编辑工具),
2. 在npm中使用React
3. 在浏览器中使用React
4. JSX语法文件转换为JS语法文件

### 教程(Tutorial)
这个教程通过实现一个评论组件CommentBox(由CommentList和CommentForm组件构成)来贯穿全文,从中你可以学到:

1. 如何构成组件
2. 学会使用组件的`props`属性和`state`属性
3. 添加标注(markdown)
4. 绑定数据
5. 从服务器获取并绑定数据
6. 事件绑定

### React思想(Thinking in React)
这里通过一个商品的展示和搜索的组件来简述对React的认识,在这里你能够明白如何更好的设计一个`react`组件.





## 社区资源(COMMUNITY RESOURCES)

### 会议(Conferences)
### 视频(Videos)
### 辅助工具(Complementary tool)



## 引导(GUIDES)

### 为什么使用react(Why React?)

1. 简单
2. 在UI中自动更新修改过的数据
3. 可组合的组件



### 显示数据(Displaying Data)
#### 深入JSX(JSX in Depth)
官方建议使用JSX的原因在于它定义带属性的树形结构有着简洁和相似的语法，React即可呈现html标签也可呈现React组件.html标签呈现使用小写字母,React组件呈现使用大写字母
```jsx

<div className="foo"/>

<MyComponent somProperty={true}/>

```
##### jsx语法和js语法转换

```js

var Nav;
// Input (JSX):
var app = <Nav color="blue" />;
// Output (JS):
var app = React.createElement(Nav, {color:"blue"});

```

```js

var Nav, Profile;
// Input (JSX):
var app = <Nav color="blue"><Profile>click</Profile></Nav>;
// Output (JS):
var app = React.createElement(
  Nav,
  {color:"blue"},
  React.createElement(Profile, null, "click")
);

```

```js

// Input (JSX):
var Nav = React.createClass({ });
// Output (JS):
var Nav = React.createClass({displayName: "Nav", });

```
##### 命名组件
如果你构建的组件有许多子节点,比如`form`,那么你可能会最终定义许多变量.

```jsx

var Form = MyFormComponent;
var FormRow = Form.Row;
var FormLabel = Form.Label;
var FormInput = Form.Input;

var App =(
	<Form>
		<FormRow>
			<FormLabel></FormLabel>
			<FormInput></FormInput>
		</FormRow>
	</Form>
);
```
更加精简的写法如下：

```jsx

var Form = MyFormComponent;
var App = (

<Form>
	<Form.Row>
		<Form.Label/>
		<Form.Input/>
	</Form.Row>
</Form>

);

```
除此之外,你还需创建上述代码的子组件.

```jsx

var MyFormComponent = React.createClass({...});
MyFormComponent.Row = React.createClass({...});
MyFormComponent.Label = React.createClass({...});
MyFormComponent.Input = React.createClass({...});

```

##### javascript表达式

###### 属性表达式

```jsx

var person = <Person name={window.isLoggedIn ? window.name : ''}/>;

```

###### 布尔属性

```jsx

<input type='button' disabled={true}/>

```

###### 子表达式

```jsx

var content = <Container>{window.isLoggedIn ? <Nav/> : <Login/>}</Container>

```
###### 注释

```jsx

var content =(
	<Nav>
	{/* child comment,put {} around */}
		<Person
	/* multi
	   line
	   comment*/
	  name={window.isLoggedIn ? window.name :''}  //end of line comment
		/>
	</Nav>
);

```

#### JSX传播属性(JSX Spread Attributes)
直接改变`props`是无效的

```jsx

var component = <Component/>
component.props.foo = x; //无效
component.props.bar = y; //无效

```
可以通过以下形式赋值
```jsx

var props = {};
props.foo = x;
props.bar = y;
var component =<Component {...props} foo={'override'}/>

```

#### JSX陷阱(JSX Gotchas)

JSX和HTML看起来很像但是它们有些重大的不同你可能会忽略。例如`style`属性的不同。

###### HTML实体
以下几种方式可以在JSX中嵌入实体
```jsx

<div>{'First \u00b7 Second'}</div>
<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
<div>{['First ', <span>&middot;</span>, ' Second']}</div>
<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />

```

###### 自定义HTML属性
在原生的html标签中自定义属性需要加`data-`,无障碍属性则不需要
```jsx

<div data-custom-attribute="foo" />

<div aria-hidden={true} />

<x-my-component custom-attribute="foo" />

```







### 交互和动态UIs(Interactivity and Dynamic UIs)
#### 例子
```jsx

var LikeButton = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        };
    },
    handleClick: function(event) {
        this.setState({
            liked: !this.state.liked
        });
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (


            < p onClick = {
                this.handleClick
            } >

            You {text} this.Click to toggle.

            < /p>

        );
    }
});

```
#### 事件处理和组合事件


### 复合组件(Multiple Components)
### 可复用组件(Reusable Components)
### 传播属性(Transferring Props)
### 表单(Forms)
### 在浏览器中工作(Working with the Brower)
#### 参考(涉及)组件(Refs to Components)
### 工具集成(Tooling Integration)
### 插件(Add-Ons)
#### 动画(Animation)
#### 双向绑定助手(Two-Way Binding Helpers)
#### 单元测试(Test Utilities)
#### 元素克隆(Cloning Elements)
#### 键控片段(Keyed Fragments)
#### 不变性助手(Immutability Helpers)
#### PurRenderMixin
#### 性能工具(Performance Tools)
#### 浅比较(Shallow Compare)
### 先进的性能(Advanced Performance)
### 上下文(Context)




## 参考(REFERENCE)

### 高级API(Top-Level API)
### 组件API(Component API)
### 组件规格和生命周期(Components specs and Lifecycle)
### 支持的标签和属性(Supported Tags and Attributes)
### 事件系统(Event System)
### DOM差异(DOM Differences)
### 特殊的无DOM属性(Special Non-DOM Attributes)
### 和解(Reconciliation)
### Web组件(Web Components)
### React DOM 术语( React (Virtual) DOM Terminology)



## FLUX
### FLUX预览
### FLUX TodoMVC教程(FLUX TodoMVC Tutorial)



## Tips(技巧)
### 介绍(Introduction)
### 内联样式(Inkline Stylles)
### if-Else In JSX
### 自闭和标签(Self-Closeing Tag)
### JSX根节点最大数(Maximum number of JSX Root Nodes)
### style属性中的j简写像素值(Shorthand for Specifying Pixel Values in style props)
### 子属性类型(Type of the Children props)
### 控制输入null值(Value of the Controllered Input)
### componentWillReceiveProps安装后不触发(componentWillReceiveProps Not Triggered After Mounting)
### (getInitialState中的道具是反向模式)Props in getInitialState Is an Anti-Pattern
### 组件中的DOM 事件监听(DOM Event Listeners in a Component)
### 在JSX中通过ajax加载初始数据失败(Load Initial Data via AJAX False in JSX)
### 组件之间的交流(Communicate Between Components)
### 暴露组件Functions(Expose Component Functions)
### this.props.children未定义(this.props.children undefined)
### 和其他类协同使用React(Use React with Other Libraries)
### 设置InnerHTML是危险的(Dangerously Set innerHTML)









