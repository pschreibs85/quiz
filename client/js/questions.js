const React = require('react')
const ReactDOM = require('react-dom')
const mockData = require('./mock-data')
class Questions extends React.Component {
	render(){
		// console.log(mockData)
		return (
			<form>
				<pre><code>{JSON.stringify(mockData)}</code></pre>
				{mockData.questions.map(q=>{
					return (
						<div>
							<div>{q.question}</div>
							<div>{q.answer}</div>
							<div>{q.options.map(option=>{
								return (<div>{option}</div>)
							})}</div>
						</div>
						)	
					})
				}
				<button type="sumbit">submit</button>
			</form>
		)
	}
}

module.exports = Questions