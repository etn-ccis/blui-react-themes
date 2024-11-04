import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

export default {
    styleOverrides: {
        line: ({ theme }) => ({
            borderColor: Color(BLUIColors.black[500]).alpha(0.12).string(),
            ...theme.applyStyles("dark", {
                borderColor: theme.vars.palette.divider,
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiStepConnector"];
