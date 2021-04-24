# dumi

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

创建模板

```bash
$ npm init
$ npx @umijs/create-dumi-lib
```

打包路径修改

```json
{
  "scripts": {
    "prepublishOnly": "npm run build && cp -r ./es/* . && rm -rf ./es",
    "postpublish": "git clean -fd",
    "release": "npm publish"
  }
}
```
