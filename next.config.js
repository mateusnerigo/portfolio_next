module.exports = {
    webpack: function (config, options) {
        console.log(options.webpack.version); // Should be webpack v5 now
        config.experiments = {};
        return config;
    },
};
