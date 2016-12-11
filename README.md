```
 ____                       _    __                      _
/ ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
\___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
|____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
-----------------------------------------------------------------
```

A store that contains JavaScript-to-Native smartface.io Component wirings.

## About

This repository defines store bindings for [smartface.io](https://smartface.io) components to be mounted with [badem](http://github.com/jsbites/badem).

* [smartface.io](https://smartface.io) is a cross-platform mobile application development and testing platfomr.
* [badem](http://github.com/jsbites/badem) is a generic component mounter, that mounts components by consuming a **JSON** descriptor.

If you want to define a new [smartface.io](https://smartface.io) component, or extend an existing one, this is the repository to fork.

## Installation

You can install this module via NPM and then use it in your [smartface.io](https://smartface.io) app:

```
npm install @volkan/smartface-component-store --save
```

## Dependencies

This repository depends on [smartface.io](https://smartface.io) runtime.

You need to use this repository inside a [**smartface.io Cloud IDE**](https://cloud.smartface.io/Home/Index), otherwise it will throw exceptions during initialization.

## Package Scripts

This repository comes with some helper npm scripts:

* `npm run test`: Runs unit tests.
* `npm run lint`: Verifies the correctness of the source code.

## Important Files and Folders

* **./index.md**: The main entry point.
* **./bin**: Binaries that are used by the NPM scripts.
* **./package.json**: The package definition.
* **./CHANGELOG.md**: A log of what has been done since the last version.
* **./CODE_OF_CONDUCT.md**: Basically tells the collaborators to be nice to each other.
* **./README.md**: This very file.

## Wanna Help?

Any help is more than appreciated.

If you want to contribute to the source code fork this repository and create a pull request.

In lieu of a formal styleguide, take care to maintain the existing coding style.

Also don’t forget to add unit tests for any new or changed functionality.

If you want to report a bug; or share a comment or suggestion, [file an issue](https://github.com/v0lkan/smartface-empty-workspace-jsnext/issues/new).

## Supported Environments

You have to use this repository from within the [smartface.io Cloud IDE](https://www.smartface.io).

This demo application crates binaries for Android and iOS devices.

## I’ve Found a Bug, I Have an Idea

[Please file an issue and lest us know too](https://github.com/v0lkan/smartface-empty-workspace-jsnext/issues/new).

## Contact Information

* **Project Maintainer**: [Volkan Özçelik](https://volkan.io/)

## From the [smartface.io](https://www.smartface.io) Team

### Hello Fellow Developer

Thank you for using Smartface Cloud!

Developing native apps for iOS and Android is as easy as a few lines of JavaScript code.

Start coding right away and to view your app instantly on a real device, just click the Run on Device button and follow the instructions.

You can also update your native apps remotely and manage their lifecycle end-to-end, fully in the cloud.

Welcome to the world of mobility!

Smartface Team.

### Code of Conduct

We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

[See the code of conduct for details](CODE_OF_CONDUCT.md).

### Support, Documentation, and Useful Links

* [Guides](https://www.smartface.io/guides)
* [API Docs](https://docs.smartface.io)
* [Smartface Cloud Dashboard](https://cloud.smartface.io)
* [Download Smartface On-Device Emulator](https://smf.to/app) (Works only from your device)
