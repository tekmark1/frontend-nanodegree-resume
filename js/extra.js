var formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.image);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedskills = HTMLskills.replace("%data%", bio.skills);

$("#main").append(formattedmobile);
$("#main").append(formattedemail);
$("#main").append(formattedtwitter);
$("#main").append(formattedbioPic);
$("#main").append(formattedwelcomeMsg);
$("#main").append(formattedskills);


$("#main").append(work["position"]);
$("#main").append(education.name);

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].workdates);
	$(".work-entry:last").append(formattedDates);

	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workdescription);
	$(".work-entry:last").append(formattedWorkDescription);
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$('#main').append(internationalizeButton);

#f5a623

