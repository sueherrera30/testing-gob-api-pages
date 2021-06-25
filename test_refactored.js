const fetch = require('node-fetch');
const fs = require('fs');
const { clear } = require('console');

const api = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

const handleData = async ()  => {
    try {
        const response = await fetch(api);
        const indictors = response.json();
        return indictors;
    } catch (error) {
         return error;
    }   
};

function countup(n) {
    if (n < 1) {
      return null;
    } else {
    handleData(countup(n - 1))
        .then((indicators) => {
            console.log('indicators', indicators) 
            fs.writeFile('indicators.json',indicators, function (err) {
                if (err) return console.log(err);
                console.log('indicators', indicators) 
            });  
        })
    }
}
countup(50);


