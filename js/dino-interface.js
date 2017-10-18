$(document).ready(function() {
  $('#dino').click(function() {
    let paragraphs = $('#paragraphs').val();
    let words = $('#words').val();
    $('#paragraphs').val("");
    $('#words').val("");


    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
      // debugger;
    });

    promise.then(function(response) {
      body = JSON.parse(response);
      $('#showParagraphs').html(`<h1>${body}</h1>`);
      }, function(error) {
      $('#showErrors').html(`There was an error processing your request: ${error.message}`);
    });
    // debugger;

  });
});
