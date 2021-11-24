const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'zo-ui/lib': path.resolve(__dirname, '../components/'),
        'zo-ui/esm': path.resolve(__dirname, '../components/'),
        'zo-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
