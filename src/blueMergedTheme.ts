import { createTheme } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation'
import { typography, createSimpleLightPalette as createSimplePalette, createSimpleDarkPalette } from "./shared";
import * as BLUIColors from "@brightlayer-ui/colors";
import Color from "color";
import MuiAvatar from "./componentStylesOverrides/MuiAvatar";
import MuiAppBar from "./componentStylesOverrides/MuiAppBar";
import MuiBottomNavigation from "./componentStylesOverrides/MuiBottomNavigation";
import MuiBottomNavigationAction from "./componentStylesOverrides/MuiBottomNavigationAction";
import MuiBadge from "./componentStylesOverrides/MuiBadge";
import MuiBackdrop from "./componentStylesOverrides/MuiBackdrop";
import MuiButton from "./componentStylesOverrides/MuiButton";
import MuiButtonGroup from "./componentStylesOverrides/MuiButtonGroup";
import MuiCheckbox from "./componentStylesOverrides/MuiCheckbox";
import MuiButtonBase from "./componentStylesOverrides/MuiButtonBase";
import MuiChip from "./componentStylesOverrides/MuiChip";
import MuiDrawer from "./componentStylesOverrides/MuiDrawer";
import MuiFab from "./componentStylesOverrides/MuiFab";
import MuiListItem from "./componentStylesOverrides/MuiListItem";
import MuiListSubheader from "./componentStylesOverrides/MuiListSubheader";
import MuiMobileStepper from "./componentStylesOverrides/MuiMobileStepper";
import MuiLinearProgress from "./componentStylesOverrides/MuiLinearProgress";
import MuiCircularProgress from "./componentStylesOverrides/MuiCircularProgress";
import MuiSlider from "./componentStylesOverrides/MuiSlider";
import MuiSnackbarContent from "./componentStylesOverrides/MuiSnackbarContent";
import MuiStepConnector from "./componentStylesOverrides/MuiStepConnector";
import MuiStep from "./componentStylesOverrides/MuiStep";
import MuiStepIcon from "./componentStylesOverrides/MuiStepIcon";
import MuiStepLabel from "./componentStylesOverrides/MuiStepLabel";
import MuiSwitch from "./componentStylesOverrides/MuiSwitch";
import MuiTableCell from "./componentStylesOverrides/MuiTableCell";
import MuiTableHead from "./componentStylesOverrides/MuiTableHead";
import MuiTableRow from "./componentStylesOverrides/MuiTableRow";
import MuiTableSortLabel from "./componentStylesOverrides/MuiTableSortLabel";
import MuiTab from "./componentStylesOverrides/MuiTab";
import MuiTabs from "./componentStylesOverrides/MuiTabs";
import MuiTooltip from "./componentStylesOverrides/MuiTooltip";
import MuiInputBase from "./componentStylesOverrides/MuiInputBase";
import MuiInput from "./componentStylesOverrides/MuiInput";
import MuiFilledInput from "./componentStylesOverrides/MuiFilledInput";
import MuiOutlinedInput from "./componentStylesOverrides/MuiOutlinedInput";
import MuiFormLabel from "./componentStylesOverrides/MuiFormLabel";
import MuiFormHelperText from "./componentStylesOverrides/MuiFormHelperText";
import MuiToggleButtonGroup from "./componentStylesOverrides/MuiToggleButtonGroup";
import MuiToggleButton from "./componentStylesOverrides/MuiToggleButton";


// Light Theme Colors
const LightThemeColors = {
    primary: createSimplePalette(BLUIColors.blue),
    secondary: createSimplePalette(BLUIColors.lightBlue),
    error: createSimplePalette(BLUIColors.red),
    success: createSimplePalette(BLUIColors.green),
    info: createSimplePalette(BLUIColors.lightBlue),
    divider: Color(BLUIColors.black[500]).alpha(0.12).string(),
    warning: {
        light: BLUIColors.yellow[100],
        main: BLUIColors.yellow[500],
        dark: BLUIColors.yellow[900],
    },
    background: {
        default: BLUIColors.white[200],
        paper: BLUIColors.white[50],
    },
    text: {
        primary: BLUIColors.black[500],
        secondary: BLUIColors.gray[500],
        hint: BLUIColors.gray[500],
    },
    action: {
        active: BLUIColors.gray[500],
        disabled: Color(BLUIColors.black[500]).alpha(0.3).string(),
    },
};

