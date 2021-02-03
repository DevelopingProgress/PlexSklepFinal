import dotenv from 'dotenv';
import express from "express";
import  mongoose from "mongoose";
import {userRoute} from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";
import {productRoute} from "./routes/productRoute.js";
import {uploadRoute} from "./routes/uploadRouter.js";
import path from 'path';


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/plexsklep', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
});

app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
    const paypalId = process.env.PAYPAL_CLIENT || 'sb';
    res.send(paypalId);
});
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/sklep/build')));
app.get('*', (req, res) => res.sendFile(__dirname, '/sklep/build/index.html'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server started at http://localhost:${port}`)});
