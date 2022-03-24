// Must add this for fast reload in a Docker container. 
// https://stackoverflow.com/questions/54126848/why-nextjs-using-docker-container-did-not-reload-after-changed-code-for-dev-envi

module.exports = {
  // basePath: '/src',
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 300,
      aggregateTimeout: 300,
    }
    return config
  },
}