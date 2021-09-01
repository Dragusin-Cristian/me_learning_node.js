const { readFile, writeFile } = require("fs");
console.log("start");

//CALLBACK HELL!!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result.txt",
          `This is the result: ${first} ${second}.`,
          (err) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("TASK DONE!");
            }
          }
        );
      }
    });
  }
});

console.log("starting new task...");
