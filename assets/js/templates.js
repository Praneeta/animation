/*global Backbone */
var app = app || {};

app.templates = {};

app.templates.meta = "<meta charset=\"UTF-8\">"
  + "<title><%= title %></title>"
  + "<meta name=\"keywords\" content=\"<%= keywords %>\">"
  + "<meta name=\"description\" content=\"<%= description %>\">"
  + "<meta property=\"og:url\" content=\"https://www.makemyholidaycard.com<%= ogurl %>\" />"
  + "<meta property=\"og:title\" content=\"<%= title %>\" />"
  + "<meta property=\"og:description\" content=\"<%= description %>\" />"
  + "<meta property=\"og:type\" content=\"website\" />"
  + "<meta property=\"og:image\" content=\"https://www.makemyholidaycard.com/assets/images/<%= image %>.<%= imageType %>\"/>"
  + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"/>"
  + "<link rel=\"icon\" type=\"image/png\" href=\"assets/images/<%= icon %>\" />"
  + "<link rel=\"apple-touch-icon\" type=\"image/png\" href=\"assets/images/<%= icon %>\"/>"

app.templates.cards = {}

app.templates.cards.index = {
  content: "<h1 class=\"h1\"><span style=\"color: #CC0000\">Happy Valentine's Day</span></h1>"
      + "<h2 class=\"help-text hidden-xs\">Say what you want to say with one of our cards.</h2>"
      + "<h2 class=\"help-text\"> Share it with your loved one.</h2>"
      + "<div class=\"container\"></div>"
      + "<div class=\"footer\">Contact us at: makemyholidaycard@gmail.com</div>"
, card: "<div class=\"col-md-4 card-holder\" data-href=\"https://www.makemyholidaycard.com/<%= card %>.html\" data-slug=\"<%=card%>\">"
      + "    <div class=\"image-container\">"
      + "      <a href=\"/<%= card %>.html\">"
      + "        <img class=\"img-thumbnail\" class=\"img-responsive\" src=\"/assets/images/<%= card %>.jpg\" alt=\"Happy Valentine's Day\">"
      + "      </a>"
      + "      <div class=\"image-caption\">"
      + "        <a href=\"/<%= card %>.html\">"
      + "          <h2 class=\"play-quiz\">View <span>Card</span></h2>"
      + "        </a>"
      + "        <p class=\"share-links\">"
      + "          <span class=\"whats-app visible-xs\"><a href=\"whatsapp://send\" data-text=\"Happy Valentine Day.\" data-href=\"http%3A%2F%2Fmakemyholidaycard.com%2F<%= card %>.html\" class=\"wa_btn wa_btn_l\" style=\"display:none\">Share</a></span>"
      + "          <span class=\"pinterest-icon\">"
      + "            <a href=\"//www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fmakemyholidaycard.com%2F<%= card%>.html%26media%3Dhttps%3A%2F%2Fmakemyholidaycard.com%2Fassets%2Fimages%2F<%= card%>.jpg%26description%3DLove%20is%20in%20the%20air.%20Happy%20Valentine%5C%27s%20Day\" data-pin-do=\"buttonPin\" data-pin-config=\"above\" data-pin-color=\"red\" data-pin-height=\"28\">"
      + "              <img src=\"/assets/images/pinterest-icon.png\" />"
      + "            </a>"
      + "          </span>"
      + "          <span class=\"fb-share\"></span>"
      + "        </p>"
      + "      </div>"
      + "    </div>"
      + "</div>"
 , cardVideo: "<div class=\"col-md-4 card-holder\" data-href=\"https://www.makemyholidaycard.com/<%= card %>.html\" data-slug=\"<%=card%>\">"
     + "    <div class=\"image-container\">"
     + "      <a href=\"/<%= card %>.html\">"
     + "        <iframe width=\"360\" height=\"360\" src=\"<%= video %>\" frameborder=\"0\" allowfullscreen></iframe>"
     + "      </a>"
     + "      <div class=\"image-caption\">"
     + "        <a href=\"/<%= card %>.html\">"
     + "          <h2 class=\"play-quiz\">View <span>Card</span></h2>"
     + "        </a>"
     + "        <p class=\"share-links\">"
     + "          <span class=\"whats-app visible-xs\"><a href=\"whatsapp://send\" data-text=\"Happy Valentine Day.\" data-href=\"http%3A%2F%2Fmakemyholidaycard.com%2F<%= card %>.html\" class=\"wa_btn wa_btn_l\" style=\"display:none\">Share</a></span>"
     + "          <span class=\"pinterest-icon\">"
     + "            <a href=\"//www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fmakemyholidaycard.com%2F<%= card%>.html%26media%3Dhttps%3A%2F%2Fmakemyholidaycard.com%2Fassets%2Fimages%2F<%= card%>.jpg%26description%3DLove%20is%20in%20the%20air.%20Happy%20Valentine%5C%27s%20Day\" data-pin-do=\"buttonPin\" data-pin-config=\"above\" data-pin-color=\"red\" data-pin-height=\"28\">"
     + "              <img src=\"/assets/images/pinterest-icon.png\" />"
     + "            </a>"
     + "          </span>"
     + "          <span class=\"fb-share\"></span>"
     + "        </p>"
     + "      </div>"
     + "    </div>"
     + "</div>"
}

