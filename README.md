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
    
    ├── app/我的主页面的位置
   
    ├── components/一些组成的结构
   
    └── data/卡片的储存位置
    # 个人课程练习与工具集成平台

这是一个基于Next.js构建的Web应用，整合了个人课程练习展示、WakaTime编码时长统计和QAnything问答服务，github上传时长记录。
# 关于我的主页面
主页面采用了
![screenshot-1751553966271.png](https://img.picui.cn/free/2025/07/03/686698337ba83.png)
主页面由左侧的作业与右侧两部分qanything页面构成，
分别是嵌入的官方qanything页面与自定义api的qanything助手
作业卡片包含了作品预览，github代码与直接访问，直接点击即可查看
导航栏包含了首页，Qanything官方，Qanything的api版本GitHub上传记录
# 关于Footer
Footer包含了来着cloudflare 加密后的wakatime api 但是由于一些原因api无法访问（即使用cloudflare 自带的helloworld示例也无法访问）
在无法奈何的情况下于是我采用了直接用api访问的wakatime时长置于Footer下方
![screenshot-1751555550164.png](https://img.picui.cn/free/2025/07/03/68669e574485b.png)
# 关于QAnything
我使用了两种方法运行QAnything
嵌入的HTML页面与自行开发的API调用界面
![screenshot-1751555798805.png](https://img.picui.cn/free/2025/07/03/68669edb7558f.png)
我还用不同的路由做了单独的页面

