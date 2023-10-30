
// Dynamic dyping code
var typed= new Typed("#textChangingEle", {
   strings:['WEV DEVELOPER','QUICK LEARNER','CODER'],
   typeSpeed:40,
   backSpeed:40,
   loop:true
});


// circular progress bar code

// 1-C
let outerCircle=document.querySelector('#outerCircle');
let percentValue=document.querySelector('#percentValue');
let startValue=0;
const finalValue=70;
const Progress=setInterval(() => {
   startValue++;
   if(finalValue==startValue){
      clearInterval(Progress);
   }
   outerCircle.style.background=`conic-gradient(#ffa500 ${startValue*3.6}deg,#ffffff 0deg)`
   percentValue.innerHTML=startValue+'%';
},10);

// C++
let outerCircle2=document.querySelector('#outerCircle2');
let percentValue2=document.querySelector('#percentValue2');
let startValue2=0;
const finalValue2=85;
const Progress2=setInterval(() => {
   startValue2++;
   if(finalValue2==startValue2){
      clearInterval(Progress2)
   }
   outerCircle2.style.background=`conic-gradient(#ffa500 ${startValue2*3.6}deg,#ffffff 0deg)`
   percentValue2.innerHTML=startValue2+'%';
},10);

// JS
let outerCircle3=document.querySelector('#outerCircle3');
let percentValue3=document.querySelector('#percentValue3');
let startValue3=0;
const finalValue3=60;
const Progress3=setInterval(() => {
   startValue3++;
   if(finalValue3==startValue3){
      clearInterval(Progress3)
   }
   outerCircle3.style.background=`conic-gradient(#ffa500 ${startValue3*3.6}deg,#ffffff 0deg)`
   percentValue3.innerHTML=startValue2+'%';
},10);

// React JS
let outerCircle4=document.querySelector('#outerCircle4');
let percentValue4=document.querySelector('#percentValue4');
let startValue4=0;
const finalValue4=40;
const Progress4=setInterval(() => {
   startValue4++;
   if(finalValue4==startValue4){
      clearInterval(Progress4)
   }
   outerCircle4.style.background=`conic-gradient(#ffa500 ${startValue4*3.6}deg,#ffffff 0deg)`
   percentValue4.innerHTML=startValue2+'%';
},10);

// rotate hero profile image

// const heroRight=document.querySelector('#heroRight');
// const heroProfileContainer=document.querySelector('#heroProfileContainer');

// heroRight.addEventListener('mousemove',(e)=>{
//   // console.log(e.clientX,e.clientY)
// //   heroProfileContainer.style.top=e.clientX+"px";
//   heroProfileContainer.style.translate=e.clientY+"px";
// })
