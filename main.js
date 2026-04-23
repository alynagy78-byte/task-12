// Question 1
var answer1 = window.prompt("What is the capital of France?");

if (answer1 == "paris") {
    window.alert("Correct Answer!");
    console.log("Q1: true");
} else {
    window.alert("Wrong Answer.");
    console.log("Q1: false (paris)");
}
// age check
var age = window.prompt("Enter your age:");

if (age > 17) {
    window.alert("You are an adult!");
} else {
    window.alert("you are too young to countinue with the game.");
}

// Question 2
var answer2 = window.prompt("الفيل اكبر ولا الزرافه اطول؟");

if (answer2 == "الفهد اسرع") {
    window.alert("عرفت ازاي؟؟");
    console.log("Q2: true");
} else {
    window.alert("غلط");
    console.log("Q2: false (الفهد اسرع)");
}
// Question 3
var answer3 = window.prompt("ايه هي اكبر دوله في العالم؟");

if (answer3 == "روسيا") {
    window.alert("صح");
    console.log("Q3: true");
} else {
    window.alert("غلط");
    console.log("Q3: false (روسيا)");
}

window.alert("Game Over (you can check the answers in the console) :)");
