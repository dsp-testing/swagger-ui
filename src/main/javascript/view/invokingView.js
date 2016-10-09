'use strict';

SwaggerUi.Views.InvokingView = Backbone.View.extend({
  events: {
    'click .invoking-location' : 'showInvokingInterface'
  },
  initialize: function () {},

  render: function(){
    $(this.el).html(Handlebars.templates.invoking(this.model[0]));

    return this;
  },

  showInvokingInterface: function(){
    var newUrl;
    var newHashVal;

    if ($('.invoking-file').html() !== '#') {
      /*this invoking is external file*/
      newUrl = 'http://192.168.56.101:8099/' + '?url=' + $('.invoking-file').html() + '#!/' + $('.invoking-location').html();
      window.open(newUrl);
    } else {
      newHashVal = '#!/' + $('.invoking-location').html();
      history.pushState(null, null, newHashVal);
      $('#explore').trigger('click');
    }
  }
});
