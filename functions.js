import { data } from "./index.js";


export function foo(){
    setTimeout(log("bingo"), 5000)
}

function log(a){
    alert(`${a}`);
}