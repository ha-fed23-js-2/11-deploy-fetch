import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { loadFromApi, saveToApi } from './api'

function App() {
	const [name, setName] = useState('')

	const handleSave = async () => {
		await saveToApi(name)
		console.log('App.handleSave: completed');
	}
	const handleLoad = async () => {
		const result = await loadFromApi()
		console.log('App.handleLoad result: ', result);
		setName(result)
	}
	const handleNameChange = event => {
		setName(event.target.value)
	}
	return (
		<div className="app">
		<h1> Super deploy demo </h1>

		<section className="column">
			<label> Name </label>
			<input type="text"
				onChange={handleNameChange}
				value={name}
				/>
			<button onClick={handleSave}> Save to API </button>
			<button onClick={handleLoad}> Load from API </button>
		</section>
		</div>
	)
}

export default App
