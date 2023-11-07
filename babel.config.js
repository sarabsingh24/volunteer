module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
          features: './src/features',
          common: './src/common',
          assets: './src/assets',
          utils: './src/utils',
          navigation: './src/navigation',
          layouts: './src/layouts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
