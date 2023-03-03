var drums = document.querySelectorAll('.drum');

for (let drum of drums){
    drum.addEventListener('click', function () {
        var audio = drum.querySelector('audio');
        audio.load();
        audio.play();
        drum.classList.add('pressed');
        setTimeout(function() {
            drum.classList.remove('pressed');
        }, 100);
    });
}


document.addEventListener('keydown', function (e) {
    try {
        document.querySelector('button.' + e.key).click();
    }
    catch (e){
        null;
    }
});