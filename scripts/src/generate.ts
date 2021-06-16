import { Command } from 'commander';
import { exit } from 'process';

import { Generator } from './generators/common'
import BlockGenerator from './generators/block';
import ItemGenerator from './generators/item';


interface Options {
  [key: string]: any;
  type: string;
  name: string;
  debug: Boolean;
}

const program = new Command();
program
  .option('-t, --type <type>', 'What are you generating? Supported options: block, item, pane')
  .option('-n, --name <name>', 'Name of thing, will be used like `dark_red_thing`')
  .option('-d, --debug', 'Show debug output')
  .option('-a, --all', 'Generate vanilla colors');

program.parse(process.argv);

const options: Options = program.opts() as Options;

if (options.debug) {
  console.log('Options:', options);
}

if (!options.type || !options.name) {
  console.log('Type and Name are required options');
  exit();
}

let generator: Generator
switch (options.type) {
  case 'block':
    generator = BlockGenerator;
    break;
  case 'item':
    generator = ItemGenerator;
    break;
  default:
    console.log(`Invalid generator type ${options.type}!`);
    exit();
}

if (options.debug) {
  console.log(`Running ${options.type} generator for ${options.name}...`);
}

generator.generate(options.name, options.all);

console.log(`Generation of ${options.type} ${options.name} complete.`);
