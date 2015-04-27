function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65"
    }
    return "white";
}

function isMoveLeft(grid){
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (grid[i][j] != 0) {
                if (grid[i][j - 1] == 0 || grid[i][j - 1] == grid[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isMoveRight(grid){
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >=0; j--) {
            if (grid[i][j] != 0) {
                if (grid[i][j + 1] == 0 || grid[i][j + 1] == grid[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isMoveUp(grid){
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j <4; j++) {
            if (grid[i][j] != 0) {
                if (grid[i-1][j] == 0 || grid[i-1][j] == grid[i][j]) {return true; }
            }
        }
    }
    return false;
}

function isMoveDown(grid){
    for (var i = 2; i >=0; i--) {
        for (var j = 0; j <4; j++) {
            if (grid[i][j] != 0) {
                if (grid[i+1][j] == 0 || grid[i+1][j] == grid[i][j]) {return true; }
            }
        }
    }
    return false;
}



function Blank1(i,m,j,grid){
    for(var x=m+1;x<j;x++){
        if(grid[i][x] !=0){
            return false;
        }
    }
    return true;
}

function Blank2(m,i,j,grid){
    for(var y=m+1;y<i;y++){
        if(grid[y][j] !=0){
            return false;
        }
    }
    return true;
}

function nospace(grid) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grid[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
function nomove(grid) {
    if (isMoveDown(grid) || isMoveLeft(grid) || isMoveRight(grid) || isMoveUp(grid)) {
        return false;
    }
    return true;
}

