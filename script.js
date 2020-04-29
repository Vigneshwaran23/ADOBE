$(document).ready(function () {
    $(".btn").click(function () {
        $(".input").toggleClass("active");
    });
    $.getJSON('https://api.myjson.com/bins/qzuzi', function (data) {
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
                prodDet += '&nbsp' + value.discount + '% off <br>';
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
            $("p").remove();
            alignData();
        });
        $("#dis").on("click", function () {
            arrItems.sort((a, b) => b.discount - a.discount);
            console.log(arrItems);
            $("p").remove();
            alignData();
        });
    });
});

