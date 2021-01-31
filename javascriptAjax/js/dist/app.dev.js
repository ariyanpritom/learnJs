"use strict";

//Asynchronous JavaScript
function getRecipe() {
  setTimeout(function () {
    var recipeID = [523, 883, 432, 974];
    console.log(recipeID);
    setTimeout(function (id) {
      var recipe = {
        title: "Fresh tomato pasta",
        publisher: "Jonas"
      };
      console.log("".concat(id, ": ").concat(recipe.title));
      setTimeout(function (publisher) {
        var recipe2 = {
          title: "Italian Pizza",
          publisher: "JOnas"
        };
        console.log(recipe);
      }, 1500, recipe.publisher);
    }, 1500, recipeID[2]);
  }, 1500);
}

getRecipe(); // Promise:

var hasMeeting = true;
var meeting = new Promise(function (resolve, reject) {
  if (hasMeeting) {
    var meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM"
    };
    resolve(meetingDetails);
  } else {
    reject(console.log("reject"));
  }
});

var addToCalender = function addToCalender(meetingDetails) {
  var calender = "".concat(meetingDetails.name, " has been scheduled on ").concat(meetingDetails.location, " at ").concat(meetingDetails.time);
  return Promise.resolve(calender);
};

meeting.then(addToCalender).then(function (res) {
  console.log(res);
})["catch"](function (err) {
  console.log(err);
});
Promise.all([meeting]); // Fetch

fetch("https://reqres.in/api/users").then(function (result) {
  return result.json();
}).then(function (data) {
  return console.log(data);
});