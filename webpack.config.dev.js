const webpack = require("webpack"); // access built-in plugins
const glob = require("glob"); // sync all css files, no need to import css
const TerserPlugin = require("terser-webpack-plugin"); // minify js: ES6
const HtmlWebpackPlugin = require("html-webpack-plugin"); // to build from html template
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // to extract css into it own file
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // to use with transpileOnly in ts-loader
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

class WebpackConfig {

    _common = {
        envFilePath: path.resolve(__dirname, "./.env.dev"),
        babelConfigPath: path.resolve(__dirname, "babel.config.js"),
        nodeModulesPath: path.resolve(__dirname, "node_modules")
    };

    _client = {
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
    };

    setModeResolve() {
        return {
            mode: "development",
            devtool: "source-map",
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".json"],
                modules: [this._common.nodeModulesPath]
            },
        };
    }

    setTranspilationLoader() {
        return {
            test: /\.(ts|js)x?$/,
            exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
            loader: "babel-loader",
            options: {
                rootMode: "upward",
                configFile: this._common.babelConfigPath,
                cacheDirectory: true
            }
        };
    }

    setJavascriptSourceMapLoader() {
        return {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        };
    }

    setStyleLoader(forBuild = false) {
        const result = {
            test: /\.s?css$/,
            use: [
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: this._client.postcssConfigPath
                        }
                    },
                },
            ]
        };
        if (forBuild) {
            result.use = [MiniCssExtractPlugin.loader, ...result.use];
        }
        else { // watch-mode: want HMR for style: need style-loader
            result.use = ["style-loader", ...result.use];
        }
        return result;
    }

    setImageLoader() {
        return {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: "image-webpack-loader",
            enforce: "pre"
        };
    }

    setFileLoaderClient() {
        return {
            test: /\.(jpe?g|png|gif|svg|pdf|mp4|7z)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets"
                    }
                }
            ]
        };
    }

    setOptMinimizerUglifyJs() {
        return new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        });
    }

    setCommonPlugins(forBuildServerOnceToWatch = false) {
        let base = [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new MomentLocalesPlugin({
                localesToKeep: ["en", "en-ca"],
            }),
            new webpack.HotModuleReplacementPlugin()
        ];
        if (fs.existsSync(this._common.envFilePath)) {
            const fromDotEnv = new webpack.DefinePlugin({
                "process.env": JSON.stringify(dotenv.config({ path: this._common.envFilePath }).parsed)
            });
            base = [...base, fromDotEnv];
        }
        if (forBuildServerOnceToWatch) {
            return base;
        }
        else {
            return [
                ...base,
                new ForkTsCheckerWebpackPlugin({
                    eslint: true,
                    tsconfig: this._client.tsconfigPath
                }),
                new ForkTsCheckerNotifierWebpackPlugin({
                    title: "TypeScript",
                    excludeWarnings: false
                }),
            ];
        }
    }

    setDevServer() {
        return {
            open: true,
            port: 8000,
            hot: true,
            contentBase: this._client.distPath,
            // watchContentBase: true, // watch the static shell html
            compress: true,
            historyApiFallback: true,
            clientLogLevel: "info", // debug, trace, silent, warn, error
            stats: "minimal", // errors-only, errors-warnings
        };
    }

    setClientConfig(forBuild = false) {
        return {
            name: this._client.instanceName,
            target: "web",
            ...this.setModeResolve(),
            entry: {
                main: [
                    this._client.coreJsPath, this._client.regenetorRuntimePath,
                    this._client.entryTsPath
                ].concat(glob.sync(this._client.allStylingPaths))
            },
            output: {
                filename: "[name].js",
                path: this._client.distPath,
            },
            devServer: this.setDevServer(),
            module: {
                rules: [
                    this.setJavascriptSourceMapLoader(),
                    this.setTranspilationLoader(),
                    this.setStyleLoader(forBuild),
                    this.setFileLoaderClient(),
                    this.setImageLoader()
                ]
            },
            optimization: {
                minimizer: [
                    this.setOptMinimizerUglifyJs(),
                    new OptimizeCSSAssetsPlugin({})
                ]
            },
            plugins: [
                ...this.setCommonPlugins(),
                new HtmlWebpackPlugin({
                    inject: true,
                    template: this._client.entryHtmlPath,
                    title: this._client.htmlTitle,
                    favicon: this._client.faviconPath
                }),
                new MiniCssExtractPlugin({
                    filename: "[name].css",
                    chunkfilename: "[id].css"
                }),
                new ImageminPlugin({})
            ],
            externals: {
                "react": "React",
                "react-dom": "ReactDOM",
                "react-dom/server": "ReactDOMServer",
                "lodash": "_"
            },
        };
    }
}

module.exports = (env, argv) => {
    return new WebpackConfig().setClientConfig(argv["stack"] !== "watch");
};
