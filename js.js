var start = document.getElementById("start");
var stopTimeX = document.getElementById("stop");
var timerHour = document.getElementById("timerHour");
var timerMin = document.getElementById("timerMin");

var t = 0;

var isStopped = false;
var alarm = new Audio('alarm.wav');

//input

timerHour.addEventListener('input', function() {
    if (parseInt(this.value) > parseInt(this.max)) {
      this.value = this.max;
    } else if (parseInt(this.value) < parseInt(this.min)) {
      this.value = this.min;
    }
  });
  timerMin.addEventListener('input', function() {
    if (parseInt(this.value) > parseInt(this.max)) {
      this.value = this.max;
    } else if (parseInt(this.value) < parseInt(this.min)) {
      this.value = this.min;
    }
  });


  timerHour.addEventListener('blur', function() {
    if (this.value==""){
        this.value = 0;
       }
  });
  timerMin.addEventListener('blur', function() {
    if (this.value==""){
        this.value = 0;
       }
  });
  



start.addEventListener('click', function() {
    startT();
    timerHour.value = 0;
    timerMin.value = 0;
});

stopTimeX.addEventListener('click', function() {
    stopTimer();
});



function startT() {
    var x = document.getElementById("inputGrid");
    hr = timerHour.value;
    min = timerMin.value;



    window.t = hr*3600 + min*60;
    window.per = window.t;
    //document.getElementById("demo").innerHTML = hr*3600 + min*60;
    timer();
}
function timer(){
    var temp = window.t;
    window.t = window.t-1;
    var h = Math.floor(temp/3600);
    var m = Math.floor((temp%3600)/60);
    var s = Math.floor((temp - h*3600 - m*60));
    m = checkTime(m);
    s = checkTime(s);




    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;


    //document.getElementById("progress-bar").style.width = (temp*100)/(window.per) + "%";

    var t = setTimeout(timer,1000);

    /*if(temp<900){
        document.getElementById("progress-bar").style.backgroundColor = "red";
        document.getElementById("progress").style.borderColor = "red";
    }*/
    if (temp <= 0 || isStopped) {
        clearInterval(t);
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        alarm.play();
        
    }
}
function checkTime(i){
    if (i<10) { i = "0" + i }
    return i;
}
function stopTimer(){
    isStopped = true;
}