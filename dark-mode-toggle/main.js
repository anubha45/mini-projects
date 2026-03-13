const btn = document.getElementById("toggleButton");
const headline = document.getElementById("headline");

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(headline.innerText==='LIGHT MODE') {
        headline.innerText= 'DARK MODE';
        btn.innerText = 'LIGHT MODE';
    }
    else {
        headline.innerText= 'LIGHT MODE';
        btn.innerText = 'DARK MODE';
    }
})