import express from 'express';

const expressApp = express();
const port = 3001;

expressApp.use('/', express.static('../../dist'));
expressApp.listen(port, () => {
    console.log(`Web Host is listening on HTTP port ${port}`);
});
