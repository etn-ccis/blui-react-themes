# Brightlayer UI themes for React applications
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/react-themes/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/react-themes/tree/master)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-themes.svg?label=@brightlayer-ui/react-themes&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-themes)

This package provides theming support for Eaton applications using the Brightlayer UI design system. It includes resources for developers using React w/ [Material UI](https://www.npmjs.com/package/@material-ui/core) version 4+ (prior versions of this package will work with Material UI version 3 - check the [Changelog](https://github.com/brightlayer-ui/themes/blob/master/CHANGELOG.md) for details). This package comes with two theme options: a Blue theme (standard) and a Dark theme.

For other frameworks, check out our related packages:

-   [@brightlayer-ui/angular-themes](https://www.npmjs.com/package/@brightlayer-ui/angular-themes)
-   [@brightlayer-ui/react-native-themes](https://www.npmjs.com/package/@brightlayer-ui/react-native-themes)

## Installation

Install with npm

```shell
npm install --save @brightlayer-ui/react-themes
```

or yarn

```shell
yarn add @brightlayer-ui/react-themes
```

# Usage

To use these themes in your application, simply wrap the app in a `ThemeProvider` and pass in your desired theme (`blue` or `blueDark`). You'll also need to include the Open Sans font resources (included with the themes):

```tsx
import {
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import "@brightlayer-ui/react-themes/open-sans";
...
<ThemeProvider theme={createMuiTheme(BLUIThemes.blue)}>
    <App />
</ThemeProvider>
```

### Updating From Version 5 ~> 6

In version 6, we have migrated from the deprecated `typeface-open-sans` package to `@fontsource/open-sans` (bundled with the Brightlayer UI themes). You'll need to update your Open Sans import references in your root file:

Before:

```js
require('typeface-open-sans');
```

After:

```js
import '@brightlayer-ui/react-themes/open-sans';
```

## Demo

[View on Code Sandbox](https://codesandbox.io/s/github/brightlayer-ui/react-showcase-demo)

## Common Overrides

See the [Common Overrides](https://github.com/brightlayer-ui/react-themes/blob/master/CommonOverrides.md) for react themes.
