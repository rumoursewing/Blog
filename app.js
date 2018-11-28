var timeForPost = document.getElementById('postTime');

//UTC
//var today = new Date();
//console.log(today())
var today2 = Date.now();
//console.log(today2)

function setTime() {
    // today
    var today = new Date()

    // gather the info we need
    var day = today.getDate()
    var month = today.getMonth() + 1 
    var year = today.getFullYear()

    // 11-28-2018
    var date = month + '-' + day + '-' + year


    
    timeForPost.innerHTML = date
}

setTime()