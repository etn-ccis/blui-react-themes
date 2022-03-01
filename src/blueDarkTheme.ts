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
    divider: Color(BLUIColors.black[200]).alpha(0.36).string(),
    warning: {
        light: BLUIColors.yellow[100],
        main: BLUIColors.yellow[300],
        dark: BLUIColors.yellow[900],
    },
    background: {
        default: BLUIColors.darkBlack[800],
        paper: BLUIColors.black[900],
    },
    text: {
        primary: BLUIColors.black[50],
        secondary: BLUIColors.black[200],
        disabled: Color(BLUIColors.black[300]).alpha(0.36).string(),
        hint: Color(BLUIColors.black[300]).alpha(0.36).string(),
    },
    action: {
        hover: Color(BLUIColors.black[50]).alpha(0.1).string(),
        active: BLUIColors.black[200],
        disabled: Color(BLUIColors.black[300]).alpha(0.36).string(),
        disabledBackground: Color(BLUIColors.black[200]).alpha(0.24).string(),
    },
};
const WhiteText = BLUIColors.white[50];
const MediumBlackBackground = BLUIColors.black[500];
const BlackText = BLUIColors.black[500];
const Spacing = 8;
// const BlackBorder = BLUIColors.black[500];

/*
    Refer to https://mui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueDarkTheme = createTheme({
    direction: "ltr",
    typography: typography,
    palette: {
        mode: "dark",
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

    components: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    color: ThemeColors.text.primary,
                    backgroundColor: BLUIColors.darkBlack[100],
                },
                colorPrimary: {
                    color: ThemeColors.text.primary,
                    backgroundColor: BLUIColors.black[800],
                },
                colorSecondary: {
                    color: ThemeColors.text.primary,
                    backgroundColor: ThemeColors.background.paper,
                },
            }
        },

        // AVATAR OVERRIDES
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: Color(BLUIColors.black[50])
                        .alpha(0.1)
                        .string(),
                    color: ThemeColors.text.primary,
                },
            },
        },

        // BACKDROP OVERRIDES
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: Color(BLUIColors.darkBlack[900])
                        .alpha(0.7)
                        .string(),
                },
            },
        },

        // BADGE OVERRIDES
        MuiBadge: {
            styleOverrides: {
                colorError: {
                    backgroundColor: ThemeColors.error.dark,
                    color: WhiteText,
                },
                colorPrimary: {
                    backgroundColor: ThemeColors.primary.dark,
                    color: WhiteText,
                },
                colorSecondary: {
                    backgroundColor: ThemeColors.secondary.dark,
                    color: WhiteText,
                },
            },
        },

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: BLUIColors.black[800],
                },
            },
        },

        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        "& .MuiBottomNavigationAction-label": {
                            fontSize: "0.75rem",
                            fontWeight: 600,
                        },
                    },
                    "&:not(.Mui-selected) .MuiBottomNavigationAction-label": {
                        color: ThemeColors.text.primary,
                    },
                },
            },
        },

        // BUTTON OVERRIDES
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: BLUIColors.black[400],
                    },
                },
                outlined: {
                    borderColor: BLUIColors.black[200],
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[50])
                            .alpha(0.1)
                            .string(),
                    },
                    "&.Mui-disabled": {
                        borderColor: Color(BLUIColors.black[200])
                            .alpha(0.36)
                            .string(),
                        color: ThemeColors.action.disabled,
                    },
                },
                outlinedPrimary: {
                    borderColor: ThemeColors.primary.main,
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.primary.dark)
                            .alpha(0.2)
                            .string(),
                    },
                },
                outlinedSecondary: {
                    "&:not(.Mui-disabled)": {
                        borderColor: ThemeColors.secondary.main,
                        "&:hover": {
                            backgroundColor: Color(ThemeColors.secondary.dark)
                                .alpha(0.2)
                                .string(),
                        },
                    },
                    "&.Mui-disabled": {
                        borderColor: Color(BLUIColors.black[200])
                            .alpha(0.36)
                            .string(),
                        color: ThemeColors.action.disabled,
                    },
                },
                contained: {
                    backgroundColor: MediumBlackBackground,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.black[400],
                    },
                    "&.Mui-disabled": {
                        backgroundColor: ThemeColors.action.disabledBackground,
                        color: BLUIColors.black[400],
                    },
                },
                containedPrimary: {
                    backgroundColor: ThemeColors.primary.dark,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                    "&.Mui-disabled": {
                        borderWidth: 0,
                    },
                },
                containedSecondary: {
                    backgroundColor: ThemeColors.secondary.dark,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                    "&.Mui-disabled": {
                        borderWidth: 0,
                    },
                },
                text: {
                    "&.Mui-disabled": {
                        color: ThemeColors.action.disabled,
                    },
                    "&:hover": {
                        backgroundColor: ThemeColors.action.hover,
                    },
                },
                textPrimary: {
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.primary.dark)
                            .alpha(0.2)
                            .string(),
                    },
                },
                textSecondary: {
                    "&:hover": {
                        backgroundColor: Color(ThemeColors.secondary.dark)
                            .alpha(0.2)
                            .string(),
                    },
                },
            },
        },

        // BUTTON GROUP OVERRIDES
        MuiButtonGroup: {
            styleOverrides: {
                groupedText: {
                    "&:not(:last-child).Mui-disabled": {
                        borderColor: ThemeColors.divider,
                    },
                },
                groupedTextPrimary: {
                    "&:not(:last-child).Mui-disabled": {
                        borderColor: ThemeColors.divider,
                    },
                },
                groupedTextSecondary: {
                    "&:not(:last-child).Mui-disabled": {
                        borderColor: ThemeColors.divider,
                    },
                },
            },
        },

        // CHIP OVERRIDES
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem",
                    backgroundColor: MediumBlackBackground,
                    color: ThemeColors.text.primary,
                    "& .MuiChip-avatar": {
                        backgroundColor: BLUIColors.black[700],
                        color: ThemeColors.text.primary,
                        marginRight: -4,
                    },
                    "& .MuiChip-avatarColorPrimary": {
                        backgroundColor: ThemeColors.primary.light,
                        color: ThemeColors.primary.dark,
                    },
                    "& .MuiChip-avatarColorSecondary": {
                        backgroundColor: ThemeColors.primary.light,
                        color: ThemeColors.primary.dark,
                    },
                    "&.Mui-disabled": {
                        opacity: 1,
                        backgroundColor: Color(BLUIColors.black[200])
                            .alpha(0.24)
                            .string(),
                        color: BLUIColors.black[400],
                        "& .MuiChip-avatar": {
                            opacity: 0.5,
                        },
                        "& .MuiChip-deleteIcon": {
                            color: ThemeColors.action.disabled,
                        },
                        "& .MuiChip-icon": {
                            color: ThemeColors.action.disabled,
                        },
                    },
                },
                clickable: {
                    "&:hover": {
                        backgroundColor: BLUIColors.black[400],
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
                deleteIcon: {
                    fontSize: "1.125rem",
                    height: "1.125rem",
                    width: "1.125rem",
                    margin: `0px ${Spacing}px 0px -4px`,
                    color: ThemeColors.text.secondary,
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
                    color: BLUIColors.blue[400],
                    "&:hover": {
                        color: ThemeColors.primary.main,
                    },
                },
                deleteIconOutlinedColorSecondary: {
                    color: BLUIColors.lightBlue[400],
                    "&:hover": {
                        color: ThemeColors.secondary.main,
                    },
                },
                colorPrimary: {
                    color: WhiteText,
                    backgroundColor: ThemeColors.primary.dark,
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                },
                colorSecondary: {
                    color: WhiteText,
                    backgroundColor: ThemeColors.secondary.dark,
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                },
                outlined: {
                    backgroundColor: ThemeColors.background.paper,
                    borderColor: Color(BLUIColors.black[200]).alpha(0.32).string(),
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: BLUIColors.black[800],
                    },
                    "& .MuiChip-avatar": {
                        backgroundColor: BLUIColors.black[600],
                        color: ThemeColors.text.primary,
                        marginRight: -4,
                    },
                    "& .MuiChip-avatarColorPrimary": {
                        backgroundColor: BLUIColors.blue[100],
                        color: ThemeColors.primary.dark,
                    },
                    "& .MuiChip-avatarColorSecondary": {
                        backgroundColor: BLUIColors.blue[100],
                        color: ThemeColors.primary.dark,
                    },
                    "& .MuiChip-icon": {
                        marginLeft: Spacing,
                        marginRight: -4,
                    },
                    "& .MuiChip-deleteIcon": {
                        margin: `0px ${Spacing}px 0px -4px`,
                    },
                    "&.Mui-disabled": {
                        opacity: 1,
                        borderColor: Color(BLUIColors.black[200])
                            .alpha(0.36)
                            .string(),
                        backgroundColor: "transparent",
                        color: BLUIColors.black[400],
                    },
                },
                outlinedPrimary: {
                    backgroundColor: Color(ThemeColors.primary.dark)
                        .alpha(0.2)
                        .string(),
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: Color(ThemeColors.primary.dark)
                            .alpha(0.3)
                            .string(),
                    },
                },
                outlinedSecondary: {
                    backgroundColor: Color(ThemeColors.secondary.dark)
                        .alpha(0.2)
                        .string(),
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: Color(ThemeColors.secondary.dark)
                            .alpha(0.3)
                            .string(),
                    },
                },
                icon: {
                    fontSize: "1.125rem",
                    color: ThemeColors.text.primary,
                    marginLeft: Spacing,
                    marginRight: -4,
                },
            },
        },

        // DRAWER OVERRIDES
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: BLUIColors.darkBlack[300],
                },
                paperAnchorBottom: {
                    backgroundColor: ThemeColors.background.paper,
                },
            },
        },

        // FAB OVERRIDES
        MuiFab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    backgroundColor: MediumBlackBackground,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.black[300],
                    },
                },
                primary: {
                    backgroundColor: ThemeColors.primary.dark,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                },
                secondary: {
                    backgroundColor: ThemeColors.secondary.dark,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                },
            },
        },

        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: ThemeColors.text.primary,
                },
            },
        },

        // MOBILE STEPPER OVERRIDES
        MuiMobileStepper: {
            styleOverrides: {
                dot: {
                    backgroundColor: Color(BLUIColors.black[300])
                        .alpha(0.36)
                        .string(),
                    margin: `0px 4px`,
                },
                dotActive: {
                    backgroundColor: ThemeColors.primary.dark,
                },
            },
        },

        // PROGRESS OVERRIDES
        MuiLinearProgress: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: Color(ThemeColors.primary.dark)
                        .darken(0.7)
                        .string(),
                },
                colorSecondary: {
                    backgroundColor: Color(ThemeColors.secondary.dark)
                        .darken(0.7)
                        .string(),
                },
                dashedColorPrimary: {
                    backgroundImage: `radial-gradient(${Color(
                        ThemeColors.primary.dark
                    )
                        .darken(0.5)
                        .string()} 0%, ${Color(ThemeColors.primary.dark)
                            .darken(0.7)
                            .string()} 16%, transparent 42%)`,
                },
                dashedColorSecondary: {
                    backgroundImage: `radial-gradient(${Color(
                        ThemeColors.secondary.dark
                    )
                        .darken(0.5)
                        .string()} 0%, ${Color(ThemeColors.secondary.dark)
                            .darken(0.7)
                            .string()} 16%, transparent 42%)`,
                },
                barColorPrimary: {
                    backgroundColor: ThemeColors.primary.dark,
                },
                barColorSecondary: {
                    backgroundColor: ThemeColors.secondary.dark,
                },
            },
        },

        MuiCircularProgress: {
            styleOverrides: {
                colorPrimary: {
                    color: ThemeColors.primary.dark,
                },
                colorSecondary: {
                    color: ThemeColors.secondary.dark,
                },
            },
        },

        // SLIDER OVERRIDES
        MuiSlider: {
            styleOverrides: {
                root: {
                    height: 6,
                    color: BLUIColors.blue[300],
                },
                colorSecondary: {
                    color: BLUIColors.lightBlue[300],
                },
                track: {
                    height: 6,
                    marginTop: -1,
                },
                rail: {
                    height: 4,
                    backgroundColor: BLUIColors.black[300],
                },
                thumb: {
                    height: 20,
                    width: 20,
                    marginTop: -8,
                    backgroundColor: ThemeColors.primary.main,
                },
                thumbColorSecondary: {
                    backgroundColor: ThemeColors.secondary.main,
                },
                mark: {
                    backgroundColor: ThemeColors.primary.dark,
                    marginTop: 1,
                },
                markActive: {
                    backgroundColor: ThemeColors.primary.dark,
                },
            }
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    // backgroundColor: BLUIColors.black[900],
                    color: BlackText,
                    "& .MuiButton-textPrimary": {
                        color: ThemeColors.primary.dark,
                    },
                    "& .MuiButton-textSecondary": {
                        color: BLUIColors.lightBlue[500],
                    },
                },
            },
        },

        // STEPPER OVERRIDES
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: ThemeColors.divider,
                },
            },
        },

        MuiStep: {
            styleOverrides: {
                // completed: {
                //     // Place a white background behind the icons so that the checks will not be see-through
                //     "& .MuiStepLabel-iconContainer:before": {
                //         content: '""',
                //         position: "absolute",
                //         display: "block",
                //         top: "5%",
                //         right: "5%",
                //         bottom: "5%",
                //         left: "5%",
                //         backgroundColor: ThemeColors.background.paper,
                //         borderRadius: "50%",
                //     },
                // },
                root: {
                    "&.Mui-completed": {
                        "& .MuiStepLabel-iconContainer:before": {
                            content: '""',
                            position: "absolute",
                            display: "block",
                            top: "5%",
                            right: "5%",
                            bottom: "5%",
                            left: "5%",
                            backgroundColor: ThemeColors.background.paper,
                            borderRadius: "50%",
                        },
                    },
                },
            },
        },

        MuiStepIcon: {
            styleOverrides: {
                root: {
                    color: BLUIColors.white[500],
                    zIndex: 1,
                    "&.Mui-active": {
                        "& .MuiStepIcon-text": {
                            fill: WhiteText,
                            fontWeight: 600,
                        },
                    },
                },
                text: {
                    fill: ThemeColors.text.primary,
                },
                // active: {
                //     "& $text": {
                //         fill: WhiteText,
                //         fontWeight: 600,
                //     },
                // },
            },
        },
    },
});
