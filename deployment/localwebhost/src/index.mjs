import express from 'express';

const expressApp = express();
const port = 3001;

const physicalRoot = '../../dist';
expressApp.use('/', express.static(physicalRoot));

expressApp.get('*', (request, response) => {
    response.sendFile(`${request.path}.html`, {root: physicalRoot});
});

expressApp.listen(port, () => {
    console.log(`Web Host is listening on HTTP port ${port}`);
});
