// setTimeout(() => {
//     console.log('i am out');
// },
// 2*1000)


// const rock = a =>{
//     console.log(a +' i am para '  );
// }
// setTimeout(rock, 3*1000, 'doing');




// function call(msg){
//     console.log(msg);
//     return 'msg';

// }
//call('here is msg');
// setTimeout(call , 2*1000, ' i am running after 2 second');
// setTimeout(call , 4*1000, ' i am running after 4 second');


// function writemsg(msg){
//     console.log('HelloWorld');
// }


let counter =0;
const value = setInterval(() => {
    console.log('Hello World');
    counter+=1;
    if(counter == 5){
        console.log('Done');
        clearInterval(value)
    }
}, 1000);