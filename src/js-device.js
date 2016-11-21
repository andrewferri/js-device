function get_device(){

    return window.getComputedStyle(document.body, ':before')
        .getPropertyValue('content')
        .replace(/"/g, '')
        .replace(/'/g, '');
}

(function($){

    var _DEVICE = get_device();

    $(window).resize(function(){

        var device = get_device();
        if (device != _DEVICE){

            _DEVICE = device;
            $(window).trigger('device_change');
        }
    });

})(jQuery);
