{
  mode: 'development',
    context: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp',
      devtool: 'cheap-module-eval-source-map',
        node: {
    setImmediate: false,
      dgram: 'empty',
        fs: 'empty',
          net: 'empty',
            tls: 'empty',
              child_process: 'empty'
  },
  output: {
    path: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/dist',
      filename: '[name].js',
        publicPath: '/',
          globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  resolve: {
    alias: {
      '@': '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/src',
        vue$: 'vue/dist/vue.runtime.esm.js',
          '@assets': '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/src/assets'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
      modules: [
        'node_modules',
        '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules',
        '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/@vue/cli-service/node_modules'
      ]
  },
  resolveLoader: {
    modules: [
      '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules',
      '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
      rules: [
        /* config.module.rule('vue') */
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/.cache/vue-loader',
                cacheIdentifier: 'df1437b2'
              }
            },
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                },
                cacheDirectory: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/.cache/vue-loader',
                cacheIdentifier: 'df1437b2'
              }
            }
          ]
        },
        /* config.module.rule('images') */
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        },
        /* config.module.rule('svg') */
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        /* config.module.rule('media') */
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'media/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        },
        /* config.module.rule('fonts') */
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        },
        /* config.module.rule('pug') */
        {
          test: /\.pug$/,
          oneOf: [
            /* config.module.rule('pug').oneOf('pug-vue') */
            {
              resourceQuery: /vue/,
              use: [
                {
                  loader: 'pug-plain-loader'
                }
              ]
            },
            /* config.module.rule('pug').oneOf('pug-template') */
            {
              use: [
                {
                  loader: 'raw-loader'
                },
                {
                  loader: 'pug-plain-loader'
                }
              ]
            }
          ]
        },
        /* config.module.rule('css') */
        {
          test: /\.css$/,
          oneOf: [
            /* config.module.rule('css').oneOf('vue-modules') */
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            },
            /* config.module.rule('css').oneOf('vue') */
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            },
            /* config.module.rule('css').oneOf('normal-modules') */
            {
              test: /\.module\.\w+$/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            },
            /* config.module.rule('css').oneOf('normal') */
            {
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            }
          ]
        },
        /* config.module.rule('postcss') */
        {
          test: /\.p(ost)?css$/,
          oneOf: [
            /* config.module.rule('postcss').oneOf('vue-modules') */
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            },
            /* config.module.rule('postcss').oneOf('vue') */
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            },
            /* config.module.rule('postcss').oneOf('normal-modules') */
            {
              test: /\.module\.\w+$/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            },
            /* config.module.rule('postcss').oneOf('normal') */
            {
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              ]
            }
          ]
        },
        /* config.module.rule('scss') */
        {
          test: /\.scss$/,
          oneOf: [
            /* config.module.rule('scss').oneOf('vue-modules') */
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                '
                  }
                }
              ]
            },
            /* config.module.rule('scss').oneOf('vue') */
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                '
                  }
                }
              ]
            },
            /* config.module.rule('scss').oneOf('normal-modules') */
            {
              test: /\.module\.\w+$/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                '
                  }
                }
              ]
            },
            /* config.module.rule('scss').oneOf('normal') */
            {
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                '
                  }
                }
              ]
            }
          ]
        },
        /* config.module.rule('sass') */
        {
          test: /\.sass$/,
          oneOf: [
            /* config.module.rule('sass').oneOf('vue-modules') */
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                ',
                    indentedSyntax: true
                  }
                }
              ]
            },
            /* config.module.rule('sass').oneOf('vue') */
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                ',
                    indentedSyntax: true
                  }
                }
              ]
            },
            /* config.module.rule('sass').oneOf('normal-modules') */
            {
              test: /\.module\.\w+$/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                ',
                    indentedSyntax: true
                  }
                }
              ]
            },
            /* config.module.rule('sass').oneOf('normal') */
            {
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                    data: '\n                    @import "@/assets/css/theme/reset.scss";\n                    @import "@/assets/css/theme/color.scss";\n                    @import "@/assets/css/theme/mixin.scss";\n                    @import "@/assets/css/theme/common.scss";\n                ',
                    indentedSyntax: true
                  }
                }
              ]
            }
          ]
        },
        /* config.module.rule('less') */
        {
          test: /\.less$/,
          oneOf: [
            /* config.module.rule('less').oneOf('vue-modules') */
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: false
                  }
                }
              ]
            },
            /* config.module.rule('less').oneOf('vue') */
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: false
                  }
                }
              ]
            },
            /* config.module.rule('less').oneOf('normal-modules') */
            {
              test: /\.module\.\w+$/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: false
                  }
                }
              ]
            },
            /* config.module.rule('less').oneOf('normal') */
            {
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: false
                  }
                }
              ]
            }
          ]
        },
        /* config.module.rule('stylus') */
        {
          test: /\.styl(us)?$/,
          oneOf: [
            /* config.module.rule('stylus').oneOf('vue-modules') */
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: false,
                    preferPathResolver: 'webpack'
                  }
                }
              ]
            },
            /* config.module.rule('stylus').oneOf('vue') */
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: false,
                    preferPathResolver: 'webpack'
                  }
                }
              ]
            },
            /* config.module.rule('stylus').oneOf('normal-modules') */
            {
              test: /\.module\.\w+$/,
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: false,
                    preferPathResolver: 'webpack'
                  }
                }
              ]
            },
            /* config.module.rule('stylus').oneOf('normal') */
            {
              use: [
                {
                  loader: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/mini-css-extract-plugin/dist/loader.js',
                  options: {
                    hmr: true,
                    publicPath: '../'
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: false,
                    plugins: [
                      function () { /* omitted long function */ },
                      function () { /* omitted long function */ }
                    ]
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: false,
                    preferPathResolver: 'webpack'
                  }
                }
              ]
            }
          ]
        },
        /* config.module.rule('js') */
        {
          test: /\.m?jsx?$/,
          exclude: [
            function () { /* omitted long function */ }
          ],
          use: [
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/node_modules/.cache/babel-loader',
                cacheIdentifier: '667359d9'
              }
            },
            {
              loader: 'babel-loader'
            }
          ]
        },
        /* config.module.rule('proto') */
        {
          test: /\.(proto)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'static/files/[name].[hash:7].[ext]'
                  }
                }
              }
            }
          ]
        },
        /* config.module.rule('worker') */
        {
          test: /\.worker\.js$/,
          use: [
            {
              loader: 'worker-loader',
              options: {
                fallback: {
                  loader: 'worker-loader',
                  options: {
                    name: '[name].[hash].js'
                  }
                }
              }
            }
          ]
        }
      ]
  },
  optimization: {
    minimize: true,
      splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/public',
          to: '/Users/huangbin/Documents/muchinfo_hb/MTP2_WebApp/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store'
          ]
        }
      ]
    ),
    {
      options: {
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      },
      checkIgnore: function () { [native code] }
    }
  ],
    entry: {
    app: [
      './src/main.js'
    ]
  }
}
