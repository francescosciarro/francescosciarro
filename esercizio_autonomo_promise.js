
const sommaNumeri1= function (input1, input2, pippo) {
    setTimeout(() => {
    if (input1<0 || input2<0) {
        console.log("Somma possibile solo con numeri positivi")
        pippo("Errore1", undefined)
    }else{
        const somma=input1+input2;
        console.log("Prima somma: "+ somma)
        pippo(undefined, somma);
    }
    }, 0)
}

const sommaNumeri2= function (input, pippo) {
    setTimeout(() => {
        if (input<10) {
            console.log("Somma impossibile(somma precedente minore di 10).")
            pippo("Errore2", undefined)
        }else{
         const somma= input+10;
         console.log("Seconda somma: "+somma)
         pippo(undefined, somma)   
        }
    }, 0)
}

const promessa1= function (input1, input2) {
    const p= new Promise(
        (resolve, reject) => {
            sommaNumeri1(input1, input2, (errore, risultato) => {
                if (errore){
                    reject(errore)
                } else {
                    resolve(risultato)
                }
            })
        }
    )
    return p;
}

const promessa2= function (input) {
    const p= new Promise(
        (resolve, reject) => {
            sommaNumeri2(input, (errore, risultato) => {
                if (errore){
                    reject(errore)
                } else {
                    resolve(risultato)
                }
            })
        }
    )
    return p;
}

/*promessa1(2, 6)
    .then( 
        (output1) => {
        return promessa2(output1)
        }
    ).catch(
        (e) => {
            console.log(e)
        }
    )*/

async function asincronia(){
    const output1 = await promessa1(30, 60)
    const output2 = await promessa2(output1)
    return output2
}

asincronia()
