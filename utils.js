module.exports = {
    printExecutionTime: function (stop) {
        console.log(`\nTime taken to execute: ${(stop[0] * 1e9 + stop[1]) * 1000/1e9} ms`);
    },

    printSeparator: function() {
        console.log('------------------------------------------------------------------\n');
    },
  };