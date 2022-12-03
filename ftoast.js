const head = document.getElementsByTagName('head')[0];
const body = document.getElementsByTagName('body')[0];
const toastCont = document.createElement("div");

const fontAwesome = document.createElement("link");
fontAwesome.setAttribute('rel', 'stylesheet');
fontAwesome.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");
head.append(fontAwesome);


const cssEle = document.createElement("link");
cssEle.setAttribute('rel', 'stylesheet');
cssEle.setAttribute('href', 'https://connectwithfiroz.github.io/ftoast-message-box/ftoast-style.css');
head.append(cssEle);




toastCont.classList.add('firoz-toast');
toastCont.innerHTML = '<i class="fa fa-times toast-close"></i><div class="toast-content"><div class="toast-symbol"></div><div class="toast-message"><span class="status">Success</span><span class="message">File uploaded.</span></div></div><div class="toast-progresbar"></div>';
body.prepend(toastCont);

const toast = document.querySelector(".firoz-toast");
const progressbar = document.querySelector(".toast-progresbar");
var id;
function toastClose() {
    document.documentElement.style.setProperty('--toastDur', '0s');
    toast.classList.remove('active');
    progressbar.classList.remove('active');

    clearTimeout(id);
}
function ftoast(type = 'success', title = '', message = '', duration = 10, icon = 'fa-check') {
    toastClose();
    document.documentElement.style.setProperty('--toastDur', `${duration}s`);
    // --- set timeout to hide toast
    id = setTimeout(() => {
        toastClose();
    }, duration * 1000);
    //--- end set timeout to hide toast
    switch (type) {
        case 'alert':
            document.documentElement.style.setProperty('--toastColor', 'red');
            icon = 'exclamation';
            if(title=='') title = 'Danger';
            if(message=='') title = 'Danger Message.';
            break;
        case 'warning':
            document.documentElement.style.setProperty('--toastColor', 'orange');
            icon = 'exclamation-triangle';
            if(title=='') title = 'Warning';
            if(message=='') title = 'Warning Message.';
            break;
        case 'success':
            document.documentElement.style.setProperty('--toastColor', 'green');
            icon = 'check';
            if(title=='') title = 'Success';
            if(message=='') title = 'Success Message';
            break;
        default:
            document.documentElement.style.setProperty('--toastColor', type);
            icon = icon;
            if(title=='') title = 'Default';
            if(message=='') title = 'Default Message';
            break;

            
    }
    document.querySelector('.toast-symbol').innerHTML = `<i class="fa fa-${icon} "></i>`;
    document.querySelector('.toast .status').innerText = title;
    document.querySelector('.toast .message').innerText = message;
    toast.classList.add('active');
    document.querySelector(".toast-progresbar").classList.add('active');
    
            return 1;
}



//to remove toast
document.querySelector(".toast-close").addEventListener('click', () => {
    toastClose();
});
