$(function(){
    $('.dropdown').hover(
        function(){
            $('.sub',this).slideDown(220);
        },
        function(){
            $('.sub',this).slideUp(0);
        }
    );

})
