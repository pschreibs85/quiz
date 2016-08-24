const React = require('react')

class Question extends React.Component {
	constructor(){
		super()
		this.state = {'answer':null}
	}
	setAnswer(option){
		this.setState({'answer':option})
	}
	render(){
		return (
			<div>
				<div onClick={this.props.next}>{JSON.stringify(this.props.question)}</div>
				<form>
					{this.props.options.map(option=>{
						return (
						<div>
							<input type="radio" checked={option===this.state.answer} onClick={this.setAnswer.bind(this, option)}>
							</input>{option}
						</div>)
					})}
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

module.exports = Question