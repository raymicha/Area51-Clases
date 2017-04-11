$(document).ready(function(){
  var addValue = $("#add");
  addValue.on('click', function(e){
    e.preventDefault();
    var inputField = $('#post-field');
    var inputFieldValue = inputField.val();
    if(inputFieldValue) {
      var lista = $("#to-do");
      var item =  $("<li class='item'>" + inputFieldValue + "</li>");
      lista.append(item);
      inputField.val("");
    }else {
      console.log('no clickees el botón antes de colocar un valor en el campo de texto');
    }

    var listaItems = $(".item");
    var titulo = $(".titulo-dinamico");
    listaItems.each(function(){
        $(this).on("click", function(){
          var itemHTML = $(this).html();
         titulo.html(itemHTML);
        })
    })
    /*for(var i=0; i<listaItems.length; i++){
     listaItems[i].click(function(){
       alert("hello");
     })
    }*/
  });
});