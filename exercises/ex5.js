

for (var i = 0; i < 5; ++i) {
  wrappingTimeout(i);
};

function wrappingTimeout(i) {
   console.log("Calling setTimeout for value: " + i);
  setTimeout(function() { console.log(i); }, 2000);
};