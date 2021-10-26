let show = document.getElementById('input');
let button = document.querySelectorAll('button');

let screenvalur=" ";
for (const btn of button) {
   btn.addEventListener('click',(e)=>{
       buttonText = e.target.innerText;
       console.log("btn text is: ",buttonText)
       if(buttonText=="CE"){
           screenvalur="";
           show.value=screenvalur;
       }else if(buttonText=="="){
           show.value=eval(screenvalur);
       }else if(buttonText=="X"){
          buttonText="*";
          screenvalur+=buttonText;
           show.value=(screenvalur);
       }
       
       else{
           screenvalur+=buttonText;;
           show.value=screenvalur;
       }
   }) 
}