// 表示开发环境下的配置
const merge = require('webpack-merge');
  const baseConfig = require('./webpack.base.conf.js');

  module.exports = merge(baseConfig, {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
          contentBase: './dist',
          port: 3000,
          //时时刷新
        //   inline:true,
          hot:true,
      }
  });
