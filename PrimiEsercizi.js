var a= 2;
let b= "striga";
const c= true; /*costante, non può essere cambiata se ha valori scalari(interi, string, boolean )*/
let data= Date;
const nonDefinito= undefined;
var oggetto= Object;
let nullo= null;

console.log(
    typeof a,
    typeof b,
    typeof c,
    typeof data,
    typeof nonDefinito,
    typeof oggetto,
    typeof nullo,
)

const carrello={
    prodotti:[
        {
        id: "1",
        descrizione:"Zelda",
        prezzo: 69.00 , 
        qty: 1
        },
        {
            id:"2",
            descrizione: "Nintendo Switch OLED",
            prezzo: 400.00 ,
            qty: 1
        },
        {
            id: "3",
            descrizione: "Joycon",
            prezzo:50.00 ,
            qty: 6
        }
    ],

    getTotale(){
        let totale= 0;
        for (let i=0; i<this.prodotti.length; i++){
            totale+= this.prodotti[i].prezzo*this.prodotti[i].qty
        }
        return totale;
    }
    
}

console.log("totale "+carrello.getTotale())