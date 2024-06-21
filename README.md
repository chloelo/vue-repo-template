# vue-repo-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 常用套件/工具

內有附上範例用法

- tailwindcss：自訂客製樣式 class
- primeVue：UI 套件，可與 tailwindcss 搭配使用
- vee-validate：表單驗證
- yup：設定驗證的規則，與 vee-validate 搭配使用
- dayjs：處理時間、日期格式的輕巧套件
- lodash-es：處理 js 陣列、物件、數字、字串..等實用工具庫
- Vue-datepicker-next：日期選擇器
- vueuse：基於 Vue Composition API 的實用函式庫
