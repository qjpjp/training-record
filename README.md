# Training Record

一个安全、轻量的静态力量举训练记录页面。

在线访问：https://qjpjp.github.io/training-record/

## 功能

- 记录深蹲、卧推、硬拉的训练日期、重量、次数和组数
- 自动计算估算 1RM，并汇总三项最佳成绩
- 查看历史记录，按动作筛选训练数据
- 绘制重量和估算 1RM 趋势曲线
- 计算 DOTS 系数和三项总重
- 导出和导入 JSON 备份

## 数据与隐私

- 数据只保存在当前浏览器的 `localStorage` 中
- 没有后端数据库
- 没有外部脚本依赖
- 仓库不包含本机路径、账号、token 或训练数据

## 备份与恢复

在“历史”页面点击“导出备份”可下载 JSON 文件。更换设备或清空浏览器数据前，建议先导出备份。

恢复时点击“导入备份”，选择之前导出的 JSON 文件。导入会合并记录，并按日期、动作、重量、次数和组数去重。

## 本地打开

直接用浏览器打开 `index.html` 即可使用，不需要安装依赖或启动服务。

## Android APK

仓库包含一个最小 Android WebView 包装项目，会把 `index.html` 打进 APK。App 内数据仍保存在当前手机的 WebView 本地存储中。

生成 APK：

1. 打开 GitHub 仓库的 Actions 页面
2. 运行 `Build Android APK`
3. 在本次运行的 Artifacts 中下载 `training-record-debug-apk`

本地构建需要 Android SDK 和 Gradle：

```bash
gradle :app:assembleDebug
```
