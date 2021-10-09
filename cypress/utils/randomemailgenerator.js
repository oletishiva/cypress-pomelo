export function generateRandomEmail() {
    var today = new Date();
    var time = today.getFullYear() + "" + today.getHours() + "" + today.getMinutes() + "" + today.getSeconds() + "" + today.getMilliseconds();
    return "shiva.oleti+"+time+"@pomeloo.com";
}