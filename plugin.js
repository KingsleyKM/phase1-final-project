const feild = document.querySelector('textarea');
 const backUp = feild.getAttribute('placeholder');
 const btn = document.querySelector('.btn');
 const clear = document.getElementById('clear')
 
 feild.onfocus = function(){
     this.setAttribute('placeholder', '');
     this.style.borderColor = '#333';
     btn.style.display = 'block'
 }
 
 feild.onblur = function(){
     this.setAttribute('placeholder',backUp);
     this.style.borderColor = '#aaa'
 }
 
 
          function myFunction(){
           let name = document.getElementById("userName").value
           let comment = document.getElementById("userComment").value
 
           if(!name || !comment){
             alert("please fill all the box")
             return
           }
          data = "<br/><u>Your Submitted Data:</u><br/><br/>User Name : "+name+"<br/>Comment: "+comment
          
          document.getElementById("data").innerHTML = data 
          }
   
  //clear input data when click submit     
 let btnClear =document.querySelector('input');
 let inputs=document.querySelectorAll('textarea');
 
 btnClear.addEventListener('click',()=> {
     inputs.forEach(textarea =>textarea.value='');
     })