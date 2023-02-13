---
title: 【ESLint】Eslint配置
date: 2023-2-13
categories:
  - 前端
tags:
  - ESLint
sidebar: auto
---

::: tip
为了规范团队开发的代码风格，这里copy了一份`Anthony Fu`的 [Eslint配置](https://github.com/antfu/eslint-config)
:::

### 1.安装

```shell
pnpm add -D eslint @antfu/eslint-config
```

### 2.配置 `.eslintrc`

```json
{
  "extends": "@antfu"
}
```

### 3.配置`package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 4.安装vscode插件

插件： [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 5.设置`.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 6.其它的配置

- [antfu/dotfiles](https://github.com/antfu/dotfiles) - My dotfiles
- [antfu/vscode-settings](https://github.com/antfu/vscode-settings) - My VS Code settings
- [antfu/ts-starter](https://github.com/antfu/ts-starter) - My starter template for TypeScript library
- [antfu/vitesse](https://github.com/antfu/vitesse) - My starter template for Vue & Vite app