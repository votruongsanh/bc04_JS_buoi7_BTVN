
var listNumber = [];
function ThemSo() {
    var soNguyen = getEle("soNguyen").value;
    soNguyen = parseInt(soNguyen);
    listNumber.push(soNguyen);
    getEle("spanthemSo").innerHTML = listNumber;
}
// thêm số
getEle("themSo").addEventListener("click", ThemSo);
// tinsh tổng
getEle("tinhTong").addEventListener("click", function () {
    if (listNumber.length <= 0) {
        alert("vui lòng thêm số");
        return;
    }
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            tong += listNumber[i];
        }

    }
    getEle("spanTong").innerHTML = " tổng là: " + tong;
});
// đếm số dương
getEle("demSoDuong").addEventListener("click", function () {
    if (listNumber.length <= 0) {
        alert("vui lòng thêm số");
        return;
    }
    var dem = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            dem++;
        }
    }
    getEle("spandemSoDuong").innerHTML = "có " + dem + " số dương trong mảng";
});
// tìm số nhỏ nhất
getEle("timMin").addEventListener("click", function () {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i];
        }
    }
    getEle("spantimMin").innerHTML = min;
});
// tìm số dương nhỏ nhất
getEle("timMinN").addEventListener("click", function () {
    var arrNew = [];

    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 0) {
            arrNew.push(listNumber[i])
        }
    }
    var minDuong = arrNew[0];
    for (var j = 1; j < arrNew.length; j++) {
        if (minDuong > arrNew[j]) {
            minDuong = arrNew[j];
        }
    }
    getEle("spantimMinN").innerHTML = "số dương nhỏ nhất là: " + minDuong;
});
// tìm số chẵn cuối cùng trong mảng
getEle("timSoChanCuoiCung").addEventListener("click", function () {
    for (var i = listNumber.length - 1; i >= 0; i--) {
        if (listNumber[i] % 2 == 0) {
            getEle("spantimSoChanCuoiCung").innerHTML = listNumber[i];
        }
        return -1;
    }
    getEle("spantimSoChanCuoiCung").innerHTML = "-1";
});
//đổi chỗ
getEle("doiCho").addEventListener("click", function () {
    var viTri1 = getEle("viTri1").value;
    var viTri2 = getEle("viTri2").value;
    viTri1 = parseInt(viTri1);
    viTri2 = parseInt(viTri2);
    var tam;

    tam = listNumber[viTri1];
    listNumber[viTri1] = listNumber[viTri2];
    listNumber[viTri2] = tam;
    
    getEle("spandoiCho").innerHTML = " mảng sau khi đổi là: " + listNumber;
});
// sắp xếp mảng theo thứ tự tăng dần
getEle("sxTang").addEventListener("click", function () {
    var tam;
    for (var i = 0; i < listNumber.length; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                tam = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = tam;
            }
        }
    }
    getEle("spansxTang").innerHTML = listNumber;
});

function getEle(id) {
    return document.getElementById(id);
}