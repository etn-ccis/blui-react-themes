import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

const WhiteText = BLUIColors.white[50];

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            textTransform: "none",
            backgroundColor: theme.vars.palette.background.paper,
            color: theme.vars.palette.text.primary,
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
                color: theme.vars.palette.action.disabled,
            },
            ...theme.applyStyles("dark", {
                textTransform: "none",
                backgroundColor: BLUIColors.black[500],
                color: WhiteText,
                "&:hover": {
                    backgroundColor: BLUIColors.black[300],
                },
            }),
        }),
        primary: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.main,
            color: WhiteText,
            "&:hover": {
                backgroundColor: BLUIColors.blue[300],
            },
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.primary.dark,
                color: WhiteText,
                "&:hover": {
                    backgroundColor: BLUIColors.blue[300],
                },
            }),
        }),
        secondary: ({ theme }) => ({
            backgroundColor: theme.vars.palette.secondary.main,
            color: WhiteText,
            "&:hover": {
                backgroundColor: BLUIColors.lightBlue[300],
            },
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.secondary.dark,
                color: WhiteText,
                "&:hover": {
                    backgroundColor: BLUIColors.lightBlue[300],
                },
            }),
        }),
    },
} as Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>["MuiFab"];
