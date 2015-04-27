var grid = new Array();
var score = 0;
var IsConflict = new Array();

$(function(){
   newgame();
});

function newgame(){
    //initialize the game
    init();
    //generate two number
    generatenumber();
    generatenumber();
}

function restartgame(){
    $("#gameover").remove();
    updateScore(0);
    newgame();
}

function init(){
    for(var i=0;i<4;i++){

        for(var j=0;j<4;j++){
            //get each grid-cell
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", 20+i*120);
            gridCell.css("left",20+j*120);
        }
    }

    for(var i=0;i<4;i++){
        grid[i] = new Array();
        IsConflict[i] = new Array();
        for(var j=0;j<4;j++){
            //initialize each grid
            grid[i][j]=0;
            IsConflict[i][j] = false;
        }
    }

    //initialize each number
    updategridnumber();
   score = 0;
}

function updategridnumber(){
    $(".number-cell").remove();
    for(var i=0; i<4 ;i++){
        for(var j=0; j<4; j++){
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);

            if(grid[i][j]==0){
                numberCell.css("width", "0px");
                numberCell.css("height","0px");
                numberCell.css("top", 70+i*120);
                numberCell.css("left",70+j*120);
            }else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", 20+i*120);
                numberCell.css("left", 20+j*120);
                numberCell.css("background-color", getNumberBackgroundColor(grid[i][j]));
                numberCell.css("color", getNumberColor(grid[i][j]));
                numberCell.text(grid[i][j]);
            }
            IsConflict[i][j] = false;
        }
    }
    $(".number-cell").css("line-height","100px");
    $(".number-cell").css("font-size","60px");
}
function generatenumber(){
    if (nospace(grid)) {
        return false;
    }
    //generate random position
    var x = parseInt(Math.floor(Math.random()*4));
    var y = parseInt(Math.floor(Math.random()*4));
    while(true){
        if(grid[x][y]== 0 ){
            break;
        }
    var x = parseInt(Math.floor(Math.random()*4));
    var y = parseInt(Math.floor(Math.random()*4));
    }
    //generate random number
    var Rnumber = Math.random() < 0.5 ? 2 : 4;
    //put the number into position
    grid[x][y] = Rnumber;
    showAnimation(x,y,Rnumber);
    return true;
}