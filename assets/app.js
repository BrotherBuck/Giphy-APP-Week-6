
$(document).ready(function () {


<script src='http://code.jquery.com/jquery-2.1.3.min.js'>
<script type="text/javascript">

	// Initial array of movies
	var gif = ['Fourth of July', 'Christmas', 'Easter', 'Halloween'];

	// ========================================================

	// displayGifInfo function now re-renders the HTML to display the appropriate content. 
	function displayGifInfo(){

		var gif = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + holiday + "&api_key=dc6zaTOxFJmzC&limit=10";

	    
		// Creates AJAX call for the specific gif being 
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			// Creates a generic div to hold the gif
			var gifDiv = $('<div class="gif">');

			// Retrieves the Rating Data
			var rating = response.Rated;

			// Creates an element to have the rating displayed
			var pOne = $('<p>').text( "Rating: " + rating);

			// Displays the rrating
			gifDiv.append(pOne);

			
			// Creates an element to hold the image 
			var image = $('<img>').attr("src", response.Poster);

			// Appends the image
			gifDiv.append(image);

			// Puts the entire gif above the previous movies.
			$('#gifView').prepend(gifDiv);
		});

	}

	// ========================================================

	// Generic function for displaying gif data 
	function renderButtons(){ 

		// Deletes the gifs prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#buttonsView').empty();

		// Loops through the array of movies
		for (var i = 0; i < gif.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('gif'); // Added a class 
		    a.attr('data-name', gif[i]); // Added a data-attribute
		    a.text(gif[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addGif').on('click', function(){

		// This line of code will grab the input from the textbox
		var gif = $('#gif-input').val().trim();

		// The gif from the textbox is then added to our array
		gif.push(gif);
		
		//array then runs which handles the processing of our gif array
		renderButtons();

		
		return false;
	})

	// ========================================================

	// Generic function for displaying the gifInfo
	$(document).on('click', '.gif', displayGifInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();
});

</script>