# cordova-angular-seed
A seed project for running Angular 6+ in Cordova

## Quick Start
Clone this repo

Steps:

### Push onto Android
```
cordova platform add android

cordova run android

```
#### Arguments
`cordova run android --dev` do a dev (Just in Time) build

`cordova run android --aot` do an "Ahead of Time" build

`cordova run android --prod` do a production build

`cordova build android --prod --release` do an Android release

### Develop in web browser
```
npm start
```

## HELP
Q: The error `CordovaError: Current working directory is not a Cordova-based project.` appears!
A: Create the folder `www` in the root of the project.
