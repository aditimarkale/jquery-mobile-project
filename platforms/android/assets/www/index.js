var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();



/*movie*/

//$(document).on('pageinit', '#home', function(){
//    var url = 'http://api.themoviedb.org/3/',
//        mode = 'search/movie?query=',
//        movieName = '&query='+encodeURI('Superman'),
//        key = '&api_key=35a278f97c7c3dc25f9fcf505b0c6329';
//
//    $.ajax({
//        url: url + mode + key + movieName ,
//        dataType: "jsonp",
//        async: true,
//        success: function (result) {
//            ajax.parseJSONP(result);
//        },
//        error: function (request,error) {
//            alert('Network error has occurred please try again!');
//        }
//    });
//});
//
//$(document).on('pagebeforeshow', '#headline', function(){
//    $('#movie-data').empty();
//    $.each(movieInfo.result, function(i, row) {
//        if(row.id == movieInfo.id) {
//            $('#movie-data').append('<li><img src="http://image.tmdb.org/t/p/w92'+row.poster_path+'"></li>');
//            $('#movie-data').append('<li>Title: '+row.original_title+'</li>');
//            $('#movie-data').append('<li>Release date'+row.release_date+'</li>');
//            $('#movie-data').append('<li>Popularity : '+row.popularity+'</li>');
//            $('#movie-data').append('<li>Popularity : '+row.vote_average+'</li>');
//            $('#movie-data').listview('refresh');
//        }
//    });
//});
//
//$(document).on('pageshow', '#headline', function(){
//    benchmark.end = new Date().getTime();
//    benchmark.checkTimeDifference();
//});
//
//$(document).on('vclick', '#movie-list li a', function(){
//    benchmark.start = new Date().getTime();
//    movieInfo.id = $(this).attr('data-id');
//    $.mobile.changePage( "#headline", { transition: "slide", changeHash: false });
//});
//
//var movieInfo = {
//    id : null,
//    result : null
//}
//
//var ajax = {
//    parseJSONP:function(result){
//        movieInfo.result = result.results;
//        $.each(result.results, function(i, row) {
//            console.log(JSON.stringify(row));
//            $('#movie-list').append('<li><a href="" data-id="' + row.id + '"><img src="http://image.tmdb.org/t/p/w92'+row.poster_path+'"/><h3>' + row.title + '</h3><p>' + row.vote_average + '/10</p></a></li>');
//        });
//        $('#movie-list').listview('refresh');
//    }
//}
//
//var benchmark = {
//  start : null,
//  end : null,
//  checkTimeDifference:function() {
//    var time = (this.end - this.start) / 1000;
//    console.log('Execution time: ' + time + ' seconds');
//  }
//}
