---
title: 'Basic SPA – Overview'
number: 20
---

In the [Web Architecture Goals](/posts/web-architecture-goals) post we explained that our first code sample's objective would be to get an Integrated Setup running on a developer PC, so that access tokens are sent between a UI, API and Authorization Server.

### Features

The behaviour provided in our initial sample is summarised below:

| Feature | Description |
| ------- | ----------- |
| Authorization Server | Developers can connect to a Cloud Authorization Server from code running on their PC |
| SPA Security | Our SPA uses Authorization Code Flow (PKCE) for logins and uses Access Tokens to call the API |
| API Security | The Web API validates JWT access tokens, then works with claims to implement authorization |
| Reliable | Both the SPA and API handle expiry and other failure conditions in a solid manner |
| Real World URLs | The SPA makes cross domain calls to the API on the local PC, and OAuth messages are viewable |

### Components

The Basic SPA Code Sample will get the below components and endpoints talking to each other, using OAuth based security:

![Components](/images/20/components.jpg)

### SPAs in 2021

This sample uses the traditional SPA solution, with OpenID Connect implemented solely in Javascript. This is no longer recommended, and your production apps should instead use a Back End for Front End approach.

The traditional SPA flow remains useful for representing a pure SPA architecture, and learning about OAuth endpoints and messages. This blog's Final SPA provides a BFF based solution, but requires a more complex flow.

### Code Download

The code for our SPA and API can be downloaded from here, and we will cover full details of how to run it, and the interactions involved, in the next post:

![Repo](/images/20/repo.jpg)

### Security Libraries

In our SPA and API we will use the following respected open source libraries, which are referenced on the OpenID Connect Libraries website:

| Component | Library | Features |
| --------- | ------- | -------- |
| SPA | oidc-client-ts | Implements OpenID Connect lifecycle events for a browser based client, including logins, logouts and token renewal |
| API | jose | Validates JWT access tokens, returns claims and manages looking up and caching of token signing public keys |

### Programming Languages

This blog will use multiple technologies, and they will all be modern and cross platform. I will start with these JavaScript based stacks, and will use TypeScript for its extra language features and type checking benefits:

| Component | Language | Platforms |
| --------- | -------- | --------- |
| SPA | TypeScript | Chrome / Edge / Firefox / Safari / Mobile |
| API | Node.js + TypeScript | Windows / macOS / Linux |

### Simple Web Technology for Early Samples

We will use modern web technology, but will avoid web frameworks to start with, so that requirements and techniques are established that would work with any technology stack:

| Step | Details |
| ---- | ------- |
| SPA OAuth Coding Model | First show how to integrate standards based OAuth support into a Simple SPA so that we can focus on OAuth requirements |
| Modern SPA Framework | Avoid getting sidetracked by too much web technology initially, though our Final SPA will use React |

### Our Code Sample Theme

This blog's samples represent a fictional financial scenario, where sensitive investment details are displayed. In a real financial app we would need to be diligent about protecting this data:

![List View](/images/20/list-view.jpg)

The actual data shown is just made up and does not represent anything real. The UI just renders fixed JSON data received from the API. Our Sample UIs will also include a basic Transactions View and we will imagine that this contains sensitive details from particular investors.

![Details View](/images/20/details-view.jpg)

This view primarily exists to demonstrate navigation and Deep Linking. Users can Bookmark URLs to Secured Resources, and UIs may need to renew a token or log the user in before presenting the view:

```text title="whatevar"
- http://web.mycompany.com/spa#company=1
- http://web.mycompany.com/spa#company=2
```

### Where Are We?

We have an initial objective and we will build it in a solid manner, with clean code and a good separation of concerns between the SPA, an API and the authorization server.

### Next

- Next we will provide simple steps on [How to Run the Code Sample](/posts/basicspa-execution)
- For a list of all blog posts see the [Index Page](/posts/index)