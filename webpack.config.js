var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app :[
            './js/index.js',
            './scss/site.scss'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "../"
    },
    devServer: {
        contentBase: './docs'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "./css/[name].css"}),
    ],
    module: {
        rules: [
            // Styles loader
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  {
                    loader: "file-loader" // Or `url-loader` or your other loader
                  }
                ]
              }
        ]
}
};