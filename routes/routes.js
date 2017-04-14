//route handler for home path
function homeR(req, res){
	res.render('home.ejs', {title:'I love my City',
							headline:'Every city has its own culture'});
};
//route handler for home path
function cityR(req, res){
	var cityName = req.params.city;
	
	var titleValue;
	var headlineValue;
	
	if(cityName === 'newdelhi'){
		titleValue = "New Delhi";
		headlineValue = "Capital city of India";
	}else if(cityName === 'newyork'){
		titleValue = "New York";
		headlineValue = "city NY";
	}else if(cityName === 'barlin'){
		titleValue = "Barlin";
		headlineValue = "city BR";
	} else if(cityName === 'london'){
		titleValue = "London";
		headlineValue = "city london";
	} 
	res.render('city.ejs', {title:titleValue,
							headline:headlineValue});
};

module.exports.homeFn = homeR;
module.exports.cityFn = cityR;

