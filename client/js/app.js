const React = require('react')
const ReactDOM = require('react-dom')

class HelloWorld extends React.Component {
	render(){
		return (<div>HelloWorld</div>)
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'))