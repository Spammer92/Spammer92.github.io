function setFieldSize() {
    var r = document.querySelector(':root');

    let height = r.clientHeight;
    let width = r.clientWidth;
    
    if (height >= width) {
        r.style.setProperty('--size', (width / 5 - width / 25) + 'px');
    } else {
        r.style.setProperty('--size', (height / 5 - height / 25) + 'px');
    }
}
