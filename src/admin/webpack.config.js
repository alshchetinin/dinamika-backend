// ./src/admin/webpack.config.js
"use strict";

/* eslint-disable no-unused-vars */

module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

  config.plugins.push(
    new webpack.DefinePlugin({
      FILE_UPLOAD_URL: JSON.stringify(process.env.FILE_UPLOAD_URL),
    })
  );

  return config;
};
