import fs from 'fs/promises';
import path from 'path';

import { toTranslated } from './common';
import { generateAllColors } from '../colors';
import { ensureDir, ensureFile } from '../utils';

const PATH_TO_OUTPUT = path.join(process.cwd(), 'output');
const PATH_TO_TRANSLATIONS = path.join(process.cwd(), 'output/lang');
const PATH_TO_TRANSLATIONS_FILE = `${PATH_TO_TRANSLATIONS}/en_us.json`;
const PATH_TO_BLOCKSTATES = path.join(process.cwd(), 'output/blockstates');
const PATH_TO_MODELS = path.join(process.cwd(), 'output/models');
const PATH_TO_MODELS_BLOCK = `${PATH_TO_MODELS}/block`;
const PATH_TO_MODELS_ITEM = `${PATH_TO_MODELS}/item;`


const addTranslationString = async (colors: string[], name: string) => {
  await ensureDir(PATH_TO_TRANSLATIONS);
  await ensureFile(PATH_TO_TRANSLATIONS_FILE);

  const json: any = {};
  colors.forEach(color => {
    json[`block.dyetasticcolors.${color}_${name}`] = toTranslated(color, name);
  });

  return fs.writeFile(PATH_TO_TRANSLATIONS_FILE, JSON.stringify(json, undefined, 2));
}

const generateBlockstates = async (colors: string[], name: string) => {
  await ensureDir(PATH_TO_BLOCKSTATES);

  // Build em
  return Promise.all(
    colors.map(async (color) => {
      const raw = `{
  "variants": {
    "": {
      "model": "dyetasticcolors:block/${color}_${name}"
    }
  }
}
`;
      return fs.writeFile(`${PATH_TO_BLOCKSTATES}/${color}_${name}.json`, raw);
    })
  );
}

const generateModels = async (colors: string[], name: string) => {
  // Ensure dir exist
  await ensureDir(PATH_TO_MODELS);
  await ensureDir(PATH_TO_MODELS_BLOCK);

  // Build em
  return Promise.all(
    colors.map(async (color) => {
      const raw = `{
  "parent": "block/cube",
  "textures": {
    "down": "dyetasticcolors:blocks/${color}_${name}",
    "up": "dyetasticcolors:blocks/${color}_${name}",
    "north": "dyetasticcolors:blocks/${color}_${name}",
    "east": "dyetasticcolors:blocks/${color}_${name}",
    "south": "dyetasticcolors:blocks/${color}_${name}",
    "west": "dyetasticcolors:blocks/${color}_${name}",
    "particle": "dyetasticcolors:blocks/${color}_${name}"
  }
}
`;
      return fs.writeFile(`${PATH_TO_MODELS_BLOCK}/${color}_${name}.json`, raw);
    })
  );
}

const generateBlockItems = async (colors: String[], name: String) => {
  // Ensure dir exist
  await ensureDir(PATH_TO_MODELS);
  await ensureDir(PATH_TO_MODELS_ITEM);

  return Promise.all(
    colors.map(async (color) => {
      const raw = `{
  "parent": "dyetasticcolors:block/${color}_${name}",
  "display": {
    "thirdperson": {
      "rotation": [
        10,
        -45,
        170
      ],
      "translation": [
        0,
        1.5,
        -2.75
      ],
      "scale": [
        0.375,
        0.375,
        0.375
      ]
    }
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
      generateBlockstates(colors, name),
      generateModels(colors, name),
      generateBlockItems(colors, name),
    ]);
  },
};