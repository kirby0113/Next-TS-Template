module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  setupFiles: ["dotenv/config"],
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
};
