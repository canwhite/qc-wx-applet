/*
小程序的运行环境大致分为渲染层和逻辑层
----------------------------------
渲染层:主要是同构webview进行渲染，一个小程序有多个webview页面，所以渲染层存在多个webview线程
逻辑层:采用jscore线程运行js脚本
native:微信客户端

这两个线程的通信会经由微信客户端（下文中也会采用Native来代指微信客户端）做中转，
逻辑层发送网络请求也经由Native转发

*/

/*
注意新建page的一些注意问题
首先先建一个文件夹，然后选中该文件夹
新建page

*/

