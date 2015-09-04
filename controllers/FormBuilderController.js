define( [ 'angular', 'jquery', 'underscore', '../module' ], function( ng, $, _ ) {
  'use strict';

  ng
  .module( 'cs_formbuilder.controllers' )
  .controller( 'FormBuilderController', function( $rootScope, $scope, $injector, Helpers ) {
    var Messenger = $injector.has( 'Messenger' ) ? $injector.get( 'Messenger' ) : $injector.get( '$log' );

    _.defaults($scope, {
      data: {
        firstName: 'Richard',
        lastName: 'Gustin'
      },
      helpers: Helpers,
      change: function(fieldName, value) {
        $scope.data[fieldName] = value;
      },
      save: function() {
        debugger;
        if ( this.form && this.form.$invalid ) {
          return Messenger.warn( 'Please fix the highlighted form errors and try again.' );
        }

        Messenger.success('Form Submitted');

        // if ($scope.user.Role !== null) {
        //   $scope.user.Role = parseInt($scope.user.Role, 10);
        // }

        // if ( !!$scope.user.id ) {
        //   promise = $scope.user.$save();
        // } else {
        //   promise = UserService.create( $scope.user );
        // }

        // promise
        //   .then( function() {
        //     $rootScope.$broadcast( 'table:reload' );
        //     Messenger.success( 'User ' + $scope.user.fullName + ' (' + $scope.user.email + ') successfully ' + ( !!$scope.user.id ? 'updated.' : 'created.' ) );
        //     $modalInstance.close( $scope );
        //   })
        //   .catch( function( err ) {
        //     Messenger.error( 'Unable to ' + ( !!$scope.user.id ? 'update' : 'create' ) + ' user ' + $scope.user.firstName + ' ' + $scope.user.lastName + ' (' + $scope.user.email + ') due to error (' + err + ')' );
        //   });
      },
      cancel: function() {
        Messenger.info('You have cancelled your submission.');
      }
    });
  });
});