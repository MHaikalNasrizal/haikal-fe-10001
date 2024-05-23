// theme.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-sans";

const theme = extendTheme({
    
  
  colors: {
    primary: {
      darkGray: "#333333",
      gold: "#FFD700",
      nameColor1: "#E0E0E0",
      nameColor2: "#F5F5F5",
    },
    secondary: {
      mediumGray: "#666666",
      shadowGold: "#FFCC33",
      red: "#FF0000",
      nameColor3: "#F5F5F5",
    },
    text: {
      title: "#000000",
      body: "#666666",
      field: "#999999",
      disable: "#CCCCCC",
    },
    accent: {
      gray: "#4D4D4D",
      nameColor4: "#E5E5E5",
    },
    base: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  styles: {
    global: {
      fonts: {
        heading: "DM Sans, sans-serif",
        body: "DM Sans, sans-serif",
      },
    },
  },


});

export default theme;
