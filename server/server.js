const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(3000, () =>
	console.log(`
    Server be Runnin' on port 3000!
`)
);
