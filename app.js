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
// s	      return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
   let answer = '';
   let arr = [...s];
   arr.length % 2 === 0 ? arr = arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1) : arr = arr.slice((arr.length / 2), (arr.length / 2) + 1)

   arr.forEach((e)=>{
      answer+= e;
   })

   return answer;
}

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

function solution(a, b) {

   const start = Math.min(a,b)
   const end = Math.max(a,b)
   let answer = end;
   if(start !== end){
       for(let i = start; i < end; i++) {
           answer+=i
       }
   }
   return answer
}

// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

function solution(s) {
   return s*1
}

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수,
//  solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

function solution(n) {
   let answer = 0;
   let x = 0;
   while(true){
       if(n % x === 0){
           answer+=x
       }
       if(n / x === 1) break;
       x++;
   }
   return answer;
}

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

function solution(s) {
    return arr
        .map(word => word.split("").map(
            (e, i) => i % 2 === 0
                ? e = e.toUpperCase()
                : e = e.toLowerCase()
        ).join(""))
        .join(" ")
}

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	      return
// [1,2,3,4]	2.5
// [5,5]	      5

function solution(arr) {
   let answer = 0;
   arr.forEach(element => {
      answer=+element / arr.length
      console.log(answer)
   });
   return answer;
}

// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	   result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

