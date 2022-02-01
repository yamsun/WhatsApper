var num = document.querySelector("#number");
var msg = document.querySelector("#msg");
var goToWABtn = document.querySelector("#go-to-wa");
var sayHi = document.querySelector("#say-hi");
var sendMsgBtn = document.querySelector("#send-msg");

goToWABtn.addEventListener("click", ()=>sendMessage(""));
sayHi.addEventListener("click", ()=>sendMessage("Hi 👋"));
sendMsgBtn.addEventListener("click", ()=>sendMessage(msg.value));

function sendMessage(myMsg){
    if(num.value.toString().length<10){
        alert("Number too small!");
        return;
    }
    console.log(`https://api.whatsapp.com/send/?phone=91${num.value}`);
    // window.location = `https://api.whatsapp.com/send/?phone=91${num.value}&text=${encodeURIComponent(myMsg)}`;
    window.open(`https://api.whatsapp.com/send/?phone=91${num.value}&text=${encodeURIComponent(myMsg)}`,'_blank')
}
