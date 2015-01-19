<script type="text/javascript">

  $(document).ready(function(){

  /*  var num1 = document.getElementById("X");
    var num2 = document.getElementById("Y"); */

    function setZ(sum) {
      document.getElementById('sumZ').textContent = sum;
    }

    $(".button").click(function(){

      $(".result").parseInt($('input[name="one"]').val() + $('input[name="two"]').val());

    var sum = $(".result");

    });


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
