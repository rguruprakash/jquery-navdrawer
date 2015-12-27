+ function() {
  'use strict'

  var NavDrawer = function(element, options) {
    this.options = options;
    this.$element = $(element);
    this.$body = $(document.body);
    this.$backdrop = null;
    this.isShown = null;
  }

  NavDrawer.DEFAULTS = {
    backdrop: true
  }

  NavDrawer.prototype.show = function() {
    if (this.isShown) return;
    this.isShown = true;
    this.$element.addClass('in');
    this.backdrop();
  }

  NavDrawer.prototype.hide = function() {
    this.isShown = false;
    this.$element.removeClass('in');
    this.backdrop();
  }

  NavDrawer.prototype.backdrop = function() {
    if (this.isShown && this.options.backdrop) {
      this.$backdrop = $(document.createElement('div'))
        .addClass('navdrawer-backdrop')
        .appendTo(this.$body);
      this.$body.addClass('navdrawer-open');
      this.$backdrop.on('click', $.proxy(function() {
        this.hide();
      }, this))
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop && this.$backdrop.remove()
      this.$backdrop = null
      this.$body.removeClass('navdrawer-open');
    }
  }

  function Plugin(option) {
    this.each(function() {
      var $this = $(this);
      var data = $this.data('navdrawer');
      var options = $.extend({}, NavDrawer.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('navdrawer', (data = new NavDrawer(this, options)));
      if (typeof option === 'string') data[option]();
    })
  }

  $.fn.navdrawer = Plugin;
  $.fn.navdrawer.Constructor = NavDrawer;
}()
