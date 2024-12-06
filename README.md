# Brightlayer UI themes for React applications

[![Build](https://github.com/etn-ccis/blui-react-themes/actions/workflows/blui-ci.yml/badge.svg?branch=master)](https://github.com/etn-ccis/blui-react-themes/actions/workflows/blui-ci.yml)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-themes.svg?label=@brightlayer-ui/react-themes&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-themes)

This package provides theming support for Eaton applications using the Brightlayer UI design system. It includes resources for developers using React w/ [Material UI](https://www.npmjs.com/package/@mui/material) version 6+ (prior versions of this package will work with Material UI version 5 - check the [Changelog](https://github.com/etn-ccis/blui-themes/blob/master/CHANGELOG.md) for details). This package now comes with a single theme option that supports both light mode and dark mode.

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

## Migration from BLUI React theme v7 to v8

This package has been updated to support Material UI version 6. If you are migrating from BLUI React theme 7 to BLUI React theme 8, please follow these steps:

-   Update Material UI: Ensure you have updated your Material UI dependencies to version 6.
-   Update Theme Usage: Replace any usage of the old theme options (blue or blueDark) with the new single theme option.
-   Make use of `useColorScheme()` hook to set and use theme modes using helpers `mode` & `setMode` of `useColorScheme()`.

# Usage

To use these themes in your application, simply wrap the app in a `ThemeProvider` and pass in the theme.:

```tsx
import { ThemeProvider } from "@mui/material/styles";
import { blueThemes } from "@brightlayer-ui/react-themes";

<ThemeProvider theme={blueThemes}>
    <App />
</ThemeProvider>;
```

By Default the theme will take system's mode. To set your mode(light/dark), make use of `useColorScheme()` hook to set and use theme modes using helpers `mode` & `setMode` of `useColorScheme()`.

## Example to set default mode when app loads using useColorScheme() hook

```tsx
import { useEffect } from 'react';
import { useColorScheme } from '@mui/material/styles';

export const App = (): JSX.Element => {
    const { setMode } = useColorScheme();

    useEffect(() => {
        setMode('light');
    }, []);

    return (
        <>
            <BrowserRouter basename={'/'}>
                <AppRouter />
            </BrowserRouter>
        </>
    );
};
```

## Example to use Toggle Mode

```tsx
import { useColorScheme } from "@mui/material/styles";
import InvertColors from "@mui/icons-material/InvertColors";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ToggleComponent = () => {

const { mode, setMode } = useColorScheme();

return(
    <Tooltip title={"Toggle Theme"}>
        <IconButton onClick={() => {setMode(mode === "light" ? "dark" : "light")}}>
            <InvertColors />
        </IconButton>
    </Tooltip>
 )
}
```

Read about the usage details at [our developer documentation site](https://brightlayer-ui-components.github.io/react/themes/overview).
