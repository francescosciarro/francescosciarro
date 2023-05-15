/**
 * 
 * @param {number} input 
 * @param {function} genoveffa 
 */
 function primaOperazione(input, genoveffa) {
    // setTimeout è solo un'esempio
    setTimeout(() => {
      if ((input % 5) !== 0) {
        console.log('errore 5 con ' + input)
        genoveffa('Errore mio errore 5', undefined);
      } else {
        const res = input / 5;
        console.log('chiamo callback 5 con res ' + res)
        genoveffa(undefined, res)
      }
    }, 0);
  }
  
  function secondaOperazione(input, genoveffa) {
    // setTimeout è solo un'esempio
    setTimeout(() => {
      if ((input % 3) !== 0) {
        console.log('errore 3 con ' + input)
        genoveffa('Errore mio errore 3', undefined);
      } else {
        const res = input / 3;
        console.log('chiamo callback 3 con res ' + res)
        genoveffa(undefined, res)
      }
    }, 0);
  }
  
 /* const genoveffa2 = function (err2, output2) {
    if (err2) {
      console.log('errore 2: ' + err2);
    } else {
      console.log('finito ' + output2);
    }
  }
  
  const genoveffa1 = function (err1, output1) {
    if (err1) {
      console.log('errore: ' + err1);
    } else {
      secondaOperazione(output1, genoveffa2)
    }
  
  }
  
*/

  const primapromise= function (input){
    const promessa = new Promise(
        (resolve, reject) =>{
            primaOperazione(input, (errore, risultato) => {
                if (errore){
                    reject(errore);
                } else {
                    resolve(risultato);
                }
            })
        }
    )
    return promessa;
  }

  const secondapromise= function (input){
    const promessa = new Promise(
        (resolve, reject) =>{
            secondaOperazione(input, (errore, risultato) => {
                if (errore){
                    reject(errore);
                } else {
                    resolve(risultato);
                }
            })
        }
    )
    return promessa;
  }
  
  
  primapromise(15)
    .then(
        (output1) => {
            return secondapromise(output1);
        }
    )
    .then( 
        (output2) => {
            console.log("Finito")
        }
    ).catch(
        (errore) => {
            console.log("Errore", errore)
        }
    )