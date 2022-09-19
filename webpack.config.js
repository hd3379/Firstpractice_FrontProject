const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", //개발자모드
  entry: [ "./src/ts/index.ts", "./src/css/styles.css"],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [ //로더 등록
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name : 'assets/img/[contenthash].[ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.css'],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/,
  },
  output: { //출력 디렉터리
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [ //플러그인 등록 (이런저런 파일 dist에 등록)
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/index.html",
      chunk : ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "main_page.html",
      template: "./src/html/main_page.html",
    }),
    new HtmlWebpackPlugin({
      filename: "registerCheck.html",
      template: "./src/html/registerCheck.html",
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./src/html/register.html",
      chunk : ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "search_deal.html",
      template: "./src/html/search_deal.html",
    }),
    
  ],
};
