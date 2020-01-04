import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import postCSSPxToRem from 'postcss-pxtorem';
import webpack from 'webpack';

const srcPath = path.join(__dirname, 'src');
const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/static/' : '/';
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

const extractCss = new MiniCssExtractPlugin({
  filename: 'css/[name].[contenthash:6].css',
  allChunks: true
});

let plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.ProvidePlugin({
    React: 'react'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isProd
        ? JSON.stringify('production')
        : JSON.stringify('development')
    },
    IS_PRODUCTION: isProd
  }),
  new HtmlWebpackPlugin({
    filename: isProd ? '../index.html' : 'index.html',
    inject: false,
    template: path.join(srcPath, 'index.ejs')
  }),
  extractCss
];

if (isProd) {
  plugins = [...plugins, ...[new webpack.optimize.AggressiveMergingPlugin()]];
}

const cssRule = (modules = false) => [
  { loader: MiniCssExtractPlugin.loader },
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      modules: modules
        ? {
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        : undefined
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        autoprefixer(),
        postCSSPxToRem({
          rootValue: 10,
          propList: ['*']
        })
      ]
    }
  },
  {
    loader: 'sass-loader'
  }
];

export default {
  entry: path.join(srcPath, 'index.jsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve('./public/static/'),
    filename: 'js/[name].[hash:6].js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /.(s?css|sass)$/,
        exclude: /\.modules\.(s?css|sass)$/,
        use: cssRule()
      },
      {
        test: /\.modules\.(s?css|sass)$/,
        use: cssRule(true)
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        query: {
          limit: 256,
          name: 'fonts/[name].[hash:6].[ext]'
        }
      },
      {
        test: /.(jpg|jpeg|gif|png|ico|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1024,
          name: 'img/[name].[hash:6].[ext]'
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      scss: path.join(srcPath, 'scss'),
      shared: path.join(srcPath, 'js/shared'),
      components: path.join(srcPath, 'js/shared/components'),
      store: path.join(srcPath, 'js/store'),
      config: path.join(srcPath, 'js/config'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    port,
    host,
    hot: true,
    inline: true,
    contentBase: srcPath,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
