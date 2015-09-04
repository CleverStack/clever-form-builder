define(['angular', '../module'], function(ng) {
  'use strict';

  ng
  .module('cs_formbuilder.directives')
  .directive('formBuilder', function () {

    return {
      templateUrl: '/modules/cs_formbuilder/views/form/form-builder-template.html',
      restrict: 'E',
      scope: {
        // form: '=',
        // data: '=',
        fields: '=',
        ok: '&',
        cancel: '&',
        button: '@',
        require: '@',
        loaded: '='
      },
      controller: 'FormBuilderController'
    };
  });

});