// Dark Theme Colors
const DarkThemeColors = {
    primary: createSimpleDarkPalette(BLUIColors.blue),
    secondary: createSimpleDarkPalette(BLUIColors.lightBlue),
    error: createSimpleDarkPalette(BLUIColors.red),
    success: createSimpleDarkPalette(BLUIColors.green),
    info: createSimpleDarkPalette(BLUIColors.lightBlue),
    divider: Color(BLUIColors.black[200]).alpha(0.36).string(),
    warning: {
        light: BLUIColors.yellow[100],
        main: BLUIColors.yellow[300],
        dark: BLUIColors.yellow[900],
    },
    background: {
        default: BLUIColors.darkBlack[800],
        paper: BLUIColors.black[900],
    },
    text: {
        primary: BLUIColors.black[50],
        secondary: BLUIColors.black[200],
        disabled: Color(BLUIColors.black[300]).alpha(0.36).string(),
        hint: Color(BLUIColors.black[300]).alpha(0.36).string(),
    },
    action: {
        hover: Color(BLUIColors.black[50]).alpha(0.1).string(),
        active: BLUIColors.black[200],
        disabled: Color(BLUIColors.black[300]).alpha(0.36).string(),
        disabledBackground: Color(BLUIColors.black[200]).alpha(0.24).string(),
    },
};

const Spacing = 8;

export const blueThemes = createTheme({
    cssVariables: true,
    direction: "ltr",
    typography: typography,
    spacing: Spacing,
    colorSchemes: {
        light: {
            palette: {
                mode: "light",
                ...LightThemeColors,
            },
        },
        dark: {
            palette: {
                mode: "dark",
                ...DarkThemeColors,
            },
        },
    },
    components: {
        MuiAvatar: MuiAvatar,
        MuiAppBar: MuiAppBar,
        MuiBottomNavigation: MuiBottomNavigation,
        MuiBottomNavigationAction: MuiBottomNavigationAction,
        MuiBadge: MuiBadge,
        MuiBackdrop: MuiBackdrop,
        MuiButton: MuiButton,
        MuiButtonGroup: MuiButtonGroup,
        MuiCheckbox: MuiCheckbox,
        MuiButtonBase: MuiButtonBase,
        MuiChip: MuiChip,
        MuiDrawer: MuiDrawer,
        MuiFab: MuiFab,
        MuiListItem: MuiListItem,
        MuiListSubheader: MuiListSubheader,
        MuiMobileStepper: MuiMobileStepper,
        MuiLinearProgress: MuiLinearProgress,
        MuiCircularProgress: MuiCircularProgress,
        MuiSlider: MuiSlider,
        MuiSnackbarContent: MuiSnackbarContent,
        MuiStepConnector: MuiStepConnector,
        MuiStep: MuiStep,
        MuiStepIcon: MuiStepIcon,
        MuiStepLabel: MuiStepLabel,
        MuiSwitch: MuiSwitch,
        MuiTableCell: MuiTableCell,
        MuiTableHead: MuiTableHead,
        MuiTableRow: MuiTableRow,
        MuiTableSortLabel: MuiTableSortLabel,
        MuiTab: MuiTab,
        MuiTabs: MuiTabs,
        MuiTooltip: MuiTooltip,
        MuiInputBase: MuiInputBase,
        MuiInput: MuiInput,
        MuiFilledInput: MuiFilledInput,
        MuiOutlinedInput: MuiOutlinedInput,
        MuiFormLabel: MuiFormLabel,
        MuiFormHelperText: MuiFormHelperText,
        MuiToggleButtonGroup: MuiToggleButtonGroup,
        MuiToggleButton: MuiToggleButton,
        
    },
});
