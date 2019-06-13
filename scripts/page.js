$(document).ready(function () {
  // Vamos usar um número de índice exclusivo para cada nova instância do formulário clonado
  var _espc_clone_index = 0;
  //When the button is clicked (or Enter is pressed while it's selected)
  $("#add_espc").click(function () {
    // Incremente o índice exclusivo porque estamos criando uma nova instância do formulário
    _espc_clone_index++;
    // Clonar o formulário e colocá-lo apenas antes do botão <p>. Também dê ao seu id um índice exclusivo
    $(this).parent().after($("#_espc").clone().attr("id", "_espc" + _espc_clone_index));
    // Tornar o clone visível alterando CSS
    $("#_espc" + _espc_clone_index).css("display", "inline");
    // Altera a ID do INPUT remover
    $("#_espc" + _espc_clone_index + " input").attr("id", "input_pesquisa" + _espc_clone_index);
    $("#_espc" + _espc_clone_index + " button").attr("id", "remover_espc" + _espc_clone_index);
    // Quando o botão Remover é clicado (ou Enter é pressionado enquanto ele está selecionado)
    $("#remover_espc" + _espc_clone_index).click(function () {
      // Remove
      $(this).parent().parent().remove();
      buscar

    });
  });

  $("#btn_limpar2").click(function () {
    for (x = _espc_clone_index; x > 0; x--) {
      $("#_espc" + x).remove();
    }

    _espc_clone_index = 0;
  })

  $("#btn-enviar").click(function () {
    var text = $("#txt_conteudo").val();
    text = text.replace(/\n/g, "<br />");

    $("#destino").html(text);
  });

  $("#btn-limpar").click(function () {
    $("#txt_conteudo").val("");
  });

  $("#btn_enviar").on("click", function () {
    alert($("#form_teste").serialize());
  });



  $("#btnsearch").click(function (e) {
      for (x = _espc_clone_index; x >= 0; x--) {
        $("#destino").highlight($("#input_pesquisa" + x).val());
      }

    
  });



  $("#btn-limpa-destino").click(function () {
    $("#destino").removeHighlight();
  })

});



