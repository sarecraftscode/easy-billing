export default function (wallaby) {
  return {
    files: ["src/**/*.ts", "!test/**/*.spec.ts", "!test/**/*.test.ts"],

    tests: ["test/*.spec.ts", "test/**/*.spec.ts"],

    env: {
      type: "node",
      runner: "node",
    },

    autoDetect: ["vitest"],
    env: {
      params: {
        runner: "--experimental-vm-modules",
      },
    },
  };
}
