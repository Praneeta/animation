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
  + "<meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0;\"/>"
  + "<link rel=\"icon\" type=\"image/png\" href=\"assets/images/<%= icon %>\" />"
  + "<link rel=\"apple-touch-icon\" type=\"image/png\" href=\"assets/images/<%= icon %>\"/>"

app.templates.cards = {}

app.templates.cards.index = {
  content: "<h1 class=\"h1\"><span style=\"color: #FF9933\">Happy </span><span style=\"color: #000080\">Republic </span><span style=\"color: #138808\">Day</span></h1>"
      + "<h2 class=\"help-text\">Select your favorite card and wish your friends on Facebook </h2>"
      + "<div class=\"container\"></div>"
      + "<div class=\"footer\">Contact us at: makemyholidaycard@gmail.com</div>"
, card: "<div class=\"col-md-4 card-holder\" data-href=\"https://www.makemyholidaycard.com/#/cards/<%= card %>\" data-slug=\"<%=card%>\">"
      + "    <div class=\"image-container\">"
      + "      <a href=\"#/cards/<%= card %>\">"
      + "        <img class=\"img-thumbnail\" class=\"img-responsive\" src=\"/assets/images/<%= card %>.jpg\" alt=\"happy new year\">"
      + "      </a>"
      + "      <div class=\"image-caption\">"
      + "        <a href=\"#/cards/<%= card %>\">"
      + "          <h2 class=\"play-quiz\">Play <span>Quiz</span></h2>"
      + "        </a>"
      + "        <p class=\"share-links\">"
      + "          <span class=\"whats-app\"><a href=\"whatsapp://send\" data-text=\"Happy Republic Day. Take this quiz to test your knowledge about your country.\" data-href=\"\" class=\"\" style=\"display:none\">whatsapp</a></span>"
      + "          <span class=\"pinterest-icon\">"
      + "            <a href=\"//www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fmakemyholidaycard.com%2F%23%2Fcards%2F<%= card %>&media=https%3A%2F%2Fmakemyholidaycard.com%2Fassets%2Fimages%2F<%= card %>.jpg&description=Happy%20Republic%20Day\" data-pin-do=\"buttonBookmark\"  data-pin-shape=\"round\">"
      + "              <img src=\"/assets/images/pinterest-icon.png\" />"
      + "            </a>"
      + "          </span>"
      + "          <span class=\"fb-share\">"
      + "          </span>"
      + "        </p>"
      + "      </div>"
      + "    </div>"
      + "</div>"
}

app.templates.cards.question = "<div class='question-container'><%= question %></div>"
+ "<div class='answer-options'><ul></ul></div>"

app.templates.cards.answerOption = "<li class='answer'><%= option %></li>"

app.templates.cards.reward = "<div class=\"gift new-gift\" style=\"background-color:red; width: 100px; height: 100px;\"></div>"

app.templates.cards.content = "<div class=\"container\">"
    + "<div class=\"row canvas\">"
    + "   <div class=\"col-md-7 image-container\">"
    + "     <img class=\"card-image img-responsive\" src=\"/assets/images/<%= card %>.jpg\" >"
    + "     <div class=\"questions-container\"></div>"
    + "     <div class=\"badges row\">"
    + "       <div class=\"col-md-2 col-xs-4 flip-container\"><div class=\"flipper\"><div class=\"front\">Sports</div><div class=\"back\"><img class=\"img-responsive\" src=\"/assets/images/sachin.jpg\"/></div></div></div>"
    + "       <div class=\"col-md-2 col-xs-4 flip-container\"><div class=\"flipper\"><div class=\"front\">Science</div><div class=\"back\"><img class=\"img-responsive\" src=\"/assets/images/isro.jpg\"/></div></div></div>"
    + "       <div class=\"col-md-2 col-xs-4 flip-container\"><div class=\"flipper\"><div class=\"front\">Geography</div><div class=\"back\"><img class=\"img-responsive\" src=\"/assets/images/taj.jpg\"/></div></div></div>"
    + "       <div class=\"col-md-2 col-xs-4 flip-container\"><div class=\"flipper\"><div class=\"front\">History</div><div class=\"back\"><img class=\"img-responsive\" src=\"/assets/images/gandhi.jpg\"/></div></div></div>"
    + "       <div class=\"col-md-2 col-xs-4 flip-container\"><div class=\"flipper\"><div class=\"front\">Movies</div><div class=\"back\"><img class=\"img-responsive\" src=\"/assets/images/khiladi.jpg\"/></div></div></div>"
    + "     </div>"
    + "   </div>"
    + "   <div class=\"col-md-1\"></div>"
    + "   <div class=\"col-md-4\">"
    + "     <ul class=\"list-group\">"
    + "       <li class=\"list-group-item\">"
    + "         <div class=\"fb-share-button\" data-href=\"https://www.makemyholidaycard.com/#/cards/<%= card %>\" data-layout=\"button\"></div>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"//www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fmakemyholidaycard.com%2F%23%2Fcards%2F<%= card %>&media=https%3A%2F%2Fmakemyholidaycard.com%2Fassets%2Fimages%2F<%= card %>.jpg&description=Happy%20Republic%20Day\" data-pin-do=\"buttonBookmark\"  data-pin-shape=\"round\">"
    + "           <img src=\"/assets/images/pinterest-icon.png\" />"
    + "         </a>"
    + "       </li>"
    + "       <li class=\"list-group-item visible-xs\">"
    + "         <a href=\"whatsapp://send\" data-text=\"Happy Republic Day. Take this quiz to test your knowledge about your country.\" data-href=\"\" class=\"wa_btn wa_btn_m\" style=\"display:none\">Share</a>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"#/cards/<%= prev %>\">&lt;&lt;Prev</a>"
    + "         <a href=\"#cards/<%= next %>\" class=\"pull-right\">Next&gt;&gt;</a>"
    + "       </li>"
    + "       <li class=\"list-group-item\">"
    + "         <a href=\"/\">Browse More Cards</a>"
    + "       </li>"
    + "     </ul>"
    + "   </div>"
    + "</div>"
    + "<div class=\"fb-share\"></div>"
    + "</div>"
