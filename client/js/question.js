const React = require('react')

class Question extends React.Component {
	render(){
		return (
			<div>
				<div onClick={this.props.next}>{JSON.stringify(this.props.question)}</div>
				<form>
					{this.props.options.map(option=>{
						return (<div><input type="radio"></input>{option}</div>)
					})}
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

module.exports = Question