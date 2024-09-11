
let tosbox = document.querySelector('.tosbox');
let Successmsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let Errormsg = ' <i class="fa-solid fa-circle-xmark"></i> Please Fix the error';
let Invalidmsg = ' <i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';


document.querySelector('.buttons').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let msg;
        if (e.target.textContent === 'Success') {
            msg = Successmsg;
        } else if (e.target.textContent === 'Error') {
            msg = Errormsg;
        } else if (e.target.textContent === 'Invalid') {
            msg = Invalidmsg;
        }
        showtost(msg);
    }
});
function showtost(msg) {
    // Remove any existing toast messages
    let existingToasts = document.querySelectorAll('.tost');
    existingToasts.forEach(toast => toast.remove());

    let tost = document.createElement('div');
    tost.classList.add('tost');
    tost.innerHTML = msg;
    tosbox.appendChild(tost);
    if (msg.includes('error')) {
        tost.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        tost.classList.add('invalid');
    }
    setTimeout(() => {
        tost.remove();
    }, 6000);
}
