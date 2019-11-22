const webpack = require("webpack"); // access built-in plugins
const glob = require("glob"); // sync all css files, no need to import css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // to minize js file
const HtmlWebpackPlugin = require("html-webpack-plugin"); // to build from html template
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // to extract css into it own file
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin"); // to use with transpileOnly in ts-loader

let plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        hash: true,
        inject: true,
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
    new ImageminPlugin({}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MomentLocalesPlugin({
        localesToKeep: ["en", "en-ca"],
    }),
    new webpack.HashedModuleIdsPlugin(), // so that file hashes dont change unexpectedly
    new ForkTsCheckerWebpackPlugin({
        async: false,
        useTypescriptIncrementalApi: true,
        memoryLimit: 4096
    }),
];

module.exports = {
    mode: "production",
    entry: {
        main: ["./src/index.tsx"].concat(glob.sync("./src/**/*.scss")),
        pageIntro: "./src/pages/intro/IntroPage.tsx"
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: `${__dirname}/dist`
    },

    // devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
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
                    }
                ]
            },
            {
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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "image-webpack-loader",
                enforce: "pre"
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
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
                    },
                },
            },
        },
    },

    plugins: plugins,

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};