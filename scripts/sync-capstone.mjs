import { spawnSync } from 'node:child_process';
const result = spawnSync(
  process.execPath,
  ['node_modules/typescript/bin/tsc', '-p', 'tsconfig.capstone.json'],
  { stdio: 'inherit' },
);
process.exitCode = result.status ?? 1;
