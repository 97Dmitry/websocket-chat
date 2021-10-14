import HtmlWebpackPlugin = require("html-webpack-plugin");
import path = require("path");
import { Configuration } from "webpack";
import fs = require("fs");
// import ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const config: Configuration = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    allowedHosts: "all",
    bonjour: true,
    client: {
      logging: "log",
      overlay: true,
      progress: true,
      // webSocketTransport: "ws",
      // webSocketURL: "ws://0.0.0.0:3000/ws",
    },
    compress: true,
    devMiddleware: {},
    headers: () => ({ Key: "Value" }),
    historyApiFallback: true,
    host: "localhost",
    hot: true,
    // http2: true,
    https: {
      key: fs.readFileSync(path.join(__dirname, "certificates/localhost.key")),
      cert: fs.readFileSync(path.join(__dirname, "certificates/localhost.crt")),
    },
    liveReload: true,
    magicHtml: true,
    onAfterSetupMiddleware(devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
    },
    onBeforeSetupMiddleware(devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
    },
    onListening(devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      const port = devServer.server.address();
      console.log("Listening on port:", port);
    },
    open: false,
    port: 5500,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
    setupExitSignals: true,
    static: {
      directory: path.join(__dirname, "assets"),
      watch: true,
    },
    watchFiles: [],
    webSocketServer: "ws",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   eslint: {
    //     files: "./**/*",
    //   },
    // }),
  ],
};

export default config;
