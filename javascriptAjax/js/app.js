//Asynchronous JavaScript
function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 883, 432, 974];
    console.log(recipeID);
    setTimeout(
      (id) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Jonas",
        };
        console.log(`${id}: ${recipe.title}`);
        setTimeout(
          (publisher) => {
            const recipe2 = {
              title: "Italian Pizza",
              publisher: "JOnas",
            };
            console.log(recipe);
          },
          1500,
          recipe.publisher
        );
      },
      1500,
      recipeID[2]
    );
  }, 1500);
}

getRecipe();

// Promise:

const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(console.log("reject"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};
meeting
  .then(addToCalender)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([meeting]);

// Fetch

fetch("https://reqres.in/api/users")
  .then((result) => result.json())
  .then((data) => console.log(data));
