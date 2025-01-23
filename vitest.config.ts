import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  test: {
    workspace: ["packages/*"],
    coverage: {
      exclude: ["**/coverage/**", ...coverageConfigDefaults.exclude],
    },
  },
});
