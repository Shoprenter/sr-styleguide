const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../index.js')
    },
    output: {
        filename: '[name].demo.bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
        hot: true,
        port: 8090,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
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
                    'vue-style-loader',
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
                    'vue-style-loader',
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
                    'vue-style-loader',
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../../dist/sr-styleguide.css'),
                    to: path.resolve(__dirname, '../dist/sr-styleguide.css')
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../../src')
        }
    }
}
