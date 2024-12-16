import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

export default {
    styleOverrides: {
        switchBase: ({ theme }) => ({
            color: theme.vars.palette.background.paper,
            "&.Mui-checked + .MuiSwitch-track": {
                opacity: 0.38,
            },
            "&.Mui-checked": {
                color: theme.vars.palette.secondary.main,
                "&.Mui-disabled": {
                    color: `rgba(${theme.vars.palette.secondary.main} / 0.5)`
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: theme.vars.palette.secondary.main,
                },
            },
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.primary,
                "&.Mui-checked + .MuiSwitch-track": {
                    opacity: 0.38,
                },
                "&.Mui-checked": {
                    color: theme.vars.palette.secondary.main,
                    "&.Mui-disabled": {
                        color: `rgba(${theme.vars.palette.secondary.main} / 0.5)`
                    },
                    "&.Mui-disabled + .MuiSwitch-track": {
                        backgroundColor: theme.vars.palette.secondary.main,
                    },
                },
            }),
        }),
        colorPrimary: ({ theme }) => ({
            ...theme.applyStyles('light', {
                "&.Mui-disabled": {
                    color: Color(BLUIColors.white[50]).string()
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: BLUIColors.black[300],
                },
                "&.Mui-checked": {
                    color: theme.vars.palette.primary.main,
                    "&.Mui-disabled": {
                        color: `rgba(${theme.vars.palette.primary.main} / 0.5)`
                    },
                    "&.Mui-disabled + .MuiSwitch-track": {
                        opacity: 0.38,
                        backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.5)`
                    },
                },
            })
        }),
        colorSecondary: ({ theme }) => ({
            "&.Mui-disabled": {
                color: theme.vars.palette.background.paper,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                backgroundColor: BLUIColors.black[100],
            },
            ...theme.applyStyles("dark", {
                "&.Mui-disabled": {
                    color: Color(BLUIColors.white[50]).string()
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: BLUIColors.black[300],
                },
            }),
        }),
        track: ({ theme }) => ({
            backgroundColor: BLUIColors.black[100],
            opacity: 0.38,
            ...theme.applyStyles("dark", {
                backgroundColor: BLUIColors.black[300],
                opacity: 0.38,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiSwitch"];
