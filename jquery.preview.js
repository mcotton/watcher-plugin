
(function($) {

    $.fn.cameraPreview = function(options) {
   
        // use the defaults or customized options if they exist
        var options     =   options || {}, 
            camera_id   =   options.camera_id || '',
            width       =   options.width || 320,
            height      =   options.height || 180,
            preview     =   new Image(),
            preload     =   new Image();

        if(!camera_id) {
            // can't do anything with a camera_id
            return false;   
        }

        // add preview image to calling div
        this.append(preview);
        $preview = $(preview);
        $preload = $(preload);

        $preview.width(width + 'px');
        $preview.height(height + 'px');

        function updatePreview() { 
            $preview.attr('src', $preload.attr('src'));
            $preload.attr('src', '/image/' + camera_id + '/now?rand=' + Math.random());
            console.log('updating image');
        }

        $preload.on('load', function() { updatePreview() });
        $preload.on('error', function() { updatePreview() });


        //fetch the first image
        updatePreview();

        //return this to make it chainable
        return this;
    }

}(jQuery));
