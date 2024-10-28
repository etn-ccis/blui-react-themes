import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({theme}) => ({
                "&.MuiPickersDay-root": {
                    backgroundColor: "transparent",
                },
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiButtonBase"];
