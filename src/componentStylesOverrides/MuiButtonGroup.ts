import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from "color";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            "&.Mui-disabled": {
                border: `1px solid ${Color(BLUIColors.black[500])
                    .alpha(0.12)
                    .string()}`,
            },
        }),
        outlined: ({ theme }) => ({
            color: BLUIColors.black[50],
        }),
        groupedText: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                "&:not(:last-child).Mui-disabled": {
                    borderColor: theme.vars.palette.divider,
                },
            }),
        }),
        groupedOutlinedHorizontal: ({ theme }) => ({
            "&:not(:last-of-type)": {
                "&:hover": {
                    borderRightColor: "transparent",
                },
            },
        }),
        groupedTextPrimary: ({ theme }) => ({
            "&:not(:last-child)": {
                "&.Mui-disabled": {
                    borderColor: theme.vars.palette.divider,
                },
            },
            ...theme.applyStyles("dark", {
                "&:not(:last-child).Mui-disabled": {
                    borderColor: theme.vars.palette.divider,
                },
            }),
        }),
        groupedTextSecondary: ({ theme }) => ({
            "&:not(:last-child)": {
                "&.Mui-disabled": {
                    borderColor: theme.vars.palette.divider,
                },
            },
            ...theme.applyStyles("dark", {
                "&:not(:last-child).Mui-disabled": {
                    borderColor: theme.vars.palette.divider,
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiButtonGroup"];
