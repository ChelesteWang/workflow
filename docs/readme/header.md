<div align="center">

# 制定你自己的前端工作流

![logo](public/asset/logo-mini2.png)

### <strong>workflow</strong>

[![npm][npm]][github-url]
[![node][node]][node-url]

[![star][star]][github-url]
[![issue][issue]][issue-url]
[![forks][forks]][github-url]

<!-- [![downloads][downloads]][npm-url] -->

</div>

## 为什么使用 workflow？

workflow 致力于打造一个前端工作流平台，使用 workflow 你可以从生成代码到打包上线，整个流程你都可以使用为你量身定做

- `@pkb/cli` 生成项目/添加插件/代码提交检查等，包括大型项目、spa、多页面应用、ssr、小程序等等，后面会考虑将跨端加入进来
- `learn`，本平台会支持一系列学习课程，从零开始学习某项技能

### workflow 有哪些优势

- 🏈 约定式目录
- 🍁 多框架支持（vue/react/小程序等应有尽有）
- 🎉 可插拔的插件系统（多项目管理）
- 🚀 定制化解决方案（webp、图片压缩、骨架屏等）
- 🧪 测试（单元测试、e2e）
- 📺 工具类集成（适配 adapter、callApp、无痕埋点、canvas 引擎等）
- 🔧 集成解决方案（提测、联调、部署）
- 🏠 监控（性能监控、异常错误监控）
- 🌴 界面化管理项目（待完成）
- 🍎 可扩展
- 🔧 node 工具

### @pkb/cli 脚手架

`@pkb/cli` 为本项目的脚手架，可用来生成项目、添加插件、检查项目配置、升级更新等等，主要的功能就是对整体项目的管理。

```bash
# 全局安装
npm i -g @pkb/cli # 全局安装使用

pk create <project-name> # 创建项目（待完善）
pk add <plugin> # 安装插件
pk info # 查看项目及系统配置
pk upgrade [filter] # 检查升级 npm 版本
pk cm # commit 提交
```

### webpack-box

[从零开始 webpack 学习，使用 webpack5 版本，一共 27 课时，让你从小白到大神](./learn/webpack)

- webpack-box 是一个对 webpack 进行了封装的开箱即用的项目。集成了 webpack 的各种优化，配置了 webpack 常用到的 loader 和 plugin，原则上您不需要做任何配置就可以使用。
- webpack-box 支持插件配置，您可以使用插件管理项目配置，可以多项目复用
- 您也可以当作参考手册，来这里找到任何想要的 webpack 配置
- 如果想要从头系统学习，可以切换到不同分支上，我把每课时的内容都分别切成了不同的分支，您可以在这些分支上自由尝试

[点击查看详情...](./packages/webpack-box/README.md)
### rollup-box

对 rollup 进行封装，大量插件，开箱即用

[点击查看详情...](./packages/rollup-box/README.md)


### node-tools

集成了一些 node 工具

[点击查看详情...](./packages/tools/README.md)
### 开发&学习

- [项目计划] 把 issue 整理到 project 中做好分类，并有计划的完成目标。
- [开发指南] 如果想要一起开发的可以参考这里。
- [插件市场] 目前已经完成的插件。
- [好的文章] 把我觉得好的 webpack 的文章整理到我的 wiki 里，也可以在项目中点击 wiki 查看。

[项目计划]: https://github.com/luoxue-victor/webpack-box/projects/1
[开发指南]: ./docs/课时-25.md
[插件市场]: https://www.npmjs.com/search?q=%40pkb
[好的文章]: https://github.com/luoxue-victor/webpack-box/wiki
[npm-url]: https://www.npmjs.com/package/webpack-box
[issue-url]: https://github.com/luoxue-victor/webpack-box/issues
[node]: https://img.shields.io/node/v/webpack.svg
[node-url]: https://nodejs.org
[github-url]: https://github.com/luoxue-victor/webpack-box
[downloads]: https://img.shields.io/npm/dt/@pkb/webpack-box.svg?style=flat-square
[npm]: https://img.shields.io/npm/v/webpack.svg
[issue]: https://img.shields.io/github/issues/luoxue-victor/webpack-box
[forks]: https://img.shields.io/github/forks/luoxue-victor/webpack-box
[star]: https://img.shields.io/github/stars/luoxue-victor/webpack-box
