const withTM = require("next-transpile-modules")(["ui"]);
const withLinaria = require("next-linaria");

module.exports = withLinaria(
    withTM({
        reactStrictMode: true,
        images: {
            loader: 'akamai',
            path: '',
        },
    })
);