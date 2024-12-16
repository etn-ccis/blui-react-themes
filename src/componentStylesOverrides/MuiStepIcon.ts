import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

const WhiteText = BLUIColors.white[50];

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            color: BLUIColors.white[500],
            zIndex: 1,
            "&.Mui-active": {
                color: theme.vars.palette.primary.dark,
                "& .MuiStepIcon-text": {
                    fill: WhiteText,
                    fontWeight: 600,
                },
            },
            ...theme.applyStyles("dark", {
                zIndex: 1,
                "&.Mui-active": {
                    color: theme.vars.palette.primary.dark,
                    "& .MuiStepIcon-text": {
                        fill: WhiteText,
                        fontWeight: 600,
                    },
                },
                "&.Mui-completed": {
                    color: theme.vars.palette.primary.dark,
                    "& .MuiStepIcon-text": {
                        fill: WhiteText,
                        fontWeight: 600,
                    },
                },
            }),
        }),
        text: ({ theme }) => ({
            fill: theme.vars.palette.text.primary,
            ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.primary,
                fill: BLUIColors.black[300],
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiStepIcon"];
