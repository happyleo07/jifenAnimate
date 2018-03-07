$(function() {
    // function movetop() {
    //     $(".jf_head").addClass("move_top");
    // }
    // function myFunction() {
    //     setTimeout(function() {
    //         $(".jf_head").addClass("move_top");
    //     }, 3000);

    // }

    // function myFunction() {
    //     setTimeout(function() {
    //             $(".jf_head").addClass("move_top");
    //         }
    //     }, 3000);
})
$(function() {
    function show() {
        $(".jf_head").addClass("move_top");

    }
    setInterval(show, 2000);
    // var H = $(".ewm>img").height();
    // $(".tcm").css({
    //     "bottom": H,
    // });

    function mov_t() {
        // $(".tcm").css({
        //     "bottom": H + 20,
        // });
        $(".tcm").addClass("move_top1")
    }
    setInterval(mov_t, 3000);
    $("#coun").numberRock({
        speed: 1600,
        count: 2
    });
});