# PokeLog
Pokelog is web application to showcase different types of Pokemon catalogs and their properties. This application is developed as a part of Buyceps front-end developer assignment.

## 🚀 Demo
Pokelog is deployed to `Netlify` and is availabale globally. To see the demo visit this [Netlify URL](https://643c51c760c3a4000880aaff--gregarious-llama-429304.netlify.app/)

Note: The application is also deployed to `Vercel`, but due to some free tier limitations some functionalities may not work properly (it may lead to server time out error). [Vercel URL](https://pokelog.vercel.app/)

## Table of Contents

[PokeLog](#pokelog)
  - [🚀 Demo](#-demo)
  - [Table of Contents](#table-of-contents)
  - [🧑‍💻 Major Tech Stack](#-major-tech-stack)
  - [📋 Requirements](#-requirements)
  - [💾 Installation](#-installation)
  - [🔧 Usage](#-usage)
  - [🔍 Pokémon API](#-pokémon-api)
  - [🛡 Disclaimer](#-disclaimer)
  
## 🧑‍💻 Major Tech Stack
  - Next.js
  - GraphQL
  - Apollo Client

## 📋 Requirements
  - Node - v16.19.0 or higher
  - npm - 8.19.3 or higher
  - Next.js - v13.3.0 or highter
  
## 💾 Installation
To install PokeLog web appliction, follow these steps
1. Make sure you have all the **requirements** above, if not, install/get them.

_The following commands should be executed in a CMD, Bash or Powershell window. To do this, go to a folder on your computer, click in the folder path at the top and type CMD, then press enter._

2. Clone the repository:
   For this step you need Git installed, but you can just download the zip file instead by clicking the button at the top of this page ☝️

```
git clone https://github.com/kgsantosh770/pokelog.git
```

3. Navigate to the project directory:
   _(Type this into your CMD window, you're aiming to navigate the CMD window to the repository you just downloaded)_

```
cd 'pokelog'
```

4. Install the required dependencies:
   _(Again, type this into your CMD window)_

```
npm install
```

5. Rename `.env.template` to `.env`.

## 🔧 Usage

1. Run the `pokelog` dev server in your terminal:
   _(Type this into your CMD window)_

```
npm run dev
```

  - This will start the development server. When you hit the URL [http://localhost:3000/](http://localhost:3000/) you can see the application running.

2. Optional - If you need to the webapp for production like setup (ie. to generate the static pages in build time) run the build command:
   _(Type this into your CMD window)_
  
  ```
  npm build
  ```
  
  - once the build is completed, start the server:
   _(Type this into your CMD window)_
  
  ```
  npm start
  ```

## 🔍 Pokémon API

PokeLog uses the [Pokémon API documentation](https://wayfair.github.io/dociql/). The Pokémon API is GraphQL API. It's schema can be fetched using introspection query and can be used for generating code, documentations, tests etc.

## 🛡 Disclaimer

  - PokeLog is not a complete production ready application. The application needs more UI and feature enhancements and also a more clean optimization procedure to be performed.
  - Test cases has not been developed yet. Will be created in future releases if needed.