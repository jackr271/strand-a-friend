/* 

make separate spanagram placement function
    1. determines horizontal or vertical
    2. determines order of walls
    3. sets possible starting locations based on word-length, wall targets
    4. creates neighbor list with a weighted function where two axes are separeted and :
        a. target-axis-bias = (distanceFromTarget / remainingLength) can be negative to move left or positive to move right
        b. e.g. neighbors = [i+1,j], [i+1,j+1], [i+1,j-1], [i,j+1], [i,j], [i,j-1], ...

*/