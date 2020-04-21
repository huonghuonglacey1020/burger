// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){
  $('.devoured').on("submit", function(event){
    event.preventDefault();
    console.log('working');
    $.ajax ({
      method: 'PUT',
      url: '/burgers/'+ $(this).children('.burgers_id').val()
      })
    .then(function(data){
      location.reload();
    })
  })



    /*$("#burger").on("click", function(event) {
      console.log('working')
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
  
      var newDevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  })*/
  //$(".burger").on("click", function(event) {
    //var id = $(this).data("id");
    //console.log(id);

    // Send the DELETE request.
    /*$.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );*/
   
    });
