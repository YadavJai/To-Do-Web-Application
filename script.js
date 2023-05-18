
let input=document.querySelector(".input input");
let inputbutt=document.querySelector(".input button");
let container=document.querySelector(".container");
let arr=[];
let count=0;
let curr=0;
let footer=document.querySelector(".footer p");
let remove=document.querySelector(".footer button");

  //adding the task 
inputbutt.addEventListener("click",()=>{
if(count<10&&input.value!=""&&!arr.includes(input.value))
{
let div=document.createElement('div');
div.innerHTML=`
      <div>
        <input id="check" type="checkbox">
        <input id="title" type="text" value="${input.value}" readonly>
      </div>
      <div>
        <i id="pencil" class="fa fa-pencil"></i>
        <i id="cross" class="fa fa-times"></i>
      </div>
    `
div.classList.add('part');

//event listener for deleting the part element from container  
div.querySelector("#cross").addEventListener("click",(event)=>{
  count--;
  let store=event.target.parentElement.parentElement;
  if(store.querySelector("#check").checked==true)curr--;
  document.querySelector("#curr").innerText=curr;
  let per=(curr/count)*100;
  footer.style.background=`linear-gradient(to right, #c75c6c ${per}%, transparent 0%)`;
  document.querySelector("#total").innerText=count;
  console.log(store);
  container.removeChild(store);
});
//done
div.querySelector("#pencil").addEventListener("click",(event)=>{
  let store=event.target.parentElement.parentElement;
  console.log(store);
  store.querySelector("#title").removeAttribute("readonly");
});
//done
div.querySelector("#check").addEventListener("click",()=>{
if(event.target.checked==true){
  curr++;
  document.querySelector("#curr").innerText=curr;
  let per=(curr/count)*100;
  footer.style.background=`linear-gradient(to right, #c75c6c ${per}%, transparent 0%)`;
}
else{
  curr--;
  document.querySelector("#curr").innerText=curr;
  let per=(curr/count)*100;
  footer.style.background=`linear-gradient(to right, #c75c6c ${per}%, transparent 0%)`;
}
});

  count++;
  document.querySelector("#total").innerText=count;
  container.appendChild(div);
  arr.push(input.value);
  let per=(curr/count)*100;
  footer.style.background=`linear-gradient(to right, #c75c6c ${per}%, transparent 0%)`;
}
  
else if(input.value==""){
  alert("Please Give Some Input");
}
else if(count==10){
  alert("Only 10 Tasks Can Be Added");
}
else if(arr.includes(input.value)){
  alert("Task Already Added");
}
});


remove.addEventListener("click",()=>{
let partarr=document.querySelectorAll(".part");
partarr.forEach((element)=>{
if(element.querySelector("#check").checked==true){
curr--;
count--;
container.removeChild(element);
}
})
document.querySelector("#total").innerText=count;
document.querySelector("#curr").innerText=curr;
let per=(curr/count)*100;
footer.style.background=`linear-gradient(to right, #c75c6c ${per}%, transparent 0%)`;
})


