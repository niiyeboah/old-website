var resizing = false,
    logo_el = document.getElementById("logo"),
    body = document.querySelector("body"),
    cont = document.getElementById("container"),
    info = document.getElementById("info"),
    logoSize = getLogoSize(logo_el),
    logo = new N.Logo("canvas", logoSize);

bodyHeight();
logo.animate();

window.onresize = function () {
    clearTimeout(resizing);
    resizing = setTimeout(function () {
        logoSize = getLogoSize(logo_el);
        logo.setWidth(logoSize);
        logo._initParams();
        logo.draw();
        bodyHeight();
    }, 500);
}

function bodyHeight() {
    if (cont.clientHeight > window.innerHeight) {
        body.style.height = "auto";
        logo_el.style.paddingTop = "50px";
    } else {
        var h = logo_el.clientHeight + info.clientHeight;
        body.style.height = "100vh";
        logo_el.style.paddingTop = (window.innerHeight - h) / 2 + "px";
    }
}

function getLogoSize(el) {
    var w = window.innerWidth - 20, h = window.innerHeight;
    var result = (w > h ? h : w) * (window.innerWidth <= 768 ? 0.8 : 0.4);
    el.style.width = el.style.height = result;
    return result;
}