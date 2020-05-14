function greeting() {
    var responce;
    var message = " and welcome to my website."
    var hours = new Date().getHours();
    if (hours < 10) {
        responce = "Good morning" + message;
    } else if (hours < 20) {
        responce = "Good day" + message;
    } else {
        responce = "Good evening" + message;
    }
    document.getElementById("greeting").innerHTML = responce;
}