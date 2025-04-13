/* Get travel view */
//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

//**API TEST  */
const tripsEndpoint = 'http://localhost:3000/api/trips'; // API endpoint
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};


// **GET travel view
const travel =  async function(req, res, next) {
    //console.log('Travel controller start');
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];     
            } else {
                if (!json.length) {
                    message = 'No trips exist in our database';
                }
            }
            res.render('travel', {title: 'Travlr Getaways', trips: json});
            
        })  
        .catch( err => res.status(500).send(e.message));
        //console.log('Travel controller after render');
   
};

module.exports = {
    travel
}