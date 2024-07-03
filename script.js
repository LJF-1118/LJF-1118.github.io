let btn = document.getElementById('test');

btn.addEventListener('click',()=>{
    alert("點到我了");
    btn.style.color="red";
    btn.disabled=true;
});