		
	var SearchInput = React.createClass({displayName: "SearchInput",
		handerChange: function(){
			this.props.setName(this.refs.seachbox.value);
		},
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement("input", {type: "text", ref: "seachbox", onChange: this.handerChange})
				)
			);
		}
	});

	var List = React.createClass({displayName: "List",
		render:function(){
		var lists = this.props.lists;
		var filterWord = this.props.filterWord;
		var rows = [];
		lists.forEach(function(list){
			// if(list.indexOf(filterWord)==-1) return;
			rows.push(React.createElement("div", null, list));
		});
			return (
				React.createElement("div", null, rows)
			);
		}
	});	

	var SearchBox = React.createClass({displayName: "SearchBox",
		getInitialState: function(){
			return {
			filterWord:'dfdff'
			};
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