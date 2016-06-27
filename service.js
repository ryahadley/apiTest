angular.module('api').service('apiserv', function($http) {

  this.getRecipe = function(lat, long, type) {
    return $http({
      method: 'GET',
      //url: 'http://food2fork.com/api/get?key=1317611f9820c441d26165b8c7ac5447&rId=54419'
      url:
'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=8000&types=' + type + '&hasNextPage=true&nextPage()=true&key=AIzaSyCL4CRH8G6V1OPP1oZT9LzOYWEB3ixMJjk&libraries=places'
      //key: '1317611f9820c441d26165b8c7ac5447'
    });
  }

  this.getNext = function(address) {
    return $http({
      method: 'POST',
      url: 'https://ineedyouraddress.com/.api/v1/entry/',
      data: address,
      headers: {
        Authorization: "bearer f3d285f513163b76bb944cfa0201f59014ea22bf"
      }
      //url: 'http://food2fork.com/api/get?key=1317611f9820c441d26165b8c7ac5447&rId=54419'
//       url:
// 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&radius=8000&types=' + type + '&hasNextPage=true&nextPage()=true&key=AIzaSyCL4CRH8G6V1OPP1oZT9LzOYWEB3ixMJjk&pagetoken=' + token
      //key: '1317611f9820c441d26165b8c7ac5447'
    });
  }

  this.getName = function() {
    return $http({
      method: 'GET',
      url: 'https://ineedyouraddress.com/.api/v1/entry/?limit=200',
      headers: {
        Authorization: "bearer f3d285f513163b76bb944cfa0201f59014ea22bf"
      }
    })
  }

  this.deleteName = function(id) {
    return $http({
      method: 'DELETE',
      url: 'https://ineedyouraddress.com' + id,
      headers: {
        Authorization: "bearer f3d285f513163b76bb944cfa0201f59014ea22bf"
      },
    })
  }


  https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJrTLr-GyuEmsRBfy61i59si0&key=YOUR_API_KEY


  this.getDetails = function(placeId) {
    return $http({
      method: 'GET',
      //url: 'http://food2fork.com/api/get?key=1317611f9820c441d26165b8c7ac5447&rId=54419'
      url: 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=AIzaSyCL4CRH8G6V1OPP1oZT9LzOYWEB3ixMJjk'
      //key: '1317611f9820c441d26165b8c7ac5447'
    });
  }

  this.getQuery = function(lat, long, query) {
    return $http({
      method: 'GET',
      //url: 'http://food2fork.com/api/get?key=1317611f9820c441d26165b8c7ac5447&rId=54419'
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?location=' + lat + ',' + long + '&radius=8000&query=' + query + '&hasNextPage=true&nextPage()=true&key=AIzaSyCL4CRH8G6V1OPP1oZT9LzOYWEB3ixMJjk'
      //key: '1317611f9820c441d26165b8c7ac5447'
    });
  }

  this.getIngredients = function(recipeId) {
    return $http({
      method: "GET",
      url: 'http://food2fork.com/api/get?key=1317611f9820c441d26165b8c7ac5447&rId=' + recipeId
    })
  };

})
