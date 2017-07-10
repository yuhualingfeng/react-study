
// var List = React.createClass({
// 	componentDidMount:function(){
// 		console.log(ReactDOM.findDOMNode(this));
// 	},
// 	componentWillMount:function(){
// 		//console.log(ReactDOM.findDOMNode(this));
// 	},
// 	handler:function(){
// 		console.log(1);
// 	},

// 	render:function(){
// 	var childs =  React.Children.map(this.props.children,function(item){
// 				//console.log(item);
// 				return item;
// 		});
// 	console.log(childs);
// 	console.log(React.Children.count(this.props.children));
// 	//console.log(React.Children.only(this.props.children));
// 		return <div onClick={this.handler}>{this.props.children}</div>;
// 	}
// });



//  ReactDOM.render(<List><div>nice to meet you</div><div><div>sfsdff</div>nice to meet you too</div></List>,document.getElementById('example'));

// Bootstrap + jquery + React + JointJS + ES6

// Less + Gulp + 

class List extends React.Component {
	clickHandler () {
		var arr = [1,2,3];
		arr.map((item)=>{
			console.log(item+this.props.name);
			return item+this.props.name;
		});
		//console.log(this.props.name);
	}
	render () {
		return (
			React.createElement("div", {onClick: this.clickHandler.bind(this)}, "fdsfsf")
		);
	}
}

ReactDOM.render(React.createElement(List, {name: 2+1}),document.getElementById('example'));
