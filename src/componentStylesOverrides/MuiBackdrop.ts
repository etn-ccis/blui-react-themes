import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from "color";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                backgroundColor: Color(BLUIColors.darkBlack[900])
                    .alpha(0.7)
                    .string(),
            }),
        }),
        invisible: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                backgroundColor: "transparent",
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiBackdrop"];
