# study-yargs

# 本地调试 npm 包

1. package.json 中添加

```
"bin": {
  "${command-name}": "${path}"
}
```

2. 进入项目目录，将包链接到全局

```
npm link
```

链接到全局后，就可以在命令行中使用了

3. 卸载

```
npm unlink <package-name>
```
