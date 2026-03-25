let button = document.querySelector("#btn");
let log = document.querySelector("#log");

let input = document.querySelector("#input");


input.addEventListener('keydown', (e)=>{log.textContent=e.code + e.key});