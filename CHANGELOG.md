# Changelog

# v8.1.1 (May 30, 2025)

### Fixed

- Bottom navigation bar dark theme, wrong color. ([#137](https://github.com/etn-ccis/blui-react-themes/issues/137)).
- Desktop stepper dark theme wrong color. ([#133](https://github.com/etn-ccis/blui-react-themes/issues/133)).
- Disabled checked toggle switch. ([#132](https://github.com/etn-ccis/blui-react-themes/issues/132)).
- Disabled slider wrong color. ([#131](https://github.com/etn-ccis/blui-react-themes/issues/131)).
- Snackbar dark theme color wrong. ([#127](https://github.com/etn-ccis/blui-react-themes/issues/127)).
- Dark theme outlined primary chips are missing borders. ([#128](https://github.com/etn-ccis/blui-react-themes/issues/128)).
- Outlined buttons have grey border. ([#111](https://github.com/etn-ccis/blui-react-themes/issues/111)).
- Remove uppercase from default Material UI tab styles. ([#67](https://github.com/etn-ccis/blui-react-themes/issues/67)).
- Dark Theme Material UI Chips Leading Icon Size Wrong. ([#66](https://github.com/etn-ccis/blui-react-themes/issues/66)).
- Button style override for outlined not inheriting color. ([#50](https://github.com/etn-ccis/blui-react-themes/issues/50)).

## v8.1.0 (April 21, 2025)

### Fixed

-   The text color of disabled Chips should align with the theme settings.Primary and secondary Chips should have background colors that match the dark mode theme settings ([#122](https://github.com/etn-ccis/blui-react-themes/issues/122)).
-   Contained buttons in the dark theme are displaying incorrect colors. This include the text color not matching the specified dark theme palette ([#129](https://github.com/etn-ccis/blui-react-themes/issues/129)).
-   Disabled buttons are showing incorrect colors.This includes both background and text colors ([#130](https://github.com/etn-ccis/blui-react-themes/issues/130)).
-   Outlined Chips in their default disabled state appear with incorrect styling, which  include background color or text color issues ([#134](https://github.com/etn-ccis/blui-react-themes/issues/134)).
-   Outlined buttons in the dark theme display incorrect background color when disabled. This affects the visual consistency and usability of the buttons ([#135](https://github.com/etn-ccis/blui-react-themes/issues/135)).

## v8.0.0 (December 16, 2024)

### Changed

- Updated MUI version to v6 ([#104](https://github.com/etn-ccis/blui-react-themes/pull/104)).

## v7.2.0 (October 12, 2023)

### Updated

-  Update themes to use fontSize 1.125rem for startIcons and endIcons in buttons ([#24](https://github.com/etn-ccis/blui-react-themes/issues/24)).

-  Update dark theme MuiBackdrop style override to render the backgroundColor as 'transparent' when the invisible class is applied ([#46](https://github.com/etn-ccis/blui-react-themes/issues/46)).

## v7.1.0 (November 30, 2022)

### Updated

-   Remove dependency on @mui/styles ([#47](https://github.com/etn-ccis/blui-react-themes/issues/47)).

## v7.0.0 (April 1, 2022)

### Changed

-   Updated theme structures to support Material UI version v5 ([#30](https://github.com/etn-ccis/blui-react-themes/issues/30)).

## v6.1.1 (February 9, 2022)

### Fixed

-   Fix light theme to use black 500 for divider. ([#17](https://github.com/etn-ccis/blui-react-themes/issues/17)).
-   Fixed MUI `<Input>` `filled` variant's background color when focused on mobile devices ([#2](https://github.com/etn-ccis/blui-react-themes/issues/2)).

### Changed

-   Updated MUI `<Tooltip>` font size to .75rem ([#8](https://github.com/etn-ccis/blui-react-themes/issues/8)).
-   Updated `<TableSortLabel>` styles ([#11](https://github.com/etn-ccis/blui-react-themes/issues/11)).
-   Updated `<Table>` styles ([#16](https://github.com/etn-ccis/blui-react-themes/issues/16)).

### Added

-   Added `CommonOverrides.md` for documentation and examples ([#16](https://github.com/etn-ccis/blui-react-themes/issues/16)).

## v6.1.0 (November 8, 2021)

### Changed

-   Changed package namespace from `@pxblue` to `@brightlayer-ui`.

## Package Migration Notice

Previous versions listed after this indicator refer to our deprecated `@pxblue` packages.

---

## v6.1.0 (June 30, 2021)

### Changed

-   Update auto-fill styles for MUI `<TextInput>`.
-   Update styles for disabled MUI `<Switch>`.
-   Light theme shadow base color changed back to pure black (`#000000`).

## v6.0.0 (March 29, 2021)

### Changed

-   Update deprecated `typeface-open-sans` dependency to `@fontsource/open-sans`.
-   Updates to dark theme colors.
-   Minor updates to light theme colors.
-   `<Typography>` `subtitle1` variant from regular to semibold to distinguish it from `body1`.
-   Light theme shadow now uses black500 as the base color.

## v5.0.3 (November 19, 2020)

### Added

-   Added class overrides for the secondary toolbar.

### Changed

-   Updated `filled` input field light-themed background color.

## v5.0.2 (June 30, 2020)

### Changed

-   Updated default typography styles for consistency.

## v5.0.1 (May 19, 2020)

### Changed

-   Updated themes to use [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors) version 3.0.0.

## v5.0.0 (May 8, 2020)

### Changed

-   Themes have been updated for use with Material UI v4+. If you are using version 3 of Material UI, please read their [update guide](https://material-ui.com/guides/migration-v3/). To use this package with PX Blue components, you must be using @pxblue/react-components v4+.

Notable changes in this theme:

-   Theme palettes are simplified (3 color variants instead of 10).

    ```
    // before
    backgroundColor: theme.palette.primary[500]
    backgroundColor: theme.palette.primary[50]
    backgroundColor: theme.palette.primary[700]

    // now
    backgroundColor: theme.palette.primary.main
    backgroundColor: theme.palette.primary.light
    backgroundColor: theme.palette.primary.dark
    ```

-   Older typography variants no longer supported
-   Spacing function replaces value

    ```
    // before
    theme.spacing.unit * 5

    // now
    theme.spacing(5)
    ```

## v4.0.0 (February 24, 2020)

### Changed

Themes have been broken out into their own packages. This package was originally part of @pxblue/themes. If you are switching to this package, you'll need to update some import statements (refer to the usage instructions in the README).

-   Updates default text colors to match PX Blue palette.
-   Disables automatic UPPERCASE transform on buttons.
