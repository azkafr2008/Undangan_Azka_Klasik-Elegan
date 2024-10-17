const musik = document.querySelector('#musik');
const imgmusik = document.querySelector('#imgmusik');



function showCoverSection() {
    document.getElementById('coverSection').style.display = 'flex';
    document.getElementById('mainContentSection').style.display = 'none';
    document.body.style.overflow = 'hidden';
    musik.pause()
}

function showMainContentSection() {
    document.getElementById('coverSection').style.display = 'none';
    document.getElementById('mainContentSection').style.display = 'block';
    document.body.style.overflow = 'auto';
}

document.getElementById('scrollToContent').addEventListener('click', function() {
    sessionStorage.setItem('visited', 'true');
    showMainContentSection();
});

window.addEventListener('load', function() {
    if (sessionStorage.getItem('visited') === 'true') {
        sessionStorage.removeItem('visited');
        showMainContentSection();
    } else {
        showCoverSection();
    }
});

function putarMusik(){
    if(musik.paused){
        musik.play();
        imgmusik.src = "/assets/img/on.svg";
    }else{
        musik.pause();
        imgmusik.src = "/assets/img/off.svg";
    }
}

function salinTeks() {
    var teks = document.getElementById("teks").innerText;
    var textarea = document.createElement("textarea");
    textarea.value = teks;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Teks disalin: " + teks);
}

let currentSection = 1;

