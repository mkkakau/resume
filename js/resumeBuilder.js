var bio = {
  name: 'Melanie Akau',
  role: 'Junior Front-End Web Developer',
  contacts: {
    mobile: '***REMOVED***',
    email: 'mkkakau@gmail.com',
    github: 'https://github.com/mkkakau',
    location: 'Kurtistown, HI',
  },
  biopic: 'images/fry.jpg',
  welcomeMessage: 'Welcome!',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Ruby',
    'SQL',
    'C++',
    'Ruby on Rails',
    'Bootstrap',
    'jQuery',
    'Git'
  ]
};

var education = {
  schools: [
    {
      name: 'University of Hawaii at Hilo',
      location: 'Hilo, HI',
      degree: 'Incomplete 43/76 credits earned',
      majors: [
        'Computer Science'
      ],
      dates: 'August 2009 - December 2012',
      url: 'http://hilo.hawaii.edu/catalog/computer-science'
    },
    {
      name: 'Hawaii Community College',
      location: 'Hilo, HI',
      degree: 'Incomplete 17/61 credits earned',
      majors: [
        'Business Technology'
      ],
      dates: 'August 2014 - May 2015',
      url: 'https://hawaii.hawaii.edu/businesstech'
    }
  ],
  onlineCourses: [
    {
      title: 'Front-End Web Developer Nanodegree',
      school: 'Udacity',
      date: 'June 2016 - September 2016',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    },
    {
      title: 'Rails Development Track',
      school: 'Treehouse',
      date: 'April 2016 - May 2016',
      url: 'https://teamtreehouse.com/tracks/rails-development'
    }
  ]
};

var work = {
  jobs: [
    {
      employer: 'T.H.Y. & Associates, Inc.',
      title: 'Administrative Assistant',
      location: 'Keaau, HI',
      dates: '2007 - Present',
      description: 'Configured and implemented TimeClock Plus web application and connected hardware. ' +
      'Set up automatic paid-leave accruals, assigned employee badges, and configured automatic punch rounding for 30 employees. ' +
      'Exported spreadsheet of 400+ item UPCs and descriptions to label templates in Word. ' +
      'Generated barcodes for UPCs and bin location IDs to improve data-entry accuracy and input time. ' +
      'Completed multiple tasks in different departments such as: data-entry, filing, stock count, and invoicing. '
    }
  ]
};

var projects = {
  projects: [
    {
      title: 'Classic Arcade Game Clone',
      dates: 'June 2016',
      description: 'Arcade game similar to Frogger created using HTML 5 Canvas, Bootstrap, and object-oriented JavaScript techniques.',
      images: [
        'http://mkkakau.github.io/portfolio/img/frogger.png'
      ]
    }
  ]
};

// Get formatted bio info from helper.js and append to index.html
bio.display = function() {

  var formattedRole = HTMLheaderRole.replace('%data%', this.role);
  $('#header').prepend(formattedRole);

  var formattedName = HTMLheaderName.replace  ('%data%', this.name);
  $('#header').prepend(formattedName);

  var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
  $('#topContacts').append(formattedMobile);

  var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
  $('#topContacts').append(formattedEmail);

  var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
  $('#topContacts').append(formattedGithub);

  var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);
  $('#topContacts').append(formattedLocation);

  var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
  $('#header').append(formattedBioPic);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
  $('#header').append(formattedWelcomeMessage);

  if (bio.skills.length > 0) {
    var formattedSkills = function () {
      var skillListItems = '';
      for (var i = 0; i < bio.skills.length; i++) {
        skillListItems += HTMLskills.replace('%data%', bio.skills[i]);
      }
      return skillListItems;
    };
    $('#header').append(HTMLskillsStart);
    $('#skills').append(formattedSkills);
  }
};

// formats and appends education section to index.html
education.display = function() {
  // Schools
  for (var s = 0; s < this.schools.length; s++) {
    var school = this.schools[s];

    $('#education').append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace('%data%', school.name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
    $('.education-entry:last').append(formattedName + formattedDegree);

    var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
    $('.education-entry:last').append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
    $('.education-entry:last').append(formattedLocation);

    if (school.majors.length > 0) {
      for (var m = 0; m < school.majors.length; m++) {
        var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors[m]);
        $('.education-entry:last').append(formattedMajor);
      }
    }

  }
  // Online Courses
  $('#education').append(HTMLonlineClasses);

  for (var c = 0; c < this.onlineCourses.length; c++) {
    var course = this.onlineCourses[c];

    $('#education').append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
    var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
    $('.education-entry:last').append(formattedTitle + formattedSchool);

    var formattedDate = HTMLonlineDates.replace('%data%', course.date);
    $('.education-entry:last').append(formattedDate);

    var formattedURL = HTMLonlineURL.replace('%data%', course.url);
    $('.education-entry:last').append(formattedURL);
  }
};

// formats and appends work section to index.html
work.display = function() {
  for (var j = 0; j < this.jobs.length; j++) {
    var job = this.jobs[j];

    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
    $('.work-entry:last').append(formattedEmployer + formattedWorkTitle);

    var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
    $('.work-entry:last').append(formattedWorkDates);

    var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
    $('.work-entry:last').append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
    $('.work-entry:last').append(formattedDescription);
  }
};

// formats and appends projects section to index.html
projects.display = function() {
  for (var p = 0; p < this.projects.length; p++) {
    var project = this.projects[p];

    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
    $('.project-entry:last').append(formattedDescription);

    for (var i = 0; i < project.images.length; i++) {
      var formattedImage = HTMLprojectImage.replace('%data%', project.images[i]);
      $('.project-entry:last').append(formattedImage);
    }
  }
};

function displayAll() {
  bio.display();
  education.display();
  work.display();
  projects.display();

  $('#mapDiv').append(googleMap)
}

displayAll();
