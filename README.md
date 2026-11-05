# OrCAD + Allegro 17.4 英语学习 APP（网页安装版）

**用于 GitHub Pages 直接发布的静态项目**。无需服务器、API 密钥或构建依赖。

## 包含功能

- OrCAD Capture 17.4 259 条菜单记录，Allegro PCB Editor 17.4 286 条菜单记录
- 附加 20 条设置字段、13 张原始 Capture 截图
- 英文菜单朗读（依赖浏览器/手机系统语音）
- 中文四选一测试、答案讲解、菜单路径、依据等级
- 错题本、收藏、学习进度（保存在浏览器 localStorage）
- HTTPS 部署后 PWA 安装与静态资源离线缓存

## GitHub Pages 发布

1. 创建 GitHub 仓库，例如 `orcad-allegro-english`，默认分支设为 `main`。
2. 将当前项目**全部文件与文件夹**上传到仓库根目录，包括隐藏目录 `.github/workflows/`。
3. 进入仓库的 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 如果首次提交没有触发发布，进入 **Actions → Deploy OrCAD Allegro Learning App to GitHub Pages → Run workflow** 手动运行一次。
5. 发布成功后，GitHub Pages 网址通常类似 `https://<GitHub用户名>.github.io/orcad-allegro-english/`；以仓库 Settings → Pages 实际显示的 URL 为准。

项目已含 `.github/workflows/deploy-pages.yml`，不需要编写或修改 CI 配置。

## 华为 HarmonyOS 7 手机

1. 用华为浏览器打开发布后的 HTTPS 网址。
2. 浏览器菜单中选择类似「添加到桌面 / 添加书签到桌面」的选项，具体文字依浏览器版本而异。
3. 添加后用桌面图标启动。能否呈现独立全屏 PWA 窗口，取决于浏览器支持情况；至少可以建立网站桌面快捷方式。
4. 首次联网访问并完成缓存后可尝试离线学习；语音朗读依赖手机系统的可用英语语音组件，并非所有浏览器都支持。

**注意：这不是鸿蒙原生 HAP 安装包。**

## 学习数据与版本

应用保留了源文档对菜单依据的标记：A 表示截图直接可见，B 表示 17.4 资料，C 表示相近版本参考，未标注的按原文档状态保留。它不是经过本机实测的 17.4 全部菜单清单。

学习数据只保存在使用该网站的本机浏览器；若更换域名、清除站点数据或改用另一浏览器，进度不会自动同步。可在应用中导出记录 JSON 保存。
