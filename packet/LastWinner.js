function LastWinner(lastwinner) {
    this.lastwinner = lastwinner;
}

module.exports = LastWinner;

LastWinner.prototype.build = function () {
    var buf = new ArrayBuffer(4+2*this.lastwinner.length);
    var view = new DataView(buf);
    
    view.setUint8(0, 97);
    offset = 1;
    for (var j = 0; j < this.lastwinner.length; j++) {
        view.setUint16(offset, this.lastwinner.charCodeAt(j), true);
        offset += 2;
    }
    view.setUint16(offset, 0, true);
    offset += 2;
    return buf;
};

