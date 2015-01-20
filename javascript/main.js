<script type="text/javascript">

  $(document).ready(function(){






    var x = $('input[name="one"]');

    var y = $('input[name="two"]');

    x = .parseInt(x);

    y = .parseInt(y);



    function setZ(val) {
      var sumZ = $('#sumZ').textContent[0] = val;
    }

    $(".AddBtn").click(function(){

    var z = x + y;

    setZ(z);

  });

    $(".MinusBtn").click(function(){


    var z = x - y;

    setZ(z);

  });


    var num1 = document.getElementById("X");
  var num2 = document.getElementById("Y"); */

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
</script>

})
