// // // // // // function tinhTong(){
// // // // // //     var tong = 0
// // // // // //     for (let i = 0; i <= 10; i++) {
// // // // // //         tong = tong + i*2;
// // // // // //     }
// // // // // //     console.log(tong);
// // // // // // }
// // // // // // tinhTong()

// // // // // var n, a = 1;
// // // // // var s = 0;
// // // // // function tong(n) {
// // // // //     for (let i = 1; i <= n; i++) {
// // // // //         a = a * i;
// // // // //         s = s + a;
// // // // //     }
// // // // //     console.log(s);
// // // // // }
// // // // // tong(3)

// // // // function kiemtraSoNguyenTo(n) {
// // // //     var flag = true;
// // // //     if(n === 0 && n === 1) {
// // // //         console.log(n + ' không phải số nguyên tố')
// // // //     }
// // // //     else {
// // // //         for (let i = 2; Math.sqrt(i); i++) {
// // // //             if(n%i===0) {
// // // //                 flag = false;
// // // //                 break
// // // //             }
// // // //         }
// // // //         console.log(flag ? n + ' là số nguyên tố': n + ' không là số nguyên tố')
// // // //     }
// // // // }
// // // // kiemtraSoNguyenTo(7)

// // // var a = '12';
// // // var b = '10';
// // // var c = parseInt(a) + parseInt(b);
// // // alert(c);

// // var colors = ["blue","red","green"];
// // console.log(colors[1]);
// // var x = colors.length;
// // colors = colors.sort();
// // alert(colors);
// // alert(x);
// // for (let index = 0; index < colors.length; index++) {
// //     console.log(colors[index]);
// // }
// // colors.forEach(element => {
// //     console.log(element);
// // });

// var number = ["2","4"];
// var number2 = ["3","5","7"];
// // number = number.concat(number2);
// number = [...number,...number2];
// number.splice(3,2, "99");
// console.log(number.join());
var maiSonTung = {
    Name : "Mai Sơn Tùng",
    Age : 26,
    Address : "Hà Nội",
    Relationship : "In Relationship",    
    running : function(namHienTai){
        var namSinh = namHienTai - this.Age;
        console.log(this.Name + " sinh năm " + namSinh);
    }
}
console.log(maiSonTung.Age);
maiSonTung.running(2022);