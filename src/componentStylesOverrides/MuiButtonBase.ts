import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({theme}) => ({
            // ...theme.applyStyles('light', {
                "&.MuiPickersDay-root": {
                    backgroundColor: "transparent",
                },
            // })
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiButtonBase"];
