/* ------------------------------------------------------------------ */
/* Geometry lifted 1:1 from the Figma frame (1280 x 832, node 305:3354) */
/* ------------------------------------------------------------------ */

export const STAGE_W = 1280;
export const STAGE_H = 832;

/* App tiles — node position minus SVG export padding (6,2) */
export const TILES = [
  { name: "figma", left: 465, top: 184 },
  { name: "slack", left: 730, top: 184 },
  { name: "instagram", left: 317, top: 326 },
  { name: "youtube", left: 877, top: 326 },
  { name: "x", left: 317, top: 499 },
  { name: "claude", left: 877, top: 499 },
  { name: "facebook", left: 455, top: 672 },
  { name: "whatsapp", left: 739, top: 672 },
];

/* Label pills — node position minus SVG export padding (1,0) */
export const PILLS = [
  { name: "design", left: 537, top: 284 },
  { name: "schedule", left: 649, top: 284 },
  { name: "explore", left: 437, top: 378 },
  { name: "premiere", left: 751, top: 378 },
  { name: "quote", left: 444, top: 488 },
  { name: "summarize", left: 752, top: 488 },
  { name: "boost", left: 540, top: 578 },
  { name: "broadcast", left: 649, top: 578 },
];

/* Arrowhead templates (exact paths from the Figma export) */
const ARROW_DOWN =
  "M608.134 358.5C608.519 359.167 609.481 359.167 609.866 358.5L613.33 352.5C613.715 351.833 613.234 351 612.464 351H605.536C604.766 351 604.285 351.833 604.67 352.5L608.134 358.5Z";
const ARROW_UP =
  "M606.134 539.5C606.519 538.833 607.481 538.833 607.866 539.5L611.33 545.5C611.715 546.167 611.234 547 610.464 547H603.536C602.766 547 602.285 546.167 602.67 545.5L606.134 539.5Z";
const ARROW_RIGHT =
  "M548.5 427.134C549.167 427.519 549.167 428.481 548.5 428.866L542.5 432.33C541.833 432.715 541 432.234 541 431.464V424.536C541 423.766 541.833 423.285 542.5 423.67L548.5 427.134Z";
const ARROW_LEFT =
  "M729.5 427.134C728.833 427.519 728.833 428.481 729.5 428.866L735.5 432.33C736.167 432.715 737 432.234 737 431.464V424.536C737 423.766 736.167 423.285 735.5 423.67L729.5 427.134Z";

export type Stop = { offset: number; color: string };

export type Connector = {
  name: string;
  d: string;
  dot: { cx: number; cy: number; fill: string };
  arrow: { d: string; fill: string; dx?: number; dy?: number };
  gradient: { x1: number; y1: number; x2: number; y2: number; stops: Stop[] };
};

