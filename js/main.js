/**
 * Created by Натали_2 on 02.12.2014.
 */
$(document).ready(function(){
    var search = $(".search");
    var search_input = $("#search");
    search.click(function(e){

        if (!search_input.val()){
            search_input.toggle().animate({
                "right": "20", "opacity": 1
            }, 500);
            search_input.focus();
        }
        else{
            $(".search-form").submit();
        }
        e.preventDefault();
    });
});