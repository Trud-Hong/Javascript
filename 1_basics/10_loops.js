/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
//for(기준을 잡을 변수; 조건; 한번 실행될때마다 어떤 행동을 취할건지)


// *을 이용해서 6X6의 정사각형을 출력해라
// 1. 6번 출력을 해야한다.
// 2. *을 출력해야한다.
// 3. 조건을 설정한다.
// 4. 반복한다.

let square = '';

for(z = 0; z < 6; z++){
  for(let i = 0; i < 6; i++){
    square += '*';
  }
    square += '\n';
}
console.log(square);
 


/**
 * answer
 * let square = '';
 * let side = 6;
 * 
 * for(let i = 0; i < side; i++){
 *  for(let j = 0; j < side; j++){
 *    square += '*';
 * }
 *  square += '\n';
 * }
 * 
 * console.log(square);
 */