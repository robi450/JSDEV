
    var backpackInventory = ["Bow and Arrow"];
    function displayBackpack () {
        for (var i = 0; i < backpackInventory.length; i++) {
            console.log(backpackInventory[i]);
        }
         
        
    }
    function addToInventory (item) {
        backpackInventory.push(item);
    }  
module.exports = { displayBackpack, addToInventory };

