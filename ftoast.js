const head = document.getElementsByTagName('head')[0];
const body = document.getElementsByTagName('body')[0];
const toastCont = document.createElement("div");
toastCont.classList.add('toast');
toastCont.innerHTML = '<i class="fa fa-times toast-close"></i><div class="toast-content"><div class="toast-symbol"></div><div class="toast-message"><span class="status">Success</span><span class="message">File uploaded.</span></div></div><div class="toast-progresbar"></div>';
body.prepend(toastCont);

const toast = document.querySelector(".toast");
function ftoast(type = 'success', title = 'Success', message = 'Success Message', duration = 10, icon = 'fa-check') {
    // --- set timeout to hide toast
    setTimeout(() => {
        toast.classList.remove('active');
        document.querySelector(".toast-progresbar").classList.remove('active');
    }, duration * 1000)
    //--- end set timeout to hide toast

    let mark = 'check';
    document.documentElement.style.setProperty('--toastDur', `${duration}s`);

    switch (type) {
        case 'alert':
            document.documentElement.style.setProperty('--toastColor', 'red');
            mark = 'exclamation';
            break;
        case 'warning':
            document.documentElement.style.setProperty('--toastColor', 'orange');
            mark = 'exclamation-triangle';
            break;
        case 'success':
            document.documentElement.style.setProperty('--toastColor', 'green');
            mark = 'check';
            break;
        default:
            document.documentElement.style.setProperty('--toastColor', type);
            mark = icon;
            break;
    }
    document.querySelector('.toast-symbol').innerHTML = `<i class="fa fa-${mark} "></i>`;
    document.querySelector('.toast .status').innerText = title;
    document.querySelector('.toast .message').innerText = message;
    toast.classList.add('active');
    document.querySelector(".toast-progresbar").classList.add('active');
}

//to remove toast
document.querySelector(".toast-close").addEventListener('click', () => {
    toast.classList.remove('active');
})
