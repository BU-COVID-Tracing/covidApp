# Frontend Development
User interface of the app developed on Windows OS

## Setup

### Environment Setup
Follow the steps to set up the environment for the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup)

(Currently only for Android devices)

### Running

#### 1. Clone or download the repository

#### 2. Install dependencies
Navigate to the folder and run
```
yarn install
```

#### 3. Start app
Connect to an Android device and follow [these steps](https://reactnative.dev/docs/running-on-device), or use an AVD.

Then run

```
yarn android
```
or
```
npx react-native run-android
```

#### Potential Issues
- If you get:

``` shell
error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
Error: spawn ./gradlew EACCES
    at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

It might be that you need to extend the `gradlew` privileges:

``` shell
chmod 755 android/gradlew
```
