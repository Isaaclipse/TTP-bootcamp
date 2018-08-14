$(document).ready( function(){
    console.log("ready!!");
    $("#usaStatesLabel").hide();
    $("#break").hide();
    $("#usaStatesOptions").hide();

    $("#button").click(

        function(){
            $.ajax({
                type:"GET",
                url: "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json",
                success: function (d){
                    alert('data returned is: ' + d);
                }
            });
        }
    )
    
    

});
