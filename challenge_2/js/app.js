console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);

app.controller("WelcomeController", WelcomeController);
	function WelcomeController(){
	  this.full_name = "Nick Ursetta";
	  this.age = 26;
	  this.city = "Denver";
	  this.state = "CO";
	  this.letters = this.full_name.length-1;
	  this.shout = function() {
	  	return this.full_name.toUpperCase() + "!";
	  };

	}

app.controller("ClassController", ClassController);
	function ClassController(){
	  this.class_name = "WDI-DEN-1 - White Walkers";
	  this.enrolled_students = ["Nick", "Greg", "Alison", "Monica", "Charlie", "Holly", "Kyle", "Luis", "Maddy", "Mark", "Abe", "Jamie", "Kayce", "Matt"];
	  this.start_date = "06/13/2016";
	  this.end_date = "09/02/2016";
	  this.days_left = "15";
	}