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
const dotenv = require("dotenv");
const fs = require("fs");
const webpackConstants = require("./webpack.config.const");

class WebpackConfig {

    constructor() {
        this.common = { envFilePath: webpackConstants.envFilePathDev, ...webpackConstants.common };
        this.client = webpackConstants.client;
    }

    setModeResolve() {
        return {
            mode: "development",
            devtool: "source-map",
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".json"],
                modules: [this.common.nodeModulesPath]
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
                configFile: this.common.babelConfigPath,
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
                            path: this.client.postcssConfigPath
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
        if (fs.existsSync(this.common.envFilePath)) {
            const fromDotEnv = new webpack.DefinePlugin({
                "process.env": JSON.stringify(dotenv.config({ path: this.common.envFilePath }).parsed)
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
                    tsconfig: this.client.tsconfigPath
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
            contentBase: this.client.distPath,
            // watchContentBase: true, // watch the static shell html
            compress: true,
            historyApiFallback: true,
            clientLogLevel: "info", // debug, trace, silent, warn, error
            stats: "minimal", // errors-only, errors-warnings
        };
    }

    setClientConfig(forBuild = false) {
        return {
            name: this.client.instanceName,
            target: "web",
            ...this.setModeResolve(),
            entry: {
                main: [
                    this.client.coreJsPath, this.client.regenetorRuntimePath,
                    this.client.entryTsPath
                ].concat(glob.sync(this.client.allStylingPaths))
            },
            output: {
                filename: "[name].js",
                path: this.client.distPath,
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
                    template: this.client.entryHtmlPath,
                    title: this.client.htmlTitle,
                    favicon: this.client.faviconPath
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
