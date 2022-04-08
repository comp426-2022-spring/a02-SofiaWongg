import{coinFlip, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = minimist(process.argv.slice(2))
args['call']
const guess = args.call
if(guess == null){
    console.error("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
else if(!(guess === 'heads' || guess === 'tails')){
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
else{
    console.log(flipACoin(guess))
}