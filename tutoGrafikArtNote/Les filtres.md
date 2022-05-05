## Les filtres

Pour utiliser les filtresn on met le nom de la variable à filtrer puis |  et le nom du filtre

Par exemple `user.name | uppercase`. 

En injectant les filtres via les dépendances, on peut utiliser les filtres directement dans les controllers.

## filter:

Ce filtre prend en premier param un expression (chaine de caractère, objet, fonction). Si c'est une fonction elle prend la valeur l'index qui correspond à la valeur et le tableau (voir doc).

Au niveau de mon ng-repeat (forEach), je vais faire : 

```js
ng-repeat="comment in comments"| filter.'motAFiltrer'"
```

