const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET'],
}));

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get("/api/courses/:courseID", (req, res) => {
    const id = req.params.courseID;
    client.connect(err => {
        if (err) res.status(500).json({ message: `An internal error occured: ${err}` });

        client.db("simply-degree").collection("courses").findOne({ 'course_id': id })
            .then(data => {
                if (!data) return res.status(404).json({ message: `Course ID ${id} was not found.` });
                return res.status(200).json(data);
            })
            .catch(err => {
                return res.status(500).json({ message: `An internal error occured: ${err}` });
            })
            .then(() => {
                client.close();
            });
    });
});

module.exports = app;
