import { BLUIColors } from "@brightlayer-ui/colors";
import { Components, Theme, CssVarsTheme } from "@mui/material/styles";

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.vars.palette.divider,
            },
            "&.Mui-error.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                    borderColor: theme.vars.palette.error.main,
                },
            "&.Mui-error:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline":
                {
                    borderColor: theme.vars.palette.error.dark,
                },
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.vars.palette.divider,
            },
            ...theme.applyStyles("dark", {
                "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.vars.palette.error.dark,
                },
                "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.vars.palette.divider,
                },
                "&.Mui-error.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: theme.vars.palette.error.dark,
                    },
                "&.Mui-error:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: theme.vars.palette.error.main,
                    },
                "&.MuiInputBase-colorPrimary.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: BLUIColors.blue[500],
                    },
                "&.MuiInputBase-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: BLUIColors.lightBlue[500],
                    },
                "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.vars.palette.error.dark,
                },
            }),
        }),
        notchedOutline: ({ theme }) => ({
            borderColor: theme.vars.palette.divider,
            ...theme.applyStyles("dark", {
                borderColor: theme.vars.palette.divider,
            }),
        }),
        input: ({ theme }) => ({
            ...theme.applyStyles("dark", {
                "&:-webkit-autofill": {
                    WebkitBoxShadow: `0 0 0 100px ${BLUIColors.black[900]} inset`,
                },
            }),
        }),
    },
} as Components<
    Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiOutlinedInput"];
