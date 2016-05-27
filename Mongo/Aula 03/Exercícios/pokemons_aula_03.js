
//1. Liste todos Pokemons com a altura menor que 0.5;
> db.pokemons.find({'height':{$lt:0.5}}).pretty();
{
        "_id" : ObjectId("5744c3421627919ec594b28b"),
        "name" : "Caterpie",
        "description" : "Larva lutadora",
        "type" : "inseto",
        "attack" : 30,
        "height" : 0.3
}


//2. Liste todos Pokemons com a altura maior ou igual que 0.5;
db.pokemons.find({'height':{$gte:0.5}}).pretty();
{
        "_id" : ObjectId("5744b565293cff985ec78608"),
        "name" : "Raichu",
        "description" : "A evolução do grande Pikachu!",
        "type" : "eletric",
        "attack" : 200,
        "height" : 8
}
{
        "_id" : ObjectId("5744b565293cff985ec78609"),
        "name" : "Gastly",
        "description" : "Fantasma bolado",
        "type" : "fantasma",
        "attack" : 150,
        "height" : 13
}
{
        "_id" : ObjectId("5744b565293cff985ec7860a"),
        "name" : "Butterfree",
        "description" : "Borboleta do mal",
        "type" : "inseto",
        "attack" : 50,
        "height" : 11
}
{
        "_id" : ObjectId("5744b677293cff985ec7860b"),
        "name" : "Alakazam",
        "description" : "Psicopata",
        "type" : "psiquico",
        "attack" : 300,
        "height" : 15
}
{
        "_id" : ObjectId("5744b677293cff985ec7860c"),
        "name" : "Golem",
        "description" : "Pedra indestrutível",
        "type" : "Terra",
        "attack" : 180,
        "height" : 14
}


3. Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama;
// Ninguém foi encontrado, utilizei tipo inseto
 var query = {height:{$lte:0.5}};
 var query2 = {type:"inseto"};

db.pokemons.find({$and:[query,query2]}).pretty();
{
        "_id" : ObjectId("5744c3421627919ec594b28b"),
        "name" : "Caterpie",
        "description" : "Larva lutadora",
        "type" : "inseto",
        "attack" : 30,
        "height" : 0.3
}


4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5;
// Alterei a busca: pikachu por raichu e attack menor ou igual a 0.5 por 200
var query3 = {name:"Raichu"}
var query4 = {attack:{$lte:"200"}}
> db.pokemons.find({$or:[query3,query4]}).pretty();
{
        "_id" : ObjectId("5744b565293cff985ec78608"),
        "name" : "Raichu",
        "description" : "A evolução do grande Pikachu!",
        "type" : "eletric",
        "attack" : 200,
        "height" : 8
}


5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5;
//Alterei a busca: attack maior ou igual que 48 por maior ou igual a 30
> var query5 = {attack:{$gte:30}}
> var query6 = {height:{$lte:0.5}}

> db.pokemons.find({$and:[query5,query6]}).pretty();
{
        "_id" : ObjectId("5744c3421627919ec594b28b"),
        "name" : "Caterpie",
        "description" : "Larva lutadora",
        "type" : "inseto",
        "attack" : 30,
        "height" : 0.3
}
