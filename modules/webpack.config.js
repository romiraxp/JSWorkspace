//import html from "./src/index.html";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSextractPlugin = require('mini-css-extract-plugin');
//const HtmlLoader = require('html-loader');

module.exports = {
    mode: 'production',
    entry: './src/index.js', //точка входа, которую можно поменять, например на ./src/blabla.js
    // для изменения вывода результат работы webpack мы можем испорльзовать output? ult
    /*output: {
        path: path.resolve(__dirname,'./dist'), //вместо dist можем указать другую папку 
        filename: 'test.js' // вместо main.js можем указать нужный нам файл test.js, например
    }*/

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCSSextractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/,
                //use: [HtmlLoader.loader, "html-loader"],
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // шаблон файла HTML из которого будут браться данные
            filename: 'test.html', // файл в который будет переноситься данные из Template в папку dist
        }),
        new MiniCSSextractPlugin(),
    ]

}