# Gatsby Starter Blog

## Installazione

```shell
npm i -g gatsby-cli
npm i -g netlify-cli
netlify init
npm i --legacy-peer-deps
```

## Run locale

```shell
npm run build
npm run start
```

## Build locale Netlify

```shell
netlify build 
```

## Pubblicazione su Netlify

```shell
netlify deploy --prod --dir=public
```

## As always Git

```shell
git add . 
git commit -m ""
git push
```

```shell
rm -rf ./node_modules && rm -rf ./package-lock.json && rm -rf ./cache && rm -rf ./public && && gatsby clean && npm install && gatsby build && gatsby serve && gatsby clean && gatsby develop
```

```shell
# create a new Gatsby site using the default starter
gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
```

## Finche React non sarà minimo alla 19.1.0 non aggiornare la libreria decap-cms-app ad una versione superiore alla 3.6.4

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.
  .
  ├── node_modules
  ├── src
  ├── .gitignore
  ├── gatsby-browser.js
  ├── gatsby-config.js
  ├── gatsby-node.js
  ├── gatsby-ssr.js
  ├── LICENSE
  ├── package.json
  └── README.md

1. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## 🎓 Learning Gatsby

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
