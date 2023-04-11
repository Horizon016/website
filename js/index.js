const container = document.getElementById('button-container')
const buttons = document.querySelectorAll('.btn')
const colors = ['#e74c3c', '#8344ad', '#3498bd', '#e67e22', '#2ecc71', '#2ef53c',]

buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => setColor(btn))
    btn.addEventListener('mouseout', () => removeColor(btn))
})


function setColor(element){
    const color = colors[Math.floor(Math.random() * 6)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = "#1d1d1d"
}