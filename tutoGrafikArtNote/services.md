## Déf:

c'est un peu la partie model , récupèrent des données depuis différents sources et de les envoyer dans les controller suqi les enverront dans la vue.

Comment créer un factory ?

```js
app.factory ('PostFactory', functin (){
    const factory = {
        posts : [
            Ici je vais mettre par exemple tout mes articles
        ],
        getPosts: function(){
            return factory.posts;
        },
        getPost: function(id){
            return factory.post[0]
        }
    }
    return factory
})
```

Ensuite pour y avoir accés dans mon controller Post, je passe ma fonction en 2nd arg: 

```js

app.controller('PostsCtrl', function ($scope, PostFactory){
    $scope.posts =PostFactory.getPosts();
})

```

