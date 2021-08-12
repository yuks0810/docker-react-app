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