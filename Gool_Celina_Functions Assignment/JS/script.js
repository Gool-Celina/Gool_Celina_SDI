/**
 Celina Gool
 Jan. 29, 2015
 SDI Section 3
 Function Worksheet Circumference
 */



//Calculate circumference of circle

//Given variable

var radius=50

//Create function
function calculateCircumference(r){
//C=(pi)D
//Establish D (diameter)
    var diameter=r*2;
    //Calculate circumference
    var circumference=Math.PI*diameter;
    //Print circumference for verification
    //console.log(circumference);
    return circumference;
}
//Assign variable to output
var circumferenceCircle=calculateCircumference(radius);
//Print output variable value
console.log(circumferenceCircle);
