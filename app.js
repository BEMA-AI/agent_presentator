const express = require('express');
const app = express();
const generatePresentationRoute = require('./routes/generatePresentation');

app.use(express.json()); // To parse JSON body
app.use('/generate-presentation', generatePresentationRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
