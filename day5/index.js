//
//setiap orang memiliki umur nama dan pekerjaan
//jumlah orangnya ada 5
//tampilkan nama umur pekerjaan setiap orang

// let arrNama = ['eka','aki','ika','eko','iko']
// let arrUmur = [35,34,45,32,33]
// let arrkrja = ['banker','diller','teller','dagang','welder']
// let arrnohp = [['087727'],['087717','087777'],['087737'],['087757'],['087767']]

// let daftar = ''

// for (let i = 0; i<arrNama.length; i++){
//     daftar = `${arrNama[i]} ${arrUmur[i]} ${arrkrja[i]} ${arrnohp[i]}`
//     console.log(daftar)
// }
//===================aray dalam aray========================
// let arrData = [['eka',23,'ITDP'],['eke',22,'teller'],['eko',22,'CS']]
// let result
// for (let i = 0; i <arrData.length; i++){
//     result = ''
//     for (let j = 0; j <arrData[i].length; j++){
//         result += arrData[i][j] + ' '
//     }
//     console.log(arrData[i][i])
// }
//========================================================

// let mobil = {warna: 'Merah', tahun: '2018', merek: 'Honda'}
// mobil.tipe = 'sedan'
// mobil.warna = 'biri'

// let inputuser = 'warna'
// mobil['tipeban'] = 'offroad'

// console.log(mobil)

//================================object==========================

let karyawan = {
    nama: 'eka',
    umur: 37,
    pekerjaan: 'Developer',
    contactDetails: {
        alamat: 'GOP 9',
        telpon: ['081123', '085345']
    }
}

console.log(karyawan.contactDetails.telpon[1])