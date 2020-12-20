// jshint esversion : 6
 const secondHand = document.querySelector('.second-hand'); // selecting second hand div using query selector
 const minuteHand = document.querySelector('.min-hand');
 const hrHand = document.querySelector('.hour-hand');
 function move(){
   const now = new Date();
   const sec = now.getSeconds();
   const secDeg = ((sec / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secDeg}deg)`;  // modifying style property to rotate


   const min = now.getMinutes();
   const minDeg = ((min / 60) * 360) + 90;
   minuteHand.style.transform = `rotate(${minDeg}deg)`;  // modifying style property to rotate

   const hr = now.getHours();
   const hrDeg = ((hr / 12) * 360) + 90;
   hrHand.style.transform = `rotate(${hrDeg}deg)`;  // modifying style property to rotate
 }

 setInterval(move,1000); // move function will be called every second.
