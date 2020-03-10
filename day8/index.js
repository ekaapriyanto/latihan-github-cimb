// const alphaValue = (str) => {
//     //str = str.split('')
//     let alphaArray = 'abcde'.split('')
//     let result = 0
//     for (let i = 0; i < str.length; i++){
//         result += (alphaArray.indexOf(str.charAt(i))+1)
//     }
//     return result
// }
// console.log(alphaValue('abc'))
//==================================================================================

// const alphaValueGanjil = (str) => {
//     let alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0
//     for (let i = 0; i < str.length; i+= 2){
//         result +=(alphaArray.indexOf(str.charAt(i))+1)
//     }
//     return result
// }
// console.log(alphaValueGanjil('abc'))

//===================================================================================
// const alphaValue = (str) => {
//     //str = str.split('')
//     let alphaArray = 'abcde'.split('')
//     let result = ''
//     for (let i = 0; i < str.length; i++){
//         result += (alphaArray.indexOf(str.charAt(i))+1)
//     }
//     return result
// }
// console.log(alphaValue('abc'))

//===================================================================================
// class Produk {
//     constructor(nama, produk, harga){
//         this.nama = nama
//         this.produk = produk
//         this.harga = harga
//     }
// }
// const searcProductName = str => {
//     return Produk.filter((value) =>value.name.toLowerCase().includes(str.toLowerCase()))
// }
// const searchProductPrice = (min, max) => {
//     return Produk.filter(val => val.price >= min && val.price <= max)
// }
// let arrProd = [
//     new Produk('apel', 3000, 3),
//     new Produk('anggur', 3000, 3),
//     new Produk('pepaya', 3000, 3),
//     new Produk('mangga', 3000, 3),
//     new Produk('durian', 3000, 3),
//     new Produk('sirsak', 3000, 3)
// ]
// console.log(searchProductName('ap'))
// //console.log(searchProdukPrice(5000, 25000))
//==================================================================================
let Point = [-7, 5, 3, -2, 7, -13]

const A