/**
 * try...catch
 * 
 * 1) Error발생시킬때 ㅡ> 던진다고한다. (throw)
 * 2) Error를 명시적으로 인지할때 ㅡ> 잡는다고 한다. (catch)
 */

//new >>새로운 객체를 생성한다 정도로만 지금은 알아두자
//finally 무조건 실행

function runner(){

    console.log('Hello');

    console.log('Code Factory');

}
runner();
/*
 Error를 던지는 방방법
function runner(){

  console.log('Hello');

  throw new Error('큰 문제가 생겼습니다!'); //대입 error라는 값에는 parameter를 넣을 수 있다.

  console.log('Code Factory');

}
runner();

Error가 어디서 생겼는지, 내용도 짚어준다.
Error를 던지는 순간 함수가 정지한다.
Error는 좋은 정보를 전달해주는 것
Error message안에 답이 다 있다.
*/

/**
 * Error를 잡을때 try... catch 사용
 * 실행하고 싶은 코드를 try 안에 넣는다다
  function runner(){
    try{
      console.log('Hello');

      throw new Error('큰 문제가 생겼습니다!'); //대입 error라는 값에는 parameter를 넣을 수 있다.

      console.log('Code Factory');
    }catch(e){
        console.log('----catch----'); //error를 던지면 바로 catch문으로 간다.
        console.log(e);
    }
}
runner();
 */

/* finally 키워드 사용 try에서 error가 생기든 안생기든 무조건 실행하는 코드는 finally에 넣는다.

 function runner(){
    try{
      console.log('Hello');

      throw new Error('큰 문제가 생겼습니다!');

      console.log('Code Factory');
    }catch(e){
        console.log('----catch----'); 
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}
    runner();
*/
