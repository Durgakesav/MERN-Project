
const nameSchema = require('./model')
const controller = require('./contoller')
console.log('Running nodemon successfully');

let express = require('express');
const router = express.Router()
const mongoose = require('mongoose');



const app = express();

const cors = require('cors')

app.use(cors({
    origin:'*'
}))

app.use(express.json());

app.get('/api/allnames',controller.read);

//create
app.post('/api/addnames',controller.create);

//delete

app.delete('/api/delete/:name',controller.deleted)



app.put('/api/updatework/:name',controller.update)





app.listen(5000, () => {
    console.log('Server running on port 5000 successfully');
});

