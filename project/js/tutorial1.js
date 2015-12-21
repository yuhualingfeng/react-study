
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



// ReactDOM.render(<CommentBox />,document.getElementById('content'));
ReactDOM.render(<CommentBox data={data} />,document.getElementById('content'));