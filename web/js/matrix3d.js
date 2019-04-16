(function (text) {
    console.log(text);
    var $ = function (selector) {
        return document.querySelector(selector);
    };
    var $css3Transform = function (element, value) {
        var arrPriex = ["O", "Ms", "Moz", "Webkit", ""], length = arrPriex.length;
        for (var i = 0; i < length; i += 1) {
            element.style[arrPriex[i] + "Transform"] = value;
        }
    };
    var eleDetail = $("#matrixDetail"),
        eleBtn = $("#matrixBtn"),
        eleBox = $("#matrixBox");

    if (eleDetail && eleBtn && eleBox) {
        eleBtn.addEventListener("click", function () {
            var scaleX = Math.random(), scaleY = Math.random(), scaleZ = Math.random();
            var valTransform = 'matrix3d(' + scaleX.toFixed(6) + ', 0, 0, 0, 0, ' + scaleY.toFixed(6) + ', 0, 0, 0, 0, ' + scaleZ.toFixed(6) + ', 0, 0, 0, 0, 1)';
            eleDetail.innerHTML = '目前属性值为：' + valTransform;
            $css3Transform(eleBox, valTransform);
        });
    }
})('transform 里的属性 matrix3d 的了解详情');