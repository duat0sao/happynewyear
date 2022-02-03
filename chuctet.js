const cauchuc = [
    "Năm Nhâm Dần – Chúc bạn luôn: Đong cho đầy hạnh phúc – Gói cho trọn lộc tài – Giữ cho mãi an khang – Thắt cho chặt phú quý.",
    "Chúc mừng năm mới Nhâm Dần 2022. Chúc năm mới sức khỏe dẻo dai, công việc thuận lợi thăng tiến dài dài, phi những nước đại tiến tới thành công.",
    "Xuân này hơn hẳn mấy xuân qua. Phúc lộc đưa nhau đến từng nhà. Vài lời cung chúc tân niên mới. Vạn sự an khang vạn sự lành.",
    "Hoa đào nở, chim én về, mùa xuân lại đến. Chúc một năm mới: nghìn sự như ý, vạn sự như mơ, triệu sự bất ngờ, tỷ lần hạnh phúc.",
    "Chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công 31536000 giây vạn sự như ý. Đây là lời chúc năm mới về thời gian.",
    "Năm hết tết đến kính chúc mọi người thật nhiều sức khoẻ, miệng cười vui vẻ, tiền vào mạnh mẽ, cái gì cũng được suôn sẻ, để sống tiếp một cuộc đời thật là đẹp đẽ.",
    "Cung chúc tân xuân phước vĩnh cửu – Chúc trong gia quyến được an khương – Tân niên lai đáo đa phú quý – Xuân đến an khương vạn thọ tường.",
    "Kính chúc mọi người một năm mới tràn đầy niềm vui và hạnh phúc: Vui trong sức khoẻ, trẻ trong tâm hồn, khôn trong lý tưởng và trưởng thành mọi lĩnh vực.",
    "Năm mới chúc nhau sức khỏe nhiều. Bạc tiền rủng rỉnh thoải mái tiêu. Gia đình hạnh phúc bè bạn quý. Thanh thản vui chơi mọi buổi chiều",
    "Thay mặt Đảng, Quốc hội, Chính phủ, Mặt trận Tổ quốc kính chúc đồng chí và gia đình một năm mới hạnh phúc, an khang, thịnh vượng! Đây là lời chúc mừng năm mới cho khối đơn vị hành chính sự nghiệp nhưng đôi khi các bạn trẻ cũng dùng lời chúc này để chúc nhay rất vui.",
    "Chúc bạn có 1 bầu trời sức khỏe, 1 Biển cả tình thương, 1 Đại dương tình bạn, 1 Điệp khúc tình yêu, 1 Người yêu chung thủy, 1 Sự nghiệp sáng ngời, 1 Gia đình thịnh vượng. – Chúc năm mới cả gia đình bạn vạn sự như ý, Tỉ sự như mơ, Triệu triệu bất ngờ, Không chờ cũng đến!",
    "Sang năm mới chúc mọi người có một bầu trời sức khoẻ, một biển cả tình thương, một đại dương tình cảm, một điệp khúc tình yêu, một người yêu chung thủy, một tình bạn mênh mông, một gia đình thịnh vượng. Chúc các bà, các ông, các cô, các chú, các chị, các anh sang năm mới vạn sự như ý, tỷ sự như mơ, làm việc như thơ, đời vui như nhạc, coi tiền như rác, coi bạc như rơm, chung thủy với cơm và sắc son với phở. Lời chúc nam moi có chút vần vò mà các bạn trẻ hay dùng.",
    "Nhân dịp năm mới, mình xin chúc bạn có 1 năm mạnh khỏe, quanh năm sung túc, an vui.",
    "Năm mới, xin chúc ai đó đọc được có một năm mới thật là năm mới ",
    "chúc ai đó đọc được có 1 thật nhiều sức khoẻ, và luôn vui vẻ tươi tắn xinh xắn :))",
    "Chúc mừng năm mới.",
    "Năm mới chúc bạn mạnh khỏe đạt đc nhiều mục tiêu trong kế hoạch",
    "Mặt trời là cái bếp lớn còn tia nắng là than hồng,...",
    "Lá rơi nghiêng như Trần Đăng Khoa",
    "Có cánh hoa nào không tàn",
    "Có giấc mơ nào không tan",
    "Hát để tâm tự vén màn",
    "Thả mình xuôi với mây ngàn",
    "Năm mới, chúc bạn sắc đẹp tuyệt vời, tiền vô phơi phới, người yêu không cần tìm cũng tự tới.",
    "Let your spirit soar and have a joy-filled new year",
    "I hope that the coming year bring you peace and prosperity",
    "Wishing you a Happy New Year with the hope that you will have many happiness and luck in the year to come",
    "Every New Year wish I have ever made came true when I met you. Thank you sweetheart…Happy New Year, with love",
    "Chúc bạn năm sau may mắn",
    "Ở đây không có gì cả :))"

  ];

  
  
  const chuctetText = document.querySelector(".idh1");   
  
  let chuctetIndex = Math.floor(Math.random() * 30);
  //console.log(chuctetIndex);
  
   
  
  function printChuctet() {
    //console.log(cauchuc[chuctetIndex]);
    chuctetText.textContent = cauchuc[chuctetIndex];
    
  }

  

  
  function main() {
    printChuctet();
   
    
  }
  
  
  
  window.onload = main();