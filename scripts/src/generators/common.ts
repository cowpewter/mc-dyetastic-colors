export interface Generator {
  generate(name: string, makeVanillaColors: boolean): void;
}

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const toTranslated = (color: string, name: string): string => {
  const colors = color.split('_');
  const names = name.split('_');

  return colors.concat(names).map(s => capitalize(s)).join(' ');
}
