import type { CSSProperties } from "react";

export const R = {
  bg: "#14181D",
  card: "#1C2228",
  cardHover: "#222830",
  border: "#2A3240",
  accent: "#F3F5F7",
  white: "#F3F5F7",
  text: "#B0B8C4",
  textMid: "#7A8494",
  textDim: "#4E5868",
  silver: "#8892A4",
  green: "#34D068",
  teal: "#38C6BA",
  gold: "#C8A66E",
  heroBg: "#111519",
  darkBand: "#0F1215",
};

// Shared style for large section/page headings.
// Matches the homepage hero: Inter Light, warm-ivory, tight tracking.
// Pass the (responsive) font size; set margin/maxWidth at the call site.
export function heading(fontSize: CSSProperties["fontSize"]): CSSProperties {
  return {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    fontWeight: 300,
    color: "#F4F2EC",
    letterSpacing: "-0.02em",
    lineHeight: 1.08,
    fontSize,
  };
}
