document.querySelectorAll('[data-page]').forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = this.getAttribute('data-page') + ".html";
  });
});
// Data produk untuk popup
const produkData = {
  latte: {title:"Coffee Latte",text:"Latte hangat dengan latte art cantik.",img:"img/latte.jpg",anim:"animate__fadeInDown"},
  matcha: {title:"Matcha Strawberry",text:"Matcha creamy dengan sentuhan segar strawberry.",img:"img/matcha.jpg",anim:"animate__bounceIn"},
  beer: {title:"23K Coffee Beer",text:"Kopi dengan sensasi sparkling yang unik dan segar.",img:"img/p1.jpg",anim:"animate__zoomIn"},
  alonica: {title:"25K Alonica",text:"Kopi bold dengan aroma khas.",img:"img/p2.jpg",anim:"animate__lightSpeedInRight"},
  irish: {title:"25K Irish Coffee",text:"Campuran kopi dengan sentuhan creamy.",img:"img/p3.jpg",anim:"animate__jackInTheBox"}
};

// Popup detail produk
function showDetail(product) {
  const p = produkData[product];
  Swal.fire({
    title: p.title,
    text: p.text,
    imageUrl: p.img,
    imageWidth: 300,
    imageAlt: p.title,
    showClass: { popup: `animate__animated ${p.anim}` },
    hideClass: { popup: "animate__animated animate__fadeOutUp" }
  });
}

// Validasi form kontak
document.getElementById("formKontak")?.addEventListener("submit", function(e){
  e.preventDefault();
  Swal.fire("Berhasil!","Pesan kamu sudah terkirim.","success");
});
