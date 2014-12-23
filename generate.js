var path = require("path");
var url = require("url");
var gmSource = {
    core: [
        { src: 'js?libraries=places', type: 'js' }
    ]
};

// Defining Object
GoogleMaps = new LoadingGoogleMaps();
var output = GoogleMaps.load();
console.log(JSON.stringify(output, null, "    "));

/*
 * MapBox Loading Class
 *
 */
function LoadingGoogleMaps() {
    var queue = [],
        baseUrl = "https://maps.googleapis.com/maps/api/";
    return {
        load: load
    }

    function addFile(file) {
        return {
            file: file.src,
            url: url.resolve(baseUrl, file.src),
            bare: file.type === 'js'
        }
    }

    function load() {
        for(var i in gmSource) {
            var pluginSrc = gmSource[i];
            pluginSrc.forEach(function(plugin) {
                queue.push(addFile(plugin));
            });
        }

        return queue;
    }
}
