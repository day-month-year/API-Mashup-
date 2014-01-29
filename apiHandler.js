var artist = "ludovico%20einaudi";
var artistImg = "";

//Get artist cover art and description
function artistFind(artist) {
	$.getJSON('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&limit=1&api_key=7d84711eecbf239d4155d322825c2ddb&format=json', 
		function(json) {												
			artistImg = json.artist.image[3]['#text'];
				$('#coverArt').html('<img src="'+ artistImg +'" alt="">');
				$('#artistInfo').html('<p>' + json.artist.bio.summary + '</p>');
		});
	}