let startBtn = document.getElementById('startBtn'),
label = document.getElementById('label'),

counter = 0,
timer;
console.log(startBtn, label);


startBtn.addEventListener('click', () => {
    clearInterval(timer);
   timer = setInterval(() => {
       counter += 1;
       label.innerText = counter;
       
   }, 1000);
   setTimeout( function () {
        alert( "AlertWindow 15s" ); 
    }, 15000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
   timer = setInterval(() => {
       counter = 0;
       label.innerText = counter;

   });
});
pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
   timer = setInterval(() => {
       label.innerText = counter;
   });
});

