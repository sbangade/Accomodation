import express from 'express';
import routes from './src/routes/accRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 1015;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://kalironRegister:infotech@cluster0.bo8z8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



//mongoose.connect('mongodb+srv://shubham:1234@cluster0.mqt4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//.then(() => app.listen(POT, () => console.log(`Server is running on port: ${POT}`)))
//.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

// serving static files
// app.use(express.static('Images'));

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);


app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);