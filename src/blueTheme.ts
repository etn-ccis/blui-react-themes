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
import shadows from '@mui/material/styles/shadows';

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
                    "& .MuiButton-disableElevation:not(.MuiButton-containedPrimary):not(.MuiButton-containedSecondary)":
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
                    backgroundColor: ThemeColors.primary.main,
                    color: WhiteText,
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
                    backgroundColor: ThemeColors.secondary.main,
                    color: WhiteText,
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
                root: {
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                        
                    },
                    // "&.Mui-disabled": {
                    "&.Mui-disabled": {
                        border: `1px solid ${Color(BLUIColors.black[500])
                            .alpha(0.12)
                            .string()}`,
                    },
                    // }
                },
                contained: {
                    "&.MuiButtonGroup-grouped": {
                        "&:hover": {
                            boxShadow: shadows[4],
                        },
                    },
                },
                groupedText: {
                    "&:not(:last-child)": {
                        borderColor: ThemeColors.divider,
                    },
                },
                groupedTextPrimary: {
                    "&:not(:last-child)": {
                        borderColor: ThemeColors.divider,
                    },
                },
                groupedTextSecondary: {
                    "&:not(:last-child)": {
                        borderColor: ThemeColors.divider,
                    },
                },
                // disabled: {
                //     "&.Mui-disabled": {
                //         border: `1px solid ${Color(BLUIColors.black[500])
                //             .alpha(0.12)
                //             .string()}`,
                //     },
                // },
            },
        },

        // CHECKBOX OVERRIDES
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: ThemeColors.action.active,
                },
            },
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
                    backgroundColor: ThemeColors.primary.main,
                    color: WhiteText,
                    "&:not(.MuiChip-outlinedPrimary).Mui-disabled": {
                        backgroundColor: ThemeColors.primary.light,
                        color: BLUIColors.blue[200],
                        opacity: 1,
                    },
                },
                colorSecondary: {
                    backgroundColor: ThemeColors.secondary.main,
                    color: WhiteText,
                    "&:not(.MuiChip-outlinedSecondary).Mui-disabled": {
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
                    // color: BLUIColors.blue[200],
                    "&:hover": {
                        color: ThemeColors.primary.main,
                    },
                },
                deleteIconOutlinedColorSecondary: {
                    // color: BLUIColors.lightBlue[200],
                    "&:hover": {
                        color: ThemeColors.secondary.main,
                    },
                },
                iconColorPrimary: {
                    color: 'inherit',
                },
                iconColorSecondary: {
                    color: 'inherit',
                },
                outlined: {
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                    backgroundColor: 'transparent',
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: BLUIColors.white[200],
                    },
                    "& .MuiChip-avatar": {
                        backgroundColor: BLUIColors.gray[500],
                        marginRight: -4,
                    },
                    "& .MuiChip-avatarColorPrimary": {
                        backgroundColor: BLUIColors.blue[100],
                        color: ThemeColors.primary.main,
                    },
                    "& .MuiChip-avatarColorSecondary": {
                        backgroundColor: BLUIColors.blue[100],
                        color: ThemeColors.primary.main,
                    },
                    "& .MuiChip-icon": {
                        marginLeft: Spacing,
                        marginRight: -4,
                    },
                    "& .MuiChip-deleteIcon": {
                        margin: `0px ${Spacing}px 0px -4px`,
                    },
                    "&.Mui-disabled .MuiChip-deleteIcon": {
                        color: "inherit",
                    },
                },
                outlinedPrimary: {
                    backgroundColor: Color(ThemeColors.primary.main)
                        .alpha(0.05)
                        .string(),
                    border: `1px solid ${ThemeColors.primary.main}`,
                    color: ThemeColors.primary.main,
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: Color(ThemeColors.primary.main)
                            .alpha(0.1)
                            .string(),
                    },
                    "&.Mui-disabled": {
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
                    border: `1px solid ${ThemeColors.secondary.main}`,
                    color: ThemeColors.secondary.main,
                    "&.MuiChip-clickable:hover": {
                        backgroundColor: Color(ThemeColors.secondary.main)
                            .alpha(0.1)
                            .string(),
                    },
                    "&.Mui-disabled": {
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
            },
        },

        // FAB OVERRIDES
        MuiFab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    backgroundColor: ThemeColors.background.paper,
                    color: ThemeColors.text.primary,
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                    },
                    "&.Mui-disabled": {
                        backgroundColor: ThemeColors.background.paper,
                        border: `1px solid ${Color(BlackBorder)
                            .alpha(0.12)
                            .string()}`,
                        color: ThemeColors.action.disabled,
                    },
                },
                primary: {
                    backgroundColor: ThemeColors.primary.main,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                },
                secondary: {
                    backgroundColor: ThemeColors.secondary.main,
                    color: WhiteText,
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                },
                disabled: {},
            },
        },

        // LIST ITEM OVERRIDES
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: ThemeColors.text.primary,
                },
            }
        },

        // MOBILE STEPPER OVERRIDES
        MuiMobileStepper: {
            styleOverrides: {
                dot: {
                    backgroundColor: BLUIColors.gray[200],
                    margin: `0px 4px`,
                },
                dotActive: {
                    backgroundColor: ThemeColors.primary.main,
                },
            },
        },

        // PROGRESS OVERRIDES
        MuiLinearProgress: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: BLUIColors.blue[100],
                },
                colorSecondary: {
                    backgroundColor: BLUIColors.lightBlue[100],
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
                track: {
                    height: 6,
                    // Size medium will give default CSS
                    // marginTop: -1,
                },
                rail: {
                    height: 4,
                    backgroundColor: BLUIColors.black[100],
                },
                thumb: {
                    // height: 20,
                    // width: 20,
                    // marginTop: -8,
                    backgroundColor: ThemeColors.primary.main,
                },
                thumbColorSecondary: {
                    backgroundColor: ThemeColors.secondary.main,
                },
                mark: {
                    backgroundColor: BLUIColors.blue[200],
                    // marginTop: 1,
                },
                markActive: {
                    backgroundColor: BLUIColors.blue[200],
                },
                // CSS has changed
                valueLabel: {
                    backgroundColor: BLUIColors.blue[200],
                }
            },
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: BLUIColors.black[900],
                    color: BLUIColors.black[50],
                    "& .MuiButton-textPrimary": {
                        color: BLUIColors.blue[200],
                    },
                    "& .MuiButton-textSecondary": {
                        color: BLUIColors.lightBlue[200],
                    },
                },
            },
        },

        // STEPPER OVERRIDES
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
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
                      }
                    }
                  }
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
                        }
                      }
                },
                text: {
                    fill: ThemeColors.text.primary,
                },
                // active: {
                //     "& .MuiStepIcon-text": {
                //         fill: WhiteText,
                //         fontWeight: 600,
                //     },
                // },
            },
        },

        MuiStepLabel: {
            styleOverrides: {
                label: {
                    color: ThemeColors.text.primary,
                    "&.Mui-active": {
                        fontWeight: 600,
                        color: ThemeColors.primary.main,
                    },
                    "&.Mui-completed": {
                        fontWeight: 600,
                    },
                },
                iconContainer: {
                    position: "relative",
                },
            },
        },

        // SWITCH OVERRIDES
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: ThemeColors.background.paper,
                    "&.Mui-checked + .MuiSwitch-track": {
                        opacity: 0.38,
                    },
                    "&.Mui-checked": {
                        color: ThemeColors.secondary.main,
                        "&.Mui-disabled": {
                            color: Color(ThemeColors.secondary.main)
                                .mix(Color(ThemeColors.background.paper), 0.5)
                                .string(),
                        },
                        "&.Mui-disabled + .MuiSwitch-track": {
                            backgroundColor: ThemeColors.secondary.main,
                        },
                    },
                },
                colorPrimary: {
                    "&.Mui-disabled": {
                        color: ThemeColors.background.paper,
                    },
                    "&.Mui-disabled + .MuiSwitch-track": {
                        backgroundColor: BLUIColors.black[100],
                    },
                    "&.Mui-checked": {
                        color: ThemeColors.primary.main,
                        "&.Mui-disabled": {
                            color: Color(ThemeColors.primary.main)
                                .mix(Color(ThemeColors.background.paper), 0.5)
                                .string(),
                        },
                        "&.Mui-disabled + .MuiSwitch-track": {
                            opacity: 0.38,
                            backgroundColor: Color(ThemeColors.primary.main)
                                .mix(Color(ThemeColors.background.paper), 0.5)
                                .string(),
                        },
                    },
                },
                colorSecondary: {
                    "&.Mui-disabled": {
                        color: ThemeColors.background.paper,
                    },
                    "&.Mui-disabled + .MuiSwitch-track": {
                        backgroundColor: BLUIColors.black[100],
                    },
                },
                track: {
                    backgroundColor: BLUIColors.black[100],
                    opacity: 0.38,
                },
            },
        },

        // TABLE OVERRIDES
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: 600,
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: ThemeColors.background.paper,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: Color(BLUIColors.white[100])
                            .mix(Color(BLUIColors.black[50]), 0.5)
                            .string(),
                    },
                    "&.Mui-selected": {
                        backgroundColor: Color(ThemeColors.primary.main)
                            .alpha(0.05)
                            .string(),
                        "&.MuiTableRow-hover:hover": {
                            backgroundColor: Color(ThemeColors.primary.main)
                                .alpha(0.07)
                                .string(),
                        },
                    },
                },
            },
        },

        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        color: ThemeColors.text.primary,
                        "& .MuiTableSortLabel-icon": {
                            color: ThemeColors.text.secondary,
                            opacity: 1,
                        },
                    },
                },
                icon: {
                    opacity: 1,
                    color: Color(BLUIColors.gray[500]).alpha(0.12).string(),
                },
            },
        },

        // TABS OVERRIDES
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    "&.Mui-selected": {
                        fontWeight: 600,
                    },
                },
                // removed wrapper class in MUIv5
                // labelIcon: {
                //     "& $wrapper > *:first-child": {
                //         marginBottom: 0,
                //     },
                // },
                textColorPrimary: {
                    color: WhiteText,
                    opacity: 0.7,
                    "&.Mui-selected": {
                        color: WhiteText,
                        opacity: 1,
                    },
                },
                textColorSecondary: {
                    color: WhiteText,
                    opacity: 0.7,
                    "&.Mui-selected": {
                        color: WhiteText,
                        opacity: 1,
                    },
                },
            },
        },

        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: ThemeColors.background.paper,
                },
            },
        },

        // TOOLTIP OVERRIDES
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "0.75rem",
                },
            },
        },

        // TEXT FIELD OVERRIDES
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: ThemeColors.action.disabled,
                    },
                },
                input: {
                    "&::placeholder": {
                        color: BLUIColors.black[100],
                        opacity: 1,
                    },
                    "&:-webkit-autofill": {
                        "-webkit-box-shadow": `0 0 0 30px ${BLUIColors.white[50]} inset`,
                    },
                },
            },
        },

        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: ThemeColors.divider,
                    },
                    "&:not(.Mui-disabled):hover:before": {
                        borderBottomWidth: 1,
                        borderBottomColor: BlackBorder,
                    },
                    "&.Mui-disabled:before": {
                        borderBottomColor: ThemeColors.divider,
                        borderBottomStyle: "solid",
                    },
                    "&.Mui-error:not(.Mui-focused):after": {
                        borderBottomWidth: 1,
                    },
                    "&.Mui-error:not(.Mui-focused)&:hover:after": {
                        borderBottomColor: ThemeColors.error.dark,
                    },
                },
            }
        },

        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: ThemeColors.background.default,
                    "&:hover": {
                        "@media (hover: none)": {
                            backgroundColor: BLUIColors.white[400]
                        },
                        backgroundColor: BLUIColors.white[400]
                    },
                    "&.Mui-focused": {
                        backgroundColor: ThemeColors.background.default,
                    },
                    "&.Mui-disabled": {
                        color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                        backgroundColor: BLUIColors.white[100],
                        pointerEvents: "none",
                    },
                },
                input: {
                    "&:-webkit-autofill": {
                        "-webkit-box-shadow": `0 0 0 30px ${ThemeColors.background.default} inset`,
                    },
                },
                underline: {
                    "&:before": {
                        borderBottomColor: ThemeColors.divider,
                    },
                    "&.Mui-error:not(.Mui-focused):after": {
                        borderBottomWidth: 1,
                    },
                    "&.Mui-disabled:before": {
                        borderBottomColor: ThemeColors.divider,
                        borderBottomStyle: "solid",
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: ThemeColors.divider,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: BLUIColors.gray[500],
                    },
                    "&.Mui-error.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: ThemeColors.error.main,
                    },
                    "&.Mui-error:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
                        borderColor: ThemeColors.error.dark,
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: ThemeColors.divider,
                    },
                },
                notchedOutline: {
                    borderColor: ThemeColors.divider,
                },
            },
        },

        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: ThemeColors.text.secondary,
                    "&.Mui-disabled": {
                        color: ThemeColors.action.disabled,
                    },
                    "&.MuiFormLabel-filled:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error)": {
                        color: ThemeColors.text.primary,
                    },
                    "&.Mui-error.MuiFormLabel-colorSecondary.Mui-focused": {
                        color: ThemeColors.error.main,
                    },
                },
            },
        },

        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: ThemeColors.action.disabled,
                    },
                },
            },
        },

        // TOGGLE BUTTON OVERRIDES (LAB)
        // @ts-ignore
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    backgroundColor: ThemeColors.background.paper,
                },
                groupedHorizontal: {
                    "&:not(:first-child)": {
                        marginLeft: 0,
                    },
                },
                groupedVertical: {
                    "&:not(:first-child)": {
                        marginTop: 0,
                    },
                },
            },
        },

        // @ts-ignore
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    backgroundColor: ThemeColors.background.paper,
                    color: ThemeColors.text.hint,
                    borderColor: BLUIColors.gray[100],
                    "&:hover": {
                        backgroundColor: Color(BLUIColors.black[500])
                            .alpha(0.05)
                            .string(),
                    },
                    "&.Mui-selected": {
                        backgroundColor: ThemeColors.primary.light,
                        color: ThemeColors.primary.main,
                        "&:hover": {
                            backgroundColor: BLUIColors.blue[100],
                        },
                    },
                },
            },
        },
      },
});
