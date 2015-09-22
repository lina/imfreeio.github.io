/*global haunt, $*/


window.haunt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    this.app = new this.Models.App();
    this.appView = new this.Views.AppView({ model: this.app });
  }
};

$(document).ready(function (){
  'use strict';
  $(document).foundation();
  haunt.init();
});

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-container">\n  <!-- pages -->\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/footer.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="columns small-push-4 small-4 text-center">\n    <div>An<br><strong><a href="#">' +
((__t = ( org )) == null ? '' : __t) +
'</a></strong><br>Project</div>\n  </div>\n  <div class="columns small-4">\n    <ul class="inline-list right animate">\n      <li><a href="#">Contact</a></li>\n      <li><a href="#">Hipster</a></li>\n    </ul>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/header.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="columns col12">\n    <ul class="no-bullet">\n      <li class="title animate"><a href="#">Haunt</a></li>\n      <ul class="menu no-bullet">\n        <li class="animate"><a href="#">' +
((__t = ( user )) == null ? '' : __t) +
'</a></li>\n      </ul>\n    </ul>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/pages/page0.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row v-height-full">\n  <div class="col12 v-align-center">\n\n    <h2 class="text-center">COVER</h2>    \n    \n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/pages/page1.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row v-height-full">\n  <div class="col12 v-align-center">\n\n    <h2 class="text-center">Page 1</h2>\n    \n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/pages/page2.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row v-height-full">\n  <div class="col12 v-align-center">\n\n    <h2 class="text-center">Page 2</h2>\n    \n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/pages/page3.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row v-height-full">\n  <div class="col12 v-align-center">\n\n    <h2 class="text-center">Page 3</h2>\n    \n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/pages/page4.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row v-height-full">\n  <div class="col12 v-align-center">\n\n    <h2 class="text-center">Page 4</h2>\n    \n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/pages/page5.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row v-height-full">\n  <div class="col12 v-align-center">\n\n    <h2 class="text-center">Page 5</h2>\n    \n  </div>\n</div>\n\n';

}
return __p
};
/*global haunt, Backbone*/

haunt.Models = haunt.Models || {};

(function () {
  'use strict';

  haunt.Models.App = Backbone.Model.extend({

    url: '',

    initialize: function() {
      this.pages = new haunt.Collections.Pages();
      this.set('org', 'Adequate Design Studios');
      this.set('user', 'Terence Mckenna');

      // fraction of the window size to trigger page breakpoint
        // 0: top; 0.5: middle; 1: bottom
      this.set('breakpointRatio', 0.5);

      this.on('changePage', function(dir, pageIdx){
        this.set({
          'currentPage': pageIdx,
          'navDirection': dir
        });
      });
    }

  });

})();

/*global haunt, Backbone*/

haunt.Models = haunt.Models || {};

