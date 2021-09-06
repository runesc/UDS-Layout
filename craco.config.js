const path = require('path')

module.exports = {
    webpack: {
        alias: {
          '@config': path.resolve(__dirname, "src/config/"),
          '@styles': path.resolve(__dirname, "src/assets/css/"),
          '@images': path.resolve(__dirname, "src/assets/img/"),
          '@components': path.resolve(__dirname, "src/components/"),
          '@views' : path.resolve(__dirname, "src/views/"),
          '@pages' : path.resolve(__dirname, "src/pages/")
        }
    }
}