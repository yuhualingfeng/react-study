var Comment = React.createClass({displayName: "Comment",
	rawMarkup:function(){
		var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
		return {__html:rawMarkup};
	},
	render:function(){
		return (
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "commentAuthor"}, this.props.author), 
				React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
			)

		);
	}
});
var CommentForm = React.createClass({displayName: "CommentForm",
	handleSubmit:function(e){
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		if(!text || !author){
			return;
		}
		this.props.onCommentSubmit({author:author,text:text});
		this.refs.author.value = '';
		this.refs.author.text = '';
		return;
	},
	render:function(){
		return (
			React.createElement("form", {class: "commentForm", onSubmit: this.handleSubmit}, 
				React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
				React.createElement("input", {type: "text", placeholder: "Say somthing ...", ref: "text"}), 
				React.createElement("input", {type: "submit", value: "Post"})
			)
			);
	}
});
var CommentList = React.createClass({displayName: "CommentList",
	render:function(){
	var commentNodes = this.props.data.map(function(comment){
		return (
			React.createElement(Comment, {author: comment.author}, comment.text)
		);
	});
	return (
		React.createElement("div", {className: "commentList"}, 
			commentNodes
		)
	);
	}
}); 
var CommentBox = React.createClass({displayName: "CommentBox",
	loadCommentsFromServer:function(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			cache:false,
			success:function(data){
				debugger;
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.url,status,err.toString())
			}.bind(this)
		});
	},
	handleCommentSubmit:function(comment){
		var comments = this.state.data;
		var newComments = comments.concat([comment]);
		this.setState(newComments);
		$.ajax({
			url:this.props.url,
			dataType:'json',
			data:comment,
			type:'post',
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.url,status,err.toString())
			}.bind(this)
		});
	},
	getInitialState:function(){
		return {data:[]};
	},
	componentDidMount:function(){
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromserver,this.props.pollInterval);
	},
	render:function(){
		return (
			React.createElement("div", {className: "commentBox"}, 
			React.createElement("h1", null, "Comments"), 
			React.createElement(CommentList, {data: this.state.data}), 
			React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
			)
			);
	}
});
ReactDOM.render(React.createElement(CommentBox, {url: "data.json", pollInterval: 2000}),document.getElementById('content'));