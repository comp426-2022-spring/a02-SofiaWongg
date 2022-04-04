import{countFlips, coinFlips} from './modules/coinFlips.mjs'
import minimist from "minimist";
import {createRequire} from 'module';

var require = createRequire(import.meta.url);
let argv = minimist(process.argv.slice(2));
let number = argv.number;
var flips;

if(number != null){
    flips = coinFlips(number);
}
else {
    flips = coinFlips(1);
    
    // console.log(countFlips(flips));
}
console.log(flips);
console.log(countFlips(flips));
