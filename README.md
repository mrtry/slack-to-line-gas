# slack to LINE

- SlackからLINEに転送するGAS

## Setup

### GASに対して

- GASのProjectを作る
- [LINE Notify API](https://notify-bot.line.me/) のAccessTokenを発行し、ScriptPropertyの`LINE_ACCESS_TOKEN`に登録する
- WebAppとしてDeployする

### このRepositoryに対して

- `.clasp.json` を用意する

### Slackに対して

- Slackでアプリを作る
- Event Subscriptionsの `Request URL` にDeployしたアプリのURLを設定する
    - see: [【雑学】SlackとGASで自由度の高いSlackのチャットBotを作る](https://tektektech.com/slack-auto-reply-bot-with-gas/)