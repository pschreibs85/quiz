const React = require('react')

class Question extends React.Component {
	constructor(){
		super()
		this.state = {'answer':null}
	}
	setAnswer(option){
		this.setState({'answer':option})
	}
	recordOneQuestion(ev){
		ev.preventDefault()
		let data={
			//add student id, question id?
			question:this.props.question,
			answer:this.state.answer,
			isCorrect: (this.state.answer===this.props.answer)
		}
		this.setState({'answer':null})
		this.props.next(data)
	}
	render(){
		return (
			<div style={{'textAlign':'center','padding':'10px 20px'}}>
				<div onClick={this.props.next}>{JSON.stringify(this.props.question)}</div>
				<form onSubmit={this.recordOneQuestion.bind(this)} style={{'textAlign':'center'}}>
					{this.props.options.map((option,i)=>{
						return (
						<div key={i}>
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