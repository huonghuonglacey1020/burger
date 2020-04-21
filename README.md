# burger

MVC stands for Model View Controller. It's the way we structure our folders so that it allow for more modularization.

Modularization is how we made code a little bit more separate so that functions, files, etc. can be easily used throughout your application, and it also allows you to build things separately and then as a team your code can come together if you're working on a group project.

Model: It is used for modeling the burger, building what it will look like in terms of what the burger can do and what properties it has. The model is an object. Like so: 

```
var burger = {
    someFunctionThatTheBurgerCanDo: function() {
        some stuff here
    }
}
```


Views: For the frontend, usually done through handlebars

Controllers: Controlling the app, 