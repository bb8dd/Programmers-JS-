// programers

// * level 1

/* 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.
입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	"*****8888" */

function solution(phone_number) {
   let str = phone_number.slice(-4);
   let answer = "";

   const arr = [...str]

   for (let i = 0; i < phone_number.length-4; i++){
      answer+= "*"
   }
   answer += str
   
   console.log(answer)
   return answer;
}

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array	                  commands	                           return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

function solution(array, commands){
   let answer = []
   let arr = array;
   let keys = commands;

   keys.forEach((e) => {
      let arr2 = arr.slice(e[0]-1, e[1]);
      arr2.sort((a,b)=>{
         return a - b
      });
      answer.push(arr2[e[2]-1]);

   });

   return answer
}

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

function solution(s){
   let answer = true;
   let pCount = 0;
   let yCount = 0;

   let arr = [...s]

   arr.forEach((e)=>{
      if ( e === "P" || e === "p"){
         pCount++;
      } else if ( e === "y" || e === "Y"){
         yCount++;
      }
   })


   pCount === yCount ? answer = true : answer = false;


   return answer;
}

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
   let answer = new Array(n);
   let increase = 0
   for (let i = 0; i < answer.length; i++){
      increase += x
      answer[i] = increase
   }


   return answer;
}

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	         result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

function solution(numbers) {
   const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   let answer = 0;
   numbers.forEach((e)=>{
      arr.forEach((n) => {
         if ( e===n ){
            arr[arr.indexOf(n)] = 0
         }
      })
   })
   
   arr.forEach((e) => {
      answer+=e;
   })
   return answer;
}

// 음양 더하기
// 문제 설명
// 어떤 정수들이 있습니다. 
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
// 입출력 예 설명
// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

function solution(absolutes, signs) {
   let answer = 0;
   for (let i = 0; i < absolutes.length; i++) {
      signs[i] ? answer = answer + absolutes[i] : answer = answer - absolutes[i]
   }
   return answer;
}

// 내적
// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	         b	         result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	   [1,0,-1]    -2
// 입출력 예 설명
// 입출력 예 #1

// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2
// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

function solution(a, b) {
   let answer = 0;
   for(let i = 0; i < a.length; i ++){
      answer+= a[i]*b[i]
   }
   return answer;
}

// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52
// 입출력 예 설명
// 입출력 예 #1

// 다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 13	1, 13	2
// 14	1, 2, 7, 14	4
// 15	1, 3, 5, 15	4
// 16	1, 2, 4, 8, 16	5
// 17	1, 17	2
// 따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
// 입출력 예 #2

// 다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 24	1, 2, 3, 4, 6, 8, 12, 24	8
// 25	1, 5, 25	3
// 26	1, 2, 13, 26	4
// 27	1, 3, 9, 27	4
// 따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.

function solution(left, right) {
   let answer = 0; // 답 저장 식별자
   for (let i = left; i < right; i++){ // left~ right 숫자 
      let cnt = 0
      for(let j = 1; j < i; j++){
         if(i%j === 0){
            cnt++;
         }
      }
      if(cnt % 2 == 0){
         answer = answer +  i
      } else {
         answer = answer - i
      }
   }
   return answer;
}


// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 
// 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	   result
// 10	   3
// 12	   11
// 입출력 예 설명

// 입출력 예 #1
// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.

// 입출력 예 #2
// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

function solution(n) {
   let x = 0;
   let answer = 0;
   while(true){
      if(n % x === 1) break;
      x++;
   }
   answer = x;

   return answer;
}

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
   var answer = '';
   return answer;
}


//* level 2 

// 가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다. 
// 종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다. 
// 이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 
// 그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 
// 새로운 종이를 구할 수 없는 상태이기 때문에, 이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
// 가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

// 제한사항
// W, H : 1억 이하의 자연수
// 입출력 예
// W	H	result
// 8	12	80
// 입출력 예 설명
// 입출력 예 #1
// 가로가 8, 세로가 12인 직사각형을 대각선 방향으로 자르면 총 16개 정사각형을 사용할 수 없게 됩니다. 
// 원래 직사각형에서는 96개의 정사각형을 만들 수 있었으므로, 96 - 16 = 80 을 반환합니다.

function solution(w, h) {
   const square = w * h;
   const 반으로잘린직사각형 = w * h / 2
   // 1 * 1 의 직사각형이 2개씩 = w * 2

   2*2 = 3;
   2*3 = 4;
   // 1h 당 1개씩

   var answer = square - ( w * 2);
   return answer;
}

// n명의 사람이 일렬로 줄을 서고 있습니다. 
// n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. 
// n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 
// 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.

// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, 
// k번째 방법을 return하는 solution 함수를 완성해주세요.

// 제한사항
// n은 20이하의 자연수 입니다.
// k는 n! 이하의 자연수 입니다.
// 입출력 예
// n	k	result
// 3	5	[3,1,2]




