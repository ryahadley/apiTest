angular.module('api').controller('apiCtrl', function($scope, apiserv, secretserv) {


window.onload = function() {
var startPos;
var geoOptions = {
  maximumAge: 5 * 60 * 1000,
  timeout: 10 * 1000
}

var geoSuccess = function(position) {
  startPos = position;
   document.getElementById('startLat').innerHTML = startPos.coords.latitude;
   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
   $scope.longy = startPos.coords.longitude;
   $scope.laty = startPos.coords.latitude;
};
var geoError = function(position) {
  console.log('Error occurred. Error code: ' + error.code);
  // error.code can be:
  //   0: unknown error
  //   1: permission denied
  //   2: position unavailable (error response from location provider)
  //   3: timed out
};

navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};


  $scope.showfood = function(lat, long, type) {
console.log(lat, long);
  $scope.reuse = type;
    apiserv.getRecipe(lat, long, type).then(function(response) {
      console.log(response);
      $scope.google = response.data.results;
      $scope.token = response.data.next_page_token;
    });
  }

  $scope.nextPage = function(address) {
    address.address_list = "/.api/v1/addresslist/6849/";
    apiserv.getNext(address).then(function(response) {
      console.log(response);
      $scope.users = response.data.objects;
    });
  }

  $scope.namesPlease = function() {
    apiserv.getName().then(function(response) {
      console.log(response);
      $scope.users = response.data.objects;
    })
  }



  $scope.killName = function(uri, index) {
    $scope.deleteIndex = index;
    apiserv.deleteName(uri).then(function(response) {
      $scope.users.splice($scope.deleteIndex, 1);
      console.log(response);
    })
  }

  $scope.details = function(id) {

    apiserv.getDetails(id).then(function(response) {
      console.log(response);

    });
  }


    $scope.textSearch = function(lat, long, query) {

      apiserv.getQuery(lat, long, query).then(function(response) {
        console.log(response);
        $scope.google = response.data.results;
      });
    }

    $scope.testsecret = function() {
      $scope.dumdum = secretserv.secret();
    }
    $scope.testsecret();

//   $scope.multiplyServings = function(list, increaseBy) {
//     function servings(list, num) {
//       var items = [];
// for(var i = 0; i < list.length; i++) {
//     var item = list[i].split(" ");
//     if (Number(item[0])) {
//     	if(item[0] == 1) {
//       	item[1] = item[1] + 's';
//       }
//       item[0] = (Number(item[0])) * num;
//       item[0] = item[0].toString();
//     }
//     else if(/\d/.test(item[0]) && eval(item[0])) {
//       item[0] = eval(item[0]);
//       if(item[0] <= 1) {
//           item[1] = item[1] + 's';
//         }
//       item[0] = (Number(item[0])) * num;
//       item[0] = item[0].toString();
//     }
//     else {
//     	item[0] = item[0] + 's';
//       item.unshift(num);
//     }
//
//     if(item[0] >= 4 && item[1] === 'teaspoons') {
//   var count = 0;
//   do{item[0] -= 4; count++}while(item[0] > 3);
//
//   if(item[0] === 0) {
//     item.shift();
//     item.shift();
//   }
//   if(count > 1) {
//     item.unshift('tablespoons');
//   }
//   else {
//     item.unshift('tablespoon');
//   }
//   item.unshift(count.toString());
// }
//
//   if(item[0] >= 16 && item[1] === 'tablespoons') {
//     var count = 0;
//     do{item[0] -= 16; count++}while(item[0] > 15);
//
//     if(item[0] === 0) {
//     	item.shift();
//       item.shift();
//     }
//     if(count > 1) {
//     	item.unshift('cups');
//     }
//     else {
//     	item.unshift('cup');
//     }
//     item.unshift(count.toString());
//   }
// 	item = item.join(' ');
//   items.push(item);
// }
//   console.log(items);
// }
//
// servings(list, increaseBy);
//   }
//
//   $scope.searchIngredient = function(recipeId) {
//     apiserv.getIngredients(recipeId).then(function(response) {
//       console.log("ingredients: ", response.data.recipe.ingredients);
//         var list = response.data.recipe.ingredients;
//
//         var ul = $('<ul>').appendTo('.ingredients');
//         $(list).each(function(index, item) {
//             ul.append(
//                 $(document.createElement('li')).text(item)
//             );
//         });
//         $scope.list = list;
//         return list;
//     });
//     //$("<input type='number' ng-model='increaseBy'>").appendTo('.ingredients');
//     //$("<button ng-click='multiplyServings(list, increaseBy)'>Add</button>").appendTo('.ingredients');
//   }

})
