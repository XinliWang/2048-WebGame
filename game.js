$(document).keydown(function (event){
    switch (event.keyCode){
        case 37://left
            if(moveLeft()){
                generatenumber();
                isgameover();
            }
            break;
        case 38://up
            if(moveUp()){
                generatenumber();
                isgameover();
            }
            break;
        case 39://right
            if(moveRight()){
                generatenumber();
                isgameover();
            }
            break;
        case 40://down
            if(moveDown()){
                generatenumber();
                isgameover();
            }
            break;
        default :
            break;

    }
});

function moveLeft() {
    if(!isMoveLeft(grid)){
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (grid[i][j] != 0) {
                for (var m = 0; m < j; m++) {
                    //if the lefe of current value is 0 and between them is 0
                    if(grid[i][m] == 0 && Blank1(i,m,j,grid)){
                        showMoveAnimation(i,j,i,m);
                        grid[i][m] = grid[i][j];
                        grid[i][j] = 0;
                        continue;
                    }
                    //if the lefe of current value equal to it and between them is 0
                    else if(grid[i][m] == grid[i][j] && Blank1(i,m,j,grid)){
                        showMoveAnimation(i,j,i,m);
                        //add
                        grid[i][m] += grid[i][j];
                        grid[i][j] = 0;
                        //add score
                        score += grid[i][m];
                        updateScore(score);
                        IsConflict[i][m] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updategridnumber()",200);
    return true;
}
function moveRight() {
    if(!isMoveRight(grid)){
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >=0; j--) {
            if (grid[i][j] != 0) {
                for (var m = 3; m >j; m--) {
                    //if the lefe of current value is 0 and between them is 0
                    if(grid[i][m] == 0 && Blank1(i,m,j,grid)){
                        showMoveAnimation(i,j,i,m);
                        grid[i][m] = grid[i][j];
                        grid[i][j] = 0;
                        continue;
                    }
                    //if the lefe of current value equal to it and between them is 0
                    else if(grid[i][m] == grid[i][j] && Blank1(i,m,j,grid)){
                        showMoveAnimation(i,j,i,m);
                        //add
                        grid[i][m] += grid[i][j];
                        grid[i][j] = 0;
                        //add score
                        score += grid[i][m];
                        updateScore(score);
                        IsConflict[i][m] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updategridnumber()",200);
    return true;
}

function moveUp() {
    if(!isMoveUp(grid)){
        return false;
    }
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j <4; j++) {
            if (grid[i][j] != 0) {
                for (var m = 0; m <i; m++) {
                    //if the lefe of current value is 0 and between them is 0
                    if(grid[m][j] == 0 && Blank2(m,i,j,grid)){
                        showMoveAnimation(i,j,m,j);
                        grid[m][j] = grid[i][j];
                        grid[i][j] = 0;
                        continue;
                    }
                    //if the lefe of current value equal to it and between them is 0
                    else if(grid[m][j] == grid[i][j] && Blank2(m,i,j,grid)){
                        showMoveAnimation(i,j,m,j);
                        //add
                        grid[m][j] += grid[i][j];
                        grid[i][j] = 0;
                        //add score
                        score += grid[m][j];
                        updateScore(score);
                        IsConflict[m][j] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updategridnumber()",200);
    return true;
}

function moveDown() {
    if(!isMoveDown(grid)){
        return false;
    }
    for (var i = 2; i >=0 ; i--) {
        for (var j = 0; j <4; j++) {
            if (grid[i][j] != 0) {
                for (var m = 3; m >i; m--) {
                    //if the lefe of current value is 0 and between them is 0
                    if(grid[m][j] == 0 && Blank2(m,i,j,grid)){
                        showMoveAnimation(i,j,m,j);
                        grid[m][j] = grid[i][j];
                        grid[i][j] = 0;
                        continue;
                    }
                    //if the lefe of current value equal to it and between them is 0
                    else if(grid[m][j] == grid[i][j] && Blank2(m,i,j,grid)){
                        showMoveAnimation(i,j,m,j);
                        //add
                        grid[m][j] += grid[i][j];
                        grid[i][j] = 0;
                        //add score
                        score += grid[m][j];
                        updateScore(score);
                        IsConflict[m][j] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updategridnumber()",200);
    return true;
}


function isgameover(){
    if(nospace(grid)&&nomove(grid)){
        gameover();
    }
}

function gameover(){
    alert("gameover!");
}