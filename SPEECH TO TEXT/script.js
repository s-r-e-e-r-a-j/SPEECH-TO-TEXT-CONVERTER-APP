
const textarea=document.querySelector("#textarea");

const recordbtn=document.querySelector("#recordbtn");

const atag=document.querySelector("#atag");

const clearbtn=document.querySelector("#clearbtn");

var result="";


recordbtn.addEventListener("click",()=>{


window.speechRecognition=window.speechRecognition||window.webkitSpeechRecognition


recognition=new window.speechRecognition()


recognition.interimResults=true



recognition.addEventListener("result",e=>{


  Array.from(e.results,outputs=>{

  
  result=outputs[0].transcript;

  textarea.innerText=result;


  })

})


recognition.addEventListener("end",()=>{

        recognition.start()

})

  recognition.start()

})




atag.addEventListener("click",()=>{

let blob=new Blob([result],{type:"text/plain"});

let url=URL.createObjectURL(blob);

atag.href=url;

atag.download="SpeekedText"


})



clearbtn.addEventListener("click",()=>{

textarea.innerText="";
result="";


})

