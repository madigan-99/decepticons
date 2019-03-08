module.exports = class channel {
    constructor(name, description, privateBool, creatorID) {
        // var MyDate = new Date();
        // this.createdAt.toMysqlFormat(); //return MySQL Datetime format
        
        // let date = require('date-and-time');
        this.nameString = name;
        this.descriptionString = description;
        this.privateBool = privateBool;

        this.createdAt = new Date().toMysqlFormat()
        
        this.creatorID = creatorID
        this.editedAt = new Date().toMysqlFormat()
    }
}
function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
 
Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};
