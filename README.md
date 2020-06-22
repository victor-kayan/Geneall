<h1 align="center">
  <img src="https://res.cloudinary.com/victorkayan/image/upload/c_scale,q_90,w_311/v1592612867/geneall-logo_gpbxjx.png" />
</h1>

<h3 align="center">
  🧬 Mobile app for teaching and learning genetics
</h3>

<p align="center">
  <img alt="React native" src="https://img.shields.io/badge/framework-react%20native-4fb7d1?logo=react">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/victor-kayan/Geneall.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/victor-kayan/Geneall.svg">

  <a href="https://github.com/victor-kayan/Geneall/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/victor-kayan/Geneall.svg">
  </a>

  <a href="https://github.com/victor-kayan/Geneall/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/victor-kayan/Geneall.svg">
  </a>

  <a href="https://github.com/victor-kayan/Geneall/blob/master/LICENSE.md">
    <img alt="GitHub license" src="https://img.shields.io/github/license/victor-kayan/Geneall">
  </a>
</p>

<p align="center">
  <a href="#pushpin-about-the-project">About the project</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tada-installation">Installation</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-run-in-dev-mode">Run in dev mode</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img alt="Geneall intro demo GIF" src="https://res.cloudinary.com/victorkayan/image/upload/v1592795204/geneall-intro-demo_rb0zuj.gif">
</p>

## :pushpin: About the project
🧬 **Geneall** is a tool for teaching and (mainly) learning genetics and its important terms. Thus, the mobile app contains a complete list with the explanation of the most relevant concepts in genetics, as well as **links** for related trustable web pages, papers and videos.

The concepts are displayed through three **glossaries**, divided by branches of genetics:
- 🧪 Molecular genetics,
- :family: Transmission genetics and
- 🔬 Cytogenetics.

Besides that, the app also contains a series of **books** about genetics and heredity, written by doctors and renowned scientist in the field. They are good recommendations for those who are looking for deeper study materials.

<p>
  <img alt="Glossaries demo GIF" src="https://res.cloudinary.com/victorkayan/image/upload/v1592796224/geneall-glossaries-demo_fucvds.gif">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img alt="Books demo GIF" src="https://res.cloudinary.com/victorkayan/image/upload/v1592796901/geneall-books-demo_e8eryh.gif">
</p>

### :fist: Motivation
The surprising advances in genetics put its teaching in a prominent position, with important implications for social and ethical issues. In this context, there is a need for an emphasis on teaching and learning the content of genetics and heredity during high school. However, these subjects often become difficult to study and learn due to numerous important terms that must be associated by the student over a short period of time. From this perspective, Geneall aims to facilitate the process, compiling information in a much more accessible way.

### :bar_chart: Project status 
Geneall still currently in development. In the present moment, the very first beta version has been subjected to user tests. Posteriorly, the collected feedbacks will be used to make improvements and, finally, release the first official version of the app.

### ✍️ Authors
- Development: [Victor Kayan](https://github.com/victor-kayan) and [Sadrak Lyon](https://github.com/slyonn)
- Content selection: [Sadrak Lyon](https://github.com/slyonn) and [Victor Kayan](https://github.com/victor-kayan)
- <div style="display: inline">Review and guidance: M.Sc. in Biology, high school teacher Leonardo Emmanuel</div>

## :rocket: Technologies
Some main libraries used in the development are named below. However, the complete list of dependencies may be found in the [package.json file](https://github.com/victor-kayan/Geneall/blob/master/package.json).

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [styled-components](https://styled-components.com/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-svg](https://github.com/react-native-community/react-native-svg)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-inappbrowser-reborn](https://github.com/proyecto26/react-native-inappbrowser)
- [react-native-swiper](https://github.com/leecade/react-native-swiper)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

## :tada: Installation
The beta Android APK can be directly downloaded [**here**](https://drive.google.com/file/d/1tpkQPPqpZnS6LB5eeDUtITC3qx-1EZIq/view?usp=sharing)!

> :bulb: By default, Android blocks the installation of applications outside Google Play Store. So, to proceed, you are going to need to allow app installs from **Unknown Sources** in your device.

:construction: **Disclaimer**: _As that is the first beta version, the app may contain bugs_.

## :information_source: Run in dev mode
First thing first, you are going to need to have installed in your machine: 
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/) and/or [Yarn](https://yarnpkg.com/)

Optionally, if you wish to edit the code, I would recommend [Visual Studio Code](https://code.visualstudio.com/). Next, having ensured that the prerequisites are properly installed and configured, you may follow the steps described below.

```bash
# Clone this repository
# It is also possible to download the source code zip file then extract it
$ git clone https://github.com/victor-kayan/Geneall

# Change to the project directory that you have just cloned
$ cd Geneall

# Install dependencies
$ npm install
# Or...
$ yarn

# Build the app and start it on a connected Android/iOS emulator or device

# Run on Android
$ react-native run-android

# Or run on iOS
$ react-native run-ios

# If the app does not automatically start, execute it manually
$ react-native start
```

## :memo: License
This project is under **MIT** License. Take a look at [LICENSE.md](https://github.com/victor-kayan/Geneall/blob/master/LICENSE.md) for details.

---

<h4 align="center">
  Made with 💙 by <a href="https://github.com/victor-kayan" target="_blank">Victor Kayan</a>
<h4>