/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { createTheme } from '@mui/material/styles';
import {
    typography,
    createSimpleLightPalette as createSimplePalette,
} from "./shared";
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from "color";

/*
    Variable color definitions so we can reuse them in the theme overrides below
*/
const ThemeColors = {
    primary: createSimplePalette(BLUIColors.blue),
    secondary: createSimplePalette(BLUIColors.lightBlue),
    error: createSimplePalette(BLUIColors.red),
    success: createSimplePalette(BLUIColors.green),
    info: createSimplePalette(BLUIColors.lightBlue),
    divider: Color(BLUIColors.black[500]).alpha(0.12).string(),
    warning: {
        light: BLUIColors.yellow[100],
        main: BLUIColors.yellow[500],
        dark: BLUIColors.yellow[900],
    },
    background: {
        default: BLUIColors.white[200],
        paper: BLUIColors.white[50],
    },
    text: {
        primary: BLUIColors.black[500],
        secondary: BLUIColors.gray[500],
        // disabled: Color(BLUIColors.black[500]).alpha(0.3).string(),
        hint: BLUIColors.gray[500],
    },
    action: {
        // hover: Color(BLUIColors.black[50]).alpha(0.1).string(),
        active: BLUIColors.gray[500],
        disabled: Color(BLUIColors.black[500]).alpha(0.3).string(),
        // disabledBackground: Color(BLUIColors.black[200]).alpha(0.24).string(),
    },
};
const WhiteText = BLUIColors.white[50];
const BlackBorder = BLUIColors.black[500];
const Spacing = 8;

