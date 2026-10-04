function doiSanPham() {
    var sp = document.getElementById("sanpham").value;

    if (sp == "ao") {
        document.getElementById("hinh").src = "hinhanh/ao.jpg";
        document.getElementById("ten").innerText = "Áo";
        document.getElementById("gia").innerText = "200000";
    } else if (sp == "quan") {
        document.getElementById("hinh").src = "hinhanh/quan.jpg";
        document.getElementById("ten").innerText = "Quần";
        document.getElementById("gia").innerText = "300000";
    } else if (sp == "giay") {
        document.getElementById("hinh").src = "hinhanh/giay.jpg";
        document.getElementById("ten").innerText = "Giày";
        document.getElementById("gia").innerText = "500000";
    }
}

function tinhTien() {
    var gia = parseInt(document.getElementById("gia").innerText);
    var soLuong = parseInt(document.getElementById("soluong").value);

    var tienHang = gia * soLuong;
    var giamGia = 0;

    if (tienHang >= 500000) {
        giamGia = tienHang * 0.1;
    } else {
        giamGia = 0;
    }

    var phaiTra = tienHang - giamGia;

    document.getElementById("ketqua").innerHTML = 
        "Tiền hàng: " + tienHang + " VNĐ<br>" +
        "Giảm giá: " + giamGia + " VNĐ<br>" +
        "Phải trả: " + phaiTra + " VNĐ";
}

function doiMau(mau) {
    document.body.style.backgroundColor = mau;
}

function xemBangGia() {
    var dsTen = ["Áo", "Quần", "Giày"];
    var dsGia = ["200000", "300000", "500000"];
    var noiDung = "";

    for (var i = 0; i < 3; i++) {
        noiDung += (i + 1) + ". " + dsTen[i] + " - " + dsGia[i] + " VNĐ<br>";
    }

    document.getElementById("banggia").innerHTML = noiDung;
}