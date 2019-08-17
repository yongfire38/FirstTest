//자바 스크립트의 타입은 전부 5개
//숫자, 문자, 불리언, 배열, 오브젝트

//정수든 실수든 전부 number 타입임.
const myNumber = 3;

console.log(typeof myNumber);

//문자는 쌍따옴표든 외따옴표든 상관없음
const myString = 'hello world';

console.log(typeof myString);

//es6에는 백틱(1옆에 있음)을 사용하는 경우가 있음
//템플릿 문자열이라고 하는데 여러줄의 표현이나 바인딩 표현도 가능
const es6String = 
`hello 
world ${myNumber}
ok
<html>
    <head></head>
    <body></body>
</html>
`
console.log(es6String);
console.log(typeof es6String);

const myBool = true;

console.log(typeof myBool);

//ES6에서는 파라미터에 디폴트 값을 줄 수 있음
function myFunc(x = 0, y = 0){
    return x + y;
};

console.log(myFunc(3));

//함수의 파라미터부와 메인 부분을 화살표로 연결 가능(화살표 함수)
//화살표 함수의 장점은 파라미터 변수의 스코프가 메인 밖으로 나갈 수 있다는 것 
const myArrowFunc = (x = 0, y = 0) => {
    return x + y;
};

console.log(myArrowFunc(3, 4));

//객체는 중괄호
//객체 = 데이터+함수

const notebook = {
    modelNo : 'n1234e',
    price : 200,
    name : 'macbook',
    tag : ['notebook','expensive','apple'],
    spec : {
        cpu : 'intel3500',
        memory: 32,
        ssd : 512
    }
};