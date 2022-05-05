## Le scope:

Il permet de faire la  liaison entre le controller et la vue.

Pour définir un controller, il suffit de faire une fonction. A celle ci je passerai en argument une injection de dépendance.
Je crée par exemple le module suivant : 
 ```js

 function monPremierController($scope){
       $scope.users = [
        {
            "firstname": "Bruce",
            "city": "Gotham"
        },
        {
            "firstname": "Arthur",
            "city": "Gotham"
        },
    ];
 }
```

La directive ng-controller me permet de passer en paramètre le nom de la fonction que je souhaite

```js
    <div ng-controller = "monPremierController">
```
Le scope est utilisé pour passer une variable à la vue et inversement le scope est altéré par la vue.
Chaque scope à son propre id.
C'est en fait une grosse variable qui contient plusieurs autres variables, un peu similaire au localStorage en js .
Un scope hérite de ses parents. 
Par contre si je crée 3 scopes enfants, il n'interagiront pas forcément les uns avec les autres,mais auront tous hérité de leur parent.