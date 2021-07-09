//The Score Rater Program
/*
    Get the thresholds
        score > 0 but <= 500 then ok at least you didn't score zero.
        score > 500 but < 1000 then you scored over 500. Nice.
        score = 1000 then you socre a perfect 1000! Now that's impressive.
*/
const score = 1000;

if (score >= 0 && score <= 500)
    console.log("Okay, at least you didn't score zero.");
else if (score > 500 && score < 1000)
    console.log("You scored over 500. Nice!");
else if (score == 1000) {
    console.log("You scored a perfect 1000!\n");
    console.log("Now that's impressive");
}
else {
    console.log("Umm, completely unacceptable!");
}
