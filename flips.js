import{coinFlips} from './modules/coinFlips.mjs'
import minimist from "minimist";

var minFlipNum = 1;

if(process.argv.length > 2 ){
    let argv = minimist(process.argv.slice(2));
    number=argv["number"]
}

if(number > minFlipNum){
    flips = coinFlips(number);
}
else{
    flips = minFlipNum;
}

console.log(flips);
console.log(countFlips(flips));