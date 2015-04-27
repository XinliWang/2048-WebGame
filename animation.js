function showAnimation(i,j,Rnumber){
    var numberCell = $("#number-cell-"+i+"-"+j);
    numberCell.css("background-color",getNumberBackgroundColor(Rnumber));
    numberCell.css("color",getNumberColor(Rnumber));
    numberCell.text(Rnumber);
    //set up the current numberCell's animation
    numberCell.animate({
       width: "100px",
       height: "100px",
       top: (20+i*120),
       left: (20+j*120)
    },50);
}

function showMoveAnimation(i,j,i,m){
    var numberCell = $("#number-cell-"+i+"-"+j);
    numberCell.animate({
        top: (20+i*120),
        left: (20+m*120)
    },200);
}

function updateScore(score) {
    $("#score").text(score);
}