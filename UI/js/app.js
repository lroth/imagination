//App definition
var App = (function ($, undefined) {

    // local variable
    var localVariable;

    //sample function
    var sampleFunction = function() {
       //sample function code
       console.log("sample");
    };

    return {
        //main method to initiate template pages
        init: function () {
            //call local function
            sampleFunction()

            //call local method
            this.sampleMethod('test');
        },

        //sample method declaration
        sampleMethod: function (test)
        {
            console.log(test);
        },

        open: function (url)
        {
            window.location.href = url;
        }
    };

}(jQuery));

//App initialize
jQuery(document).ready(function(){
    App.init();
});
