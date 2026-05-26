
export const getFavIcon= (url)=> {
    try{
        const domain= new URL(url).hostname;
        return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
    } catch {
        return `https://www.google.com/s2/favicons?sz=64domain=github.com`;
    }
}