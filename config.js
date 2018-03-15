var env = process.env.NODE_ENV == 'production' ? 'production' : 'development'
  , siteURL = env == 'development' ? 'https://127.0.0.1:8080' : 'https://react-web-zp.herokuapp.com'
  , config = {
    app: {
      env: env,
      siteURL: siteURL,
      port: env == 'development' ? 8080 : process.env.PORT
    },
    URIs: {
      /** Site database  */
      mongoDB01: process.env.mongoDB01,
      /** Data database  */
      mongoDB02: process.env.mongoDB02,
    },
    AUTH: {
      google: {
        appID: process.env.googleAppID,
        appSecret: process.env.googleAppSecret,
        callbackURL: siteURL + '/web/tpauth/google/callback'
      }
    },
    languages: ['en', 'ar', 'fr']
  }
module.exports = config
