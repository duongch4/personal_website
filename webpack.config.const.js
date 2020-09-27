const path = require("path");

module.exports = Object.freeze({
    envFilePathDev: path.resolve(__dirname, "./.env.dev"),

    envFilePathProd: path.resolve(__dirname, "./.env"),

    common: {
        babelConfigPath: path.resolve(__dirname, "babel.config.js"),
        nodeModulesPath: path.resolve(__dirname, "node_modules"),
        compressionExts: /\.(js|css|html|ico|jpe?g|png|gif|svg|webp|pdf)$/,
    },

    client: {
        instanceName: "client",

        htmlTitle: "Chi Duong",

        iconsSrcPath: path.resolve(__dirname, "./src/assets/icons"),
        iconsDistPath: path.resolve(__dirname, "./dist/assets/icons"),

        assetsPath: path.resolve(__dirname, "./src/assets"),
        assetsExts: /\.(ico|jpe?g|png|gif|svg|webp|pdf|mp4|7z)$/,
        imagesExts: /\.(ico|jpe?g|png|gif|svg|webp)$/,
        pngPath: path.posix.join(path.resolve(__dirname, "./src/assets/png").replace(/\\/g, "/"), "*.png"), // "*.png" is a glob pattern => should use forward-slashes "/"
        jpgPath: path.posix.join(path.resolve(__dirname, "./src/assets/jpg").replace(/\\/g, "/"), "*.jpg"),
        svgPath: path.posix.join(path.resolve(__dirname, "./src/assets/svg").replace(/\\/g, "/"), "*.svg"),
        webpDestPath: path.resolve(__dirname, "./src/assets/webp"),

        entryTsPath: path.resolve(__dirname, "./src/index.tsx"),
        entryHtmlPath: path.resolve(__dirname, "./src/index.html"),
        manifestPwaPath: path.resolve(__dirname, "./src/manifest.json"),
        serviceWorkerPath: path.resolve(__dirname, "./src/sw.js"),
        offlineHtmlPath: path.resolve(__dirname, "./src/offline.html"),
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
