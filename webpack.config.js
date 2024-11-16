const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
  entry: './src/js/index.js',  // من أين يبدأ العمل
  stats: 'errors-only',  // عند تشغيل السيرفر يقوم بعرض الأخطاء فقط


  output: {    // المكان الذي سوف يتم وضع الملفات المخرجة فيه
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'bulid'),
  },


  module: {   // لتعامل مع التنسيقات و الصور و الخطوط
    rules: [
      {
        test: /\.(sass|css|scss)$/,     // نهاية الملفات التي سنتعامل معها
        
        use: [  // يجب علينا تثبيت هذه الاضافات
            {
                loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",       
        ],
      },

      {                       // هنا قمنا بتعريف الصور
        test: /\.(png|jpe?g|gif)$/i,

        use: [

          {

            loader: 'file-loader',

            options: {

              name: '[name].[ext]',

              outputPath: "images",

            }

          },

        ],
      },

      {   // لكي يتم تحميل الصور من ملف الhtml

        test: /\.html$/i,

        loader: 'html-loader',

      },


      {                       // هنا قمنا بتعريف الخطوط
        test: /\.(svg|eot|woff|ttf)$/i,

        use: [

          {

            loader: 'file-loader',

            options: {

              name: '[name].[ext]',   /// اسم الملف

              outputPath: "fonts",    /// بقوم بأنشاء مجلد في bulid بهذا الاسم

            }

          },

        ],
      },


    ],
  },

  devServer: {  // السيرفر المحلي

    static: {

      directory: path.join(__dirname, ' build'),

    },

    compress: true,    // لكي يقوم بضغط الملفات

    port: 9000,

   open: true,   // يفتح الموقع مباشرة

    devMiddleware: {

      writeToDisk: true, // لكي يقوم بكتابة ملف bulid عند التشغيل

    },

  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',   // الملف الذي سوف يعمل عليه
      filename: 'index.html'    // اسم الملف عتدما يكون جاهز
    }),
    new MiniCssExtractPlugin(),
  ],
};