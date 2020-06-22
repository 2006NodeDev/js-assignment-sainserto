/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let str
  switch (shape) {
      case 'Square' : 
          for(j = 0; j < height; j++){
              str = ''
              for(i = 0; i < 5; i++){
                   str = str + character 
              }
              console.log(str)
          }

          break;
      
      case 'Triangle' :
          for(j = 1; j <= height; j++){
              str = ''
              for(i = 1; i <= j; i++){
                  str = str + character 
              }console.log(str)
          }
          break;
      
      case 'Diamond' :
          let columns = 1
          for(i=1; i<=height; i++){
              str = ''
              let space = (height - columns)/2
              for(k=1; k<=space; k++){
                  str = str + ' '
              }
              for(j=1; j<=columns; j++){
                  str = str + character  
              }       
              console.log(str)
              if(i<height/2){
                  columns = columns + 2
              }  else{
                  columns = columns - 2
              }
          }  
          break
      default :
          console.log(`${shape} is not a valid input. Square, Triangle or Diamond only`);                
  }
}

printShape('Square', 3, "%")
printShape('Triangle', 5, "$")
printShape('Diamond', 7, "*")
printShape('Circle', 7, "#")
