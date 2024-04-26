const seconds = document.querySelector('#sec');
function startWatch (){
    let sec = 0
    setInterval(function(){
        sec += 1
        seconds.innerHTML = sec
    } , 1);

}

function stopInterval(){
    //  clearInterval(seconds)
    //  clearTimeout(second)
    let stopInterval = 10
    stopInterval(function(){
        stop += 10
        stop.innerHTML = min
    } );
}
function resetWatch(){
    let resetWatch = 0
    resetInterval(function(){
        reset += 1
        reset.innerHTML = reset
    } , 0);
}











// const seconds = document.querySelector('#sec');
// function startWatch (){
//     let sec = 0
//     setInterval(function(){
//         sec += 1
//         seconds.innerHTML = sec
//     } , 1);

// }

// function stopInterval(){
//     clearInterval(seconds)
//     clearTimeout(second)
// }