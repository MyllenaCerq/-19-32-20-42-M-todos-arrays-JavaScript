//array de objetos
const data = [ 
  {name: "Myllena", age: 27, salary: 1300, active: true, team: "frontend"},
  {name: "Jessica", age: 25, salary: 11000, active: true, team: "frontend"},
  {name: "Paulo", age: 30, salary: 10000, active: true, team: "backend"},
  {name: "Julio", age: 40, salary: 20000, active: true, team: "backend"},
  {name: "Diana", age: 20, salary: 1000, active: false, team: "mobile"}
]

// acessando a propriendade "age" do indice 2 do array data
//console.log(data[2].age)

//FIND: percorre a lista e através da condicao inserida ele retorna o 1° (item/objeto) q ele encontrar caso a condicao seja atendida
//const user = data.find((user) => {
// return user.age > 30
//})
//console.log(user)

// FILTER:  é usado para criar um novo array contendo apenas os elementos do array original que atendem a uma determinada condição. Ele não modifica o array original, mas retorna um novo array com os elementos filtrados.
// const users = data.filter((user) => {
//   return user.salary > 1000 && user.active
// })
// console.log(users)

// findeIndex: em vez de retornar o valor do primeiro elemento que satisfaz a condição, ele retorna o índice desse elemento no array. Se nenhum elemento atender à condição, o método retorna -1.
// const indexUser = data.findIndex((user) => {
//   return user.name == "Myllena"
// })
// console.log(indexUser)
//OUTPUT: 0 ou seja, a posição que "myllena" está no array
// console.log(data[indexUser].salary = 50000) //
// console.log(data)

// map: é usado para criar um novo array aplicando uma função a cada elemento do array original. Ele não modifica o array original, mas retorna um novo array com os resultados da aplicação da função.
// const users = data.map((user, index) => {
//   return "Oie " + user.name + " sua idade é: " + user.age
// })
// console.log(users)

// const users = data.map((user, index) => {
//   if(user.salary <= 1000) {
//     user.salary += 500
//   }
// return {
//     name: user.name,
//     salary: user.salary,
//   }
// })
// console.log(users)

// reverte a ordem do array
// console.log(data.reverse())

// some: Retorna true se pelo menos um elemento do array satisfizer a condição especificada pela função de callback. Retorna false se nenhum elemento atender à condição.
// const userInactive = data.some((user) => {
//   return user.active === false
// })
// console.log(userInactive)

// every: Retorna true se todos os elementos do array satisfizerem a condição especificada pela função de callback. Retorna false se pelo menos um elemento não atender à condição.
// const userActive = data.every((user) => {
//   return user.active === true
// })
//  console.log(userActive)


// reduce: é um método de array que é usado para reduzir os elementos do array a um único valor. Ele acumula os valores do array, aplicando uma função de callback em cada elemento, resultando em um único valor final.

// const totalPay = data.reduce((total, user) => {
//  return total += user.salary
//}, 0)
// console.log(totalPay)