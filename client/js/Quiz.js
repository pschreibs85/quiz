const React = require('react')
const ReactDOM = require('react-dom')
const mockData = require('./mock-data')
const Question = require('./Question')

mockData.questions.forEach(data=>{
	data.options.splice(Math.floor(data.options.length*Math.random()), 0, data.answer)
})

class Quiz extends React.Component {
	constructor(){
		super()
		this.state={'step':0, responses:[]}
		console.log(this.state)
	}
	incStep(data){
		console.log(data)
		if (this.state.step!==mockData.questions.length-1){
			this.setState({responses: this.state.responses.concat([data])})
			this.setState({'step': this.state.step+1})
		}else{
			this.setState({'step': -1})
		}
	}
	render(){
		if (~this.state.step){
				return (
					<Question
					question={mockData.questions[this.state.step].question}
					next={this.incStep.bind(this)}
					answer = {mockData.questions[this.state.step].answer}
					options = {mockData.questions[this.state.step].options} />
				)
		}else{
			return (
				<div>
					{JSON.stringify(this.state.responses)}
				</div>
			)
		}
	}
}

module.exports = Quiz