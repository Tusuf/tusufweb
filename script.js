// JavaScript
document.querySelectorAll('.info-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var info = this.parentElement.querySelector('.info');
        if (info.style.display === 'none') {
            info.style.display = 'block';
        } else {
            info.style.display = 'none';
        }
    });
});
