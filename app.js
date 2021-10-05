// const item = document.querySelector('.item')
const placeholder = document.querySelectorAll('.placeholder')
const PlusBtn = document.querySelector('.start-btn')
const start = document.querySelector('.placeholder-start')

let count = 1

PlusBtn.addEventListener('click', () => {
    const prepitem = document.createElement('div')
    prepitem.classList.add('item')
    prepitem.classList.add('toDrag')
    prepitem.setAttribute("draggable", true)
    prepitem.innerHTML = `${count} Даблклик на меня`
    count++
    // const prepitem = document.createElement(div)
    start.append(prepitem)
    toDrag(prepitem)
})

function toDrag(myitem) {
    myitem.classList.remove('toDrag')
    myitem.addEventListener('dragstart', dragstart)
    myitem.addEventListener('dragend', dragend)
    myitem.addEventListener('dblclick', changetext)
    // console.log(myitem);
}

let activeItem

// item.addEventListener('dragstart', dragstart)
// item.addEventListener('dragend', dragend)

for (let i = 0; i < placeholder.length; i++) {
    placeholder[i].addEventListener('dragover', dragover)
    placeholder[i].addEventListener('dragenter', dragenter)
    placeholder[i].addEventListener('dragleave', dragleave)
    placeholder[i].addEventListener('drop', dragdrop)
}


function dragstart(e) {
    setTimeout(() => e.target.classList.add('hide'), 0)
    activeItem = e.target

}

function dragend(e) {
    e.target.className = 'item'
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.target.classList.add('entered')
}

function dragleave(e) {
    e.target.classList.remove('entered')
}

function dragdrop(e) {
    e.target.append(activeItem)
    activeItem.classList.remove('hide')
    e.target.classList.remove('entered')
}

function changetext(e) {
    let input = document.createElement('textarea');
    input.value = val = e.target.innerHTML
    e.target.innerHTML = ''
    e.target.appendChild(input)
    e.target.remove

    const bodyClick = document.querySelector('body')
    bodyClick.addEventListener('click', applyText)


    function applyText(a) {
        if (a.target != input) {
            e.target.innerHTML = e.target.childNodes[0].value;
            bodyClick.removeEventListener('click', applyText)
            // bodyClick.removeEventListener('click', name)
        }
    }
}
