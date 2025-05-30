import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";
import Color from "color";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            height: 6,
            color: BLUIColors.blue[300],
            ...theme.applyStyles("dark", {
                height: 6,
                color: BLUIColors.blue[300],
            }),           
                "&.Mui-disabled": {
                    color: theme.vars.palette.primary.main,
                    opacity: 0.5,
                },
                  "&.Mui-disabled .MuiSlider-track": {
                    opacity: 0.38,
                    backgroundColor: theme.vars.palette.primary.main
                },
                
            
        }),
        colorSecondary: ({ theme }) => ({
            color: theme.vars.palette.secondary.main,
            ...theme.applyStyles("dark", {
                color: BLUIColors.lightBlue[300],
            }),
        }),
        track: ({ theme }) => ({
            height: 6,
           backgroundColor: theme.vars.palette.primary.main,      
         ...theme.applyStyles("dark", {
                 height: 6,
                 
            }),
        }),
        rail: ({ theme }) => ({
            height: 4,
            backgroundColor: BLUIColors.black[100],
            ...theme.applyStyles("dark", {
                height: 4,
                backgroundColor: BLUIColors.black[300],
            }),
        }),
        thumb: ({ theme }) => ({
            backgroundColor: theme.vars.palette.primary.main,
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.primary.main,
            }),
             "&.Mui-disabled": {
               backgroundColor: theme.vars.palette.primary.main,
         },
        }),
        thumbColorSecondary: ({ theme }) => ({
            backgroundColor: theme.vars.palette.secondary.main,
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.secondary.main,
            }),
        }),
        mark: ({ theme }) => ({
            backgroundColor: BLUIColors.blue[200],
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.primary.dark,
            }),
        }),
        markActive: ({ theme }) => ({
            backgroundColor: BLUIColors.blue[200],
            ...theme.applyStyles("dark", {
                backgroundColor: theme.vars.palette.primary.dark,
            }),
        }),
        valueLabel: ({ theme }) => ({
            backgroundColor: BLUIColors.blue[300],
            ...theme.applyStyles("dark", {
                backgroundColor: BLUIColors.blue[300],
                color: Color(BLUIColors.darkBlack[900]).alpha(0.87).string(),
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiSlider"];
