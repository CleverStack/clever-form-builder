define(['angular', 'leaflet'], function (ng) {
  'use strict';

  ng.module('cs_formbuilder.controllers', []);
  ng.module('cs_formbuilder.services', []);
  ng.module('cs_formbuilder.models', []);
  ng.module('cs_formbuilder.directives', []);

  var module = ng.module('cs_formbuilder', [
    'cs_common',
    'cs_messenger',
    'esri.map',
    'leaflet-directive',
    'ui.bootstrap',
    'cs_formbuilder.controllers',
    'cs_formbuilder.services',
    'cs_formbuilder.models',
    'cs_formbuilder.directives'
  ]);

  module.config(function ($provide, NavbarProvider) {
    var angularBootstrapDirectives = [
      'datepicker',
      'datepickerPopupWrap'
    ];

    for (var i = 0; i < angularBootstrapDirectives.length; i++) {
      $provide.decorator(angularBootstrapDirectives[i]+'Directive', function ($delegate) {
        $delegate[0].templateUrl = ['modules/cs_formbuilder/views/', $delegate[0].name, '.html'].join('');
        return $delegate;
      });
    }

    NavbarProvider.extend({
      app: [
        {
          label:          'Forms',
          href:           '/forms',
          class:          'fa-2x fa-th-list',
          order:          20,
          display: function() {
            return true;
          }
        }
      ]
    });

  });

  return module;
});
