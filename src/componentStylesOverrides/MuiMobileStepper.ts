import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

export default {
    styleOverrides: {
        dot: ({ theme }) => ({
            backgroundColor: BLUIColors.gray[200],
            margin: `0px 4px`,
            ...theme.applyStyles("dark", {
                backgroundColor: Color(BLUIColors.black[300])
                    .alpha(0.36)
                    .string(),
                margin: `0px 4px`,
            }),
        }),
        dotActive: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.main,
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.primary.dark,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiMobileStepper"];
