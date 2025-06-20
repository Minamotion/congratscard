function sanitize(string) {
	let newString = "";
	string.split("").forEach(character => {
		switch (character) {
			case "<":
				newString += "&lt;";
				break;
			case ">":
				newString += "&gt;";
				break;
			case " ":
				newString += "&nbsp;";
				break;
			case "&":
				newString += "&amp;";
				break;
			default:
				newString += character;
				break;
		}
	});
	return newString
}

function generateHTML(achievement, description = "") {
	return `<h1 class='Congrats'>Congratulations!</h1>
	<p id="achievement">${sanitize(achievement)}</p>
	<p id="description">${sanitize(description)}</p>
	<p class='hint'>Put your name below and then screenshot! (Note: It doesn't necessarily have to be your real name, you can put your nickname also)</p>
	<input type='text' placeholder='Your name here'>`
}

document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(location.search)
	try {
		let data = {
			achievement: "",
			description: ""
		}
		let d = params.get('d');
		if (d === null) {
			let achievement = params.get('achievement');
			let description = params.get('description');

			if (achievement === null) {
				throw Error("achievement is null");
			}
			data.achievement = achievement

			if (description === null) {
				description = ""
				console.debug("description is null");
			}
			data.description = description
		} else {
			data = JSON.parse(LZString.decompress(d))
		}
		document.getElementById("contents").innerHTML = generateHTML(data.achievement, data.description)
	} catch(err) {
		document.getElementById("contents").innerHTML = "<h1>Oh no! Something went wrong!</h1><p>Check the console for more information</p>"
		console.error(err)
	}
})
