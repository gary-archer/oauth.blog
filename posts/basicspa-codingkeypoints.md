---
title: 'Basic SPA – Coding Key Points'
number: 50
---

Our initial SPA and API OAuth Messages write up explained the HTTP/S messages used by our code sample. Next we will focus on code needed for the SPA’s OAuth and API requests. See also the Client Side API Journey to understand the background and the requirements being met.

### SPA Code

The SPA uses the following types of static resource that are downloaded to the browser. In this blog we will keep HTML and CSS simple, so that our main code focus for SPAs is the JavaScript logic:

TABLE

The SPA uses only a handful of external dependencies, expressed in its package.json file. The most interesting of these is the oidc-client-ts library, which implements OpenID Connect in JavaScript.

CODE

Concerns are separated into a number of TypeScript classes, and in particular we keep plumbing separated from the application logic:

IMAGE

### SPA Views

Our SPA looks like this visually and consists of a number of subviews, arranged via rows and columns:

IMAGE

The Bootstrap Grid System is used to lay out elements at runtime, and the HTML we deploy is minimal:

CODE

As the user navigates between screens, a main element within the root element will be updated with a different view.

### SPA Entry Point

When our SPA’s index.html page loads, it creates a global instance of an application class defined in the App.ts file, and calls execute on it:

CODE

### Application Startup

The startup logic looks like this, and involves downloading the SPA’s configuration from the server, then initialising the oidc-client-ts library, as well as setting up a class to interact with the API:

CODE

### Security Library Configuration

Our SPA configuration contains the following values, to enable it to connect to the API and to perform OAuth login redirects:

CODE

The oidc-client-ts provides a UserManager class and the SPA’s Authenticator class wraps this, to simplify code in the rest of the app:

CODE

### Triggering Login Redirects

As part of the execute method, a Router class determines the initial view based on the SPA’s current URL and its hash fragments:

CODE

This results in the view executing and attempting to call an API in order to get its data:

CODE

The view calls an ApiClient class, which tries to get an access token from the Authenticator class so that it can make the API call requested:

CODE

On the first request there will be no access token:

CODE 

This causes the ApiClient class to run an OpenID Connect redirect. The in-flight API call is also terminated, with a login_required error. The SPA’s error handling code ignores this error code, which prevents any error details from being rendered.

The code to begin the redirect looks like this, and the SPA’s location before the redirect is saved to session storage. A more complex app might also save other page state:

CODE

The first code sample assumes that only a single API request is in-flight at a time. This blog’s final UI code samples will show a way to trigger login redirects when the frontend makes concurrent requests to APIs.

### Handling Login Responses

When the login is completed, the browser will return to the app with an Authorization Code, and will invoke the SPA’s index.html page again, which will restart the SPA.

The SPA must handle the login response as part of its application startup. This ensures that an access token can be retrieved and avoids repeating the process in a redirect loop.

If the SPA starts normally or as part of a page reload, handleLoginResponse is a no-op, but if it is an OpenID Connect response the current URL will have one of the following forms:

- https`:`//localhost/spa?code=xxx&state=789024578
- https`:`//localhost/spa?error=invalid_request&state=789024578

If the SPA calculates that the current location is an OpenID Connect response it asks the oidc-client-ts library to process the response to exchange the code for tokens. The SPA then performs these actions:

- Restores the location and state before the redirect
- Removes the OpenID Connect response from the browser history

CODE

This means the SPA supports Deep Linking, where the user can bookmark a page, then access it in a new browser session. After signing in, the user will return directly to the bookmarked location:

- http`:`//web.mycompany.com/spa/#company=2

### Rendering User Info

After login the SPA renders the logged in user’s name, and this information is stored in the UserManager class of the oidc-client-ts library, A user profile can be accessed with the following code:

CODE

The initial SPA uses the default behaviour of the oidc-client-ts library, and stores token and user information in HTML 5 Session Storage.

### API Calls with Access Tokens

The SPA can now successfully get an access token from the oidc-client-ts library and call the API with it. The axios library is used for HTTP calls, which has good support for reading HTTP error responses:

CODE

The API credential is a Bearer Token, and if an attacker can somehow get hold of one they can also send it to the API. A key OAuth security mitigation to protect against this is to keep access tokens short lived.

### Safe Input Handling

We use the technically simple Mustache Template Library to bind received data to the main element of our SPA. This ensures that we safely handle any potentially dangerous input received from the API or other sources.

CODE

In later posts we will update our SPA to use React, and this web framework will provide similar input protection.

### Navigation via Hash Change Events

The SPA performs navigation after user actions by simply setting a hash fragment value, such as #company=2. The application class subscribes to the window.onhashchange and asks the router to reload the main view.

Each navigation action triggers additional API requests, and eventually the access token stored in the SPA will expire. The SPA must be prepared for this type of expiry event in order to run reliably.

### Reliable API Calls

Any reliable OAuth client must implement the following behaviour:

- If an API call fails with a 401
- Then try to get a new access token, once only
- Then retry the API call, once only

The code is structured to enable this, though the first code sample does not yet implement token refresh:

CODE

The SPA does not try to anticipate API 401 responses based on expiry times, since there are multiple reasons why these could occur. The SPA also never reads the content of access tokens, since only APIs should do this.

### SPA Error Handling

The SPA uses a number of error codes that it can program against, and some error codes can be returned from the API or the Authorization Server:

CODE

The SPA’s ErrorHandler class translates errors into an object that contains error codes and other useful fields . This includes parsing the OAuth error and error_description fields from Cognito error responses:

CODE

The API does not return sensitive error details to the SPA, so the error data can be safely displayed. The final SPA will improve on this UX, by only showing detailed error information when a ‘Details‘ link is clicked:

IMAGE

OAuth introduces additional endpoints, messages and configuration settings into UI clients, so there is plenty of scope for problems when getting integrated. I recommend implementing solid error handling and simulating failures early, since doing so improves productivity.

### Where Are We?

We have explained how the initial SPA is coded, and the oidc-client-ts security library is doing the difficult security work. The SPA’s code will be extended in the second code sample, to complete its session management.

### Next Steps

- Next we will look at the sample’s API Coding Key Points
- For a list of all blog posts see the Index Page
