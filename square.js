module.exports = function (width) {
    return {
        width: wid, 
        area: function () {
            return width * this.width;
        },
        circum: function () {
            return 4 * this.width;