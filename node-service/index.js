const express = require('express');
const app = express();


//루트 요청으로 들어온다면 모든 게시글 보기로 리다이렉트
app.get('/', (req, res) => {
    res.redirect('/posts');
});


//모든 게시글 보기
app.get('/posts', (req, res) => {

    const article = {
        title : '오늘 멋진날...',
        content: '욤뇸뇸',
        tag:['인싸감성','쪼와용','오홓홓']
    }

    res.json(article);
});

//게시글 상세보기
app.get('/posts/345212', (req, res) => {
    res.send('니하오');
});

//게시글 작성하기
app.post('/posts', (req, res) => {
    res.send('글이 등록되었습니다.');
});

app.get('*', (req, res) => {
    res.send('요청 URL이 잘못되었습니다.');
});

app.listen(3000, () => {
    console.log('server ready on port 3000');
});