/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueTheme = createTheme ({
    direction: "ltr",
    typography: typography,
    palette: {
        mode: "light",
        primary: ThemeColors.primary,
        secondary: ThemeColors.secondary,
        error: ThemeColors.error,
        success: ThemeColors.success,
        info: ThemeColors.info,
        divider: ThemeColors.divider,
        warning: ThemeColors.warning,
        background: ThemeColors.background,
        text: ThemeColors.text,
        action: ThemeColors.action,
    },
    // overrides: {
    //     MuiButton: {
    //         root: {
    //             // Some CSS
    //             textTransform: "none",
    //           }, 
    //     }
    // },
    components: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    color: ThemeColors.text.primary,
                    backgroundColor: ThemeColors.background.paper,
                },
                colorSecondary: {
                    color: ThemeColors.background.paper,
                    backgroundColor: ThemeColors.primary.dark,
                    "& .MuiInputBase-root": {
                        color: ThemeColors.background.paper,
                    },
                    "& .MuiSelect-icon": {
                        color: ThemeColors.background.paper,
                    },
                },
            },
        },

        // AVATAR OVERRIDES
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
            }
        },

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: ThemeColors.primary.main,
                },
            }
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: BLUIColors.blue[200],
                    "&.Mui-selected": {
                        color: WhiteText,
                        "& .MuiBottomNavigationAction-label": {
                            fontSize: "0.75rem",
                            fontWeight: 600,
                        },
                    },
                },
                selected: {},
                label: {},
            }
        },
        // BUTTON OVERRIDES
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                contained: {
                    backgroundColor: ThemeColors.background.paper,
                    color: ThemeColors.text.primary,
                    "&.MuiButton-disableElevation:not(.MuiButton-containedPrimary):not(.MuiButton-containedSecondary)":
                        {
                            backgroundColor: BLUIColors.white[500],
                            "&:hover": {
                                backgroundColor: BLUIColors.white[300],
                            },
                            "&.Mui-disabled": {
                                borderWidth: 0,
                            },
                        },
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                    },
                    "&.Mui-disabled": {
                        backgroundColor: ThemeColors.background.paper,
                        border: `1px solid ${Color(BLUIColors.black[500])
                            .alpha(0.12)
                            .string()}`,
                        color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                    },
                },
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                    "&.Mui-disabled": {
                        backgroundColor: ThemeColors.primary.light,
                        borderWidth: 0,
                        color: BLUIColors.blue[200],
                        opacity: 1,
                    },
                },
                containedSecondary: {
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                    "&.Mui-disabled": {
                        backgroundColor: ThemeColors.secondary.light,
                        borderWidth: 0,
                        color: BLUIColors.lightBlue[200],
                        opacity: 1,
                    },
                },
                outlined: {
                    borderColor: ThemeColors.divider,
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                    },
                    "&.Mui-disabled": {
                        backgroundColor: ThemeColors.background.paper,
                        borderColor: Color(BlackBorder).alpha(0.12).string(),
                        color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                    },
                },
                outlinedPrimary: {
                    borderColor: ThemeColors.primary.main,
                    "&.Mui-disabled": {
                        borderColor: Color(BlackBorder).alpha(0.12).string(),
                    },
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.primary.main)
                            .alpha(0.05)
                            .string(),
                    },
                },
                outlinedSecondary: {
                    borderColor: ThemeColors.secondary.main,
                    "&.Mui-disabled": {
                        borderColor: Color(BlackBorder).alpha(0.12).string(),
                    },
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.secondary.main)
                            .alpha(0.05)
                            .string(),
                    },
                },
                text: {
                    "&.Mui-disabled": {
                        color: ThemeColors.action.disabled,
                    },
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                    },
                },
                textPrimary: {
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.primary.main)
                            .alpha(0.05)
                            .string(),
                    },
                },
                textSecondary: {
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.secondary.main)
                            .alpha(0.05)
                            .string(),
                    },
                },
                disabled: {},
                disableElevation: {},
            },
        },
        // BUTTON GROUP OVERRIDES
        MuiButtonGroup: {
            styleOverrides: {
                groupedText: {
                    "&:not(:last-child)&.Mui-disabled": {
                        borderColor: ThemeColors.divider,
                    },
                },
                groupedTextPrimary: {
                    "&:not(:last-child)&.Mui-disabled": {
                        borderColor: ThemeColors.divider,
                    },
                },
                groupedTextSecondary: {
                    "&:not(:last-child)&.Mui-disabled": {
                        borderColor: ThemeColors.divider,
                    },
                },
                disabled: {},
            }
        },

        // CHECKBOX OVERRIDES
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: ThemeColors.action.active,
                },
            }
        },

        // CHIP OVERRIDES
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem",
                    backgroundColor: BLUIColors.white[500],
                    color: ThemeColors.text.primary,
                    "& .MuiChip-avatar": {
                        backgroundColor: ThemeColors.primary.main,
                        color: WhiteText,
                        // marginLeft: Spacing,
                        marginRight: -4,
                    },
                    "& .MuiChip-avatarColorPrimary": {
                        backgroundColor: ThemeColors.primary.light,
                        color: ThemeColors.primary.main,
                    },
                    "& .MuiChip-avatarColorSecondary": {
                        backgroundColor: ThemeColors.primary.light,
                        color: ThemeColors.primary.main,
                    },
                    "&.Mui-disabled": {
                        opacity: 1,
                        color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                        "& .MuiChip-avatar": {
                            opacity: 0.5,
                        },
                        "&:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary) .MuiChip-deleteIcon": {
                            color: ThemeColors.action.disabled,
                        },
                        "&:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary) .MuiChip-icon": {
                            color: ThemeColors.action.disabled,
                        },
                    },
                },
                clickable: {
                    "&:hover": {
                        backgroundColor: BLUIColors.gray[100],
                    },
                },
                clickableColorPrimary: {
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                },
                clickableColorSecondary: {
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                },
                colorPrimary: {
                    "&:not($outlinedPrimary).Mui-disabled": {
                        backgroundColor: ThemeColors.primary.light,
                        color: BLUIColors.blue[200],
                        opacity: 1,
                    },
                },
                colorSecondary: {
                    "&:not($outlinedSecondary).Mui-disabled": {
                        backgroundColor: ThemeColors.secondary.light,
                        color: BLUIColors.lightBlue[200],
                        opacity: 1,
                    },
                },
                deleteIcon: {
                    fontSize: "1.125rem",
                    height: "1.125rem",
                    width: "1.125rem",
                    margin: `0px ${Spacing}px 0px -4px`,
                    color: ThemeColors.action.active,
                    "&:hover": {
                        color: ThemeColors.text.primary,
                    },
                },
                deleteIconColorPrimary: {
                    color: BLUIColors.blue[100],
                    "&:hover": {
                        color: WhiteText,
                    },
                },
                deleteIconColorSecondary: {
                    color: BLUIColors.lightBlue[100],
                    "&:hover": {
                        color: WhiteText,
                    },
                },
                deleteIconOutlinedColorPrimary: {
                    color: BLUIColors.blue[200],
                    "&:hover": {
                        color: ThemeColors.primary.main,
                    },
                },
                deleteIconOutlinedColorSecondary: {
                    color: BLUIColors.lightBlue[200],
                    "&:hover": {
                        color: ThemeColors.secondary.main,
                    },
                },
                outlined: {
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                    ".MuiChip-outlined-clickable:hover": {
                        backgroundColor: BLUIColors.white[200],
                    },
                    ".MuiChip-avatar": {
                        backgroundColor: BLUIColors.gray[500],
                        marginRight: -4,
                    },
                    ".MuiChip-avatarColorPrimary": {
                        backgroundColor: BLUIColors.blue[100],
                        color: ThemeColors.primary.main,
                    },
                    ".MuiChip-avatarColorSecondary": {
                        backgroundColor: BLUIColors.blue[100],
                        color: ThemeColors.primary.main,
                    },
                    ".MuiChip-icon": {
                        marginLeft: Spacing,
                        marginRight: -4,
                    },
                    ".MuiChip-deleteIcon": {
                        margin: `0px ${Spacing}px 0px -4px`,
                    },
                    ".Mui-disabled .MuiChip-deleteIcon": {
                        color: "inherit",
                    },
                },
                outlinedPrimary: {
                    backgroundColor: Color(ThemeColors.primary.main)
                        .alpha(0.05)
                        .string(),
                    ".MuiChip-clickable:hover": {
                        backgroundColor: Color(ThemeColors.primary.main)
                            .alpha(0.1)
                            .string(),
                    },
                    ".Mui-disabled": {
                        opacity: 1,
                        backgroundColor: ThemeColors.background.paper,
                        color: ThemeColors.action.disabled,
                        borderColor: Color(BlackBorder).alpha(0.12).string(),
                    },
                },
                outlinedSecondary: {
                    backgroundColor: Color(ThemeColors.secondary.main)
                        .alpha(0.05)
                        .string(),
                    ".MuiChip-clickable:hover": {
                        backgroundColor: Color(ThemeColors.secondary.main)
                            .alpha(0.1)
                            .string(),
                    },
                    ".Mui-disabled": {
                        opacity: 1,
                        backgroundColor: ThemeColors.background.paper,
                        color: ThemeColors.action.disabled,
                        borderColor: Color(BlackBorder).alpha(0.12).string(),
                    },
                },
                icon: {
                    fontSize: "1.125rem",
                    color: ThemeColors.text.primary,
                    marginLeft: Spacing,
                    marginRight: -4,
                },
                avatar: {},
                disabled: {},
                label: {},
                avatarColorPrimary: {},
                avatarColorSecondary: {},
            } 
        },
      },
});
