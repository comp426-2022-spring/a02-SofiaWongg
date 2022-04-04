import { countFlip, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
var predict = argv["call"];
if(predict == null){
    console.error("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}

else if(guess != 'heads' || guess != 'tails'){
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
else{
    console.log(flipACoin(guess))
}

