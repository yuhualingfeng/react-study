
var List = React.createClass({
	clickHandler:function(){
		console.log(1);
	},
	render:function(){
		return (<div onClick={this.clickHandler}>{this.props.children}</div>);
	}
});
 ReactDOM.render(<List><div>nice to meet you</div><div>nice to meet you too</div></List>,document.getElementById('example'));