/* Dashed connectors: exact paths, gradients, dots and arrowheads from Figma */
export const CONNECTORS: Connector[] = [
  {
    name: "design",
    d: "M548 225H581C596.464 225 609 237.536 609 253V354",
    dot: { cx: 553, cy: 225, fill: "#F24E1E" },
    arrow: { d: ARROW_DOWN, fill: "#A259FF" },
    gradient: {
      x1: 564.796, y1: 225, x2: 657.14, y2: 336.047,
      stops: [
        { offset: 0.248, color: "#F3592C" },
        { offset: 0.601, color: "#A259FF" },
      ],
    },
  },
  {
    name: "schedule",
    d: "M668 354V253C668 237.536 680.536 225 696 225H729",
    dot: { cx: 724, cy: 225, fill: "#ECB22E" },
    arrow: { d: ARROW_DOWN, fill: "#36C5F0", dx: 59 },
    gradient: {
      x1: 655.393, y1: 325.443, x2: 685.132, y2: 225.628,
      stops: [
        { offset: 0, color: "#36C5F0" },
        { offset: 0.707, color: "#ECB22E" },
      ],
    },
  },
  {
    name: "explore",
    d: "M538 428H506.708C491.244 428 478.708 415.464 478.708 400V391C478.708 375.536 466.172 363 450.708 363H408",
    dot: { cx: 405, cy: 363, fill: "#8E36C6" },
    arrow: { d: ARROW_RIGHT, fill: "#FFCD52" },
    gradient: {
      x1: 408, y1: 395.5, x2: 538, y2: 395.5,
      stops: [
        { offset: 0.25, color: "#A930BE" },
        { offset: 0.567, color: "#F44E55" },
        { offset: 1, color: "#FFD053" },
      ],
    },
  },
  {
    name: "quote",
    d: "M538 471H506.708C491.244 471 478.708 483.536 478.708 499V508C478.708 523.464 466.172 536 450.708 536H408",
    dot: { cx: 405, cy: 536, fill: "#3D3D3D" },
    arrow: { d: ARROW_RIGHT, fill: "#3D3D3D", dy: 43 },
    gradient: {
      x1: 542.916, y1: 487, x2: 404.318, y2: 502.018,
      stops: [
        { offset: 0, color: "#1B1B1B" },
        { offset: 0.274, color: "#A4A4A4" },
        { offset: 0.668, color: "#000000" },
      ],
    },
  },
  {
    name: "premiere",
    d: "M740 428H771.292C786.756 428 799.292 415.464 799.292 400V391C799.292 375.536 811.828 363 827.292 363H870",
    dot: { cx: 871, cy: 363, fill: "#FF0000" },
    arrow: { d: ARROW_LEFT, fill: "#FF0000" },
    gradient: {
      x1: 735.155, y1: 417.562, x2: 822.564, y2: 331.758,
      stops: [
        { offset: 0, color: "#FF0000" },
        { offset: 0.317, color: "#FFC7C7" },
        { offset: 0.654, color: "#DB6161" },
      ],
    },
  },
  {
    name: "summarize",
    d: "M740 470H771.292C786.756 470 799.292 482.536 799.292 498V507C799.292 522.464 811.828 535 827.292 535H870",
    dot: { cx: 871, cy: 535, fill: "#FF7043" },
    arrow: { d: ARROW_LEFT, fill: "#FF7043", dy: 42 },
    gradient: {
      x1: 735.155, y1: 480.438, x2: 822.564, y2: 566.242,
      stops: [
        { offset: 0, color: "#FF7043" },
        { offset: 0.317, color: "#FFD5C8" },
        { offset: 0.654, color: "#FEC1B0" },
      ],
    },
  },
  {
    name: "boost",
    d: "M545 708H579C594.464 708 607 695.464 607 680V546",
    dot: { cx: 542, cy: 708, fill: "#77AEF5" },
    arrow: { d: ARROW_UP, fill: "#77AEF5" },
    gradient: {
      x1: 631.616, y1: 539.963, x2: 528.204, y2: 674.162,
      stops: [
        { offset: 0, color: "#1877F2" },
        { offset: 0.317, color: "#C7DFFF" },
        { offset: 0.654, color: "#6196DB" },
      ],
    },
  },
  {
    name: "broadcast",
    d: "M729 708H695C679.536 708 667 695.464 667 680V546",
    dot: { cx: 732, cy: 708, fill: "#84D38A" },
    arrow: { d: ARROW_UP, fill: "#84D38A", dx: 60 },
    gradient: {
      x1: 642.384, y1: 539.963, x2: 745.796, y2: 674.162,
      stops: [
        { offset: 0, color: "#60D669" },
        { offset: 0.317, color: "#C7FFCD" },
        { offset: 0.654, color: "#7ADB61" },
      ],
    },
  },
];

/* Corner markers (12 x 12, #D9D9D9) */
export const CORNERS = [
  { left: 19, top: 18 },
  { left: 1250, top: 18 },
  { left: 19, top: 801 },
  { left: 1250, top: 801 },
];

export const ACCENT_BAR = "linear-gradient(148deg,#62FFDA,#00AD84)";
