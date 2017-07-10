import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:2
		}
		this.handle = this.handle.bind(this);
	}
	componentDidMount(){
		alert(1);
		console.log(this.refs.qw);
	}

	handle(){
		this.setState({name:3});
	}
	render(){
		let name= this.state.name;
		return(
			<div>
				<button ref="qw" onClick={this.handle}>button</button>
			{name}
			</div>
			);
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('root'))