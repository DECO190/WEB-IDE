function save() {
    let screen = document.querySelector('.user-screen')
    
    let html = document.querySelector('.text-html').value

    let script = document.querySelector('.text-javascript').value

    let css = document.querySelector('.text-css').value

    let a = document.getElementById('script')

    a.textContent = script

    screen.innerHTML = `
        ${html}
    
        <style>
            ${css}
        </style>
    `
}

function scriptAlert() {
    alert('Para ver o terminal, inspecione a página e vá até console...')
}

function mode(event) {
    let element = event.currentTarget

    if (element.alt == 'Block mode' ) {
        element.classList.add('active')
        element.nextElementSibling.classList.remove('active')
        let lineStyle = document.querySelector('.line-mode-style')
        lineStyle.remove()
    } else {
        element.classList.add('active')
        element.previousElementSibling.classList.remove('active')
        let header = document.querySelector('head')
        header.innerHTML+= '<link class = "line-mode-style" rel="stylesheet" href="line.css">'
    }
}

let element = document.querySelector('.special')
element.textContent = '</ HTML>'