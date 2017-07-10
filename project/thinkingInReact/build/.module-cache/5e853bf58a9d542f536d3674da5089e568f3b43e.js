	
class SearchInput extends React.Component {
	handerChange () {
		this.props.setName(this.refs.seachbox.value);
	}
	render () {
		return (
			<div>
				<input type='text' ref = 'seachbox' onChange={this.handerChange}/>
			</div>
		);
	}
}

var List = React.createClass({
	render:function(){
	var lists = this.props.lists;
	var filterWord = this.props.filterWord;
	var rows = [];
	lists.forEach((list) => {
	    if(list.toLowerCase().indexOf(filterWord.toLowerCase())!=-1){
	    	rows.push(<div>{list}</div>);
	    } 
		
	}.bind(this));
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