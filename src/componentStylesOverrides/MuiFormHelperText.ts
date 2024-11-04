import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
        styleOverrides: {
            root: ({theme}) => ({
                ...theme.applyStyles('light', {
                    "&.Mui-disabled": {
                        color: theme.vars.palette.action.disabled,
                    },
                })
            }),
    }
} as Components<
Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiFormHelperText"];
