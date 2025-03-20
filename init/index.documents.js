require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const intDocumentsData = require("./documents.data.js");
const Document = require("../src/models/document.model.js");
const app = require("../src/app.js");
const db_connect = require("../src/db/index.js");


const PORT = process.env.PORT || 8000;

db_connect()
    .then(
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    )
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });


const initDocumentsDB = async () => {
    try {
        await Document.deleteMany({});
        console.log("Documents collection deleted successfully");
        await Document.insertMany(intDocumentsData.data);
        console.log("Documents data inserted successfully");
        process.exit(0);
    } catch (err) {
        console.error("Error initializing Documents database", err);
        process.exit(1);
    }
}

initDocumentsDB();