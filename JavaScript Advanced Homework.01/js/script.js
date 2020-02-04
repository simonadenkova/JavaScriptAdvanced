/*Homework
Create a button
When the button is clicked, call the StarWars API to get all the films.

Task1: Print all the films in a table (title, director, producer, epizode_id and url)

Task 2: Print also the amount of characters, planets, starships, vehicles and species, each of them in a separate column

Bonus: Print the name of the first character of each film
(hint: you are not restricted to only one ajax call)

URL: https://swapi.co/api/films/
NOTE: JQuery will automatically parse this call (js will not).*/


let button = $("#btn");
let result = $("#result");
button.on("click", function() {
            result.html('');
            $.ajax({
                        url: "https://swapi.co/api/films/",
                        success: function(data) {
                                for (let info of data.results) {
                                  result.append(`<tr><td>${info.title}</td><td>${info.director}</td><td>${info.producer}
                                 </td><td>${info.episode_id}</td><td>${info.url}</td><td>${info.characters.length}
                                  </td><td>${info.planets.length}</td><td>${info.starships.length}
                                 </td><td>${info.vehicles.length}</td><td>${info.species.length} `)
             }
        },
        error: function(error) {
            console.log("The request has failed!");
            console.log(error.errorText);
        }

    })
    
        })
    
    

    

