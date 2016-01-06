var MyComponent = React.createClass({
	render:function  () {
		return (
			<div>
				<div data-name={this.props.attribute}>{['First ', <span>&middot;</span>, ' Second']}</div>
				<div aria-hidden={true}>{'First \u00b7 Second'}</div>
				<div data-custom-attribute={this.props.attribute}>{'First ' + String.fromCharCode(183) + ' Second'}</div>
				<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
			</div>
			
			// <div>{'First  Second'}</div>
			
			);
	}
});






ReactDOM.render(<MyComponent attribute="fsssoo"/>,document.getElementById('container'));





/**
 * Interactivity and Dynamic UIs(交互和动态UI)
 */

var LikeButton = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        };
    },
    handleClick: function(event) {
        this.setState({
            liked: !this.state.liked
        });
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (


            < p onClick = {
                this.handleClick
            } >

            You {text} this.Click to toggle.

            < /p>

        );
    }
});


ReactDOM.render(<LikeButton/>,document.getElementById('example'));


/**
 * Multiple Components(組合組件)
 */

var Avatar = React.createClass({
	render:function  () {
		return (

			<div>
			<ProfilePic username={this.props.username}><div>whats then</div></ProfilePic>
			<ProfileLink username={this.props.username}/>


			</div>

			);
	},

});

var ProfilePic = React.createClass({

	render:function  () {
		return (
			<div>
				<img src={'http://tp4.sinaimg.cn/2447432047/180/5722092717/1'} alt=""/>
				{this.props.children}
			</div>
			

			);
	}
});

var ProfileLink = React.createClass({

	render:function  () {
		return (

			<a href={'http://weibo.com/u/2447432047?is_all=1'}>{this.props.username}</a>

			);
	}
});




ReactDOM.render(<Avatar username="濮华胜"/>,document.getElementById('multipleComponents'));