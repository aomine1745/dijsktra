const generateMatrixForm = document.getElementById('generateMatrixForm')

generateMatrixForm.addEventListener('submit', e => {
	e.preventDefault()
	modal.classList.add('active')
	generateMatrix(arr)
})


function generateMatrix (matriz) {
	const initialVertex = document.getElementById("initialVertex")
	const endVertex = document.getElementById("endVertex")

	const as = initialVertex.value
	const zs = endVertex.value

	console.log(as + " " + zs)

	dijkstra(matriz, Number(as), Number(zs), l)
}