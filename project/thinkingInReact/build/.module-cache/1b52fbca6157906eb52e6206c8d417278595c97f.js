	

var SearchInput = React.createClass({displayName: "SearchInput",
	handerChange:function(){
		this.props.setName(this.refs.seachbox.value);
	},
	getDefaultProps:function(){
		return {initValue:'d'};
	},
	render:function(){
		return (			
			React.createElement("div", null, 
				React.createElement("input", {type: "text", ref: "seachbox", defaultValue: this.props.initValue, onChange: this.handerChange})
			)
			);
	}
});

var List = React.createClass({displayName: "List",
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
		//return ture;
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
	    	rows.push(React.createElement("div", null, list));
	    } 
		
	});
		return (
			React.createElement("div", null, rows)
		);
	}
});	

var SearchBox = React.createClass({displayName: "SearchBox",
	getInitialState: function(){
		return {
		filterWord:''
		};
	},
	shouldComponentUpdate:function(){
		console.log('shouldComponentUpdate');
		return true;
	},
	propTypes:{
		lists:React.PropTypes.array
	},
	setName: function(filterWord){
	this.setState({filterWord:filterWord});
	},
	render: function(){
		return (
			React.createElement("div", null, 
				React.createElement(SearchInput, {setName: this.setName}), 
				React.createElement(List, {filterWord: this.state.filterWord, lists: this.props.lists})
			)
		);
	}
});

var lists = ['Jack','Wason','Marray','Lucy','Jummy','Herry','Bob'];
ReactDOM.render(React.createElement(SearchBox, {lists: lists}),document.getElementById('container'));	