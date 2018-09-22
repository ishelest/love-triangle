/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
//getLoveTrianglesCount([2, 3, 1]);
module.exports = function getLoveTrianglesCount(preferences = []) {
    preferences.unshift(0);
    var A;
    var B;
    var C;
    var topVertex = [];
    var love = 0;

    for (var i = 1; i < preferences.length; i++) {

        
    //Add other sides
    A = i;
    B = preferences[A];
    C = preferences[B]; 
    //console.log('A =', A);
    //console.log('B =', B);
    //console.log('C =', C);
    
    //check for complete triangle
        if(preferences[C] === A && A != B) {
        //check for duplicates
            if (topVertex.indexOf(Math.max(A, B, C)) === -1) {
                topVertex.push(Math.max(A, B, C));
                love++;
              }    
        
        
    
    
        }
    
    
    }
  return love;
  
  

};
