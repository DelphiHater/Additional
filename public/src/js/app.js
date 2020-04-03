
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
  // Create a new Promise here and use setTimeout inside the function you pass to the constructor

  try {
    setTimeout(function() { // <- Store this INSIDE the Promise you created!
      // Resolve the following URL: https://swapi.co/api/people/1
      const promiseFetch = fetch ("https://swapi.co/api/people/1"); 
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      promiseFetch.then (response =>  { 
        return response.json (); })
        .then (people => { 
          const name =  people.name;
          console.log (name); 
          output.append(name);
          output.append("\n");
        })
        .then(putMethod)
        .catch (reason => console.info(reason));
        ;
    }, 1000);
  } catch (error) {
      output.append("Something get wrong at all =)");
      output.append("\n");
  }

  // Handle the Promise "response" (=> the value you resolved) and return a fetch()
  // call to the value (= URL) you resolved (use a GET request)

  // Handle the response of the fetch() call and extract the JSON data, return that
  // and handle it in yet another then() block

  // Finally, output the "name" property of the data you got back (e.g. data.name) inside
  // the "output" element (see variables at top of the file)

  var person = { name: 'Max', age: 28 };

  function putMethod() {
    return fetch('https://httpbin.org/put', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(person)})
      .then(p => p.json())
      .then(data => {
        console.log (data.json.name);
        output.append(data.json.name);
        output.append("\n");
      }, reason => console.info(reason));
  }

  // Repeat the exercise with a PUT request you send to https://httpbin.org/put
  // Make sure to set the appropriate headers 
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

  // To finish the assignment, add an error to URL and add handle the error both as
  // a second argument to then() as well as via the alternative taught in the module
});