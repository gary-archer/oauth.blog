import compression from 'compression';
import express from 'express';

// Create the express app
const expressApp = express();
expressApp.use(compression())

const port = 3001;
const physicalRoot = '../dist';

expressApp.use('/*', (request, response, next) => {

    // Add security headers
    let policy = "default-src 'none';";
    policy += " script-src 'self' 'unsafe-eval';";
    policy += " connect-src 'self';";
    policy += " child-src 'self';";
    policy += " img-src 'self';";
    policy += " style-src 'self';";
    policy += " object-src 'none';";
    policy += " frame-ancestors 'none';";
    policy += " base-uri 'self';";
    policy += " form-action 'self'";

    response.setHeader('content-security-policy', policy);
    response.setHeader('strict-transport-security', 'max-age=31536000; includeSubdomains; preload');
    response.setHeader('x-frame-options', 'DENY');
    response.setHeader('x-xss-protection', '1; mode=block');
    response.setHeader('x-content-type-options', 'nosniff');
    response.setHeader('referrer-policy', 'same-origin');

    // Add performance headers
    const fullUrl = `${request.protocol}://${request.hostname}${request.originalUrl.toLowerCase()}`;
    const path = new URL(fullUrl).pathname;
    const extensions = [
        '.jpg',
        '.ico',
        '.js',
        '.css',
    ];

    const cacheableExtension = extensions.find((ext) => {
        return path.endsWith(`${ext}`);
    });

    if (cacheableExtension) {
        response.setHeader('cache-control', 'public, max-age=31536000, immutable');
    } else {
        response.setHeader('cache-control', 'no-cache, must-revalidate');
    }

    next();
});

// Serve static content
expressApp.use('/', express.static(physicalRoot));

// Handle not found routes
expressApp.get('*', (request, response) => {
    response.sendFile(`${request.path}.html`, {root: physicalRoot});
});

// Start listening
expressApp.listen(port, () => {
    console.log(`Web Host is listening on HTTP port ${port}`);
});
