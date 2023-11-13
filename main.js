import Data from "./config.js";

await Data.setEnvironment();

console.log(Data.entorno['TEST']);

