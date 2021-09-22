const item = document.querySelector('.item')

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)
console.log(1)
function dragstart(){
    console.log(1)
}

function dragend(){
    console.log(2)
}