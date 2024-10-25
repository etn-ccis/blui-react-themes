
import { Components, Theme, CssVarsTheme } from '@mui/material/styles';
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from 'color';

export default {
        styleOverrides: {
            root: ({theme}) => ({
                textTransform: "none",
                ...theme.applyStyles('dark', {
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: BLUIColors.black[400],
                    },
                })
            }),
            iconSizeMedium: ({theme}) => ({
                "& > *:nth-of-type(1)": {                  
                  fontSize: "1.125rem",
              },
              ...theme.applyStyles('dark', {
                "& > *:nth-of-type(1)": {                  
                    fontSize: "1.125rem",
                },
              })
            }),
            contained: ({theme}) => ({
                backgroundColor: theme.vars.palette.background.paper,
                color: theme.vars.palette.text.primary,
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
                    backgroundColor: theme.vars.palette.background.paper,
                    border: `1px solid ${Color(BLUIColors.black[500])
                        .alpha(0.12)
                        .string()}`,
                    color: `rgba(${theme.vars.palette.text.primary} / 0.3)`
                },
                ...theme.applyStyles('dark', {
                    backgroundColor: BLUIColors.black[500],
                    color: BLUIColors.white[50],
                    "&:hover": {
                        backgroundColor: BLUIColors.black[400],
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.vars.palette.action.disabledBackground,
                        color: BLUIColors.black[400],
                    },
                })
            }),
            containedPrimary: ({theme}) => ({
                backgroundColor: theme.vars.palette.primary.main,
                color: BLUIColors.white[50],
                "&:hover": {
                    backgroundColor: BLUIColors.blue[300],
                },
                "&.Mui-disabled": {
                    backgroundColor: theme.vars.palette.primary.light,
                    borderWidth: 0,
                    color: BLUIColors.blue[200],
                    opacity: 1,
                },
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.vars.palette.primary.dark,
                    color: BLUIColors.white[50],
                    "&:hover": {
                        backgroundColor: BLUIColors.blue[300],
                    },
                    "&.Mui-disabled": {
                        borderWidth: 0,
                    },
                })
            }),
            containedSecondary: ({theme}) => ({
                backgroundColor: theme.vars.palette.secondary.main,
                color: BLUIColors.white[50],
                "&:hover": {
                    backgroundColor: BLUIColors.lightBlue[300],
                },
                "&.Mui-disabled": {
                    backgroundColor: theme.vars.palette.secondary.light,
                    borderWidth: 0,
                    color: BLUIColors.lightBlue[200],
                    opacity: 1,
                },
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.vars.palette.secondary.dark,
                    color: BLUIColors.white[50],
                    "&:hover": {
                        backgroundColor: BLUIColors.lightBlue[300],
                    },
                    "&.Mui-disabled": {
                        borderWidth: 0,
                    },
                })
            }),
            outlined: ({ theme }) => ({
                borderColor: theme.vars.palette.divider,
                "&:hover": {
                    backgroundColor: Color(BLUIColors.black[500])
                        .alpha(0.05)
                        .string(),
                },
                "&.Mui-disabled": {
                    backgroundColor: theme.vars.palette.background.paper,
                    borderColor: Color(BLUIColors.black[500]).alpha(0.12).string(),
                    color: `rgba(${theme.vars.palette.text.primary} / 0.3)`
                },
                ...theme.applyStyles('dark', {
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
                        color: theme.vars.palette.action.disabled,
                    },
                })
            }),
            outlinedPrimary: ({ theme }) => ({
                borderColor: theme.vars.palette.primary.main,
                "&.Mui-disabled": {
                    borderColor: Color(BLUIColors.black[500]).alpha(0.12).string(),
                },
                "&:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.05)`,
                },
                ...theme.applyStyles('dark', {
                    borderColor: theme.vars.palette.primary.main,
                    "&:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.2)`,
                    },
                })
            }),
            outlinedSecondary: ({ theme }) => ({
                borderColor: theme.vars.palette.secondary.main,
                "&.Mui-disabled": {
                    borderColor: Color(BLUIColors.black[500]).alpha(0.12).string(),
                },
                "&:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.secondary.main} / 0.05)`,
                },
                ...theme.applyStyles('dark', {
                    "&:not(.Mui-disabled)": {
                        borderColor: theme.vars.palette.secondary.main,
                        "&:hover": {
                            backgroundColor: `rgba(${theme.vars.palette.secondary.dark} / 0.2)`,
                        },
                    },
                    "&.Mui-disabled": {
                        borderColor: Color(BLUIColors.black[200])
                            .alpha(0.36)
                            .string(),
                        color: theme.vars.palette.action.disabled,
                    },
                })
            }),
            text: ({ theme }) => ({
                "&.Mui-disabled": {
                    color: theme.vars.palette.action.disabled,
                },
                "&:hover": {
                    backgroundColor: Color(BLUIColors.black[500])
                        .alpha(0.05)
                        .string(),
                },
                ...theme.applyStyles('dark', {
                    "&.Mui-disabled": {
                        color: theme.vars.palette.action.disabled,
                    },
                    "&:hover": {
                        backgroundColor: theme.vars.palette.action.hover,
                    },
                })
            }),
            textPrimary: ({ theme }) => ({
                "&:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.05)`,
                },
                ...theme.applyStyles('dark', {
                    "&:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.2)`,
                    },
                })
            }),
            textSecondary: ({ theme }) => ({
                "&:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.secondary.main} / 0.05)`,
                },
                ...theme.applyStyles('dark', {
                    "&:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.secondary.dark} / 0.2)`,
                    },
                })
            }),
        },
} as Components<
Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiButton"];


