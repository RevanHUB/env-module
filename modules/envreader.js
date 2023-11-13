const PATHTOENV = "./_env";
export const env = async () => {
    return await fetch(PATHTOENV).then((res) => res.text())
}

export default env;