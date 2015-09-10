define(['angular', '../module'], function(ng) {
  'use strict';

  ng
  .module('cs_formbuilder.directives')
  .directive('formBuilderField', function ($http, $compile, $rootScope) {

    var getTemplateUrl = function (field) {
      var type = field.type
        , templateUrl = '';

      switch (type) {

      case 'text':
        templateUrl = '/modules/cs_formbuilder/views/fields/text.html';
        break;
      case 'date':
        templateUrl = '/modules/cs_formbuilder/views/fields/date.html';
        break;
      case 'select':
        templateUrl = '/modules/cs_formbuilder/views/fields/select.html';
        break;
      case 'dropdown-select':
        templateUrl = '/modules/cs_formbuilder/views/fields/dropdown-select.html';
        break;
      }

      return templateUrl;
    };

    var linker = function(scope, element, attrs) {
      element.hide();
      scope.rootScope = $rootScope;
      var templateUrl = getTemplateUrl(scope.field);

      $http.get(templateUrl).success(function(data) {
        element.html(data);
        $compile(element.contents())(scope);
        element.show();
      });
    };

    return {
      template: '{{ field }}',
      restrict: 'E',
      scope: {
        field: '=',
        form: '='
      },
      link: linker
    };
  });

});