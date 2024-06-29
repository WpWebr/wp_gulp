export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },        
    // post: 3000,
    browser: 'google-chrome',
    notify: false,
  });
}