const fullName = document.getElementById('fullName');
const email_id = document.getElementById('email_id');
const message = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

function displayTime(){
    var dateTime = new Date()
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

// check kolom terisi
function SendMail(){
    if(
        document.getElementById('fullName').value != ''&&
        document.getElementById('email_id').value != ''&&
        document.getElementById('message').value != ''
    ){
        // check email
        if (email_id.value.includes('@')){
            var params = {
            from_name : document.getElementById("fullName").value, 
            email_id : document.getElementById("email_id").value, 
            message : document.getElementById("message").value 
            }
            emailjs.send("service_eqmlq79", "template_ik1wyxc", params).then(function (res) {
                alert("Your Message has sent successfully!, We will contact you soon!");
            })
        } else {
            alert('please fill in a valid email address!')
        }

    }else{
        alert('please fill out this field')
    }
    
    clear()
    sendButton.classList.add('d-none');

}

sendButton.classList.add('d-none');

function hideSubmit(){
    if(
        fullName.value != '' &&
        email_id.value != '' &&
        message.value != '' 
    ) {
        sendButton.classList.remove('d-none')
    }
}

function clear(){
document.getElementById('fullName').value = '';
document.getElementById('email_id').value = '';
document.getElementById('message').value = '';
}