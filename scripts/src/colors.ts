const shades = [
  'lightest',
  'pastel',
  '',
  'dark',
  'darkest',
];

const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'cyan',
  'light_blue',
  'blue',
  'purple',
  'magenta',
  'pink',
  'brown',
  'light_gray',
  'gray',
  'white',
  'black',
];

const generateAllColors = (generateVanilla: boolean): string[] => {
  const allColors: string[] = [];
  colors.forEach(
    color => shades.forEach(
      shade => {
        if (color === 'white' && (shade === 'pastel' || shade == 'lightest')) {
          return;
        }
        if (color === 'black' && (shade === 'dark' || shade == 'darkest')) {
          return;
        }
        if (shade.length) {
          allColors.push(`${shade}_${color}`);
        } else if (generateVanilla) {
          allColors.push(color);
        }
      }
    )
  );
  return allColors;
}

export {
  generateAllColors,
};
