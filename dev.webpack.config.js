const path = require('path')

module.exports = {
    entry: './src/app.js',
    devtool: 'inline-sourcemap',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-2',
                        'stage-1'
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties'
                    ]
                }
            }
        ]
    }
}
