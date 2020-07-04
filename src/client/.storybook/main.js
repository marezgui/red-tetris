// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: [
//     '@storybook/addon-actions',
//     '@storybook/addon-links'
//   ],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };

module.exports = {
  stories: ['../components/**/stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript'
  ],
  webpackFinal: async config => {
    // do mutation to the config
    
    return config;
  },
};
