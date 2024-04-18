const path = require('path');
//node에서 경로를 쉽게 지정하게 해주는 것
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'wordrelay-setting', 
    mode : 'development', 
    devtool : 'inline-source-map',
    resolve : {
        extensions: ['.js', '.jsx'],
    },
    entry : {
        app : ['./client'],
    }, // 입력

    module : {
        rules : [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {browsers: ['last 2 chrome versions']},
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: ['react-refresh/babel'],
            },
            exclude : path.join(__dirname, 'node_modules'),
        }],
    },

    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],


    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
        publicPath : '/dist',
    }, //출력
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
}