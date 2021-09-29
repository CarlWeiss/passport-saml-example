PassportJS SAML example
=======================


Description
-----------

An example to demonstrate the use of the [Passport-SAML](https://github.com/bergie/passport-saml) Authentication provider for PassportJS linked to a SF IDP.


Setup
-----

```bash
$ npm install
$ bower install
$ npm start
```

Changes
Update passport.js to extend the user object to display data

Salesforce Configuration
Steps:
1. Setup SF as an IDP
2. Create a connected APP
3. Create an .env file based on the .SMAPLE_ENV template 
4. Connected APP SAML cofiguration
5. Authorize users to connect to the app
6. Configure any custom attributes under the Connected App
7. Extend the passport.js object to view the extended data.


License
-------

Licensed under the MIT license


Note
----

Based on [PassportJS-Authentication](https://github.com/DanialK/PassportJS-Authentication) by [Danial Khosravi](http://danialk.github.io/) and (http://gbraad.nl "Gerard Braad <me@gbraad.nl>")
