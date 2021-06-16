import fs from 'fs/promises';
import path from 'path';

import { toTranslated } from './common';
import { generateAllColors } from '../colors';
import { ensureDir, ensureFile } from '../utils';

const PATH_TO_OUTPUT = path.join(process.cwd(), 'output');
const PATH_TO_TRANSLATIONS = path.join(process.cwd(), 'output/lang');
const PATH_TO_TRANSLATIONS_FILE = `${PATH_TO_TRANSLATIONS}/en_us.json`;
const PATH_TO_MODELS = path.join(process.cwd(), 'output/models');
const PATH_TO_MODELS_ITEM = `${PATH_TO_MODELS}/item`

const addTranslationString = async (colors: string[], name: string) => {
  await ensureDir(PATH_TO_TRANSLATIONS);
  await ensureFile(PATH_TO_TRANSLATIONS_FILE);

  const json: any = {};
  colors.forEach(color => {
    json[`item.dyetasticcolors.${color}_${name}`] = toTranslated(color, name);
  });
  
  return fs.writeFile(PATH_TO_TRANSLATIONS_FILE, JSON.stringify(json, undefined, 2));
}

const generateModels = async (colors: String[], name: String) => {
  await ensureDir(PATH_TO_MODELS);
  await ensureDir(PATH_TO_MODELS_ITEM);

  // Build em
  return Promise.all(
    colors.map(async (color) => {
      const raw = `{
  "parent": "item/generated",
  "textures": {
    "layer0": "dyetasticcolors:items/${color}_${name}"
  }
}
`;
      return fs.writeFile(`${PATH_TO_MODELS_ITEM}/${color}_${name}.json`, raw);
    })
  );
}



export default {
  generate: async (name: string, all: boolean) => {
    ensureDir(PATH_TO_OUTPUT);

    const colors = generateAllColors(all);
    await Promise.all([
      addTranslationString(colors, name),
      generateModels(colors, name)
    ]);
  }
};