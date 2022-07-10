import expressServer from './server';
import http from 'http';
import { normalizePort } from './lib/port';

const port = normalizePort(process.env.PORT || 3000);

// Expressクラスを作成
const expressInstance = new expressServer().expressInstance;

// ポート番号を設定する
expressInstance.set('port', port);

// HTTPサーバーを作成
const server = http.createServer(expressInstance);

// 指定されたポートのリスニングを開始する (Default: 3000)
server.listen(port);
server.on('listening', onListening);

function onListening(): void {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `Listetning on port ${addr?.port}`;
    console.log(bind);
}
