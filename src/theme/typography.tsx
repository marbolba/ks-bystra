const FONT_PRIMARY = "Montserrat";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    lineHeight: 80 / 64,
    fontSize: 64,
  },
  h2: {
    fontWeight: 600,
    lineHeight: 64 / 48,
    fontSize: 48,
  },
  h3: {
    fontWeight: 600,
    lineHeight: 48 / 32,
    fontSize: 32,
  },
  h4: {
    fontWeight: 600,
    lineHeight: 36 / 24,
    fontSize: 24,
  },
  h5: {
    fontWeight: 600,
    lineHeight: 30 / 20,
    fontSize: 20,
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: 18,
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 24 / 16,
    fontSize: 16,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: 14,
  },
  body1: {
    fontWeight: 500,
    lineHeight: 24 / 16,
    fontSize: 16,
  },
  body2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: 14,
  },
  caption: {
    fontWeight: 500,
    lineHeight: 18 / 12,
    fontSize: 12,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 18 / 12,
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: 14,
    textTransform: "capitalize",
  },
} as const;

export default typography;
