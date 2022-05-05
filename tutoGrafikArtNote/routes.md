## Les Routes

Elles permettent de gérer les transitions entre les différentes pages et de savoir ce que l'on doit charger

```js

    var app = angular.module('MonApp',['ngRoute']);
//  Ici le ngRoute (qui est une injection de dépendance) va me permettre d'utiliser routeProvider 
        app.config(function($routeProvider){
            $routeProvider
                .when('/',{templateUrl: 'partials.home.html'}) // quand route accueil alors fait ça
                .when ('/comments', {templateUrl: 'partials.comments.html'}) //quand route comments alors fait ça
                .otherwise({redirectTo: '/'}); //otherwise permet de dire pour toute les autres routes redirige vers la page d'accueil, c'est l'équivalent du *  .
        })
```

La directive 'ng-view' `<div ng-view> </div>` permet dans mon html d'afficher mon contenu.

On peut aussi au niveau du routeur injecter un controller, j'aurai pu ici faire : 

```js
 .when ('/comments', {templateUrl: 'partials.comments.html',
    controller: 'CommentsController'}) 
```