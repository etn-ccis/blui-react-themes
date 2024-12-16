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

# Usage

To use these themes in your application, simply wrap the app in a `ThemeProvider` and pass in the theme:

```tsx
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@brightlayer-ui/react-themes";

<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>;
```

The theme will default to light/dark mode based on the user's system preference. To manually toggle the theme mode (e.g., from settings), you will need to use the `useColorScheme` hook (see below).

## Changing the default mode

If you do not want to use the system setting as the default, you can set the `defaultMode` on the `ThemeProvider`:

```tsx
<ThemeProvider theme={theme} defaultMode={"dark" /* or 'light' */}></ThemeProvider>
```

## Manually toggling the mode

You can manually toggle the theme mode using the `useColorScheme` hook:

```tsx
import { useColorScheme } from "@mui/material/styles";
import InvertColors from "@mui/icons-material/InvertColors";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const ToggleComponent = () => {
    const { mode, setMode } = useColorScheme();

    return (
        <Tooltip title={"Toggle Theme"}>
            <IconButton
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                }}
            >
                <InvertColors />
            </IconButton>
        </Tooltip>
    );
};
```

For more information on toggling modes, refer to the [MUI docs](https://mui.com/material-ui/customization/dark-mode/).

For more detailed information about the BLUI themes, refer to our [developer documentation](https://brightlayer-ui-components.github.io/react/themes/overview) site.

## Migration from v7 to v8

In version 8, the theme now follows the standard from MUI v6, which combines light and dark theme into a single theme object. In order to use the new version, you will need to:

### Update Material UI

Ensure you have updated your Material UI dependencies to version 6 (this includes @mui/material, @mui/icons-material, etc.). Refer to the official MUI [migration docs](https://mui.com/material-ui/migration/upgrade-to-v6/) for more details.

### Consolidate themes

If you were previously switching between `blue` and `blueDark` themes in your `ThemeProvider`, this should be replaced with the single `theme` object.

```diff
- import { blue, blueDark } from '@brightlayer-ui/react-themes';
+ import { theme } from '@brightlayer-ui/react-themes';

- <ThemeProvider theme={isDark ? blueDark : blue}></ThemeProvider>
+ <ThemeProvider theme={theme}></ThemeProvider>
```

### Update logic to toggle the theme mode

Instead of swapping entire theme objects, you will now make use of the `useColorScheme` hook to toggle between light and dark mode. Refer to the usage instructions above or the [MUI docs](https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually) for more details.

> Note: For few cases some styles may not apply correctly, hence they need to be declared explicitly for specific mode.

```tsx
    sx={{
    backgroundColor: statusColor || Colors.black[500],
    color: getIconColor(),
    ...theme.applyStyles('dark', {
        color: getIconColor(),
        backgroundColor: statusColor || Colors.black[500],
    }),
}}
```
