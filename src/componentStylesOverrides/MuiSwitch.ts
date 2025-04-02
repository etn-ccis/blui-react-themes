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
                color: theme.vars.palette.primary.main,
                "&.Mui-disabled": {
                    color: theme.vars.palette.secondary.main,
                    opacity: 0.8,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.38,
                    backgroundColor: theme.vars.palette.secondary.main
                },
            },
            ...theme.applyStyles("dark", {
                color: BLUIColors.black[300],
                "&.Mui-checked + .MuiSwitch-track": {
                    opacity: 0.38,
                },
                "&.Mui-checked": {
                    color: theme.vars.palette.secondary.main,
                    "&.Mui-disabled": {
                        color: theme.vars.palette.primary.main,
                    },
                    "&.Mui-disabled + .MuiSwitch-track": {
                        backgroundColor: theme.vars.palette.primary.main,
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
                    "&.Mui-disabled + .MuiSwitch-track": {
                        opacity: 0.38,
                        backgroundColor: theme.vars.palette.primary.main
                    },
                },
            })
        }),
        colorSecondary: ({ theme }) => ({
            "&.Mui-disabled": {
                color: theme.vars.palette.background.paper,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.38,
                backgroundColor: BLUIColors.black[100],
            },
            ...theme.applyStyles("dark", {
                "&.Mui-disabled": {
                    color: theme.vars.palette.Switch.defaultDisabledColor,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    backgroundColor: BLUIColors.black[300],
                    opacity: 0.38
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
