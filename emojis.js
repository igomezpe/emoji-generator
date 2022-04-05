$(document).ready(function () {
    $("#respuesta").hide();
    $("#btn_Generar").click(function () {

        let emoji = $("#slcEmoji").val();
        let cant = $("#txtCantidad").val();


        GenerarEmoji(emoji, cant);


    });

    $("#btnCopiar").click(function () {

        copyToClipBoard();
    });


    function GenerarEmoji(strEmoji, cantidad) {
        var strTexto = "";
        for (var i = 0; i < cantidad; i++) {
            strTexto += strEmoji;

        }
        $("#my-textarea").val(strTexto);
        $("#respuesta").show();
    }

    function copyToClipBoard() {

        var content =  $("#my-textarea").val();

        navigator.clipboard.writeText(content)
            .then(() => {
                console.log("Text copied to clipboard...")
            })
            .catch(err => {
                console.log('Something went wrong', err);
            })
    }
});