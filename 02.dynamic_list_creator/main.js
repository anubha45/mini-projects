const btn = document.getElementById("addBtn");
const input = document.getElementById("itemInput");
const listitem = document.getElementById("list");
btn.addEventListener("click",()=>{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.textContent = 'delete';
    delBtn.classList.add("delete");

    li.textContent = input.value;

    delBtn.addEventListener("click",()=>{
        li.remove();
    })
    li.appendChild(delBtn);
    listitem.appendChild(li);
    input.value="";
   
    
  
})