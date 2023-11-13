import env from "./modules/envreader.js";

export default class Data {
    static environment;
    static entorno = [];
    
    static setEnvironment = async () => {
        await env().then((res) => {
            Data.environment = res;

            let variables = res.split(";");

            variables.forEach(line => {
                let entorno = line.split("=");
                // console.log(entorno);
                entorno.reduce((acc, curr) => this.entorno[acc] = curr);
            });
            
            
            
        })
    }

}

