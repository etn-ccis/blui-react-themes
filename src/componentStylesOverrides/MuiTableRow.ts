import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

const MediumBlackBackground = BLUIColors.black[500];

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            "&.MuiTableRow-hover:hover": {
                backgroundColor: Color(BLUIColors.white[100])
                    .mix(Color(BLUIColors.black[50]), 0.5)
                    .string(),
            },
            "&.Mui-selected": {
                backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.05)`,
                "&.MuiTableRow-hover:hover": {
                    backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.05)`,
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.primary.main} / 0.07)`,
                    },
                },
            },
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.primary,
                "&.MuiTableRow-hover:hover": {
                    backgroundColor: Color(BLUIColors.darkBlack[300])
                        .mix(Color(MediumBlackBackground), 0.5)
                        .string(),
                },
                "&.Mui-selected": {
                    backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.2)`,
                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.2)`,
                        "&.MuiTableRow-hover:hover": {
                            backgroundColor: `rgba(${theme.vars.palette.primary.dark} / 0.3)`,
                        },
                    },
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiTableRow"];
