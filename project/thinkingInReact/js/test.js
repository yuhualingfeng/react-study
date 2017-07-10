	

var SearchInput = React.createClass({
	handerChange:function(){
		this.props.setName(this.refs.seachbox.value);
	},
	getDefaultProps:function(){
		return {initValue:'d'};
	},
	render:function(){
		return (			
			<div>
				<input type='text' ref = 'seachbox' defaultValue={this.props.initValue} onChange={this.handerChange}/>
			</div>
			);
	}
});

var List = React.createClass({
	componentWillMount:function(){
		console.log('componentWillMount');
	},
	componentDidMount:function(){
		console.log('componentDidMount');
	},
	componentWillReceiveProps:function(){
		//当为this.state设置一个新值时触发此函数.
		console.log('componentWillReceiveProps');
	},
	shouldComponentUpdate:function(){
		console.log('shouldComponentUpdate');
		return true;
	},
	componentWillUpdate:function(){
		console.log('componentWillUpate');
	},
	componentDidUpdate:function(){
		console.log('componentDidUpdate');
	},
	componentWillUnmount:function(){
		console.log('componentWillUnmount');
	},

	render:function(){
	var lists = this.props.lists;
	var filterWord = this.props.filterWord;
	var rows = [];
	lists.forEach((list) => {
	    if(list.toLowerCase().indexOf(filterWord.toLowerCase())!=-1){
	    	rows.push(<div>{list}</div>);
	    } 
		
	});
		return (
			<div>{rows}</div>
		);
	}
});	

var SearchBox = React.createClass({
	getInitialState: function(){
		return {
		filterWord:''
		};
	},
	// shouldComponentUpdate:function(){
	// 	console.log('shouldComponentUpdate');
	// 	return true;
	// },
	propTypes:{
		lists:React.PropTypes.array
	},
	setName: function(filterWord){
	this.setState({filterWord:filterWord});
	},
	render: function(){
		return (
			<div>
				<SearchInput setName = {this.setName}/>
				<List filterWord = {this.state.filterWord} lists = {this.props.lists}/>
			</div>
		);
	}
});

var lists = ['Jack','Wason','Marray','Lucy','Jummy','Herry','Bob'];
ReactDOM.render(<SearchBox lists= {lists}/>,document.getElementById('container'));	