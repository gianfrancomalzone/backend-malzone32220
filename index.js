const divisionesPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {reject('Division: No se puede resolver')} 
        else{resolve(a / b)}})
}
async function divicionesAsync(i, x) {
    try {
        const response = await divisionesPromesas(i, x)
        console.log("diviciones asincronas", response)}
        catch (error) {console.log(error)}
} divicionesAsync(3, 4) ; divicionesAsync(3, 0)

async function sumarPromesas(i, x) {
    return new Promise((resolve, reject) => {
        if (i === 0 || x === 0) {reject('sumar: Operacion/es innecesaria/s')}
        else{resolve(i + x)}})
} operacionesSync(3, 4, sumarPromesas) ; operacionesSync(3, 0, sumarPromesas)

async function restasPromesas(i, x) {
    return new Promise((resolve, reject) => {
        if (i === 0 || x === 0) {reject('Operacion/es innecesaria/s: restas')} 
        else if (i - x < 0) {reject('Son necesarios valores positivos: restas')} 
        else {resolve(i - x)}})
} operacionesSync(3, 4, restasPromesas) ; operacionesSync(3, 4, restasPromesas) ; operacionesSync(3, 0, restasPromesas)

async function multiplicacionPromesas(i, x) {
    return new Promise((resolve, reject) => {
        if (i < 0 || x < 0) {reject('Son necesarios valores positivos: multiplicacion')} 
        else {resolve(i * x)}})
}   operacionesSync(4, 4, multiplicacionPromesas) ; operacionesSync(3, -4, multiplicacionPromesas)
    operacionesSync(-1, 4, multiplicacionPromesas) ; operacionesSync(-1, -2, multiplicacionPromesas)

async function operacionesSync(i, x, callback) {
    try {
        const response = await callback(i, x)
        console.log(response)
    } catch (error) {console.log(error)}
}