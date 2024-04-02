# Test Brightlayer UI themes for React applications

[![](https://img.shields.io/circleci/project/github/etn-ccis/blui-react-themes/master.svg?style=flat)](https://circleci.com/gh/etn-ccis/blui-react-themes/tree/master)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-themes.svg?label=@brightlayer-ui/react-themes&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-themes)

This package provides theming support for Eaton applications using the Brightlayer UI design system. It includes resources for developers using React w/ [Material UI](https://www.npmjs.com/package/@mui/material) version 5+ (prior versions of this package will work with Material UI version 4 - check the [Changelog](https://github.com/etn-ccis/blui-themes/blob/master/CHANGELOG.md) for details). This package comes with two theme options: a Blue theme (standard) and a Dark theme.

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
import { ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import "@brightlayer-ui/react-themes/open-sans";
...
<ThemeProvider theme={BLUIThemes.blue}>
    <App />
</ThemeProvider>
```

## Usage

Read about the usage details at [our developer documentation site](https://brightlayer-ui-components.github.io/react/themes/overview).
