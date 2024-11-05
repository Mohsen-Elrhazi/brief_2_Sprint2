const tabs = document.querySelectorAll('.tab');
const radios = document.querySelectorAll('input[name="step"]');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        tabs.forEach((tab, tabIndex) => {
            if (tabIndex === index) {
                tab.style.zIndex = '10';
            } else {
                tab.style.zIndex = '1';
            }
        });
    });
});


let username=document.getElementById('username').value
let email=document.getElementById('email').value
let btnReserver=document.getElementById('btnReserver')

// btnReserver.addEventListener("click",function(){
//     alert(username)

// })

function next(){
    alert(username)

}