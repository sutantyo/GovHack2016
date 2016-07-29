import express from 'express';
let app = express();
let port_number  = 3000;

app.use(express.static('public'));

app.listen(port_number,'0.0.0.0');
console.log("Listening on port " + port_number);

