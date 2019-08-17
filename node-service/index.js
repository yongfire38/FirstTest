const express = require('express');
const app = express();


//모든 게시글 보기
app.get('/posts', (req, res) => {
    res.send('hello world....안녕하세요');
});

//게시글 상세보기
app.get('/posts/345212', (req, res) => {
    res.send('니하오');
});

//게시글 작성하기
app.post('/posts', (req, res) => {
    res.send('글이 등록되었습니다.');
});

app.listen(3000, () => {
    console.log('server ready on port 3000');
})