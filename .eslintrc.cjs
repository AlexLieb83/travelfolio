module.exports = {
  parserOptions: {
    project: ["./travelfolio/tsconfig.json"],
  },
  extends: [
    "next/core-web-vitals",
    "airbnb-base",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
};
