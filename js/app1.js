const modal = document.getElementById('modal')

const numbersOfNodesForm = document.getElementById('numbersOfNodesForm')
const numbersOfNodesText = document.getElementById('numbersOfNodesText')

var numbersOfNodes
const l = []
const arr = []

numbersOfNodesForm.addEventListener('submit', e => {
  e.preventDefault()
  setNumbersOfNodes()
})

function setNumbersOfNodes () {
  numbersOfNodes = document.getElementById('numbersOfNodes')
  console.log(numbersOfNodesText)
  numbersOfNodesText.innerHTML = `Número de nodos: ${numbersOfNodes.value}`
  numbersOfNodes = Number(numbersOfNodes.value) + 1
  modal.classList.remove('init')

  for (let i = 0; i < numbersOfNodes; i++) {
    l[i] = Infinity
  } 

  //creacion de la matriz y vector L

  for (let i = 0; i < numbersOfNodes; i++) {
    arr.push([])
    arr[i].push(new Array(numbersOfNodes))

    for (let j = 0; j < numbersOfNodes; j++) {
      if (i == 0 || j == 0) {
        arr[i][j] = ''
      } else {
        arr[i][j] = 0
      }
    }
  }

  arr[0][0] = 'R'
}





//array de nodos  
const nodes = new vis.DataSet([])

//array de aristas
const edges = new vis.DataSet([])

const canvas = document.getElementById('canvas')

const data = {
  nodes,
  edges
}

//flechas de nodos 
const options = {
  edges: {
    arrows: {
      to: {
        enabled: false
      }
    }
  }
}

const graph = new vis.Network(canvas, data, options)

//para agregar un nodo
const addNodeForm = document.getElementById('addNodeForm')

addNodeForm.addEventListener('submit', e => {
  e.preventDefault()
  addNode(numbersOfNodes, arr)
})


function addNode (n, matriz) {
  const node = document.getElementById('node')

  const x = node.value
  node.value = ''

  nodes.add([{
    id:x,
    label:x
  }])

  for (let i = 1; i < n; i++) {
    matriz[x][0] = x
    matriz[0][x] = x
  }
}

const addAristForm = document.getElementById('addAristForm')

addAristForm.addEventListener('submit', e => {
  e.preventDefault()
  addArist(numbersOfNodes, arr)
})

//para agregar una arista
function addArist (n, matriz) {
  const initialRelation = document.getElementById('initialRelation')
  const endRelation = document.getElementById('endRelation')
  const aristValue = document.getElementById('aristValue')

  const a = initialRelation.value
  const b = endRelation.value
  const c = aristValue.value

  initialRelation.value = ''
  endRelation.value = ''
  aristValue.value = ''

  edges.add([{
    from: a,
    to: b,
    label:c
  }])

  for (let i = 1; i < n; i++) {
    matriz[a][b] = c
    matriz[b][a] = c
  }
}

function reload () {
  location.reload();
}