import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { saveToApi } from './api'

function App() {
	const [name, setName] = useState('')

	const async handleSave = () => {
		await saveToApi('Test')
		console.log('App.handleSave: completed');
	}
	return (
		<div className="app">
		<h1> Super deploy demo </h1>

		<section className="column">
			<label> Name </label>
			<input type="text"

				/>
			<button onClick={handleSave}> Save to API </button>
			<button> Load from API </button>
		</section>
		</div>
	)
}

export default App
