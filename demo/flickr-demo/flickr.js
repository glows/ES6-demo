require.config({
    paths: {
        ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    }

});

require([
        'ramda',
        'jquery'
    ],
    function(_, $) {
        var trace = _.curry(function(tag, x) {
            console.log(tag, x);
            return x;
        })

        var Impure = {
            getJSON: _.curry(function(callback, url) {
                $.getJSON(url, callback)
            }),

            setHtml: _.curry(function(sel, html) {
                $(sel).html(html)
            })

        };

        var img = function(url) {
            return $('<img />', { src: url })
        }

        //////////////////////////
        var url = function(term) {
            return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
        }

        var app = _.compose(Impure.getJSON(trace("response")), url);
        var mediaUrl = _.compose(_.prop('m'), _.prop('media'));

        var srcs = _.compose(_.map(mediaUrl), _.prop('items'));

        // var renderImages = _.compose(Impure.setHtml(body), srcs);
        // var app = _.compose(Impure.getJSON(renderImages), url);

        var images = _.compose(_.map(img), srcs);
        var renderImages = _.compose(Impure.setHtml("body"), images);
        // var app = _.compose(Impure.getJSON(renderImages), url);

        app("cats");

        // var prop = _.curry(function(property, object) {
        //     return object[property]
        // })

    }
)