
var CommentBox = React.createClass({
	render:function(){
		return (
			<div className='commentBox'>
				Hello,world!I am a CommentBox.
			</div>
			);
	}
});


var CommentList = React.createClass({
	render:function(){
		return (
			<div className ='commentList'>Hello,world! I am a CommentList.</div>
			);
	}
});

var CommentForm = React.createClass({
	render:function(){
		return (
			<div className='commentForm'>Hello,world!I am a CommentForm.</div>
			);
	}
});

var CommentBox = React.createClass({
	render:function(){
		return (
			<div className='commentBox'>
				<h1>Comments</h1>
				<CommentList/>
				<CommentForm/>
			</div>
			);
	}
});

var Comment = React.createClass({render:function  () {
	return (
		<div className='comment'>
			<h2 className='commentAuthor'>
				{this.props.author}
			</h2>
			{this.props.children}
		</div>
		);
}});

var CommentList = React.createClass({render:function  () {
	return (
		<div className='commentList'>
			<Comment author ='Pete Hunt'>This is one Comment</Comment>
			<Comment author ='Jordan Walke'>This is *another* comment</Comment>
		</div>
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


var Comment = React.createClass({

	rawMarkup:function  () {
		var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
		return {__html:rawMarkup};
	},
	render:function  () {
		return (

			<div className='comment'>
			<h2 className='commentAuthor'>
			{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()}/>
			</div>

			);
	}

});


var CommentBox = React.createClass({render:function  () {
	return (
		<div className='commentBox'>
		<h1>Comments</h1>
		<CommentList data={this.props.data}></CommentList>
		</div>
		);
}});

var CommentList = React.createClass({render:function  () {
	var commentNodes = this.props.data.map(function  (comment) {
		return (

			<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>

			);
	});
	return (

		<div className="commentList">{commentNodes}</div>

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

var CommentForm = React.createClass({
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

			<form  className="commentForm" onSubmit={this.handleSumbmit}>
				<input type="text" placeholder='Your name' value={this.state.author} onChange={this.handleAuthorChange}/>
				<input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
				<input type="submit" value='Post'/>
			</form>

			);
	}
});





var CommentBox = React.createClass({
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
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});







// ReactDOM.render(<CommentBox />,document.getElementById('content'));
// ReactDOM.render(<CommentBox data={data} />,document.getElementById('content'));
// ReactDOM.render(<CommentBox url='/api/comments'></CommentBox>,document.getElementById('content'));
ReactDOM.render(<CommentBox url='/tutorail/api/comments.json' pollInterval={2000}></CommentBox>,document.getElementById('content'));