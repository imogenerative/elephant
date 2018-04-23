This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Elephant

### Getting Started

Elephant relies on **React** and **ReactDOM**, you will first need to install **Node.js** and **npm** via a package manager.

Once you have done so, run the following commands to install Elephant:

```
git clone https://github.com/imogenerative/elephant.git
cd elephant
npm init
npm install --save react react-dom
```

Then run ```npm start``` and navigate to ```http://localhost:3000``` to run the app.

### Usage

Elephant displays the current top posts from ```http://www.reddit.com/r/javascript/top/``` showing the post title, author, and a link to the original article or the reddit discussion if it is a self post. The post order can be switched from "top" (as determined by reddit) to "chronological", which will display the newest posts at the top of the list by clicking the button.