(function () {
  'use strict';

  haunt.Models.User = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();

/*global haunt, Backbone, JST*/

haunt.Views = haunt.Views || {};

(function () {
  'use strict';

  haunt.Views.AppView = Backbone.View.extend({

    template: JST['app/scripts/templates/app.ejs'],

    pageTemplates: [
      { 
        template: JST['app/scripts/templates/pages/page0.ejs'],
        backgroundColor: '#FFF'
      },
      { 
        template: JST['app/scripts/templates/pages/page1.ejs'],
        backgroundColor: '#80DBFF'
      },
      { 
        template: JST['app/scripts/templates/pages/page2.ejs'],
        backgroundColor: '#FFA10B'
      },
      { 
        template: JST['app/scripts/templates/pages/page3.ejs'],
        backgroundColor: '#FF5703'
      },
      { 
        template: JST['app/scripts/templates/pages/page4.ejs'],
        backgroundColor: '#52CC93'
      },
      { 
        template: JST['app/scripts/templates/pages/page5.ejs'],
        backgroundColor: '#967DB3'
      },
    ],

    id: 'app',

    events: {},

    initialize: function (){
      // render headerView, footerView, and bodyView
      this.headerView = new haunt.Views.HeaderView({ model: this.model });
      this.footerView = new haunt.Views.FooterView({ model: this.model });
      $('body').append(this.headerView.render());
      $('body').append(this.render());
      $('body').append(this.footerView.render());

      // build pageModels and pageViews
      this.pageViews = this.pageTemplates.map(this.generatePage, this);

      this.calculateSize();

      $(window).on('resize', this.calculateSize.bind(this));
      $(window).on('scroll', _.throttle(this.pageScroll.bind(this), 30));
      this.listenTo(this.model, 'change:currentPage', this.changePage);
      
      // simulate pageScroll to initialize first page
      this.pageScroll();
    },

    calculateSize: function(){
      this.DIMENSIONS = {};
      this.DIMENSIONS.headerHeight = this.headerView.$el.outerHeight();
      this.DIMENSIONS.footerHeight = this.footerView.$el.outerHeight();
      this.DIMENSIONS.windowHeight = innerHeight; //$(window).outerHeight();

      // page breakpoints at end of each page
      this.DIMENSIONS.pageEndBreakPoints = this.pageViews.reduce(function(pageEndBreakPoints, pageView, idx){
        var previousBreakPoint = idx > 0 ? pageEndBreakPoints[idx -1] : 0;
        return pageEndBreakPoints.concat( previousBreakPoint + pageView.$el.height() );
      }, []);

      this.DIMENSIONS.bodyHeight = this.DIMENSIONS.pageEndBreakPoints[this.DIMENSIONS.pageEndBreakPoints.length -1];

      $('body').css({ 'height': this.DIMENSIONS.bodyHeight });
    },

    pageScroll: function(e){
      // get page idx from breakpoint buckets
      var breakpointRatio = this.model.get('breakpointRatio');
      var newPageIdx = this.DIMENSIONS.pageEndBreakPoints.reduce(function(pageIdx, bp){
        return pageYOffset < bp - (innerHeight * (1-breakpointRatio)) ? pageIdx : pageIdx +1;
      }, 0);

      if(newPageIdx === this.model.get('currentPage') + 1){
        this.model.trigger('changePage', 'up', newPageIdx);
      }else if(newPageIdx === this.model.get('currentPage') - 1){
        this.model.trigger('changePage', 'down', newPageIdx);
      }else if(newPageIdx !== this.model.get('currentPage')){
        this.model.trigger('changePage', 'skip', newPageIdx);
      }
      
    },

    changePage: function(app){
      this.model.pages.each(function(page){
        if(page.get('pageNumber') === this.get('currentPage')){          
          page.trigger('show');
        }else if(page.get('pageNumber') === this._previousAttributes['currentPage']){
          page.trigger('send2background');
        }else{
          page.trigger('hide');
        }
      }.bind(this.model));

      if(this.model.get('currentPage') > 0){
        this.model.trigger('showHeader');
        this.model.trigger('showFooter');
      }else{
        this.model.trigger('hideHeader');
        this.model.trigger('hideFooter');
      }
    },

    render: function () {
      this.$el.html( this.template(this.model.toJSON()) );
      return this.$el;
    },

    generatePage: function(pageData, idx){
      var page = this.model.pages.add({ pageNumber: idx }),
          pageView = new haunt.Views.Page({ model: page });

      _.extend(pageView, pageData);

      this.$el.find('.page-container').append(pageView.render());
      return pageView;
    }

  });

})();

/*global haunt, Backbone, JST*/

haunt.Views = haunt.Views || {};

(function () {
  'use strict';

  haunt.Views.HeaderView = Backbone.View.extend({

    template: JST['app/scripts/templates/header.ejs'],

    tagName: 'header',

    className: 'animate',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change:user', this.render);
      this.listenTo(this.model, 'showHeader', this.show);
      this.listenTo(this.model, 'hideHeader', this.hide);
    },

    show: function(){
      this.$el.addClass('active');
    },

    hide: function(){
      this.$el.removeClass('active');
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this.$el;
    }

  });

})();

/*global haunt, Backbone, JST*/

haunt.Views = haunt.Views || {};

(function () {
  'use strict';

  haunt.Views.FooterView = Backbone.View.extend({

    template: JST['app/scripts/templates/footer.ejs'],

    tagName: 'footer',

    className: 'animate',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'showHeader', this.show);
      this.listenTo(this.model, 'hideHeader', this.hide);
    },

    show: function(){
      this.$el.addClass('active');
    },

    hide: function(){
      this.$el.removeClass('active');
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this.$el;
    }

  });

})();

/*global haunt, Backbone*/

haunt.Models = haunt.Models || {};

(function () {
  'use strict';

  haunt.Models.Page = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();

/*global haunt, Backbone, JST*/

haunt.Views = haunt.Views || {};

(function () {
  'use strict';

  haunt.Views.Page = Backbone.View.extend({

    events: {},

    className: 'page',

    initialize: function () {
      this.$el.addClass('pageNumber-' + this.model.get('pageNumber'))
      this.listenTo(this.model, 'show', this.show);
      this.listenTo(this.model, 'send2background', this.send2background);
      this.listenTo(this.model, 'hide', this.hide);
    },

    show: function() {
      this.$el.stop().css({
        'zIndex': 2,
        'opacity': 0
      }).animate({
        'opacity': 1
      }, 200);
    },

    send2background: function() {
      this.$el.stop().css({
        'zIndex': 1
      }).animate({
        'opacity': 1
      }, 400);
    },

    hide: function() {
      this.$el.stop().css({
        'zIndex': 0,
        'opacity': 0
      }).animate({
        'opacity': 0
      }, 400);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.css({
        backgroundColor: this.backgroundColor
      })
      return this.$el;
    }

  });

})();

/*global haunt, Backbone*/

haunt.Collections = haunt.Collections || {};

(function () {
  'use strict';

  haunt.Collections.Pages = Backbone.Collection.extend({

    model: haunt.Models.Page

  });

})();
