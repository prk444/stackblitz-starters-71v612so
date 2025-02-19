const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");
const {User} = require('./schema');
const UserModel =require ('./schema').User;
const ProfileModel = require('./schema').Profile;
const TrackingModel = require('./schema').Tracking;
const app = express();
const port = 3010;
const mongoDB ='mongodb+srv://poluriraghavas81:gflir33yGuUFolT2@cluster0.30lgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
  console.error(err);
});

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/test-create-user', async (req, res) => {
  try {
    const newUser = new UserModel({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
      roles: ['user']
    });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
