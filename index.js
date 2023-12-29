var titlelinks = document.getElementsByClassName("tittle-links");
var contents = document.getElementsByClassName("contents");
function opentab(name) {
    for (titlelink of titlelinks) {
        titlelink.classList.remove("active-link");
    }
    for (content of contents) {
        content.classList.remove("active-skills");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(name).classList.add("active-skills");
}


var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPqoq-T-Q_qBFgjXsEhoIVtJHTUg7vLkMQMTKdkpM5zzP-YB4Y0TkPz6K6Jz_JZgs6lA/exec'
const form = document.forms['submit-to-google-sheet']

const message = document.getElementById("message")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                message.innerHTML = ""
            },I,5000)
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
})