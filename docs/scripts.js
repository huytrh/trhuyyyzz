const giftBox = document.getElementById("giftBox")
const giftLid = document.getElementById("giftLid")
const letterlove = document.getElementById("letter-love")
const container = document.getElementById("flower-container");
const ending = document.getElementById("ending");
const endingPage = document.getElementById("ending-page");
const paper = document.getElementById("paper");

// ===== Danh sách ảnh hoa =====
const flowers = [
    "hoa.png",
    "hoa2.png"
];

// ===== Hàm tạo 1 bông hoa =====
function createFlower(){

    const flower = document.createElement("img");

    flower.src = flowers[Math.floor(Math.random() * flowers.length)];

    flower.className = "flower";

    document.body.appendChild(flower);

    // Điểm xuất phát (hộp quà)
    const startX = window.innerWidth / 2.5;
    const startY = window.innerHeight -700;

    flower.style.left = startX + "px";
    flower.style.top = startY + "px";

    // Điểm đến ngẫu nhiên
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    // Bay sau 1 tí
    setTimeout(() => {

        flower.style.opacity = "1";

        flower.style.left = endX + "px";

        flower.style.top = endY + "px";

        flower.style.transform =
        `rotate(${Math.random()*720}deg) scale(${2 + Math.random()*2})`;

    },50);

    // Xóa sau khi bay xong
    setTimeout(() => {

        flower.style.opacity = "0";
        flower.style.filter = "blur(10px)";

    },1800);

    setTimeout(()=>{

        flower.remove();

    },2800);

    setTimeout(()=>{

    paper.classList.add("show");

    },5500);

}

letterlove.addEventListener("click",function(){

    letterlove.classList.add("open-letter");

    for(let i=0;i<40;i++){

        setTimeout(createFlower,i*60);

    }

    setTimeout(()=>{

        ending.style.opacity="1";

    },1000);

    setTimeout(()=>{

        ending.style.opacity="0";

    },5000);

    setTimeout(()=>{

        endingPage.classList.add("show");

    },5000);

});

giftBox.addEventListener("click", function () {
    setTimeout(() => {
        letterlove.classList.add("show-letter");
    }, 800);

    giftLid.classList.add("open");
    setTimeout(() => {
        giftBox.classList.add("box-move");}, 400);
    });