
## Définition: 

Il s'agit d'attributs spéciaux qui permettent d'injecter directement des comportements dans le code html.
Exemple : `ng-app` `ng-model`
Ca peut également être un élément à part entière: `ng-label` au lieu de `label`.

Les directives permettent de "booster" notre html, de lui donner de nouveaux pouvoirs.

`ng-app` définit le scope angular de mon app.
`ng-model = "task"` définit que la variable va s'appeler "task".

`{{task}}` tout ce qui sera mis entre accolade sera interprété, ca équivaut à "echo" en php.

`ng-init` permet d'injecter des données directement dans le html
`ng-repeat` permet de faire un forEach, exemple `<li ng-repeat="user in users">{{user}}</li>`
Cette commande va me générer une li par user présent dans mon `ng-init`.

### Les filtres : 

Ils permettent plusieurs choses, notamment de modifier les variables. Ils peuvent altérer, filtrer ou organiser.

Par exemple comme filtre on va avoir, orderBy, filter, uppercase, lowercase,...

Pour utiliser un fitre il suffit de mettre un `|` puis le filtre à utiliser. 
Par exemple : 
``{{user | uppercase}}`

Si je veux filtrer parmis les users, ceux dont le nom contient la lettre h, il me suffit de faire : `{{users |filter : "h"}}`.
C'est évidemment plus propre de le faire au moment du forEach, c'est à dire après le `ng-repeat`.

Le code suivant me permet par exemple en définissant mon `ng-model` avec query, de créer un filtre en direct, un peu comme les inputs controlés en React.

```js

<input type="text" ng-model="query"/>

    <div ng-init = "users= ['Marc', 'Jean', 'John']">
        <ul>
            <li ng-repeat = "user in users | filter : query ">
                {{user | filter}}
            </li>
        </ul>        
    </div>
```

Pour le filtre `orderBy : '-username'`, si je met - comme ici mes users seront classés par ordre décroissant, si je met + par ordre croissant
Préfixer mes users est utile quand je souhaite n'agir que sur eux. Si je souhaite agir sur un ensemble plus grand je peux utiliser Reverse qui me permet d'ordonner dans le sens inverse mon ensemble de variable concaténé par exemple. 

