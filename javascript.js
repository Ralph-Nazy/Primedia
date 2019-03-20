function audio_player(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
} 
audio_player('audio.json', function(data) {
     var source   = document.getElementById('audio-template').innerHTML;
    var template = Handlebars.compile(source);
    var html    = template(data); 
    document.getElementById("audio_list").innerHTML = html;
});
 