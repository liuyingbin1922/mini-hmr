const webpack = require("webpack");
 const Server = require("./lib/server/Server");
 const config = require("../webpack.config");
 
 // 【1】创建webpack实例 , 读取配置
 const compiler = webpack(config);
 // 【2】创建Server类，这个类里面包含了webpack-dev-server服务端的主要逻辑（在 2.Server整体 中会梳理他的逻辑）
 const server = new Server(compiler);
 
 // 最后一步【10】启动webserver服务器
 server.listen(8001, "localhost", () => {
     console.log(`Project is running at http://localhost:8001/`);
 })
