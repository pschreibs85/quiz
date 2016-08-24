const React = require('react')

class Question extends React.Component {
	render(){
		return (
			<div onClick={this.props.next}>{JSON.stringify(this.props.question)}</div>
		)
	}
}

module.exports = Question