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