app.templates.cards.content = "<div class=\"container\">"
    + "<div class=\"row canvas\">"
    + "   <div class=\"col-md-7 image-container\">"
    + "     <% if (video) { %>"
    + "        <iframe width=\"360\" height=\"360\" src=\"<%= video %>\" frameborder=\"0\" allowfullscreen></iframe>"
    + "     <% }else { %>"
    + "       <img class=\"card-image img-responsive\" src=\"../assets/images/<%= card %>.jpg\" >"
    + "     <% } %>"
    + "   </div>"
    + "   <div class=\"col-md-1\"></div>"
    + "   <div class=\"col-md-4\">"
    + "     <ul class=\"list-group\">"
    + "       <li class=\"list-group-item\">"
    + "         <div class=\"fb-share-button\" data-href=\"https://www.makemyholidaycard.com/<%= card %>.html\" data-layout=\"button\"></div>"
    + "         <div style=\"padding-left: 40px;\" class=\"fb-send\" data-href=\"https://www.makemyholidaycard.com/<%= card %>.html\" data-layout=\"button\"></div>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "            <a href=\"//www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fmakemyholidaycard.com%2F<%= card%>.html%26media%3Dhttps%3A%2F%2Fmakemyholidaycard.com%2Fassets%2Fimages%2F<%= card%>.jpg%26description%3DLove%20is%20in%20the%20air.%20Happy%20Valentine%5C%27s%20Day\" data-pin-do=\"buttonPin\" data-pin-config=\"above\" data-pin-color=\"red\" data-pin-height=\"28\">"
    + "           <img width=\"40px\" src=\"/assets/images/pinterest-icon.png\" />"
    + "         </a>"
    + "       </li>"
    + "       <li class=\"list-group-item visible-xs\">"
    + "         <a href=\"whatsapp://send\" data-text=\"Happy Valentine's Day. Love is in the air!\" data-href=\"\" class=\"wa_btn wa_btn_m\" style=\"display:none\">Share</a>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"/<%= prev %>.html\">&lt;&lt;Prev</a>"
    + "         <a href=\"/<%= next %>.html\" class=\"pull-right\">Next&gt;&gt;</a>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"/\">Browse More Cards</a>"
    + "       </li>"
    + "     </ul>"
    + "     <div class=\"google-add\">"
    + "       <script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>"
    + "       <ins class=\"adsbygoogle\""
    + "         style=\"display:inline-block;width:300px;height:250px\""
    + "         data-ad-client=\"ca-pub-8391156267500360\""
    + "         data-ad-slot=\"9971185732\"></ins>"
    + "       <script>"
    + "         (adsbygoogle = window.adsbygoogle || []).push({});"
    + "       </script>"
    + "     </div>"
    + "   </div>"
    + "</div>"
    + "<div class=\"post-quiz\">"
    + "  <span class=\"pre-share\">Great! <span class=\"score\"></span><br /> Now share this card with your friends.<span class=\"fb-share\"></span></span>"
    + "  <span class=\"during-share\">Posting to Facebook.....</span>"
    + "  <span class=\"post-share\">"
    + "    <span class=\"status\">Your card is successfully shared to facebook.</span> <br /><a href=\"/\">Browse more cards</a>. <br /><a href=\"/<%= card %>.html\">Play again.</a>"
    + "  </span>"
    + "</div>"
    + "</div>"
