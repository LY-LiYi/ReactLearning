// 相同的配置都放到base里面 表示默认配置
const path = require('path');
// 动态添加bundle到HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//每次生成新的bundle文件之前清理/dist文件夹，以确保文件夹的干净整洁
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 让 webpack 知道以哪个模块为入口，做依赖收集
    // 具体参考 https://webpack.js.org/concepts/#entry
    // 这里 entry 是一个对象，每个页面和它的入口模块是一个 key/value 对   可以有多入口
    // /src/index.js是你的入口js文件
    entry: ['./src/index.js', 'babel-polyfill'],
    // 告诉 webpack 打包好的文件存放在哪里，以及怎么命名
    // 具体参考 https://webpack.js.org/concepts/#output
    // 这里 filename 有所改变，[name] 表示 entry 里面的 key
    // 表示每个页面的 bundle 文件以自己的名称命名
    //  [hash]--动态哈希 之所以要动态生态生成bundle文件，是为了防止浏览器缓存机制阻碍文件的更新，在每次修改代码之后，文件名中的hash都会发生改变，强制浏览器进行刷新，获取当前最新的文件。
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    // 这个属性里主要设置 extensions , 也就是文件后缀名
    // 查找依赖的时候的会以此查找这里设置的几个文件名来查找文件
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    //loader可以理解为webpack的编译器，它使得webpack可以处理一些非JavaScript文件，比如png、csv、xml、css、json等各种类型的文件，使用合适的loader可以让JavaScript的import导入非JavaScript模块。JavaScript只认为JavaScript文件是模块，而webpack的设计思想即万物皆模块，为了使得webpack能够认识其他“模块”，所以需要loader这个“编译器”。webpack中配置loader有两个目标：
    // （1）test属性：标志有哪些后缀的文件应该被处理，是一个正则表达式。
    // （2）use属性：指定test类型的文件应该使用哪个loader进行预处理。
    // 使用 babel-loader 编译 es6/7/8 和 jsx 语法
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                // test: /\.jsx?$/,
                test: /\.jsx?$/,
                use: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    // 插件可以用于执行范围更广的任务，包括打包、优化、压缩、搭建服务器等等
    // 这里我们通常想要指定自己的 html 文件模板，也可以指定生成的 html 的文件名
    // 如果不传参数，会有一个默认的模板文件
    // 具体参考 https://github.com/jantimon/html-webpack-plugin
    // /src/index.html是你的网站入口HTML文件
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
