//2. Liste quais databases você possui nesse servidor;

> show dbs
be-mean-instagram  0.000GB
be-mean-pokemons   0.000GB
local              0.000GB




//4. Insira pelo menos 5 pokemons A SUA ESCOLHA utilizando o mesmo padrão de campos utilizado: name, description, attack, defense e height;

var pokemons = [
{'name':'Butterfree','description':'Borboleta do mal','type': 'inseto', 'attack': 50, height: 11 },
{'name':'Gastly','description':'Fantasma bolado','type': 'fantasma', 'attack': 150, height: 8 },
{'name':'Raichu','description':'Rato elétrico','type': 'eletric', 'attack': 200, height: 8 },
{'name':'Alakazam','description':'Psicopata','type': 'psiquico', 'attack': 300, height: 15 },
{'name':'Golem','description':'Pedra indestrutível','type': 'Terra', 'attack': 180, height: 14 }]

db.pokemons.insert(pokemons)


//5. Liste os pokemons existentes na sua coleção;

db.pokemons.find().pretty()
{
       "_id" : ObjectId("5744b565293cff985ec78608"),
       "name" : "Raichu",
       "description" : "Rato elétrico",
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




//6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em
uma variável chamada `poke`;

> var query = {name: 'Raichu'}
> var filds = {name: 1}
> db.pokemons.find(query,filds)
{ "_id" : ObjectId("5744b565293cff985ec78608"), "name" : "Raichu" }
> var poke = db.pokemons.find(query,filds)
> poke
{ "_id" : ObjectId("5744b565293cff985ec78608"), "name" : "Raichu" }



//7. Modifique sua `description` e salvê-o

var query = { "_id" : ObjectId("5744b565293cff985ec78608")}
> var mod = {$set: {description: 'A evolução do grande Pikachu!'}}
> db.pokemons.update(query,mod)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.pokemons.find(query)
{ "_id" : ObjectId("5744b565293cff985ec78608"), "name" : "Raichu", "description" : "A evolução do grande Pikachu!", "type" : "eletric", "attack" : 200, "height" : 8 }
