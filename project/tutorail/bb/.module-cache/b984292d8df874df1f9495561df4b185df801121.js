
var CommentBox = React.createClass({displayName: "CommentBox",
	render:function(){
		return (
			React.createElement("div", {className: "commentBox"}, 
				"Hello,world!I am a CommentBox."
			)
			);
	}
});


var CommentList = React.createClass({displayName: "CommentList",
	render:function(){
		return (
			React.createElement("div", {className: "commentList"}, "Hello,world! I am a CommentList.")
			);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render:function(){
		return (
			React.createElement("div", {className: "commentForm"}, "Hello,world!I am a CommentForm.")
			);
	}
});

var CommentBox = React.createClass({displayName: "CommentBox",
	render:function(){
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, null), 
				React.createElement(CommentForm, null)
			)
			);
	}
});

var Comment = React.createClass({displayName: "Comment",render:function  () {
	return (
		React.createElement("div", {className: "comment"}, 
			React.createElement("h2", {className: "commentAuthor"}, 
				this.props.author
			), 
			this.props.children
		)
		);
}});

var CommentList = React.createClass({displayName: "CommentList",render:function  () {
	return (
		React.createElement("div", {className: "commentList"}, 
			React.createElement(Comment, {author: "Pete Hunt"}, "This is one Comment"), 
			React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
		)
		);
}});

// var Comment = React .createClass({render:function  () {
// 	return (

// 		<div className='comment'>
// 		<h2 className='commentAuthor'>{this.props.author}</h2>
// 		// {marked(this.props.children.toString())}
// 		{marked(this.props.children.toString())}
// 		</div>

// 		);
// }});


var Comment = React.createClass({displayName: "Comment",

	rawMarkup:function  () {
		var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
		return {__html:rawMarkup};
	},
	render:function  () {
		return (

			React.createElement("div", {className: "comment"}, 
			React.createElement("h2", {className: "commentAuthor"}, 
			this.props.author
			), 
			React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
			)

			);
	}

});


var CommentBox = React.createClass({displayName: "CommentBox",render:function  () {
	return (
		React.createElement("div", {className: "commentBox"}, 
		React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, {data: this.props.data})
		)
		);
}});

var CommentList = React.createClass({displayName: "CommentList",render:function  () {
	var commentNodes = this.props.data.map(function  (comment) {
		return (

			React.createElement(Comment, {author: comment.author, key: comment.id}, comment.text)

			);
	});
	return (

		React.createElement("div", {className: "commentList"}, commentNodes)

		);
}});

var data = [{id:1,author:"Pete Hunt",text:"This is one comment"},
	{id:2,author:"Jordan Walke",text:"This is *another* comment"}
];


// var CommentBox = React.createClass({

// 	loadCommentsFromServer:function  () {
// 		$.ajax({
// 			url: this.props.url,
// 			type: 'GET',
// 			dataType: 'json',
			
// 		})
// 		.done(function(data) {
// 			this.setState({data:data});
// 		})
// 		.fail(function(xhr,status,err) {
// 			console.error(this.props.url,status,err.toString());
// 		})
// 		.always(function() {
// 			console.log("complete");
// 		});

// 		$.ajax({
// 			url:this.props.url,
// 			type:"GET",
// 			dataType:"json",
// 			success:function(data){
// 				this.setState({data:data});

// 			}.bind(this),
// 			error:function  () {
				
// 			}
// 		});

// 	},
// 	getInitialState:function  (argument) {
// 		return {data:[]};
// 	},

// 	componentDidMount:function  () {

// 		this.loadCommentsFromServer();
// 		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
// 	}
// 	,
// 	render:function  () {
// 		return (

// 			<div className='commentBox'>
// 			<h1>Comments</h1>
// 			<CommentList data={this.state.data}></CommentList>
// 			<CommentList></CommentList>
// 			</div>


// 			);
// 	}

// });
// 

var CommentForm = React.createClass({displayName: "CommentForm",
	getInitialState:function  () {
		return {author:'',text:''};
	},
	handleAuthorChange:function (e) {
		this.setState({author:e.target.value});
	},
	handleTextChange:function  (e) {
		this.setState({text:e.target.value});
	},
	handleSumbmit:function  (e) {
		
		e.preventDefault();
		var author = this.state.author.trim();
		var text= this.state.text.trim();
		if(!text || !author)
		{
			return;
		}
		this.props.onCommentSubmit({author:author,text:text});
		this.setState({author:'',text:''});
	},
	render:function  () {
		return (

			React.createElement("form", {className: "commentForm", onSubmit: this.handleSumbmit}, 
				React.createElement("input", {type: "text", placeholder: "Your name", value: this.state.author, onChange: this.handleAuthorChange}), 
				React.createElement("input", {type: "text", placeholder: "Say something...", value: this.state.text, onChange: this.handleTextChange}), 
				React.createElement("input", {type: "submit", value: "Post"})
			)

			);
	}
});





var CommentBox = React.createClass({displayName: "CommentBox",
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();

  //  setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  handleCommentSubmit:function (comment) {
  	//TODO:submit to the server and refresh the list
  	//
  	var comments = this.state.data;
  	comment.id = Date.now();
  	var newComments = comments.concat([comment]);
  	this.setState({data:newComments});

  	//将数据提交到后端,后端尚未做处理.
  	
  	// $.ajax({
  	// 	url:this.props.url,
  	// 	dataType:'json',
  	// 	type:"post",
  	// 	data:comment,
  	// 	sunccess:function  (data) {
  			
  	// 		this.setState({data:data});
  	// 	}.bind(this),
  	// 	error:function  (xhr,status,err) {
  	// 		this.setState({data:comments});
  	// 		console.error(this.props.url,status,err.toString());
  	// 	}.bind(this)
  	// });
  	
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
      )
    );
  }
});







// ReactDOM.render(<CommentBox />,document.getElementById('content'));
// ReactDOM.render(<CommentBox data={data} />,document.getElementById('content'));
// ReactDOM.render(<CommentBox url='/api/comments'></CommentBox>,document.getElementById('content'));

function commentBox(url,time){

		return React.createElement(CommentBox, {url: url, pollInterval: time});

}

ReactDOM.render(commentBox('/tutorail/api/comments.json',2000),document.getElementById('content'));