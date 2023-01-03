// // Tuple
// // 길이 & 타입이 고졍된 배열

// // # Section01 Array
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // 튜플
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'] // 첫 번째 요소는 숫자 식별자, 두 번째는 문자열 식별자
// };


// person.role.push('admin');

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

// console.log(person.name);
// // any type은 타입스크립트 장접을 사용하지 못하게함

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map())  !!! Error !!!
// }