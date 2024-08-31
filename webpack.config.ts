import webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv';

dotenv.config();

type Env = {
  mode?: 'development' | 'production';
};

const port = 3000;

export default (env: Env) => {
  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';

  const configuration: webpack.Configuration = {
    mode,
    devtool: isDev && 'inline-source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      isDev && new webpack.ProgressPlugin(),
      new webpack.DefinePlugin({
        'process.env.OK': true,
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      port,
    },
  };

  return configuration;
};
