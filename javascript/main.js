

  $(document).ready(function(){

    function setZ(val) {
    $('#sumZ').html(val);
    }

    $(".AddBtn").click(function(){

    var x = $('input[name="one"]').val();

    var y = $('input[name="two"]').val();

    a = parseInt(x);

    b = parseInt(y);

    var z = a + b;

    setZ(z);

  });

    $(".MinusBtn").click(function(){



    var x = $('input[name="one"]').val();

    var y = $('input[name="two"]').val();

    a = parseInt(x);

    b = parseInt(y);

    var z = a - b;

    setZ(z);

  });




  /*  $(".result").parseInt($('input[name="one"]').val() + $('input[name="two"]').val());

  var sum = $(".result"); */


    /*function $(id){return document.getElementById(id)}

      function add()
        {
            var num1, num2, result;

              num1 = number(document.one.value);
              num2 = number(document.two.value);
              result = num1 + num2;
        }

                function subtract()
                  {
                  var num1, num2, result;

                num1 = number(document.one.value);
                num2 = number(document.two.value);
                  result = num1 + num2;
                } */


})
