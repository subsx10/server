function CountDown(c) {
    this.countdown = c;
    
}

module.exports = CountDown;

CountDown.prototype.build = function() {
    var buf = new ArrayBuffer(3);
    var view = new DataView(buf);

    view.setUint8(0, 96, true);
    view.setUint16(1, this.countdown, true);
    return buf;
};

