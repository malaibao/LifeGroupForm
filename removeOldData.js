var mongoose = require('mongoose');
var CellGroupFormSubmission = require('./models/cellGroupForm');


function removeOldData(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var d = new Date();
    d = new Date(`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`);     //create with format 'January 1, 2019'
    // console.log('WHAT ISSSSSSSSSSSSSSSS' + d.getMonth() - 2);
    d.setMonth(d.getMonth() - 2);   //minus 1 month
    console.log(d.toISOString());

    let s = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T00:00:00+0000`;
    // let d2 = new Date(Date.parse(s));
    // console.log("d2 is " + d2.toISOString());
    // console.log("d2 is " + d2.toDateString());

    CellGroupFormSubmission.deleteMany({'cellGroupDate': {$lt: d}}, (err)=>{
        if(err){
            console.log('PROBLEM FINDING DATES LESS THAN d');
        }else{
            console.log("done deleting");
        }
    })
}

module.exports = removeOldData;