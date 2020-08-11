<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="http://akshatbisht.com/texblog">
    <img width="75" alt="LaTeX Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eucalyp-Deus_Latex.png/128px-Eucalyp-Deus_Latex.png">
  </a>
</p>
<h1 align="center">
  TeXBlog Gatsby Starter
</h1>

TeXBlog is a lightweight Gatsby starter, enabled with LaTeX to allow you to showcase your beautifully typeset articles. The perfect complement to maths and science blogs.

<p align="center">
  <a href="http://akshatbisht.com/texblog">
    <img width="1280" alt="prist" src="https://user-images.githubusercontent.com/33050725/89703076-06b53d80-d97a-11ea-991f-24478fbf9b50.png">
  </a>
</p>

<h3 align="center">
  <a href="http://akshatbisht.com/texblog" target="_blank">View Demo Website</a>
</h3>

## 🚀 Quick Start
### Automated Deployments
Deploy with just one click to Vercel or Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Faaaakshat%2Fgatsby-starter-texblog&project-name=gatsby-starter-texblog&repo-name=gatsby-starter-texblog)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aaaakshat/gatsby-starter-texblog)

### Manual Setup

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this project. If you don't have the CLI installed already, see [Gastby instructions](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli).

    ```shell
    # Modify "my-texblog" to your project name
    gatsby new my-texblog https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory, install yarn dependencies, and start it up.

    ```shell
    cd my-texblog
    yarn install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`

    _(Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).)_

    Edit the `gatsby-config.js` file and edit the `siteMetada` variables. Save your changes and the browser will update in real time! _(Note: If the browser doesn't update, restart your development environment to view the changes)_

## ✏️ Content Creation
I wanted to have a balance of statically typed code which would be heavily customisable as well as templated code for easy setting up. I ended up making the blog posts or "articles" dynamically generated using mdx and I made the site pages fully customisable to add an extra layer of flexibility.
### Articles (Posts)
Articles are written using mdx ([tutorial here](https://www.gatsbyjs.org/docs/mdx/writing-pages)) and are located in the `/content/posts/` directory. They are automatically sourced by the `Posts` component and to add them you simply create a new mdx file in the folder.

### Pages
Pages are simply site pages which can be fully customised. They are located in `/src/pages/` and accept jsx, tsx or js files. _(Note that pages are not sourced dynamically and must be added to the `/src/comonents/Header/header.tsx` component individually)_


## 🛠 Configuration
### Site Metadata
The site title, author and description are all dynamically sourced from `gatsby-config.js` to make it easier to update through one file. Modifying these will update banners and site details all in real time via the Gatsby development environment.

```javascript
siteMetadata: {
  title: `TeXBlog`,
  description: `A simple, LaTeX enabled starter to properly showcase your beautifully typeset articles. Perfectly complements STEM blogs.`,
  author: `Akshat Bisht`,
},
```

### Social Media
TeXBlog comes with a custom SocialLinks component which is used to dynamically generate a list of social media icons. The SocialLinks component is located in `/src/components/SocialLinks/` and is heavily customisable. The icons are fetched using `react-icons` and so any icon in their [icon library](https://react-icons.github.io/react-icons/) can be imported and used.

In order to change the social media accounts open `/src/components/SocialLinks/` and edit the `socialMediaAccounts` const.
```javascript
const socialMediaAccounts = [
  {
    id: 1,
    icon: FaGithub,
    url: "http://github.com/aaaakshat/gatsby-starter-texblog"
  },
  {
    id: 2,
    icon: GrGatsbyjs,
    url: "https://www.gatsbyjs.org/starters/aaaakshat/gatsby-starter-texblog/",
  },
  // add more here...
]
```
There are 3 values you must change for every account added:
1. `id`: Required as part of react's mapping function and should simply indicate the numerical id of each component _(i.e. first component = id: 1)_
1. `icon`: Indicates the icon the component will use from `react-icons` select one from [their library](https://react-icons.github.io/react-icons/)
1. `url`: Represents your url for the social media account


### Google Analytics
For sites using Google Analytics, the plugin comes pre-installed and you can add your analytics tracking id (UA-12345...) in the `gatsby-config.js` file. If you are using a cloud deployment model, add GOOGLE_ANALYTICS_TRACKING_ID to your environment variables and assign the values through there.
```javascript
{
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    head: true,
  },
},
```

### Directory Overview
    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are installed via `yarn install`

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for and are not uploaded to GitHub.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`** *: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`** *: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`** *: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`** *: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the [MIT License](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Don’t change this file yourself).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: This very text file containing useful reference information about your project.

*If you edit these files you may need to restart your development environment to see the changes.


## 🎓 Learning Gatsby
This starter uses Gatsby which is a fast site generator for React. Full documentation for Gatsby is available [on their website](https://www.gatsbyjs.org/).

## 🙌 Contributing
Contributions are appreciated and accepted [via Github](https://github.com/aaaakshat/gatsby-starter-texblog), from improvements on the source code to making this readme better.

<!-- AUTO-GENERATED-CONTENT:END -->
