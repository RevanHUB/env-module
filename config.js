import env from "./modules/envreader.js";

export default class Data {
    static environment;
    static entorno = [];
    
    static setEnvironment = async () => {
        await env().then((res) => {
            Data.environment = res;
            let entorno = res.split("=");
            entorno.reduce((acc, curr) => this.entorno[acc] = curr);
        })
    }

}

