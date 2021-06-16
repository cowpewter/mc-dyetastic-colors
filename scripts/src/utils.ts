import fs from 'fs/promises';

export const ensureDir = async (path: string) => {
  try {
    await fs.mkdir(path);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
  return true;
}

export const ensureFile = async (path: string) => {
  const temp = await fs.open(path, 'a');
  await temp.close();
  return true;
}
