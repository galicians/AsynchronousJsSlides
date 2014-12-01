for(var i = 0; i < 5; i++) {
    console.log("Calling setTimeout for value: " + i);
    setTimeout(function() { console.log(i) }, 1000);
};

