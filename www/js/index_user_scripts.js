/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
 /* button  #btnMultiplier */
$(document).on("click", "#btnMultiplier", function(evt)
{
    multiply();
    return false;
});
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
