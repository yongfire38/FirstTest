//자바에서의 임포트와 동일한 코드인 거 기억남?
const fs = require('fs');

//비동기 파일 읽기이므로 
//마지막의 'file read end'가 꼭 마지막에 실행된다는 보장 없음

//동기식으로 읽으려면 
//fs.readFileSync('sample.txt', 'utf8');

fs.readFile('sample.txt', 'utf8', function(err, content){
    console.log(content);
});

console.log('file read end');