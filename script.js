$(document).ready(function () {
    $(".btn").click(function () {
        $(".input").toggleClass("active");
    });
    $.getJSON('https://api.jsonbin.io/b/5eadd8f172a8c368e29dd10e/4', function (data) {
        var prodDet = '';
        var arrItems = [];
        arrItems = data;
        function alignData() {
            console.log(data);
            prodDet = '';
            $.each(data, function (key, value) {
                prodDet += '<p>';
                prodDet += '<img class="img" src="' + value.img_url + '" /><br>';
                prodDet += value.name + '&nbsp';
                prodDet += value.category + '<br>';
                //prodDet += value.id+'&nbsp';
                prodDet += '<b>$' + value.price + '</b>&nbsp';
                prodDet += '&nbsp<b style="color:green;">' + value.discount + '% off </b><br>';
                prodDet += '<button class="cartbtn"><a href=""/>Add to Cart</button>';
                prodDet += '</p>';
            });
            $('section').html(prodDet);

        }
        alignData();
        $("#sortAb").on("click", function () {
            arrItems.sort((a, b) => a.price - b.price);
            console.log(arrItems);
            alignData();
        });
        $("#sortBa").on("click", function () {
            arrItems.sort((a, b) => b.price - a.price);
            console.log(arrItems);
            data=arrItems;
            $("p").remove();
            alignData();
        });
        $("#dis").on("click", function () {
            arrItems.sort((a, b) => b.discount - a.discount);
            console.log(arrItems);
            data=arrItems;
            $("p").remove();
            alignData();
        });
        $(function(){
            // $slider = $('.slider');
            // $slider.slider('option', 'change').call($slider);
            $('.slider').on('input change', function(){
                      $(this).next($('.slider_label')).html(this.value);
                    });
                  $('.slider_label').each(function(){
                      var value = $(this).prev().attr('value');
                      $(this).html(value);
                      i=value;
                    }); 
                });
        $("#die").on("click", function () {
       const highPrice = arrItems.filter(e => e.price > i);
        console.log(highPrice);
        data=highPrice;
        $("p").remove(); 
        alignData(); 
        data=[];             
    });
    });
});
