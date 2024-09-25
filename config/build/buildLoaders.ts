import webpack from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';

type Options = {
  mode: 'development' | 'production';
};

export default function buildLoaders(options: Options): webpack.Configuration['module'] {
  const isDev = options.mode === 'development';

  const tsLoader = {
    test: /\.tsx?$/i,
    loader: 'ts-loader',
    options: {
      getCustomTransformers: () => ({
        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
      }),
      transpileOnly: !isDev,
    },
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
    exclude: /node_modules/,
  };

  return {
    rules: [tsLoader, cssLoader, svgLoader],
  };
}
