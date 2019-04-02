var app = {
	init: function() {
		console.log("init");
		$.getJSON("location.php").done(app.showCards);
	},
	showCards(dataJson) {
		console.log(dataJson);
		if (dataJson.network==="internal") {
			$(".net-int").show();
		}
	}

}

$(document).ready(app.init);
