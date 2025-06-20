function generateURL(achievement, description="") {
	if (description === "") {
		return `https://minamotion.github.io/congratscard/?d=${LZString.compress(JSON.stringify({achievement:achievement}))}`
	}
	return `https://minamotion.github.io/congratscard/?d=${LZString.compress(JSON.stringify({achievement:achievement,description:description}))}`
}

document.addEventListener("DOMContentLoaded", () => {
	const makeButton = document.getElementById("make-btn")
	const madeLink = document.getElementById("made-url")

	makeButton.addEventListener("click", () => {
		madeLink.href = madeLink.innerText = generateURL(document.getElementById("achievement").innerText, document.getElementById("description").innerText)
	})
})