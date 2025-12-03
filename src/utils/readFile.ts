import fs from 'fs';
import path from 'path';

export function readInput(dir: string, fileName = 'input.txt'): string {
  // Joins the directory of the caller with the filename
  const filePath = path.join(dir, fileName);
  // Reads the file and removes that annoying final new-line character
  return fs.readFileSync(filePath, 'utf-8').trim();
}