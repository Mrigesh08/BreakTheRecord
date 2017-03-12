$(window).on('load', function() {
    var text1 = "Welcome to Bits Pilani ";
    i = 0;
    var scroll_start = 0;
    var offset = $("#navmain").offset();
   

    function addText(text2, i) {
        $('#text-value').text(text2.substring(0, i + 1));
    }
    setTimeout(function() {
        setInterval(function() {
            i++;
            if (i <= text1.length)
                addText(text1, i + 1);
            else {
                clearInterval(this);
                setTimeout(function() {
                    $("#main1").fadeOut(300, function() {
                        $('#main1').css('display', 'none');
                        $("#main2").fadeIn(300, function() {
                            $('#main2').css('display', 'block');
                        });
                    });
                    // $("#main1").animate({
                    //     display: 'none'
                    // }, 300);)
                    // $("#main2").animate({
                    //     display: 'block'
                    // }, 300);
                }, 1000);
            }
        }, 100);
    }, 100);
});
