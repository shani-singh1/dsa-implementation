// implementation of Array DS & custom methods 👇

/* 
methods to implement 
1. push method
2. get method
3. pop method
4. shift method
5. delete by any index method

*/
class myArray{
    constructor(data){
        this.length = 0;
        this.data = {};
    }

    // 1. push method will let the user append data from last.
    push(data){
        this.data[this.length] = data;
        this.length++;
        return this.length;
    }
    // 2. Get method will let the user find data by index
    get(index){
        const indexData = this.data[index];
        return indexData;
    }
    
    // 3. Pop method will let the user delete the last element and return
    pop(){
        const lastIndex = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastIndex;
    }
    
    // 4. Shift method will let the user removes the first element  and return
    shift(){
        const firstIndex = this.data[0];

        // re-indexing
        for (let i = 0; i < this.length; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
        return firstIndex;
    }

    // 5. deleteByIndex method will allow user to delete any element by index position
    deleteByIndex(index){
        // Check if the index is valid
        if (index < 0 || index >= this.length) {
            console.log('Index out of bounds');
            return;
        }
        const customIndex = this.data[index];

        // re-indexing
         for (index; index < this.length; index++){
            this.data[index] = this.data[index+1];
         }

         delete this.data[this.length-1];
         this.length--;
    }
}

// function calling 
const testArray = new myArray();

/* uncomment these one by one to 
check each method in action ✌️

*/

// testArray.push('apple');
// testArray.push('banana');
// testArray.push('kiwi');
// console.log(testArray);
// console.log("-----");
// console.log(testArray.get(0));
// console.log(testArray.get(1));
// console.log("-----");
// console.log(testArray.pop());
// console.log("-----");
// console.log(testArray);
// console.log("-----", testArray.shift());
// console.log("--------", testArray);
// console.log(testArray);
// testArray.deleteByIndex(0);
// console.log(testArray);


// 👋 I haven't tested the code for the out of box edge cases, neither validated, make sure to keep in mind ! 


 
