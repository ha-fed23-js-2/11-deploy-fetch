const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const key = 'lejonmanen'

async function saveToApi(box) {
	const response = await fetch(baseUrl + '?method=save', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			value: box  // kan vara hela state
		})
	});
	// If response.ok is true, the request succeeded
	console.log('saveToApi response ok? ', response.ok);
}

export { saveToApi }
