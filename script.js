function countingDown(){
    let today = new Date();

    let day = today.getDate();
    if(day<10) day = '0' + day;
    let month = today.getMonth()+1;
    if(month<10) month = "0"+month;
    let year = today.getFullYear();
    
    let time = today.getHours();
    if(time<10) time = "0"+time;

    let minutes = today.getMinutes();
    if(minutes<10) minutes ="0" + minutes;

    let seconds = today.getSeconds();
    if(seconds<10) seconds = "0"+seconds;

   
    document.getElementById('left').innerHTML = time;
    document.getElementById('right').innerHTML = minutes;
    document.getElementById('bottom').innerHTML = year + '/' + day + ' /' + month;

    setTimeout('countingDown()',1000);

}


var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });


