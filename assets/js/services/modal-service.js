'use strict';

streamaApp.factory('modalService', ['$modal', function ($modal) {
	return{
		tvShowModal: function (tvShow, callback) {
			var modalInstance = $modal.open({
				template: JST['assets/templates/modal--tvShow.html'],
				controller: 'modalTvShowCtrl',
				size: 'lg',
				resolve: {
					tvShow: function () {
						return tvShow;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		movieModal: function (movie, callback) {
			var modalInstance = $modal.open({
				template: JST['assets/templates/modal--movie.html'],
				controller: 'modalMovieCtrl',
				size: 'lg',
				resolve: {
					movie: function () {
						return movie;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		videoModal: function (video, isManual, tvShow, callback) {
			var modalInstance = $modal.open({
				template: JST['assets/templates/modal--video.html'],
				controller: 'modalVideoCtrl',
				size: 'lg',
				resolve: {
					isManual: function () {
						return isManual;
					},
					video: function () {
						return video;
					},
					tvShow: function () {
						return tvShow;
					}
				}
			});

			modalInstance.result.then(function (data) {
				console.log('%c modal close', 'color: deeppink; font-weight: bold; text-shadow: 0 0 5px deeppink;', arguments);
				(callback || angular.noop)(data);
			});
		},


		openFileBrowser: function (callback) {
			var modalInstance = $modal.open({
				template: JST['assets/templates/modal--file-browser.html'],
				controller: 'modalFileBrowserCtrl',
				size: 'lg'
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},


		userModal: function (user, callback) {
			var modalInstance = $modal.open({
				template: JST['assets/templates/modal--user.html'],
				controller: 'modalUserCtrl',
				size: 'lg',
				resolve: {
					user: function () {
						return user;
					}
				}
			});

			modalInstance.result.then(function (data) {
				(callback || angular.noop)(data);
			});
		},

    fileManagerModal: function (video, callback) {
      var modalInstance = $modal.open({
				template: JST['assets/templates/modal--manage-files.html'],
        controller: 'modalFileCtrl',
        size: 'lg',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          video: function () {
            return video;
          }
        }
      });

      modalInstance.result.then(function (data) {
        (callback || angular.noop)(data);
      });
    }
	};
}]);