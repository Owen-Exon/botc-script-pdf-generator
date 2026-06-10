import { ScriptOptions, TitleStyle } from "botc-character-sheet";

export type AppearanceLevel =
  | "normal"
  | "compact"
  | "super-compact"
  | "mega-compact";
export type OverleafType = "backingSheet" | "infoSheet";
export type PaperType = "A4" | "Letter";

// Re-export types from botc-character-sheet for convenience
export type { PageDimensions, TitleStyle } from "botc-character-sheet";

export const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  const hex = `#${r}${g}${b}`;
  return hex;
};

export const TITLE_FONT_DEFAULTS: Record<
  string,
  Omit<TitleStyle, "font" | "customFontUrl">
> = {
  "LHF Unlovable": {
    letterSpacing: 0,
    wordSpacing: -4,
    lineHeight: 11,
    backLineHeight: 23,
    marginTop: -1.5,
    marginBottom: -1.5,
  },
  "Alice in Wonderland": {
    letterSpacing: -0.6,
    wordSpacing: 0,
    lineHeight: 11,
    backLineHeight: 23,
    marginTop: -2,
    marginBottom: 0,
  },
  Anglican: {
    letterSpacing: -0.2,
    wordSpacing: 0,
    lineHeight: 11,
    backLineHeight: 26,
    marginTop: -2,
    marginBottom: 0,
  },
  "Canterbury Regular": {
    letterSpacing: -0.6,
    wordSpacing: 0,
    lineHeight: 11,
    backLineHeight: 22,
    marginTop: -1,
    marginBottom: 0,
  },
  "Utm Agin": {
    letterSpacing: -0.6,
    wordSpacing: 0,
    lineHeight: 11,
    backLineHeight: 23,
    marginTop: -2,
    marginBottom: 0,
  },
  "Waters Gothic": {
    letterSpacing: 0,
    wordSpacing: 0,
    lineHeight: 12.5,
    backLineHeight: 28,
    marginTop: 0,
    marginBottom: -3,
  },
};

export const DEFAULT_OPTIONS: ScriptOptions = {
  color: ["#3d1010","#7c2222","#3d1010"],
  colorAngle: 0,
  logo: "",
  showLogo: true,
  showTitle: true,
  showAuthor: true,
  showJinxes: true,
  showfabledAndLoric: true,
  useOldJinxes: false,
  showSwirls: true,
  includeMargins: false,
  solidTitle: false,
  appearance: "normal",
  overleaf: "backingSheet",
  showNightSheet: true,
  iconScale: 1.7,
  formatMinorWords: false,
  displayNightOrder: false,
  displayPlayerCounts: true,
  numberOfCharacterSheets: 1,
  inlineJinxIcons: "primary",
  iconUrlTemplate: "/images/icons/{id}.webp",
  titleStyle: {
    font: "LHF Unlovable",
    letterSpacing: 0,
    wordSpacing: -4,
    lineHeight: 11,
    backLineHeight: 23,
    marginTop: -2,
    marginBottom: 0,
    customFontUrl: "",
  },
  dimensions: { width: 210, height: 297, margin: 0, bleed: 0 },
  teensy: false,
  presetColors: {
    "TB Red" : "#3d1010,#7c2222,#3d1010,0",
    "BMR Orange" : "#3d2700,#d38c12,#3d2700,0",
    "SAV Purple" : "#1a0b1e,#50255b,#1a0b1e,0",
    "TAF Yellow" : "#493903,#e9b50a,#493903,0",
    "GOS Green" : "#182f19,#2d5c2e,#182f19,0",
    "MITHOTD Blue": "#082a44,#094e84,#082a44,0",
    "Poison & Blood" : "#7c2222,#1d115a,0",
    "Fire & Ice" : "#4271ae,#b8451e,90",
    "6ft under" : "#4a6440,#3d2c10,#3d2c10,0",
    "Mono" : "#000000,#c2c2c2,#000000,90",
  },
};
