import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";

const WhiteText = BLUIColors.white[50];

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            textTransform: "initial",
            fontWeight: 400,
            "&.Mui-selected": {
                fontWeight: 600,
            },
            ...theme.applyStyles("dark", {
                fontWeight: 400,
                "&.Mui-selected": {
                    fontWeight: 600,
                },
            }),
        }),
        textColorPrimary: ({ theme }) => ({
            ...theme.applyStyles("light", {
                color: WhiteText,
                opacity: 0.7,
                "&.Mui-selected": {
                    color: WhiteText,
                    opacity: 1,
                },
            }),
        }),
        textColorSecondary: ({ theme }) => ({
            ...theme.applyStyles("light", {
                color: WhiteText,
                opacity: 0.7,
                "&.Mui-selected": {
                    color: WhiteText,
                    opacity: 1,
                },
            }),
        }),
        textColorInherit: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.secondary,
                opacity: 1,
                "&.Mui-selected": {
                    color: theme.vars.palette.primary.main,
                },
            }),
        }),
    },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>["MuiTab"];
