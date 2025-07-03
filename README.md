新闻学2班幸怡函web前端作业
# 个人课程练习与工具集成平台

这是一个基于Next.js构建的Web应用，整合了个人课程练习展示、WakaTime编码时长统计和QAnything智能问答服务。

#这是我的期末作业结构

├── .gitignore

├── .next/

├── README.md

├── Users/

├── jsconfig.json

├── next.config.js

├── package-lock.json

├── package.json

├── postcss.config.mjs

├── public/

│   ├── homework/每周作业储存位置

│   └── ...

└── src/
    
    ├── app/我的主路由的位置
   
    ├── components/一些组成的路由
   
    └── data/卡片的储存位置
    # 个人课程练习与工具集成平台

这是一个基于Next.js构建的Web应用，整合了个人课程练习展示、WakaTime编码时长统计和QAnything问答服务，github上传时长记录。
# 关于我的主页面
主页面采用了
![screenshot-1751553966271.png](https://img.picui.cn/free/2025/07/03/686698337ba83.png)
主页面由左侧的作业与右侧两部分qanything页面构成，
分别是嵌入的官方qanything页面与自定义api的qanything助手
#旧作业
作业卡片包含了作品预览，github代码与直接访问，直接点击即可查看，卡片中的图片使用了第三方的图床，减少了在github上克隆项目的下载速度的限制
导航栏包含了首页，Qanything官方，Qanything的api版本GitHub上传记录
# 关于Footer
Footer包含了来着cloudflare 加密后的wakatime api 但是由于一些原因api无法访问（即使用cloudflare 自带的helloworld示例也无法访问）
我的api:https://wakatime.youzii.workers.dev/
在无法奈何的情况下于是我采用了直接用api访问的wakatime时长置于Footer下方
![screenshot-1751555550164.png](https://img.picui.cn/free/2025/07/03/68669e574485b.png)
页眉页脚都采用了全局使用的方式
# 关于QAnything
我使用了两种方法运行QAnything
嵌入的HTML页面与自行开发的API调用界面
![screenshot-1751555798805.png](https://img.picui.cn/free/2025/07/03/68669edb7558f.png)

我还用不同的路由做了单独的页面

![screenshot-1751556156433.png](https://img.picui.cn/free/2025/07/03/6866a068c0f5e.png)
关于api版qanything，我在使用trae的基础上，查询官方的api文档
首先调用访问agentlist在获得的json中储存我的uuid与ai名称还有welcomeMessage，
https://openapi.youdao.com/q_anything/api/bot/list' 
然后再用Agents 问答携带uuid与question还有history等必要的body访问后选取response出现在屏幕上完成对api的使用
https://openapi.youdao.com/q_anything/api/bot/chat_stream' 
并且采用流式输出回答，使用css优化页面，使在不同大小的窗口下都能显示完整的内容
为了使主页面美观，最后以html的形式表现出来，iframe嵌入，api版本嵌入方式方式与官方版一致
# git
我的git上传的文件都在master分支，在main分支均有具体的commit记录
# 复现项目
整个页面均在next.js的环境下运行，克隆目录中last文件然后加入node_modules然后再npm run dev即可运行然后在浏览器输入http://localhost:3000即可复现
