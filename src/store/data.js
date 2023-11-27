const SX = 126.93913203658467;
const SY = 37.56997969375877;
const FX = 126.93697680305937;
const FY = 37.55519321176797;
const DX = 0.0040342196352;
const DY = 0.0022882906691;
export const deltaX = (SX - FX) / 1000;
export const deltaY = (SY - FY) / 1000;

const mapData = [
  {
    type: "image",
    url: "./300.png",
    coordinates: [
      [SX - DX, SY + DY],
      [SX + DX, SY + DY],
      [SX + DX, SY - DY],
      [SX - DX, SY - DY],
    ],
  },
  {
    type: "image",
    url: "./350.png",
    coordinates: [
      [SX - DX - deltaX * 100, SY + DY - deltaY * 100],
      [SX + DX - deltaX * 100, SY + DY - deltaY * 100],
      [SX + DX - deltaX * 100, SY - DY - deltaY * 100],
      [SX - DX - deltaX * 100, SY - DY - deltaY * 100],
    ],
  },
  {
    type: "image",
    url: "./400.png",
    coordinates: [
      [SX - DX - deltaX * 200, SY + DY - deltaY * 200],
      [SX + DX - deltaX * 200, SY + DY - deltaY * 200],
      [SX + DX - deltaX * 200, SY - DY - deltaY * 200],
      [SX - DX - deltaX * 200, SY - DY - deltaY * 200],
    ],
  },
  {
    type: "image",
    url: "./450.png",
    coordinates: [
      [SX - DX - deltaX * 300, SY + DY - deltaY * 300],
      [SX + DX - deltaX * 300, SY + DY - deltaY * 300],
      [SX + DX - deltaX * 300, SY - DY - deltaY * 300],
      [SX - DX - deltaX * 300, SY - DY - deltaY * 300],
    ],
  },
  {
    type: "image",
    url: "./500.png",
    coordinates: [
      [SX - DX - deltaX * 400, SY + DY - deltaY * 400],
      [SX + DX - deltaX * 400, SY + DY - deltaY * 400],
      [SX + DX - deltaX * 400, SY - DY - deltaY * 400],
      [SX - DX - deltaX * 400, SY - DY - deltaY * 400],
    ],
  },
  {
    type: "image",
    url: "./600.png",
    coordinates: [
      [SX - DX - deltaX * 500, SY + DY - deltaY * 500],
      [SX + DX - deltaX * 500, SY + DY - deltaY * 500],
      [SX + DX - deltaX * 500, SY - DY - deltaY * 500],
      [SX - DX - deltaX * 500, SY - DY - deltaY * 500],
    ],
  },
  {
    type: "image",
    url: "./700.png",
    coordinates: [
      [SX - DX - deltaX * 600, SY + DY - deltaY * 600],
      [SX + DX - deltaX * 600, SY + DY - deltaY * 600],
      [SX + DX - deltaX * 600, SY - DY - deltaY * 600],
      [SX - DX - deltaX * 600, SY - DY - deltaY * 600],
    ],
  },
  {
    type: "image",
    url: "./800.png",
    coordinates: [
      [SX - DX - deltaX * 700, SY + DY - deltaY * 700],
      [SX + DX - deltaX * 700, SY + DY - deltaY * 700],
      [SX + DX - deltaX * 700, SY - DY - deltaY * 700],
      [SX - DX - deltaX * 700, SY - DY - deltaY * 700],
    ],
  },
  {
    type: "image",
    url: "./900.png",
    coordinates: [
      [SX - DX - deltaX * 800, SY + DY - deltaY * 800],
      [SX + DX - deltaX * 800, SY + DY - deltaY * 800],
      [SX + DX - deltaX * 800, SY - DY - deltaY * 800],
      [SX - DX - deltaX * 800, SY - DY - deltaY * 800],
    ],
  },
  {
    type: "image",
    url: "./1000.png",
    coordinates: [
      [SX - DX - deltaX * 900, SY + DY - deltaY * 900],
      [SX + DX - deltaX * 900, SY + DY - deltaY * 900],
      [SX + DX - deltaX * 900, SY - DY - deltaY * 900],
      [SX - DX - deltaX * 900, SY - DY - deltaY * 900],
    ],
  },
  {
    type: "image",
    url: "./1100.png",
    coordinates: [
      [SX - DX - deltaX * 1000, SY + DY - deltaY * 1000],
      [SX + DX - deltaX * 1000, SY + DY - deltaY * 1000],
      [SX + DX - deltaX * 1000, SY - DY - deltaY * 1000],
      [SX - DX - deltaX * 1000, SY - DY - deltaY * 1000],
    ],
  },
];

export default mapData;
