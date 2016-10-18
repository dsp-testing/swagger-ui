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
      var invokingFile = $('.invoking-project').html() + '/' + $('.invoking-file').html().split('.')[0] + '/' + $('.invoking-file').html().split('.')[0] + '-' + $('.invoking-version').html() + '.' + $('.invoking-file').html().split('.')[1];

      newUrl = 'http://192.168.56.101:5000/' + '?url=specs/' + invokingFile + '#!/' + $('.invoking-location').html();
      window.open(newUrl);
    } else {
      newHashVal = '#!/' + $('.invoking-location').html();
      history.pushState(null, null, newHashVal);
      $('#explore').trigger('click');
    }
  }
});
