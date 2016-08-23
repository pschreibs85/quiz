const React = require('react')
const ReactDOM = require('react-dom')
const Questions = require('./questions')
class HelloWorld extends React.Component {
	render(){
		return (
			<div> 
				HelloWorld 
				<Questions />
			</div>
		)
	}
}

ReactDOM.render( <HelloWorld />, document.getElementById('app'))