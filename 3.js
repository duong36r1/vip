<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-image: url('file:///D:/CUONG_BG/avr/0ab788b277cfda9183de.jpg');
    background-size: cover; /* Đảm bảo hình ảnh nền sẽ được tự động co dãn để phủ toàn bộ khu vực của phần tử */
    background-repeat: no-repeat; /* Ngăn hình ảnh nền lặp lại */
    color: white;
}
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Màu đen với độ trong suốt 50% */
    z-index: -1; /* Đảm bảo lớp này nằm dưới nền hình ảnh */
    
    
}
.offer-message {
    position: absolute; /* Đặt phần tử ở vị trí tuyệt đối */
    top: 20%; /* Căn phần tử lên giữa theo chiều dọc */
    left: 50%; /* Căn phần tử lên giữa theo chiều ngang */
    transform: translate(-50%, -50%); /* Dịch chuyển phần tử đi 50% chiều ngang và chiều dọc để căn giữa */
    font-size: 30px; /* Kích thước văn bản */}
    .special-offer h2 {
    font-size: 30px;
    line-height: 1.5;
}

.special-offer p {
    font-size: 20px;
    line-height: 1;
}
</style>
</head>
<body>


</body><div class="offer-message">
    <h2>Don't miss this special offer</h2>
    <p>Get it now for just $10! The price will be increased after 50 downloads</p>

</div>

</html>
