# Web Host

I use Express to simulate HTTP server behavior locally.

## AWS Cloudfront

My real deployment uses AWS Cloudfront with the same behavior as Express.\
This includes a `Response Header Policy` that sets security headers.\
It also includes an `Viewer Response Cloudfront Function` based on [this article](https://lucvandonkersgoed.com/2021/12/26/cache-control-with-cloudfront-functions/).

```javascript
function handler(event) {
    
    var request = event.request;
    var response = event.response;
    var headers = response.headers;

    if (request.uri.match(/^.*(\.jpg|\.ico|\.js|\.css)$/)) {
        
        headers["cache-control"] = {
            value: "public, max-age=31536000, immutable",
        };

    }

    return response;
}
```
