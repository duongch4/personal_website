// const glob = require("glob");
// const path = require("path");
const Imagemin = require("imagemin");
const ImageminWebp = require("imagemin-webp");
// const Sharp = require("sharp");
const webpackConstants = require("./webpack.config.const");

const getWebp = async () => {
    await Imagemin([webpackConstants.client.pngPath], {
        destination: webpackConstants.client.webpDestPath,
        plugins: [ImageminWebp({ lossless: true })],
    });

    await Imagemin([webpackConstants.client.jpgPath], {
        destination: webpackConstants.client.webpDestPath,
        plugins: [ImageminWebp({ quality: 65 })],
    });

    // const svgPaths = glob.sync(webpackConstants.client.svgPath);
    // const promises = [];
    // svgPaths.forEach(svgPath => {
    //     const name = path.basename(svgPath, path.extname(svgPath));
    //     promises.push(
    //         Sharp(svgPath).webp().toFile(path.join(webpackConstants.client.webpDestPath, `${name}.webp`))
    //     );
    // });
    // await Promise.all(promises);
};

getWebp();
