---
title: 'Code Samples Quick Start'
---

This page briefly summarises the blog’s final code samples. These all use only fictional data and user accounts. They include frontends that call Cloud Hosted APIs and a Cloud Authorization Server. For each app, one of the following credentials can be used to sign in:

- Demo User with Low Privileges: **guestuser`@`mycompany.com**
- Demo User with High Privileges: **guestadmin`@`mycompany.com**
- Password: **GuestPassword1**

### Secured Single Page Application

This is a React SPA that implements OpenID Connect via the **Token Handler Pattern**. It uses only the latest and strongest secure cookies in the browser, while also enabling pure SPA development and deployment.

![SPA view](/images/3/spa-view.jpg)

The SPA is deployed to many global locations using AWS Cloudfront. Anyone can run the app via the below link. To run the app locally you can follow the [Final SPA Instructions](/posts/how-to-run-the-react-js-spa).

- https`:`//web.authsamples.com

![SPA login](/images/3/spa-login.jpg)

### Secured Desktop App

The Desktop Sample is a cross platform Electron React App that runs on Windows, macOS and Linux. Open ID Connect is implemented via the [AppAuth-JS Library](https://github.com/openid/AppAuth-JS), and logins use the system browser:

![Desktop view](/images/3/desktop-view.jpg)

A Private URI Scheme is used to notify the app of the login result and return it to the foreground. To run the app on your local PC you can follow the [Final Desktop App Instructions](/posts/final-desktop-sample-overview).

![Desktop login](/images/3/desktop-login.jpg)

### Secured Android App

The Android App is a Single Activity App coded via Kotlin and Jetpack Compose. Open ID Connect is implemented via the [Android AppAuth Library](https://github.com/openid/AppAuth-Android), using the most secure Claimed HTTPS Schemes option.

![Android view](/images/3/android-view.jpg)

Logins are managed via a Chrome Custom Tab, with modern security and good usability. To run the app from Android Studio you can follow the [Android Code Sample Instructions](/posts/basicandroidapp-execution).

![Android login](/images/3/android-login.jpg)

### Secured iOS App

The iOS App is developed using SwiftUI with equivalent behaviour, and Open ID Connect is implemented via the [iOS AppAuth Library](https://github.com/openid/AppAuth-iOS), using the most secure Claimed HTTPS Schemes option.

![iOS view](/images/3/ios-view.jpg)

Logins are managed via Apple’s ASWebAuthenticationSession window. To run the app from Xcode you can follow the [iOS Code Sample Instructions](/posts/how-to-run-the-ios-code-sample).

![iOS login](/images/3/ios-login.jpg)

### API Behaviour

The frontend code samples are supported by backend APIs. The following blog posts walk through the key technical behaviours implemented by samples, including areas such as reliability, extensibility and productive development. In addition to good security, the end result should be a modern all round architecture with the best separation of concerns.

- [API Journey – Client Side](/posts/api-journey-client-side)
- [API Journey – Server Side](/post/api-journey-server-side)

### Next

- Return to the [Home Page](/)
- For a list of all blog posts see the [Index Page](/posts/index)
