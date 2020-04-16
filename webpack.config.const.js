const path = require("path");

module.exports = Object.freeze({
    common: {
        envFilePath: path.resolve(__dirname, "./.env"),
        babelConfigPath: path.resolve(__dirname, "babel.config.js"),
        nodeModulesPath: path.resolve(__dirname, "node_modules")
    },

    client: {
        instanceName: "client",

        htmlTitle: "Chi Duong",
        faviconPath: path.resolve(__dirname, "./src/assets/png/titleImg.png"),

        entryTsPath: path.resolve(__dirname, "./src/index.tsx"),
        entryHtmlPath: path.resolve(__dirname, "./src/index.html"),
        allStylingPaths: path.resolve(__dirname, "./src/**/*.scss"),
        distPath: path.resolve(__dirname, "./dist"),

        coreJsPath: path.resolve(__dirname, "./node_modules", "core-js/stable"), // polyfill
        regenetorRuntimePath: path.resolve(__dirname, "./node_modules", "regenerator-runtime/runtime"), // polyfill

        tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
        postcssConfigPath: path.resolve(__dirname, "postcss.config.js")
    },

    clientPages: {
        homePagePath: path.resolve(__dirname, "./src/pages/home/HomePage.tsx")
    }
});
