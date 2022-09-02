// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked!");
// });

document.querySelectorAll("button").forEach(item=>{
    item.addEventListener("click", function(){
        alert("I got clicked");
    })
})