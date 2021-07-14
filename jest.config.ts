// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverageFrom: [
    "!src/**/*.ts*",
    "!jest.config.ts",
    "!reportWebVitals.ts",
  ],
  modulePathIgnorePatterns: ["src/reportWebVitals.ts"],
};
export default config;
