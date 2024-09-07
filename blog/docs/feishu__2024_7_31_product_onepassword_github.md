---
title: 密码管理器github说明
create_time: 1725104206
categories:
  - product
---


一个密码管理器

## **背景**

互联网时代，账号密码太多，之前的方法是保存在一个记事本中。但缺乏安全性，搜索也不方便。

市面上有不少密码管理工具，但都需要服务器。但密码这种敏感信息，存在别人服务器上总感觉不放心。

心想基本功能只是一个加密存储和搜索，实现起来应该不难，于是自己参考1password做了一个。

目前功能尚不完善，我会在使用过程中不断优化。大家也可以试用一下，有什么建议可以提。

我的目标目前很简单：

1、只个人使用，不搞什么分享，协作这些复杂的完意

2、不要服务器，只提供网盘备份和恢复功能。自己的数据自己掌握

## **原理介绍**

1、类似1password的双密码机制：主密码（用户自己记住）+key(软件生成长度为25的随机密码）

2、机密信息使用aes-256-cbc加密算法。密钥是 sha256(主密码+key)

3、数据存在本地，使用sqlite数据库

## **功能介绍**

1、 保密项目支持：账号、银行卡、笔记

2、多个保密项目可以关联到一个保险库中

3、多账号支持

4、随机密码生成工具

5、自动输入密码功能

6、本地备份和恢复功能

7、云盘备份和恢复功能（目前只支持阿里云盘）

8、csv导入（支持chrome和edge)

## **演示效果**

### **保险库**

<img src="/assets/J2JSbjsYpots6zxdObtcLQjNnvg.gif" src-width="918" class="markdown-img m-auto" src-height="614" align="center"/>

### **增保密信息**

<img src="/assets/WIpwbuzdpov0QBx3gfhcv5hmnJd.gif" src-width="874" class="markdown-img m-auto" src-height="654" align="center"/>

### **保密信息预览**

<img src="/assets/PaRDbyqASo5B6rx57X2cfdd0nTe.gif" src-width="974" class="markdown-img m-auto" src-height="728" align="center"/>

### **保密信息编辑**

<img src="/assets/VZtRbLDijoYEqAx02CccGMeMnhd.gif" src-width="878" class="markdown-img m-auto" src-height="652" align="center"/>

### **用户设置功能**

<img src="/assets/Ud6ibdHu7o4PCSxPeuicyVfXngd.gif" src-width="872" class="markdown-img m-auto" src-height="612" align="center"/>

### **密码生成**

<img src="/assets/R0yGbj9laoiboRx2fZ8ce9Nmnld.gif" src-width="1028" class="markdown-img m-auto" src-height="656" align="center"/>

### **tray托盘**

<img src="/assets/O9iNbgRj3ok9YbxggjdcwlZynDS.png" src-width="244" class="markdown-img m-auto" src-height="140" align="center"/>

### **自动输入**

<img src="/assets/ARvUbClubozD6txiiN9cneAJnRh.gif" src-width="864" class="markdown-img m-auto" src-height="436" align="center"/>

### ** csv导入**

<img src="/assets/Z7RObWhM0ouHS3xy4vKcvdV1nbg.gif" src-width="876" class="markdown-img m-auto" src-height="656" align="center"/>

### **csv导出**

<img src="/assets/X170bJ7sAoigCQxBD5HcmunnnRg.gif" src-width="874" class="markdown-img m-auto" src-height="644" align="center"/>

### **多账号**

<img src="/assets/PL7hbSig9oE2dyxlGXzc4Ep2neg.gif" src-width="860" class="markdown-img m-auto" src-height="642" align="center"/>

### **网盘备份和还原**

<img src="/assets/SLj9bpWP7oZ2nsx25X4cLgpwn5f.gif" src-width="882" class="markdown-img m-auto" src-height="656" align="center"/>

**开发说明**

### **下载代码**

```text
git clone https://github.com/ftyszyx/lockpass.git
```

### **安装依赖**

```text
npm install
```

### **运行**

```text
npm run dev
```

## **使用的库**

### **打包**

[electron-vite](https://github.com/alex8088/electron-vite)

<u>electron-builder 打包</u>

<u>electron-builder github</u>

其实打包流程就是 electron vite先把main render preload下的脚本用vite打包到out目录下 然后electron-build把资源打成asar

## **遇到的问题汇总**

