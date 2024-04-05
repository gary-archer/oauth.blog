---
title: 'Web Architecture Goals'
number: 10
---

The [Home Page](/) described OAuth in terms of overall goals for a software platform. In this post we will describe what we are looking for in an Optimal Web Architecture, which is not just about security. This post briefly summarizes some goals and concerns for web apps.

### Goal: Best User Experience

Client-side web apps separate HTML and data concerns to deliver a fast experience for end users. A Single Page Application (SPA) visits the server less often, and modern technologies such as React provide an ecosystem with many tools and techniques for building modern apps.

![React SPA framework](/images/10/react.jpg)

### Goal: Productive Front End Development

Technologies such as React are generally simpler from a development viewpoint than older website solutions. Developers couldn't usually deliver a modern user interface when having to use mechanisms such as postbacks.

OAuth also enables web apps to externalize their security to the authorization server, and to libraries written by experts. This results in simplified application code, due to the outsourced security.

### Goal: Good Global Performance

Most companies want good global performance for their Internet web applications. A Content Delivery Network (CDN) is the simplest solution for managing latency. It is harder to enable for web back ends that execute code such as cookie issuing, leading to restricted hosting options.

![Content delivery network](/images/10/cdn.jpg)

### Goal: Best Security Capabilities

Single page applications must be able to interact with APIs, so need an API message credential. APIs must return only correct and allowed data for each user, so the user must be authenticated first.

OAuth and OpenID Connect provide powerful options for issuing access tokens as API message credentials, and authenticating the user in many possible ways. OAuth for Browser Based Apps provides some best practice recommendations.

### Goal: Pass Web Security Reviews

By following web security best practices, vetted by experts, companies will avoid most vulnerabilities and perform better in PEN tests. For web apps, Cross Site Scripting (XSS) is a particular concern that must be addressed, separately to the OAuth implementation.

If an app has XSS vulnerabilities, then an attacker may be able to access secured data in exactly the same way as the real web app. Therefore, reducing the impact of XSS exploits is now a major consideration when designing web solutions.

### Goal: Best Login Usability

OpenID Connect can provide multiple ways for users to sign in to an SPA, and this can include options that are both user friendly and secure. In addition, an SPA should be in full control of its navigation behavior:

- Login Redirects: the UI should be able to save application location and state before a redirect, then restore it afterwards
- Multi Tab Browsing: the end user should be able to use multiple browser tabs and navigate across multiple applications without issues

### Goal: Good Search Results

For unsecured web apps, it is common to want to achieve good Search Engine Optimization results and Server Side Rendering is often used. For secured web apps, such as those used in this blog, views cannot be reached by search bots, and a different web architecture can be used.

### Goal: Partner Web Integrations

It used to be common for web apps to show a mix of content. The host application imported JavaScript from various third parties, who provided widgets and mashups, accessed using iframe or div HTML elements.

Yet this type of solution now has major security concerns for the host application, related to XSS and user privacy. It is now preferred to compose applications using APIs, and for each organization to code its own views.

### Goal: Scalable Code

Web applications can quickly become large code bases with many pages, that become difficult to manage over time, and adapt to new technologies. A code splitting design is therefore needed, so that multiple teams can work on micro-frontends at different paths within the same web domain.

The attack surface also needs to be considered, for each web domain. This should consider both the scope of API credentials and the scope of XSS threats. Larger platforms should use distinct web domains per business area, so that a low security app cannot impact a high security app.

### Goal: Portable Architecture

Portability is often overlooked, but it is common to want to keep your options open. These options are relevant to SPAs:

| Aspect | Description |
| ------ | ----------- |
| Portable Apps	| Implement OpenID Connect in the SPA in a standard way rather than being locked into one authorization server |
| Portable Hosting | SPAs should be deployable by simply uploading static content, so avoid designs that prevent this |

### This Blog's SPA Code Samples

This blog's posts and the accompanying code samples will explain OAuth features and design patterns gradually, while keeping code simple:

| Stage | Description |
| ----- | ----------- |
| Basics | Getting an SPA, API and authorization server working together, with a developer friendly setup |
| Updated | SPA session management for a complete user experience, and flexible API authorization in the API, to protect data |
| Final | A security hardened SPA that runs from a content delivery network and interacts with cloud deployed APIs |

We will aim to achieve all of the goals in this page, but it will be a tricky journey. Once complete though, the architecture will be in a great place.

### Where Are We?

We have highlighted some desired behavior, and next we will start our first objective, by running an initial OAuth secured SPA and API code sample on a developer PC.

### Next

- Next we will provide an [Initial SPA Code Sample Overview](/posts/basicspa-overview)
- For a list of all blog posts see the [Index Page](/posts/index)
