import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            "&.Mui-disabled": {
                color: theme.vars.palette.action.disabled,
            },
            ...theme.applyStyles("dark", {
                "&.Mui-disabled": {
                    color: theme.vars.palette.text.disabled,
                },
            }),
        }),
        input: ({ theme }) => ({
            "&::placeholder": {
                color: BLUIColors.black[100],
                opacity: 1,
            },
            "&:-webkit-autofill": {
                WebkitBoxShadow: `0 0 0 30px ${BLUIColors.white[50]} inset`,
            },
            ...theme.applyStyles("dark", {
                "&::placeholder": {
                    color: BLUIColors.black[300],
                    opacity: 0.36,
                },
                "&:-webkit-autofill": {
                    WebkitBoxShadow: `0 0 0 100px ${theme.vars.palette.background.paper} inset`,
                    WebkitTextFillColor: theme.vars.palette.text.primary,
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiInputBase"];
