# Web Host

I use Express to simulate HTTP server behaviour locally.

## AWS CloudFront

My real deployment uses AWS CloudFront with the same behaviour as Express.\
This includes a `Response Header Policy` that sets security headers.\
It also includes an `Viewer Response CloudFront Function` based on [this article](https://lucvandonkersgoed.com/2021/12/26/cache-control-with-cloudfront-functions/).

```javascript
function handler(event) {
    
    const request = event.request;
    const response = event.response;
    const headers = response.headers;

    if (request.uri.match(/^.*(\.jpg|\.ico|\.js|\.css)$/)) {
        
        headers["cache-control"] = {
            value: "public, max-age=31536000, immutable",
        };

    } else {
        
        headers["cache-control"] = {
            value: "no-cache, must-revalidate",
        };
        
    }

    return response;
}
```
