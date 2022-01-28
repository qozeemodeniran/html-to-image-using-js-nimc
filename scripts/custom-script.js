$(document).ready(function () {
    $("#btn_convert").on('click', function () {
        html2canvas(document.getElementById("html-content-holder"), {
            allowTaint: true,
            useCORS: true
        }).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            document.getElementById("previewImg").appendChild(canvas);
        });
    });
});