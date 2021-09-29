const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
        console.log('serialized User:');
        console.log(user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
    console.log('deserialized User:');
    console.log(user);
  });

  passport.use(new SamlStrategy(
    config.passport.saml,
    function (profile, done) {
        console.log('SAML Response Data:');
        console.log(profile);
      return done(null,
        {
          id: profile.userId,
          nameId: profile.nameId,
          username: profile.username,
          is_portal_user: profile.is_portal_user,
          email: profile.email,
          displayName: profile.cn,
          firstName: profile.givenName,
          lastName: profile.lastName,
          orgName: profile.orgName

        });
    })
  );

};
