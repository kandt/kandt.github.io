/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
 $( function() {
         var endDate = "July  23, 2015 15:03:25";

         $('.countdown.simple').countdown({ date: endDate });

         $('.countdown.styled').countdown({
           date: endDate,
           render: function(data) {
             $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
           }
         });

         $('.countdown.callback').countdown({
           date: +(new Date) + 10000,
           render: function(data) {
             $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
           },
           onEnd: function() {
             $(this.el).addClass('ended');
           }
         }).on("click", function() {
           $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
         });



       });
