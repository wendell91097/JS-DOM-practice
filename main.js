console.log(document.getElementsByTagName("h1")[0].innerHTML = "New Text")

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'New Text'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        header_text = 'Something Else'
    }
}

// Event Listener

color_button.addEventListener('click',color_change)

let button = document.createElement('button')
let button_display = document.createElement('h2')

button.innerHTML = 'I am alive!'
document.body.append(button)

button.addEventListener('click', function() {
    button_display.innerHTML = 'More JS Info Here...';
    document.body.append(button_display);
})

// Grab copied text -- then place into a clipboard

const source = document.querySelector('div.source');
source.addEventListener('copy', (event) =>  {
    console.log(ClipboardEvent)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection);
    event.preventDefault();
})

// Grabbing Form Data from a Submit event

const form = document.querySelector('#testDataForm')

// Add Event Listener for Submit Event

form.addEventListener('submitButton', ( e ) => {
    e.preventDefault();
    let query_first = document.querySelector('#first-name')
    let query_last = document.querySelector('#last-name')
    let first_name = e.path[0][0].value;
    let last_name = e.path[0][1].value;
    console.log(e)
    console.log(first_name, last_name)
    console.log(`This came from the query selector: ${query_first.value}, ${query_last.value}`)
})