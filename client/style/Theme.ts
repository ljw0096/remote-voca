import { DefaultTheme } from "styled-components"

const colors = {
  mainBlack: "#222831",
  mainWhite: "#EEEEEE",
  baseGreen: "#00ADB5",
}

const fontSize = {
  title: 48,
  subTitle: 32,
  textLarge: 24,
  text: 16,
}

export type ColorsTypes = typeof colors
export type FontSizeTypes = typeof fontSize

export const theme: DefaultTheme = {
  colors,
  fontSize,
}
