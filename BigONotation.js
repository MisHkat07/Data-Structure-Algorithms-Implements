/*
    What is good code?
    - Good Code can be described with 2 points. They are 1) Readable 2) Scalable.

    Readable - Clean, Understandable.
    Scalable - Performant Code.

    Big-O-Notation talks about the Scalable Code. It defines how long an Algorithm takes to run. And How many steps it takes to complete the function or limiting behavior of a function.
    
    There are many kind of Big-O Notation like -

      n				Worst Case			   Comment
<=[10..11]		O(n!),O(n^6) 		   Enumerating Permutations
<=[15..18]		O(2^n X n^2) 		   DP Travel and Salesman Problem
<=[18..22]		O(2^n X n)			   DP With Bitmask Technique
<=100			O(n^4) 				   DP With 3 dimention + O(n)loop
<=400			O(n^3)				   Floyd Warshall's
<=2000			O(n^2Log(n))		   2-Nested Loop +tree-related DS
<=10,000		O(n^2)				   Bubble/Selection/Insertion Sort
<=1M			O(nLog(n))			   Merge Sort , Building Segment Tree
<=100M			O(n),O(Log(n)),O(1)    Bottleneck 
 */

//---------------> O(n) Linear Time - Increase in linear way in single loop for unknown length

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "MisHkat") {
      return console.log("Found Him!");
    } else {
      return console.log("Not Found!");
    }
  }
  let t2 = performance.now();
  console.log("Performance is ", t2 - t0 + "MS");
}


//---------------> O(1) Constant Time - Pick a single value

function findElement(array) {
    return array[9];
}

// -------------> Big O calculation
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anyFunction(); //O(n)
    let stranger = true; //O(n) --> Each loop
    a++; //O(n)
  }
  return a; //O(1)    
}
// 3 * O(1) + 4 * O(n) = O(3 + 4n)
/*
At the end where's the bigger cost exists. It will be the Big-O. So The function is ultimately O(n). And things can be simplified with 4 rules.

They are: 
(1) Worst Case
(2) Remove Constant
(3) Different terms for Inputs 
(4) Drop non dominants

--------- Worst Case
Always count the worst case for the unpredicted input.

--------- Remove Constant
  O(3 + 4n) ---> O(n) , O(2n) ---> O(n)
*/

function funChallenge(input) {
  for (let i = 0; i < input.length; i++) {
    } //O(n)
    
  for (let i = 0; i < input.length; i++) {
  } // O(n)
 
    //  O(n) + O(n) = O(2n) ----> O(n) > In here constants Droped if the input(parameter) is same for all single loop in function.
}


//-------------------------> O(a+b)
function constantDrop(input, input2) {
  for (let i = 0; i < input.length; i++) {} //O(n)

  for (let i = 0; i < input.input2; i++) {} // O(n)

  //  O(n) + O(n) = O(2n) ----> O(n) > In here constants cant drop Droped cause the inputs are different in both loop. So it would be O(a+b)
}


//-------------------------> O(n^2) Quadratic Time - Horrible

function nested(input, input2) {
    for (let i = 0; i < input.length; i++) {
        for (let i = 0; i < input.input2; i++) {
            console.log('something');
          
      } //O(n)
    } //O(n)

}
//-------------------------> O(a * b) Quadratic Time - Horrible

function nested(input, input2) {
  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < input.input2; i++) {
      console.log("something");
    }
  } //O(n^2)

  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < input.input2; i++) {
      console.log("something");
    } 
    } //O(n^2)

    
    // O(a * b)
}