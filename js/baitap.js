
let numArr = [];
document.getElementById("btnNumber").onclick = function(){
    let num = Number(document.getElementById("inputNumber").value);
    numArr.push(num);
    console.log(numArr);

    document.getElementById("txtArray").innerHTML =`Dãy số:  ${numArr} `;
    console.log(numArr)

    tongSoDuong();
    demSoDuong();
    soNhoNhat();
    soDuongNhoNhat();
    soChanCuoiCung();
    soTangDan();
    
    demSoNguyen();
    soSanhAmDuong();
    soNguyenToDauTien();
}

//! Tính tổng số dương
function tongSoDuong(){
    let total = 0;
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] >0 ){
            total += numArr[i];
        }
        
    }
    document.querySelector("#txtResult").innerHTML ="Tổng các số dương: " + total;
}

//! Đếm số dương
function demSoDuong(){
    dem = 0;
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] > 0 ){
            dem ++;
        }
        
    }
    document.querySelector("#txtDemSoDuong").innerHTML = ` Có ${dem} số dương trong dãy!`
}

//! Tìm số nhỏ nhất
function soNhoNhat() {
    let min = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if(min > numArr[i]){
            min = numArr[i];
        }
        
    }
    document.querySelector("#txtSoNhoNhat").innerHTML = ` Số nhỏ nhất trong dãy là:  ${min}`
}

//! Tìm số dương nhỏ nhất
function soDuongNhoNhat(){
    let soDuong = [];
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] > 0){
            soDuong.push(numArr[i]);
            
          
        }
        
    }
    let ketQua = "";
    if(soDuong.length == 0){
        ketQua = "không có số dương"
        document.getElementById("txtSoDuongNhoNhat").innerHTML = ketQua;
    }else{
    let min = soDuong[0];
    for (let i = 1; i < soDuong.length; i++) {
        if (min > soDuong[i]) {
            min = soDuong[i];
        }
        
    }
    document.getElementById("txtSoDuongNhoNhat").innerHTML = min + " là số dương nhỏ nhất trong dãy"
    }}

//! Tìm số chẵn cuối cùng
function soChanCuoiCung(){
    let lastNum = "";
    let soDuong = [];
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] % 2 ==0 ){

            lastNum = numArr[i] +" là số chẵn cuối cùng trong dãy"
            soDuong.push(numArr);
        }
        if(soDuong.length == 0 ){
            lastNum = "-1 (không có số chẵn nào trong dãy)"
        }
        
        
    }
    document.getElementById("txtSoDuongCuoiCung").innerHTML = lastNum
}

//! Đổi chổ:
function doiCho(){
    let viTri1 = Number(document.querySelector("#inputNum1").value);
    let viTri2 = Number(document.querySelector("#inputNum2").value);
    let bienTam = "";
    
        bienTam = numArr[viTri1] ;
        numArr[viTri1] = numArr[viTri2];
        numArr[viTri2] = bienTam;
    
    document.getElementById("txtNum").innerHTML = numArr;
}
document.getElementById("btnNum").onclick = doiCho;

//! Sắp xếp tăng dần
function soTangDan(){
    let soTDArr = [];
    for (let i = 0; i < numArr.length; i++) {
        soTDArr.push(numArr[i]);
        
    }
    for (let i = 0; i < soTDArr.length - 1; i++) {
        
        for (let j = i + 1; j < soTDArr.length; j++) {
            if(soTDArr[i] > soTDArr[j]){
                let temp = soTDArr[i];
                soTDArr[i] = soTDArr[j];
                soTDArr[j] = temp;
            }
        }
        
    }
    document.getElementById("txtSapXepTangDan").innerHTML = `Thứ tự tăng dần ${soTDArr}`;
}

//! Đếm số nguyên:
function demSoNguyen(){
    let dem = 0;
   
    for(let i = 0; i < numArr.length; i++){
        if(Number.isInteger(numArr[i])){
            dem ++;
        
        }
    }
    document.getElementById("txtDemSoNguyen").innerHTML = ` Có ${dem} số nguyên trong dãy `
}

//! so sánh số lượng số âm và số dương
function soSanhAmDuong(){
    let demAm = 0;
    let demDuong = 0;
    let ketQua = "";

    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] > 0){
            demDuong++;
        }else if(numArr[i] < 0){
            demAm ++;
        }
    }
    
    if (demDuong > demAm){
        ketQua = "số Duong nhiều hơn số Âm" 
    }else if(demAm > demDuong){
        ketQua = "số Âm nhiều hơn số Dương" 
    }else{
        ketQua = "so Âm bằng số Dương"
    }
    document.getElementById("txtSoSanhAmDuong").innerHTML = ketQua 
}

//! Số nguyên tố đầu tiên
let x = false;
function soNguyenToDauTien() {
  let ketQua = "";
  
    for (let i = 0; i < numArr.length ; i++) {
        let checkSoNguyenTo = true;
        if (numArr[i] <= 1) {
          console.log(numArr[i]);
          ketQua = numArr[i];
          
          if( x === false){
          document.getElementById("txtSoNguyenToDauTien").innerHTML = ketQua + " là số nguyên tố đầu tiên trong dãy";
          x = true;
          
        }
        break;
        }
        for (let j = 2; j < numArr[i]; j++) {
            if (numArr[i] % j === 0) {
                checkSoNguyenTo = false;
                break;
            }
        }
        if (checkSoNguyenTo ) {
          ketQua = numArr[i];
          console.log(ketQua);
        console.log(x);
          if( x === false){
          document.getElementById("txtSoNguyenToDauTien").innerHTML = ketQua + " là số nguyên tố đầu tiên trong dãy";
          x = true;
          
        }
        break;
    }
    }}
