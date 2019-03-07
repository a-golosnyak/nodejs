iter = integers();

for (let i of take(3, iter)) {
    console.log(i)
};



take[Symbol.iterator] = function(all, iter){
	
	let current = iter;
	let last = all;

	return {
    	next(){
			if(current<=all){
      			return {
        			done: false;
        			iter;
        		}
      		} else {
      			return{
        			done true;
        		}
      		}
    	}
  	}
} 
