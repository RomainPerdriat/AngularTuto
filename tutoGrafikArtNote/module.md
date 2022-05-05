 ## Module

 Pour garder mon code propre est organisé, je vais devoir crée des modules. 
 Pour ce faire : `var app = angular.module('NomDeMonModule',[]);`

 Si je veux créer un Controller dans ce module, je récupère en premier lieu le module: 
 'app.controller('NomDuController', function ($scope))'
 En deuxième arguments de mon app.controller, je lui passe mon controller (qui existe sous forme d'une fonction), or comme en premier paramètre je définis le nom de cette fonction, cette fontction peut être appellée anonymenet et c'est pourquoi je ne remets pas le nom dans le second argument.
 Une fois fait, je n'oublie pas de passer le nom de mon module : `<body ng-app=" MonApp">`

 `var app = angular.module('NomDeMonModule',[]);` A quoi correspond le '[]'?
 Il permet de faire des injections de dépendances aux endroits où j'en aurai besoin, uniquement dans le module qui en fera usage.


