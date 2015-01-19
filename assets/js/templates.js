/*global Backbone */
var app = app || {};

app.templates = {};

app.templates.meta = "<meta charset=\"UTF-8\">"
  + "<title><%= title %></title>"
  + "<meta name=\"keywords\" content=\"<%= keywords %>\">"
  + "<meta name=\"description\" content=\"<%= title %>\">"
  + "<meta property=\"og:title\" content=\"<%= title %>\" />"
  + "<meta property=\"og:description\" content=\"<%= description %>\" />"
  + "<meta property=\"og:image\" content=\"/assets/images/<%= image %>\" />"
  + "<meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0;\"/>"
  + "<link rel=\"icon\" type=\"image/png\" href=\"assets/images/<%= icon %>\" />"
  + "<link rel=\"apple-touch-icon\" type=\"image/png\" href=\"assets/images/<%= icon %>\"/>"

app.templates.cards = {}

app.templates.cards.index = {
  content: "<h1 class=\"h1\"><span style=\"color: #FF9933\">Happy </span><span style=\"color: #000080\">Republic </span><span style=\"color: #138808\">Day</span></h1>"
      + "<div class=\"container\"></div>"
      + "<div class=\"footer\">Contact us at: makemyholidaycard@gmail.com</div>"
, card: "<div class=\"col-md-3 card-holder\">"
      + "  <a href=\"/cards/<%= card %>\"> <img class=\"img-thumbnail\" class=\"img-responsive\" src=\"/assets/images/<%= card %>.jpg\" alt=\"happy new year\"></a>"
      + "  <ul class=\"list-group share-buttons\">"
      + "    <li class=\"list-group-item\">"
      + "      <div class=\"fb-share-button\" data-href=\"https://www.makemyholidaycard.com/<%= card %>.html\" data-layout=\"icon\"></div>"
      + "    </li>"
      + "    <li class=\"list-group-item visible-xs\">"
      + "      <a href=\"whatsapp://send\" data-text=\"Happy New Year\" data-href=\"https://www.makemyholidaycard.com/<%= card %>.html\" class=\"wa_btn wa_btn_s\"></a>"
      + "    </li>"
      + "    <li class=\"list-group-item\">"
      + "      <a href=\"//www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fmakemyholidaycard.com%2F<%= card %>.html&media=https%3A%2F%2Fmakemyholidaycard.com%2Fassets%2Fimages%2F<%= card %>.jpg&description=Happy%20New%20Year\" data-pin-do=\"buttonBookmark\"  data-pin-shape=\"round\"><img src=\"//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png\" /></a>"
      + "    </li>"
      + "  </ul>"
      + "</div>"
}


app.templates.cards.question = "<div class='question-container'><%= question %></div>"
+ "<div class='answer-options'><ul></ul></div>"

app.templates.cards.answerOption = "<li class='answer'><%= option %></li>"

app.templates.cards.reward = "<div class=\"gift new-gift <%= reward %>\"></div>"

app.templates.cards.content = "<div class=\"container\">"
    + "<div class=\"row\">"
    + "   <div class=\"col-md-8 image-container\">"
    + "     <img class=\"card-image\" src=\"/assets/images/<%= card %>.jpg\" >"
    + "   </div>"
    + "   <div class=\"col-md-4\">"
    + "     <ul class=\"list-group\">"
    + "       <li class=\"list-group-item\">"
    + "         <div class=\"fb-share-button\" data-href=\"/<%= card %>.html\" data-layout=\"button\"></div>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"//www.pinterest.com/pin/create/button/\"  data-pin-do=\"buttonBookmark\"  data-pin-color=\"red\" data-pin-height=\"28\">"
    + "          <img src=\"//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_28.png\" />"
    + "         </a>"
    + "       </li>"
    + "       <li class=\"list-group-item visible-xs\">"
    + "         <a href=\"whatsapp://send\" data-text=\"Happy New Year\" data-href=\"\" class=\"wa_btn wa_btn_m\" style=\"display:none\">Share</a>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"/chalk.html\">&lt;&lt;Prev</a>"
    + "         <a href=\"/lily.html\" class=\"pull-right\">Next&gt;&gt;</a>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"/\">Browse More Cards</a>"
    + "       </li>"
    + "     </ul>"
    + "   </div>"
    + "</div>"
    + "<textarea class=\"message\" rows=3 placeholder=\"type your holiday message here...\"></textarea>"
    + "<div class=\"fb-share\"></div>"
    + "<div class=\"questions-container\"></div>"
    + "</div>"

app.templates.cards.correct = "<div class=\"gift-message hidden\">Congratulations!! Place your ornament on the tree relive the magic of Christmas!</div>"

app.templates.cards.reward = 'ornament'
