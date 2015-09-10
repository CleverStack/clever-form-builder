define(['angular', 'dropzone', '../module'], function(ng, Dropzone) {
  'use strict';

  ng
  .module('cs_formbuilder.directives')
  .directive('dropzone', function () {
    return function (scope, element, attrs) {
      var config, dropzone;
      config = scope[attrs.dropzone];

      // create a Dropzone for the element with the given options
      dropzone = new Dropzone(element[0], config.options);

      // bind the given event handlers
      ng.forEach(config.eventHandlers, function (handler, event) {
        dropzone.on(event, handler);
      });
    };
  });

});