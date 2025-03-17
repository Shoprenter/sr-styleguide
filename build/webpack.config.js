const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        stylesheet: path.resolve(__dirname, './stylesheet/stylesheet.js')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
        hot: true,
        port: 8089,
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
        new VueLoaderPlugin(), // For Vue files processing
        new MiniCssExtractPlugin({
            filename: 'sr-styleguide.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    }
}
