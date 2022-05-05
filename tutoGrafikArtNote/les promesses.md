 En angular on fait les promesses en utilisant `$q`

 ```js
 
 const defered = $q.defer();
 $http.get('posts.json')
    .success(function(datas, status){
        factory.posts= datas;
        deferred.resolve(factory.posts);
    }).error(function(datas, status){
        deferred.reject(`Impossible de récupérer les articles`);
 ```

 La structure ressemble à un asyn await avec try catch
 Dans le controller il faudra utiliser le .then pour dire que l'on attend le résultat.