const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'zo-ui',
    description: '组件库测试',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './components/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'zo-ui',
        description: '组件库测试',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Shao\\Documents\\zozo-ui',
          templates:
            'C:\\Users\\Shao\\Documents\\zozo-ui\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz',
          cache: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\.cache',
          app: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\app',
          appPackageJson: 'C:\\Users\\Shao\\Documents\\zozo-ui\\package.json',
          appTsConfig: 'C:\\Users\\Shao\\Documents\\zozo-ui\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\Shao\\Documents\\zozo-ui\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Shao\\Documents\\zozo-ui\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\Shao\\Documents\\zozo-ui\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\Shao\\Documents\\zozo-ui\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\app\\index.html',
          db: 'C:\\Users\\Shao\\Documents\\zozo-ui\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
