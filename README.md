# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

安装：
pnpm add unplugin-vue-components -D
可以使用：
import Components from "unplugin-vue-components/vite"
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers"

pnpm add element-plus -D
pnpm add vant -D
pnpm remove element-plus
pnpm remove vant
pnpm add element-plus
pnpm add vant

vite.config.ts--->

# Vue3 Multiport Template

双端（mobile + pc）模板，Vue3 + TS + Vite + Pinia + Axios，移动端使用 Vant，PC 端使用 Element Plus。

启动：

```bash
npm install
npm run dev:mobile
npm run dev:pc
```

ESLint + Prettier
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-vue \
 @typescript-eslint/parser @typescript-eslint/eslint-plugin \
 eslint-config-airbnb-base eslint-plugin-import

pnpm add -D openapi-typescript-codegen
pnpm api:gen

整体流程图（简化版）
index.html
↓ (Vite 注入入口脚本)
main.ts
↓ (创建 Vue 应用实例)
App.vue
↓ (作为根组件挂载到 #app)
页面渲染

而 vite.config.ts 是整个过程的 构建指挥官，控制：

入口文件是哪个（main.ts）
如何处理 .vue 文件
开发服务器行为
构建输出结构等

pnpm run dev
pnpm run dev:m
pnpm run dev:p

tsconfig.json
├── tsconfig.app.json → 编译 src/（浏览器端）
├── tsconfig.node.json → 编译 vite.config.ts 等（Node 端）
└── tsconfig.vitest.json → 编译测试文件

env.d.ts → 全局类型声明（.vue, import.meta.env）

vite.config.ts → 构建/开发配置
vitest.config.ts → 测试运行配置（基于 Vite）
