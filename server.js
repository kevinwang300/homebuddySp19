// This is the file for the backend services
const express = require('express');
const favicon = require('express-favicon');
const firebase = require("firebase");
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// Initialize Firebase
// edit this b/c we need a new firebase
const config = {
    apiKey: "AIzaSyBtYCRExBERnTmIOWOA5MLhko93oi_7I88",
    authDomain: "emailtest-c5931.firebaseapp.com",
    databaseURL: "https://emailtest-c5931.firebaseio.com",
    projectId: "emailtest-c5931",
    storageBucket: "emailtest-c5931.appspot.com",
    messagingSenderId: "775804973647"
};
firebase.initializeApp(config);

const database = firebase.database();

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    console.log('ping?');
    return res.send('pong');
});
app.post('/post', function (req, res) {
    database.ref('testUser').set({
        username: 'testname',
        email: 'test@test.com',
        profile_picture : 'google.com'
    }, function (error) {
        if (error) {
            return res.send('post failed! Error is:' + error);
        } else {
            return res.send('post succeeded');
        }
    });
    // return res.send('post request');
});
app.get('/test', function (req, res) {
    return res.send({'test': 'test message here!'});
});
app.get('/', function (req, res) {
    console.log('GET root');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);