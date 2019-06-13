
$(document).ready(function () {
    // // a Target random number
    // $("#random-button").on("click", function () {

    //     var randomTarget = Math.floor(Math.random() * 120) + 19;

    //     // dump the random number into our random-number div.
    //     $("#target-count").text(randomTarget);
    // });

    // a Crystal and target random number. Display target number
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);
    var randomTarget = Math.floor(Math.random() * 102) + 19;
    $("#target-count").text(randomTarget);



    // var win/loss/total score
    var wins = 0;
    var losses = 0;
    var sumOfScore = 0;
    //display win or losses
    $("#wins").text(wins);
    $("#losses").text(losses);

    //reset conditions
    function reset() {
        randomTarget = Math.floor(Math.random() * 102) + 19;
        $("#target-count").text(randomTarget);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        sumOfScore = 0;
        $("#totalScore").text(sumOfScore);
    }
    // adding crystal value
    $("#yellowD").on("click", function () {
        sumOfScore = sumOfScore + crystal1;
        $("#totalScore").text(sumOfScore);
        if (sumOfScore === randomTarget) {
            alert("You won!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (sumOfScore > randomTarget) {
            alert("Sorry you lost!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    $("#blueD").on("click", function () {
        sumOfScore = sumOfScore + crystal2;
        $("#totalScore").text(sumOfScore);
        if (sumOfScore === randomTarget) {
            alert("You won!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (sumOfScore > randomTarget) {
            alert("Sorry you lost!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    $("#diamond").on("click", function () {
        sumOfScore = sumOfScore + crystal3;
        $("#totalScore").text(sumOfScore);
        if (sumOfScore === randomTarget) {
            alert("You won!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (sumOfScore > randomTarget) {
            alert("Sorry you lost!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    $("#redD").on("click", function () {
        sumOfScore = sumOfScore + crystal4;
        $("#totalScore").text(sumOfScore);
        if (sumOfScore === randomTarget) {
            alert("You won!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (sumOfScore > randomTarget) {
            alert("Sorry you lost!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });








});