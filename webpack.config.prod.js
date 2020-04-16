const webpack = require("webpack"); // access built-in plugins
const glob = require("glob"); // sync all css files, no need to import css
const TerserPlugin = require("terser-webpack-plugin"); // minify js: ES6
const HtmlWebpackPlugin = require("html-webpack-plugin"); // to build from html template
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // to extract css into it own file
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // to use with transpileOnly in ts-loader
const path = require("path");
const envkeys = require("./envkeys.config");
const fs = require("fs");
const dotenv = require("dotenv");

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
        postcssConfigPath: path.resolve(__dirname, "postcss.config.js"),

        pageIntroPath: path.resolve(__dirname, "./src/pages/intro/IntroPage.tsx")
    };

    setModeResolve() {
        return {
            mode: "production",
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

    setStyleLoader() {
        return {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
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
                        name: "[hash]/[name].[ext]",
                        outputPath: "assets"
                    }
                }
            ]
        };
    }

    setFileLoaderServer() {
        return {
            test: /\.(jpe?g|png|gif|svg|pdf)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        emitFile: false
                    }
                }
            ]
        };
    }

    setOptMinimizerUglifyJs() {
        return new TerserPlugin({
            cache: true,
            parallel: true,
            // sourceMap: true
        });
    }

    setCommonPlugins() {
        const plugins = [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HashedModuleIdsPlugin(), // so that file hashes dont change unexpectedly
            new MomentLocalesPlugin({
                localesToKeep: ["en", "en-ca"],
            }),
            new ForkTsCheckerWebpackPlugin({
                eslint: true,
                tsconfig: this._client.tsconfigPath,
                async: false, // check type/lint first then build
                // workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE // recommended - leave two CPUs free (one for build, one for system)
            }),
            new webpack.EnvironmentPlugin(envkeys.ENV_KEYS) // For CI production process!!!
        ];
        if (fs.existsSync(this._common.envFilePath)) {
            const fromDotEnv = new webpack.DefinePlugin({
                "process.env": JSON.stringify(dotenv.config({ path: this._common.envFilePath }).parsed)
            });
            return [...plugins, fromDotEnv];
        }
        return plugins;
    }

    setClientConfig() {
        return {
            name: this._client.instanceName,
            target: "web",
            ...this.setModeResolve(),
            entry: {
                main: [
                    this._client.coreJsPath, this._client.regenetorRuntimePath,
                    this._client.entryTsPath
                ].concat(glob.sync(this._client.allStylingPaths)),
                pageIntro: this._client.pageIntroPath
            },
            output: {
                filename: "[name].[contenthash:8].js",
                path: this._client.distPath,
            },
            module: {
                rules: [
                    this.setJavascriptSourceMapLoader(),
                    this.setTranspilationLoader(),
                    this.setStyleLoader(),
                    this.setFileLoaderClient(),
                    this.setImageLoader()
                ]
            },
            optimization: {
                minimizer: [
                    this.setOptMinimizerUglifyJs(),
                    new OptimizeCSSAssetsPlugin({})
                ],
                runtimeChunk: "single",
                splitChunks: {
                    chunks: "all",
                    maxInitialRequests: Infinity,
                    minSize: 0,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                                // npm package names are URL-safe, but some servers don"t like @ symbols
                                return `npm.${packageName.replace("@", "")}`;
                            }
                        }
                    }
                }
            },
            plugins: [
                ...this.setCommonPlugins(),
                new HtmlWebpackPlugin({
                    inject: true,
                    template: this._client.entryHtmlPath,
                    title: this._client.htmlTitle,
                    favicon: this._client.faviconPath,
                    hash: true,
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    }
                }),
                new MiniCssExtractPlugin({
                    filename: "[name].[hash].css",
                    chunkfilename: "[id].[hash].css"
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

module.exports = () => {
    return new WebpackConfig().setClientConfig();
};
