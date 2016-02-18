
var bio = {
	"name": "Travis Ekmark",
	"role": "Web Developer",
	"contacts": [{
		"email": "tekmark1@gmail.com",
		"mobile": "214-558-0665",
		"twitter": "@tekmark1",
		"location": "Frisco, Texas"
	}],
	"welcomeMessage": "Welcome to my resume. Feel free to browse around!",
	"skills": [
	"Learning", "Teaching", "Web-development"
	],
	"image": "images/my_photo.jpg"
}; 

var work = {
	"jobs": [
	{
			"position": "History Teacher",
			"employer": "Irving High School",
			"location": "Irving, Texas",
			"workdates": "2011 - Present",
			"workdescription": "While I am the chairman of the Social Studies Department for Irving High School, I also teach AP US History and write curriculum for Irving Indepenedent School District. I have experience teaching AP Psychology and Sociology, as well."
	}]
};

var education = {
	"schools": [
	{
			"name": "University of Dallas",
			"location": "Irving, Texas",
			"degree": "Bachelor of Arts",
			"major": "History",
			"dates": "2006-2010"
	},
	{
			"name": "University of Texas, Dallas",
			"location": "Richardson, Texas",
			"degree": "Master of Arts (Pending)",
			"major": "History",
			"dates": "2013-Present"
	}],
	"onlineCourses": [
	{
			"title": "Introduction to Programming",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com"
	},
	{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com"
	},
	{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com"
	}]
};

var projects = {
	"projects": [
	{
			"projecttitle": "Introduction to Programming Notes",
			"projectdates": "2015",
			"projectdescription": "As part of the 'Introduction to Programming' course offered by Udacity, I successfully built a website upon which I placed my notes along with a 'comments section' that allows people to comment on those notes.",
			"projectImages": "images/newprogramming.jpg"
	}]
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedImage = HTMLbioPic.replace("%data%", bio.image);
	$("#header").append(formattedImage);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);


	for (info in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[info].mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[info].email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[info].twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[info].location);
		var formattedBio = formattedMobile + formattedEmail + formattedTwitter + formattedLocation;

		$("#topContacts").append(formattedBio);
		$("#footerContacts").append(formattedBio);
	}

	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
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
}

education.display = function() {
	for (info in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[info].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[info].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[info].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[info].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[info].dates);

		var formattedSchoolInfo = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;

		$(".education-entry:last").append(formattedSchoolInfo);
	}
	$("#education").append(HTMLonlineClasses);

	for (info in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[info].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[info].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[info].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[info].url);

		var formattedOnlineCourseInfo = formattedTitle + formattedSchool + formattedDates + formattedURL;

		$(".education-entry:last").append(formattedOnlineCourseInfo);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].projecttitle);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].projectdates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].projectdescription);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].projectImages);
		$(".project-entry:last").append(formattedImage);
	}
}

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
/*This is empty on purpose! Your code to build the resume will go here.
 */