const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        stylesheet: path.resolve(__dirname, './stylesheet/stylesheet.js'),
        demo: path.resolve(__dirname, '../demo/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist/demo/src')
    },
    optimization: {
        splitChunks: false,
        runtimeChunk: false,
        concatenateModules: true,
    },
    stats: {
        warnings:false
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
        hot: true,
        port: 8090,
        client: {
            overlay: {
                warnings: false,
                runtimeErrors: false
            }
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
        devMiddleware: {
            writeToDisk: (filePath) => {
                return !filePath.includes('hot-update')
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-prefixwrap')('#sr-styleguide', {
                                        ignoredSelectors: [':root']
                                    })
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-prefixwrap')('#sr-styleguide', {
                                        ignoredSelectors: [':root']
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "@/plugins/vuetify/preset/variables.scss";',
                            sassOptions: {
                                includePaths: ['../node_modules'],
                                indentedSyntax: true // Enables SASS (not SCSS)
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-prefixwrap')('#sr-styleguide', {
                                        ignoredSelectors: [':root']
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['../node_modules']
                            },
                            additionalData: '@import "@/plugins/vuetify/preset/variables.scss";'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: ({ chunk }) => {
                if (chunk.name === 'stylesheet') {
                    return '../../stylesheet/sr-styleguide.css'
                }

                return '[name]'
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../demo/index.html'),
            chunks: ['demo'],
            filename: '../index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    }
}
