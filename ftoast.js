const head = document.getElementsByTagName('head')[0];
const body = document.getElementsByTagName('body')[0];
const toastCont = document.createElement("div");
toastCont.classList.add('toast');
toastCont.innerHTML = '<i class="fa fa-times toast-close"></i><div class="toast-content"><div class="toast-symbol"></div><div class="toast-message"><span class="status">Success</span><span class="message">File uploaded.</span></div></div><div class="toast-progresbar"></div>';
body.prepend(toastCont);

const toast = document.querySelector(".toast");
const progressbar = document.querySelector(".toast-progresbar");
var id;
function toastClose() {
    document.documentElement.style.setProperty('--toastDur', '0s');
    toast.classList.remove('active');
    progressbar.classList.remove('active');

    clearTimeout(id)
}
function ftoast(type = 'success', title = 'Success', message = 'Success Message', duration = 10, icon = 'fa-check') {
    toastClose();
    document.documentElement.style.setProperty('--toastDur', `${duration}s`);
    // --- set timeout to hide toast
    id = setTimeout(() => {
        toastClose();
    }, duration * 1000)
    //--- end set timeout to hide toast
    switch (type) {
        case 'alert':
            document.documentElement.style.setProperty('--toastColor', 'red');
            icon = 'exclamation';
            break;
        case 'warning':
            document.documentElement.style.setProperty('--toastColor', 'orange');
            icon = 'exclamation-triangle';
            break;
        case 'success':
            document.documentElement.style.setProperty('--toastColor', 'green');
            icon = 'check';
            break;
        default:
            document.documentElement.style.setProperty('--toastColor', type);
            icon = icon;
            break;
    }
    document.querySelector('.toast-symbol').innerHTML = `<i class="fa fa-${icon} "></i>`;
    document.querySelector('.toast .status').innerText = title;
    document.querySelector('.toast .message').innerText = message;
    toast.classList.add('active');
    document.querySelector(".toast-progresbar").classList.add('active');
}



//to remove toast
document.querySelector(".toast-close").addEventListener('click', () => {
    toastClose();
})
