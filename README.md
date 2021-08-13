参考：
https://github.com/dmalvia/React_Redux_Tutorial

## docker

### 起動コマンド

#### react 起動コマンド:
npmを利用してサーバー起動

```
docker-compose up
```
これで docker-compose.ymlに記載されている `npm run start` が実行される

## firbase

### firebase login
firebaseにDockerからログインするときに使用するコマンド

```
firebase login --no-localhost 
```

## 関連技術

### Redux

* combineReducers(reducers)
  * https://redux.js.org/api/combinereducers


### redux-devtool-extension
https://github.com/zalmoxisus/redux-devtools-extension

画像の世にstoreの内容などを確認できる
<img src="https://cloud.githubusercontent.com/assets/7957859/18002950/aacb82fc-6b93-11e6-9ae9-609862c18302.png" width="1000">