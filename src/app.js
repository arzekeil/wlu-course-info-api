const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.Router());
app.use(cors({
    origin: '*',
    methods: ['GET'],
}));

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.raicx.mongodb.net/?retryWrites=true&w=majority`;

let courseCol;
let eventCol;
let taskCol; 

MongoClient.connect(uri, (err, client) => {
    if (err) throw err;

    const db = client.db("simply-degree");
    courseCol = db.collection("courses");
    eventCol = db.collection("events");
    taskCol = db.collection("tasks");

});

app.get("/api/courses/:courseID", (req, res) => {
    const id = req.params.courseID;
    courseCol.findOne({ 'course_id': id })
        .then(data => {
            if (!data) return res.status(404).json({ message: `Course ID ${id} was not found.` });
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json({ message: `An internal error occured: ${err}` });
        });
});

module.exports = app;