function solution(numbers) {
   (
   return answer;
}

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	      return
// [4,3,2,1]	[4,3,2]
// [10]	      [-1]

function solution(arr) {
   let answer = [...arr]
   answer.splice(answer.indexOf(arr.sort((a, b)=>{
      return a - b
   }).shift()), 1)
   return answer.length ? arr : [-1]
}

// 배열 arr가 주어집니다.
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// 입출력 예
// arr	            answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	      [4,3]
// 입출력 예 설명
// 입출력 예 #1,2
// 문제의 예시와 같습니다.

function solution(arr) {
    let answer = [];
    let temp = arr[0]
    answer.push(temp)
    for (let i = 0; i < arr.length; i++) {
        if (temp === arr[i]) {} else {
            temp = arr[i]
            answer.push(temp)

        }
    }

    return answer;
}

// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
// solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

function solution(n) {
   let answer = [];

   for(let i = 0; i < n; i++){
      i % 2 === 0 ? answer.push("수") : answer.push("박")
   }

   return answer.join("");;
}

// 문자열 s의 길이가 4 혹은 6이고, 
// 숫자로만 구성돼있는지 확인해주는 함수, 
// solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	      return
// "a234"	false
// "1234"	true

function solution(s) {
   return (s * 1 && s.indexOf("e") === -1) && (s.length === 4 || s.length === 6) ? true : false
}

// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, 
// solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

function solution(n) {
   let answer = 0;
   let arr = [...Array(n+1)].map((e, i) => i);

   (
   arr.forEach(element => {
      arr.filter((e => {
         
      }))
   });
   
   return answer;
}

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	   answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n) {
    let answer = 0
    let str = n + ""
    let arr = [...str];
    arr.forEach((e) => {
        answer += e * 1
    })
    return answer
}

// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

function solution(seoul) {
   return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 
// "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	         answer
// "pPoooyY"	true
// "Pyy"	      false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

function solution(s){
   let arr = [...s.toUpperCase()];
   let pCnt = 0;
   let yCnt = 0;

   arr.forEach((e) => {
      if(e === "P") pCnt++;
      else if (e === "Y") yCnt ++;
   })

   return pCnt === yCnt ? true : false
}

// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 
// 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
// 입출력 예
// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
// 입출력 예 설명
// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 
// 각각 "u", "e", "a" 입니다. 
// 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다.
// 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. 
// "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 
// 답은 ["abcd", "abce", "cdx"] 입니다.

function solution(strings, n) {
   return strings.sort((a,b) => {
      if(a[n] < b[n]) return -1
      else if(a[n] > b[n]) return 1
      else if(a[n] === b[n]) return a > b ? 1 : -1 
   })
}

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 
// 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며,
// 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	         return
// "Zbcdefg"	"gfedcbZ"

function solution(s) {
   return [...s].sort().reverse().join("")
}

// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	      return
// 118372	873211

function solution(n) {
   return [...n+""].sort().reverse().join("")*1;
}

// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 
// 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	         divisor	return
// [5, 9, 7, 10]	5	      [5, 10]
// [2, 36, 1, 3]	1	      [1, 2, 3, 36]
// [3,2,6]	      10	      [-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 
// 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 
// 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 
// 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

function solution(arr, divisor) {
   let answer = [];
   arr.forEach((e)=>{
      if(e % divisor === 0) answer.push(e)
   })
   if (answer.length === 0) answer.push(-1)
   return answer.sort((a,b) => {return a - b});
}

// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 
// 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 
// 모든 수를 1로 만들 수 있다는 추측입니다. 
// 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
// 예를 들어, 주어진 수가 6이라면 
// 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 
// 총 8번 만에 1이 됩니다. 
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, 
// solution을 완성해 주세요. 
// 단, 주어진 수가 1인 경우에는 0을, 
// 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.
// 입출력 예
// n	result
// 6	8
// 16	4
// 626331	-1
// 입출력 예 설명
// 입출력 예 #1
// 문제의 설명과 같습니다.

// 입출력 예 #2
// 16 → 8 → 4 → 2 → 1 이 되어 총 4번 만에 1이 됩니다.

// 입출력 예 #3
// 626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야 합니다.

function solution(num) {
   let answer = 0;
   if(num === 1) return 0;
   while(num != 1 && answer <= 500 ){
      num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
      answer++;
   }
   return answer > 500 ? -1 : answer
}

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

function solution(n) {
   return [...n+""].reverse();
}

// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
   return [...Array(n)].map((v, i)=> i === 0 ? x : (i+1) * x);
}

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행 
// 같은 열의 값을 서로 더한 결과가 됩니다
// 2개의 행렬 arr1과 arr2를 입력받아
// 행렬 덧셈의 결과를 반환하는 함수
// solution을 완성해주세요

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다
// 입출력 예
// arr1	         arr2	         return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	   [[3],[4]]	   [[4],[6]]

function solution(arr1, arr2) {
   arr1.forEach((x, i) => {

   })
   var answer = [[]];
   return answer;
}
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
// 이 놀이기구의 원래 이용료는 price원 인데, 
// 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 
// 3번째에는 300으로 요금이 인상됩니다
// 놀이기구를 count번 타게 되면 
// 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 
// solution 함수를 완성하세요
// 단, 금액이 부족하지 않으면 0을 return 하세요

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
// 입출력 예
// price	money	count	result
// 3	   20	   4	   10
// 입출력 예 설명
// 입출력 예 #1
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

// 참고 사항
// 미션 언어는 Java, JavaScript, Python3, C++ 만 해당 됩니다.
// 같은 코드를 제출한 사람이 여럿이라면 코드를 가장 먼저 제출한 분께 상품을 드립니다.
// 좋아요 수가 동일할 경우 코드를 가장 먼저 제출한 분께 상품을 드립니다

function solution(price, money, count) {
   for(let i = 1; i < count +1; i++){
      money = money - (price * i)
      console.log(money)
   }

   return money > 0 ? 0 : Math.abs(money)
}

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 
// 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
// "z"는 1만큼 밀면 "a"가 됩니다. 
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, 
// solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	      n	result
// "AB"	   1	"BC"
// "z"	   1	"a"
// "a B z"	4	"e F d"

function solution(s, n) {
   let answer
   return [...s].map((x) => {
      if(x === " ") return " "
      return x.charCodeAt()+n < 123 ?
      String.fromCharCode(x.charCodeAt()+n)
      : String.fromCharCode(96+(x.charCodeAt()+n - 122))
   }).join(""
}

// 문제 설명
// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 
// 메일로 발송하는 시스템을 개발하려 합니다. 
// 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 
// 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 
// 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 
// 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 
// 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고,
// k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

// 유저 ID	유저가 신고한 ID	설명
// "muzi"	"frodo"	     "muzi"가 "frodo"를 신고했습니다.
// "apeach"	"frodo"	     "apeach"가 "frodo"를 신고했습니다.
// "frodo"	"neo"	        "frodo"가 "neo"를 신고했습니다.
// "muzi"	"neo"	        "muzi"가 "neo"를 신고했습니다.
// "apeach"	"muzi"	      "apeach"가 "muzi"를 신고했습니다.
// 각 유저별로 신고당한 횟수는 다음과 같습니다.

// 유저 ID	신고당한 횟수
// "muzi"	1
// "frodo"	2
// "apeach"	0
// "neo"	   2
// 위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 
// 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

// 유저 ID	유저가 신고한 ID	    정지된 ID
// "muzi"	["frodo", "neo"]	["frodo", "neo"]
// "frodo"	["neo"]	         ["neo"]
// "apeach"	["muzi", "frodo"]	["frodo"]
// "neo"	없음	없음
// 따라서 "muzi"는 처리 결과 메일을 2회, 
// "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

// 이용자의 ID가 담긴 문자열 배열 id_list, 
// 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 
// 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 
// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록
// solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ id_list의 길이 ≤ 1,000
// 1 ≤ id_list의 원소 길이 ≤ 10
// id_list의 원소는 이용자의 id를 나타내는 문자열이며 
// 알파벳 소문자로만 이루어져 있습니다.
// id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
// 1 ≤ report의 길이 ≤ 200,000
// 3 ≤ report의 원소 길이 ≤ 21
// report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
// 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
// id는 알파벳 소문자로만 이루어져 있습니다.
// 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
// 자기 자신을 신고하는 경우는 없습니다.
// 1 ≤ k ≤ 200, k는 자연수입니다.
// return 하는 배열은 id_list에 담긴 id 순서대로 
// 각 유저가 받은 결과 메일 수를 담으면 됩니다.
// 입출력 예
// id_list	report	k	result
// ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
// ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]
// 입출력 예 설명
// 입출력 예 #1

// 문제의 예시와 같습니다.

// 입출력 예 #2

// "ryan"이 "con"을 4번 신고했으나, 
// 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 
// 신고 횟수 1회로 처리합니다. 따라서 "con"은 1회 신고당했습니다. 
// 3번 이상 신고당한 이용자는 없으며, 
// "con"과 "ryan"은 결과 메일을 받지 않습니다.
//  따라서 [0, 0]을 return 합니다.

function solution(id_list, report, k) {
   let reportCnt = [...Array(id_list.length)].map(x => 0)
   let result = [...Array(id_list.length)].map(x => 0)
   let allReport = [];
   let newReport = new Set(report)
   id_list.forEach((user, i) => {
      newReport.forEach((reportUser) => {
           if (reportUser.split(" ")[1] === user) {
               if(!(allReport.includes(reportUser))){
                   allReport.push(reportUser)
                   reportCnt[i]++
               }
 
           }
               
       })

   });
   reportCnt.forEach((cnt, i) => {
       if (cnt >= 2) {
         newReport.forEach((e) => {
               let arr = e.split(" ")
               if (arr[1] === id_list[i]) {
                   result[id_list.indexOf(arr[0])]++
               }
           })
       }
   }

   return result;
}

// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
// 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
// 학생들의 번호는 체격 순으로 매겨져 있어, 
// 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 
// 빌려줄 수 있습니다. 
// 예를 들어, 
// 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다
// 체육복이 없으면 수업을 들을 수 없기 때문에 
// 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 
// 매개변수로 주어질 때, 
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 
// 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
// 입출력 예
// n	lost	   reserve	   return
// 5	[2, 4]	[1, 3, 5]	5
// 5	[2, 4]	[3]	      4
// 3	[3]	   [1]	      2
// 입출력 예 설명
// 예제 #1
// 1번 학생이 2번 학생에게 체육복을 빌려주고, 
// 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

// 예제 #2
// 3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 
// 학생 4명이 체육수업을 들을 수 있습니다.

function solution(n, lost, reserve) {
   let 전체학생수 = n;
   let 잃어버린애들 = lost;
   let 여분가져온애들 = reserve;
   let 못빌린애들; << 이거 구해야됨
   let 체육복입은애들 = n - 못빌린애들;

   여분가져온애들.map((애들번호) => {
      
   }

   return answer;
}

// 수포자는 수학을 포기한 사람의 준말입니다. 
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	   return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]
// 입출력 예 설명
// 입출력 예 #1

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 입출력 예 #2

// 모든 사람이 2문제씩을 맞췄습니다.

function solution(answers) {
   let result = []; // 제일 많이 맞춘 사람
   
   const answer = answers.join("")
   const quizCount = answer.length;
   
   let user1 = [1, 2, 3, 4, 5];
   let user2 = [2, 1, 2, 3, 2, 4, 2, 5];
   let user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

   let user1Point = 0;
   let user2Point = 0;
   let user3Point = 0;

   const user1Answers =  user1.join("").repeat(answers.length % user1.length === 0 ? answers.length / user1.length : Math.ceil(answers.length / user1.length) );
   const user2Answers = user2.join("").repeat(answers.length % user2.length === 0 ? answers.length / user2.length : Math.ceil(answers.length / user2.length) );
   const user3Answers = user3.join("").repeat(answers.length % user3.length === 0 ? answers.length / user3.length : Math.ceil(answers.length / user3.length) );

   for(let i = 0; i < quizCount; i++){
      if(user1Answers[i] == answer[i]) user1Point++
      if(user2Answers[i] == answer[i]) user2Point++
      if(user3Answers[i] == answer[i]) user3Point++
   }

  if(Math.max(user1Point, user2Point, user3Point)=== user1Point) result.push(1)
  if(Math.max(user1Point, user2Point, user3Point)=== user2Point) result.push(2)
  if(Math.max(user1Point, user2Point, user3Point)=== user3Point) result.push(3)

   return result
}

// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 
// 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 
// 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
// 입출력 예
// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.
// 입출력 예 #2

// 문제 예시와 같습니다.
// 입출력 예 #3

// "three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 
// 정답은 입출력 예 #2와 같은 234567이 됩니다.
// 입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 
// 여러 가지가 나올 수 있습니다.
// 입출력 예 #4

// s에는 영단어로 바뀐 부분이 없습니다.
// 제한시간 안내
// 정확성 테스트 : 10초

function solution(s) {
   let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
   var answer = s;

   for(let i=0; i< numbers.length; i++) {
       let arr = answer.split(numbers[i]);
       answer = arr.join(i);
   }

   return answer * 1
}
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	                                       completion	                              return
// ["leo", "kiki", "eden"]	                           ["eden", "kiki"]	                        "leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	            ["stanko", "ana", "mislav"]	            "mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 
// 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

function solution(participant, completion) {
   participant = participant.sort();
   completion = completion.sort();

   for(let i = 0; i < participant.length; i++){
      for(let j = 0; j < completion.length; i++){
         if(participant[i] === completion[j]) {
            participant[i] = ""
            completion[j] =""
      
         }   
      }
   }
   return console.log(participant, completion)
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




