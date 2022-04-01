import { countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

let argv = minimist(process.argv.slice(2));
var predict = argv["call"];
if(predict == undefined || (predict!="heads" && predict!="tails")){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
else{
    var flipResult = coinFlip();
    var result;

    if(predict == flipResult){
        result="win"
    }
    else{
        result="lose"
    }
    let output={call: predict, flip: flipResult, result: result}
    console.log(output);
}
