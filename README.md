# Restaurant Page

> This project is a restaurant page, I mimic as if I have my own restaurant and come up with the corresponding design to it, the image below show how the home page looks like you can click on the live link below to explore the other pages, this project is part of Microverse curriculum where we should show our understanding of WebPack and ES6 modules.

![screenshot](./app_screenshot.png)

## Built With

- Vanilla JavaScript,
- the CSS preprocessor SCSS,
- webpack,
- babel
- stylelint version 13.3.3
- ESlint version 6.8.0

## Live Demo

[Live Demo](https://elmejdki.github.io/Restaurant-page/)

## Getting started

### Prerequisites

In order to have this project up and running you will need:

- NodeJS 10+

### Setup

First you need to clone this project using one of the links above, using this command:

`git clone RESPOSITRY_LINK`

Then you should run: `npm install`

And afterwards you supposed to run: `npm run server`, to run the project in your local machine.

Congrats the project is fully working.

_You may have some issues with the `image-webpack-loader`  but that depend on your operating system each operating system has his own way to solve it, if you goggled it just for some couple minutes I'm sure you will find the solution, if not you can contact me any time you need I will be happy to help, my contact informations are below_

### Deployment

For deployment I used GitHub pages, but as you see my project is full of files and the `index.html` file is inside the `build/` folder, so in order to deploy using GitHub pages we need to put the `index.html` file in the root of the repository, in order to do this we will use a simple trick, please follow the commands bellow if you want to deploy on your on repository:

- If you have the `build/ `  folder declared inside the `.gitignore`  file please remove it form there.

- run `npm run build`  to generate the build folder.

- then make sure that git knows about your subtree, using this command:

  ```
  git add build && git commit -m "Initial build subtree commit"
  ```

- after that use subtree push to send it to gh-pages branch in GitHub:

  ```
  git subtree push --prefix build origin gh-pages
  ```

Now you have finish check the link of GitHub pages you will find your project deployed there. you can find the link on the repository settings page.
## Author

👤 **Zakariae El Mejdki**

- Github: [@elmejdki](https://github.com/elmejdki)
- Twitter: [@zakariae_elmejdki](https://twitter.com/zakariaemejdki)
- Linkedin: [El Mejdki Zakariae](https://www.linkedin.com/in/zakariaeelmejdki/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
