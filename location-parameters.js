(function(d, w, undefined){
	
	var queryString = d.location.search.substring(1).split('&'),
	    parameters = {};

	for (var i = 0; i < queryString.length; i++) {

		// get the current parameter
		var currentParameter = queryString[i].split('=');

		// We want to skip this parameters if the value is empty
		// therefor we use skip
		if (currentParameter[1] === "" || currentParameter[1] === undefined) continue; 
    		parameters[w.decodeURIComponent(currentParameter[0])] = w.decodeURIComponent(currentParameter[1]);
	}

	// we attach the parameters to location.parameters
	// we can now use location.parameters anywhere else on the page
	// for easy access.
	d.location.parameters = parameters;


})(document, window);
