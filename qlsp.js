let arrayProduct = [];
function showAllProduct(){
    let nameProduct = "";
    for (let i = 0; i < arrayProduct.length; i++) {
        nameProduct+= "<tr>"
            + "<td>"
            + arrayProduct[i]
            + "</td>"
            + "<td>"
            + "<button onclick='changeProduct("+i+")'>Sửa</button>"
            +"</td>"
            + "<td>"
            + "<button onclick='deleteProduct()'>Xóa</button>"
            +"</td>"
        + "</tr>";

    }
    document.getElementById('nameProduct').innerHTML = nameProduct;
}
function addProduct() {
    let addPr = document.getElementById('input').value;
    if (addPr == ""){
        document.getElementById('output').innerHTML = "Hãy nhập tên sản phẩm"
    }
    else {
        document.getElementById('output').innerHTML = "Bạn vừa thêm sản phẩm " + addPr;
        arrayProduct.push(addPr);
    }
    showAllProduct()
}
function changeProduct(index){
    let newValue = prompt("Nhập tên sản phẩm mới : ");
    if (newValue == ''){
        alert('Bạn chưa nhập tên sản phẩm');
    }
    else {
        arrayProduct[index] = newValue;
    }
    showAllProduct();
}
function deleteProduct(index){
    arrayProduct.splice(index,1);
    document.getElementById('output').innerHTML = "Bạn vừa xóa một sản phẩm ";
    showAllProduct();
}

