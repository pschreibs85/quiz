const React = require('react')
const ReactDOM = require('react-dom')
const Quiz = require('./Quiz')
class HelloWorld extends React.Component {
	render(){
		return (
			<div> 
				HelloWorld 
				<Quiz />
			</div>
		)
	}
}

ReactDOM.render( <HelloWorld />, document.getElementById('app'))