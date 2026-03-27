// This is code use for the screens managment and dimensions 

import { Dimensions } from "react-native";

// Get the device width and height
const { width, height } = Dimensions.get("window");

// Define the guideline base dimensions
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Type annotations for the scaling functions
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

// Export the scaling functions
export { horizontalScale, verticalScale, moderateScale };


//
//
//
// This is color theme for the apps

import { createTheming } from "@callstack/react-theme-provider";
import { BottomTabsScreen } from "react-native-screens";

export const theme = {
  lightColor: {
    white: "#FFFFFF",
    primary: "#120b09",
    secondary: "#6f26ba",
    placeHolderColor: "#FFFFF0",
    textColor: "#FFFFF0",
    greyBG: "#72716d",
    inputBg: "#111112",
    coloredText: "#ba5da9",
    bgColor: "#070906",
    red: "#EC1A1A",
    inputBG: "#3A3A3C",
    menuGroupBG: "rgba(127, 129, 132, 0.20)",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    FormBackground: "#7F818433",
    green: "#2E6F40",
  },
  darkColor: {},
  fontFamily: {
    ClashRegular: "ClashDisplayRegular",
    ClashMedium: "ClashDisplayMedium",
    ClashBold: "ClashDisplayBold",
    SatoshiRegular: "SatoshiRegular",
    SatoshiMedium: "SatoshiMedium",
    SatoshiBold: "SatoshiBold",
  },
  animation: {
    scale: 1.0,
  },
};

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme };
