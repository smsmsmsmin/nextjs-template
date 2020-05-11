const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withImages(
  withVideos({
    webpack(config) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      };
      return config;
    },
  }),
);
