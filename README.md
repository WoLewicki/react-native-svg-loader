# SVGLoader for React Native
Displaying svg files got through "require('file.svg)" converted to xml on Android and pdf on iOS and added to res/drawable folder on Android and Image.xcassets on iOS. Thanks to that the files can be displayed without losing its' vector properties.

RUNNING EXAMPLE PROJECT STEPS:

Android:

```bash
yarn install
npm install svg2vectordrawable -g   -- adds availability to convert svg to xml
```
Build app 2 times in dev mode or once in release mode to see the images.
```bash
yarn start
react-native run-android        -- for dev (in another terminal window)
or
./gradlew installRelease          -- in android folder for release
```

iOS:

```bash
yarn install
pod install (in ios folder)
pip3 install cairosvg              -- adds availability to convert svg to pdf
```
Build app 2 times in dev mode or once in release mode to see the images.
```bash
yarn start
react-native run-ios             -- in another terminal window
```

Also remember to add the signing team in XCode->General->Signing->Team
and disable dead code stripping in release mode in XCode->Build Settings->Linking

In order for release to work on iOS, you should change the build phases, so that bundled sources are added to the project before its' sources are compiled, like this:

<p align="center" >
  <kbd>
    <img src="https://github.com/WoLewicki/react-native-svg-loader/blob/master/example/buildPhases.png" title="Build Phases" float="left">
  </kbd>
  <br>
  <em>Build phases for release</em>
</p>

On iOS and Android, on dev mode you have to build app 2 times beacuse bundling is made after the app build, so there are no image sets or xmls at the time of building for the first time, although on release, bundling goes before build, so it should be ok there.

On Android, fast-image library is used because it gives access to xmls in drawable folder in android project, which is sadly not yet supported in Image component. If you want to keep the scalable images there, you should use something similar to the second image example in App.js, because fast-image doesn't rerender if uri is not changed.

Unused resources aren't currently removed, so you have to manually delete them from drawable/Image.xcassets folder in order to make the project clean. Remember that they are created for each svg file require in code and are named "wlgenxml"+name/"WLGenPDF"+name, so it is easy to find them.


Used sources:

https://github.com/DylanVann/react-native-fast-image - react-native-fast-image gh repository.
https://github.com/Ashung/svg2vectordrawable         - svg to xml vector converter
https://cairosvg.org/                                - svg to pdf converter
