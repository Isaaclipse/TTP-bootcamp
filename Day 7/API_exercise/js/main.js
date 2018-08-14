$(document).ready(function(){
    var searchBar =
    document.getElementbyId("movieSearcher");

    $('#mainForm').submit(function(evt)){
        evt.preventDefault();

        $("#movieSearcher").keyup(function(event){
            var valueSearch = $("#movieSearcher").val()'
            if(valueSearch.length > 3){
                $.ajax({
                    type: "GET"
                    url: "http://www.omdbapi.com/?apikey=5dfa2bd5",
                    data: {
                        t: searchBar.value
                    },
                    dataType: "json",
                    success: function(response){
                        $('#movie-title').html(response.Title);
                        $('#poster').attr("src",response.Poster);
                        $('#para').html(response.Plot);
                    }
                    }
                });
            }
        })
    