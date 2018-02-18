// Make sure to export this config.
module.exports = {
    parser: 'postcss-scss',
    // ORDER IS IMPORTANT!
    plugins: [
        // postcss-import doesn't rely on webpack's settings for module resolution.
        // (postcss-import doesn't even know if it's running in a webpack stack or not.)
        require('postcss-import')({
            path: 'src/shared/stylesheets'
        }),
        require('postcss-simple-vars')({}),
        require('postcss-nested')({}),
        require('postcss-custom-media')({
            extensions: {
                '--phone': '(min-width: 544px)',
                '--tablet': '(min-width: 768px)',
                '--desktop': '(min-width: 992px)',
                '--large-desktop': '(min-width: 1200px)'
            }
        }),
        require('lost'),
        // require('postcss-cssnext')({}),
        require('autoprefixer')({})
    ]
};
