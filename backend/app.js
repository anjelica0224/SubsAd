require("dotenv").config();
import userRoutes from "./routes/userRoutes.js";
const {clerkMiddleware, requireAuth, clerkClient} = require('@clerk/express')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(clerkMiddleware())

app.use("/users", userRoutes); // Base route for user APIs

// app.get('/', async(req, res) => {
//   res.send(await getAds());
// });
// app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), async (req, res) => {
//   const { userId } = req.auth
//   const user = await clerkClient.users.getUser(userId)
//   return res.json({ user })
// })
// app.get('/sign-in', (req, res) => {
//   // Assuming you have a template engine installed and are using a Clerk JavaScript SDK on this page
//   res.render('sign-in')
// })
// app.post('/', async(req,res) => {
//   const newAd = req.body;
//   await insertAd(newAd);
//   res.send({ message : 'new ad inserted.' })
// })
// app.delete('/', async(req,res) => {
//   await deleteAd(req.params.id);
//   res.send({ message : 'Ad removed.' })
// })
// app.put('/:id', async (req, res) => {
//   const updatedAd = req.body;
//   await updateAd(req.params.id, updatedAd);
//   res.send({ message: 'Ad updated.' });
// });

// startDatabase().then(async () => {
//   await insertAd({title: 'Hellow, from the in-memory database'});

app.listen(5001, async () => {
    console.log('listening on port 5001')
});
// });