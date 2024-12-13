import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, CssVarsTheme, Theme } from "@mui/material/styles";
import Color from "color";

export default {
    styleOverrides: {
        colorDefault: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.light,
            color: theme.vars.palette.primary.main,
            ...theme.applyStyles("dark", {
                backgroundColor: Color(BLUIColors.black[50])
                    .alpha(0.1)
                    .string(),
                color: theme.vars.palette.text.primary,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiAvatar"];
