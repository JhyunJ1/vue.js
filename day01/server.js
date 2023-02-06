const http = require('http'); // require : node.js 에서 제공해주는 명령어 // http에 관한 명령어를 처리해 줄 도구들을 불러옴
const fs = require('fs'); // file system 불러오기

const mySet = (request, response) => {
    let url = request.url;
    if (url === '/') {
        url = '/index.html';
    }
    response.writeHead(200, {'Content-Type': 'text/html'}); // 헤더에 넘겨주는 파일의 형태 표시를 포함시킴
    const htmlFile = fs.readFileSync(__dirname + url);
    response.end(htmlFile);
};
const app = http.createServer(mySet);
app.listen(8080) // 포트 번호 설정 - 포트 : 아파트 동 호수 같은 느낌

