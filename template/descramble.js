function Z382DB(a) {
	
    if (a.ZKV1AZ && a.ZKV1AZ !== "") {
        var b = ZIX04A(a.ZKV1AZ);
        var c = ZKZ2CL(ZTM0KQ[b.c], ZBZ0FB[b.p]);
        if (c.Z5U2CN(a.width, a.height)) {
            var d = c.Z1B2CO(a.width, a.height);
            a.orgWidth = d.width;
            a.orgHeight = d.height;
            a.descramblekeys = {
                c: ZTM0KQ[b.c],
                p: ZBZ0FB[b.p]
            }
        } else {
            a.orgWidth = a.width;
            a.orgHeight = a.height;
            free(a.descramblekeys);
            delete a.descramblekeys
        }
        free(b);
        delete b;
        free(c);
        delete c
    } else {
        a.orgWidth = a.width;
        a.orgHeight = a.height;
        free(a.descramblekeys);
        delete a.descramblekeys
    }
    return
}

var Z0X0V0 = function() {
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
    this.top = 0;
    if (arguments.length == 4) {
        this.left = arguments[0];
        this.top = arguments[1];
        this.right = arguments[2];
        this.bottom = arguments[3]
    } else if (arguments.length == 1) {
        var a = arguments[0];
        this.left = a.left;
        this.right = a.right;
        this.top = a.top;
        this.bottom = a.bottom
    }
};


function ZIX04A(b) {
    var c = 0;
    var p = 0;
    if (b !== undefined && b !== "") {
        var d = b.lastIndexOf(Z2U117) + 1;
        var e = b.length - d;
        if (e > 0) {
            var a = 0;
            for (var i = 0; i < e; i++) {
                switch (i % 2) {
                case 0:
                    p += b.charCodeAt(i + d);
                    break;
                case 1:
                    c += b.charCodeAt(i + d);
                    break;
                default:
                    break
                }
            }
            p = p % 8;
            c = c % 8
        }
    }
    return {
        c: c,
        p: p
    }
}

function ZKZ2CL(a, b) {
    if (a.charAt(0) === "=" && b.charAt(0) === "=") {
        return new Z1Z2CR(a,b)
    } else if (a.match(/^[0-9]/) && b.match(/^[0-9]/)) {
        return new Z1Z2CQ(a,b)
    } else if (a === "" && b === "") {
        return new ZVA2CM()
    }
    return null
}

var Z1Z2CQ = function(a, b) {
    var c = null;
    var d = null;
    c = this.ZQD03Y(a);
    if (c !== null) {
        d = this.ZQD03Y(b)
    }
    if (c === null || d === null || c['ndx'] != d['ndx'] || c['ndy'] != d['ndy']) {
        c = d = null
    }
    this.ZFM1AR = c;
    this.ZFF1AD = d;
    delete c;
    delete d
};

Z1Z2CQ.prototype.free = function() {
    free(this.ZFM1AR);
    delete this.ZFM1AR;
    free(this.ZFF1AD);
    delete this.ZFF1AD
}
;
Z1Z2CQ.prototype.Z4B0R1 = function() {
    return ( this.ZFM1AR !== null && this.ZFF1AD !== null)
}
;
Z1Z2CQ.prototype.Z5U2CN = function(a, b) {
    return ( a >= 64 && b >= 64 && a * b >= 320 * 320)
}
;
Z1Z2CQ.prototype.ZVF2DC = function() {
    return true
}
;
Z1Z2CQ.prototype.Z1B2CO = function(a, b) {
    return {
        width: a,
        height: b
    }
}
;
Z1Z2CQ.prototype.ZNF2CP = function(a, b) {
    if (!this.Z4B0R1()) {
        return false
    }
    var d = [];
    if (this.Z5U2CN(a, b)) {
        var e = a - (a % 8);
        var f = Math.floor((e - 1) / 7) - Math.floor((e - 1) / 7) % 8;
        var g = e - f * 7;
        var h = b - (b % 8);
        var j = Math.floor((h - 1) / 7) - Math.floor((h - 1) / 7) % 8;
        var k = h - j * 7;
        var c = this.ZFM1AR['piece'].length;
        var l;
        var m;
        for (var i = 0; i < c; i++) {
            l = this.ZFM1AR['piece'][i];
            m = this.ZFF1AD['piece'][i];
            d.push({
                sx: Math.floor(l[ZWQ114] / 2) * f + (l[ZWQ114] % 2) * g,
                sy: Math.floor(l['y'] / 2) * j + (l['y'] % 2) * k,
                dx: Math.floor(m[ZWQ114] / 2) * f + (m[ZWQ114] % 2) * g,
                dy: Math.floor(m['y'] / 2) * j + (m['y'] % 2) * k,
                w: Math.floor(l['w'] / 2) * f + (l['w'] % 2) * g,
                h: Math.floor(l['h'] / 2) * j + (l['h'] % 2) * k
            })
        }
        e = f * (this.ZFM1AR['ndx'] - 1) + g;
        h = j * (this.ZFM1AR['ndy'] - 1) + k;
        if (e < a) {
            d.push({
                sx: e,
                sy: 0,
                dx: e,
                dy: 0,
                w: a - e,
                h: h
            })
        }
        if (h < b) {
            d.push({
                sx: 0,
                sy: h,
                dx: 0,
                dy: h,
                w: a,
                h: b - h
            })
        }
    } else {
        d = [{
            sx: 0,
            sy: 0,
            dx: 0,
            dy: 0,
            w: a,
            h: b
        }]
    }
    return d
}
;
Z1Z2CQ.prototype.ZQD03Y = function(a) {
    var u;
    if (a === u || a === null) {
        return null
    }
    var b = a.split(ZBB119);
    if (b.length != 3) {
        return null
    }
    var c = parseInt(b[0], 10);
    var d = parseInt(b[1], 10);
    var e = b[2];
    if (e.length != (c * d * 2)) {
        return null
    }
    var f = (c - 1) * (d - 1) - 1;
    var g = f + (c - 1);
    var h = g + (d - 1);
    var j = h + 1;
    var k = new Array();
    for (var i = 0; i < c * d; i++) {
        var p = new Array();
        p[ZWQ114] = this.Z5002E(e.charAt(i * 2));
        p['y'] = this.Z5002E(e.charAt(i * 2 + 1));
        if (i <= f) {
            p['w'] = 2;
            p['h'] = 2
        } else if (i <= g) {
            p['w'] = 2;
            p['h'] = 1
        } else if (i <= h) {
            p['w'] = 1;
            p['h'] = 2
        } else if (i <= j) {
            p['w'] = 1;
            p['h'] = 1
        }
        k.push(p)
    }
    return {
        'ndx': c,
        'ndy': d,
        'piece': k
    }
}
;
Z1Z2CQ.prototype.Z5002E = function(a) {
    var b = 0;
    var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(a);
    if (c < 0) {
        c = 'abcdefghijklmnopqrstuvwxyz'.indexOf(a)
    } else {
        b = 1
    }
    return b + c * 2
}
;

function free(a) {
    if (a === null || a == undefined) {
        return
    } else if (a instanceof Array) {
        var b = a.length;
        if (b > 0) {
            for (var i = b - 1; i >= 0; i--) {
                free(a[i]);
                delete a[i]
            }
        }
        a.length = 0
    } else if (a instanceof Object) {
        if (a.free == undefined) {
            return
        } else {
            a.free()
        }
        for (var p in a) {
            if (a.hasOwnProperty(p)) {
                if (typeof (a[p]) !== "function") {
                    free(a[p])
                }
                delete a[p]
            }
        }
    }
    a = null
}

var Z7R0Z2 = function() {
    this.ZH90UK = new Array();
    this.ZH90UK[0] = new ZN2101();
    this.ZH90UK[0].ZHJ1FU = "ZIA0S7DrawImageDummyCanvas0";
    this.ZH90UK[1] = new ZN2101();
    this.ZH90UK[1].ZHJ1FU = "ZIA0S7DrawImageDummyCanvas1"
};


var ZN2101 = function() {
    this.filename = null;
    this.width = 0;
    this.height = 0;
    this.ZN519F = 0;
    this.ZHJ1FU = null
};

function Z451W7(b, c, x, y, w, h, d, e, f, g, i) {
    var j = new Date();
    var k = j.getTime();
    free(j);
    var l = f / w;
    var m = g / h;
    if (x >= c.width || y >= c.height) {
        delete j;
        return
    }
    if (x < 0) {
        w = w + x;
        d = d - (x * l);
        f = f + (x * l);
        x = 0
    }
    if (y < 0) {
        h = h + y;
        e = e - (y * m);
        g = g + (y * m);
        y = 0
    }
    var a;
    if (x + w > c.width) {
        a = w - (c.width - x);
        w = c.width - x;
        f = f - (a * l)
    }
    if (y + h > c.height) {
        a = h - (c.height - y);
        h = c.height - y;
        g = g - (a * m)
    }
    if (d < 0) {
        f = f + d;
        x = x - (d / l);
        w = w + (d / l);
        d = 0
    }
    if (e < 0) {
        g = g + e;
        y = y - (e / m);
        h = h + (e / m);
        e = 0
    }
    if (d + f > b.canvas.width) {
        a = f - (b.canvas.width - d);
        f = b.canvas.width - d;
        w = w - (a / l)
    }
    if (e + g > b.canvas.height) {
        a = g - (b.canvas.height - e);
        g = b.canvas.height - e;
        h = h - (a / m)
    }
    w = Math.floor(w);
    h = Math.floor(h);
    f = Math.floor(f);
    g = Math.floor(g);
    if (x >= c.width || y >= c.height || d >= b.canvas.width || e >= b.canvas.height || w === 0 || h === 0 || f === 0 || g === 0) {
        delete j;
        return
    }
    if ((ZHO2BA !== true && ((iPhone || iPod || iPad) && (7.1 <= iOSVer && iOSVer < 8.0)) !== true) || i !== true) {
        if ((iPhone || iPod || iPad) && (7.1 <= iOSVer && (iOSVer < 8.0 || (iOSVer < 10.0 && ZDK28K)))) {
            b.drawImage(c, Math.floor(x), Math.floor(y), Math.floor(w) - 0.01, Math.floor(h), Math.floor(d), Math.floor(e), Math.floor(f), Math.floor(g))
        } else {
            b.drawImage(c, Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h), Math.floor(d), Math.floor(e), Math.floor(f), Math.floor(g))
        }
    } else {
        var n = null;
        var o = 0;
        if (b.imageSmoothingEnabled != undefined) {
            o = 1;
            n = b.imageSmoothingEnabled;
            b.imageSmoothingEnabled = true
        } else if (b.webkitImageSmoothingEnabled != undefined) {
            o = 2;
            n = b.webkitImageSmoothingEnabled;
            b.webkitImageSmoothingEnabled = true
        } else if (b.mozImageSmoothingEnabled != undefined) {
            o = 3;
            n = b.mozImageSmoothingEnabled;
            b.mozImageSmoothingEnabled = true
        }
        b.drawImage(c, Math.floor(x) + 1.1, Math.floor(y) + 1.1, Math.floor(w) - 1.2, Math.floor(h) - 1.2, Math.floor(d), Math.floor(e), Math.floor(f), Math.floor(g));
        if (n !== null) {
            switch (o) {
            case 1:
                b.imageSmoothingEnabled = n;
                break;
            case 2:
                b.webkitImageSmoothingEnabled = n;
                break;
            case 3:
                b.mozImageSmoothingEnabled = n;
                break;
            default:
                break
            }
        }
    }
    b = null;
    j = new Date();
    Z4X2DY += j.getTime() - k;
    free(j);
    delete j
}

var Z0M0Z8 = new Z7R0Z2();
var ZIA0S7 = function() {
    this.canvas = null;
    this.context = null;
    this.ZPT0TE = 1.0;
    this.ZI70XW = "source-over";
    this.ZJG0JN = 1.0;
    this.ZSW0OL = "butt";
    this.ZAZ0LV = "miter";
    this.ZJ50GZ = 10.0;
    this.ZHQ104 = new Z0X0V0();
    if (arguments.length == 1) {
        this.canvas = arguments[0]
    }
};

ZIA0S7.prototype.drawSingleImage = function(a, b, d, e, canv, f, g) {

    g = false    
    var h = null;   
    var j = false;
    var l = true;
    var m = null;
    var u = "";
    var v = "";
	
    if (a.descramblekeys) {
        u = a.descramblekeys.c;
        v = a.descramblekeys.p
    }

	var w = ZKZ2CL(u, v);
    var x = false;
    var y, wk_context = null;
    var z;
    if (a.ZKV1AZ != undefined && j === false && a.offline !== true) {
        var A = 1;
        x = true;
		y = canv;
		
		var c;
		if (w.Z5U2CN(a.width, a.height)) {
			y.width = a.width;
			y.height = a.height;
			c = w.ZNF2CP(a.width, a.height)
		} 
		
		wk_context = canv.getContext('2d');
		var C = null;
		var D = 0;
		if (wk_context.imageSmoothingEnabled != undefined) {
			D = 1;
			C = wk_context.imageSmoothingEnabled;
			wk_context.imageSmoothingEnabled = false
		}
		if (wk_context.webkitImageSmoothingEnabled != undefined) {
			D = 2;
			C = wk_context.webkitImageSmoothingEnabled;
			wk_context.webkitImageSmoothingEnabled = false
		}
		if (wk_context.mozImageSmoothingEnabled != undefined) {
			D = 3;
			C = wk_context.mozImageSmoothingEnabled;
			wk_context.mozImageSmoothingEnabled = false
		}
		var E = false;
		var F = 1;
		var G = 1;
 
		var i;
		if (E === false) {
			for (i = 0; i < c.length; i++) {
				Z451W7(wk_context, l ? a : m, c[i].sx, c[i].sy, c[i].w, c[i].h, c[i].dx, c[i].dy, c[i].w, c[i].h, w.ZVF2DC())
			}
		} else {
			for (i = 0; i < c.length; i++) {
				Z451W7(wk_context, l ? a : m, Math.round(c[i].sx * F), Math.round(c[i].sy * G), Math.round(c[i].w * F), Math.round(c[i].h * G), c[i].dx, c[i].dy, c[i].w, c[i].h, w.ZVF2DC())
			}
		}
		if (C !== null) {
			switch (D) {
			case 1:
				wk_context.imageSmoothingEnabled = C;
				break;
			case 2:
				wk_context.webkitImageSmoothingEnabled = C;
				break;
			case 3:
				wk_context.mozImageSmoothingEnabled = C;
				break;
			default:
				break
			}
		}

	}
        
    

    if (x) {
        if (wk_context !== null && wk_context != undefined) {
            free(wk_context);
            delete wk_context
        }
        if (y !== null && y != undefined) {
            free(y);
            y = null
        }
    }
    m = null;
    delete h;
    delete y;
    free(w);
    delete w
}
;

var Z4X2DY = 0;
var ZHO2BA = false;
var iPhone = false;
var iPod = false;
var iPad = false;
var iOSVer = 0.0;
var android = false;
var androidVer = 0.0;
var ZMD11M = 140;
var ZG111M = 1202;
var ZA211M = 231;
var ZWQ114 = String.fromCharCode(parseInt(ZA211M + "", 7));
var Z2U117 = String.fromCharCode(parseInt(ZG111M + "", 3));
var ZBB119 = String.fromCharCode(parseInt(ZMD11M + "", 5));
var ctbl = new Array(
"8-8-gfeecegdefaGgcfbfFcbfcebeagadeafbFfGadbDeddFdGbEfDabaccfcGccgeecggcddbbbfEgbbGddcabaaadafadcaeegbCbcfdcgdfghagehhchbhehGhFhahdhf",
"8-8-aabacadaEaGadbafeGdGddedbccGGbGcacGeeFbeFEFBFCcCbgbbcFdeGfFDeecBebabaGcEcDecdcadFAGgdfFFaeFGbdbfGddgFacbGhagefbhffeafbfcfefgfdfh",
"8-8-dcaFeagacbfGdDcCedfdabecbggccEadbcacdGbddFgdcFgbgeeGaEdbbfdEdabaaacafacDgfbefFcGbbebeFeefcfeggaGfbddaeffccbhefghhChFhEhGhahDhBhb",
"8-8-FgFcGdCCDcDdFddFDbEbFfADFeGfbEAAACGeABCBBCGGEdaEBAGbdGFaDaaGDeBDCDcGbFbGaFGccEEfEceGEeCAcFBBFbGaEaCaBaAaEgDfGgFheFfGaadEabacadae",
"8-8-eFbcbbaEaDbEaGFBdfdedcebGdFDGaEadbcaaabadaeccEfGcDFAaFcGcFgGGeeEdgddcCbFbGeDFCgFcBFEGcaCfFGbbdeGaBdhGfcbedFaabbehGfehFfceafbfdff",
"8-8-bbaFeAcFcDbgeFeDfaaabacadadbffccaGeGfbgDaEcGdGgCbcfcdEaceBgGeEbebfdCdDfefGeCdFaDbdgBcbgFcEabgEfdgAgaeaadcdbhdcfghbhahchdhGhehFhf",
"8-8-aGFAbEGcdeaFdgcDdceeedGbfDaAbAeFGgeGdfbBfFFCbFecaEaCGeebfGcCaBcEbGaDbDbCGddbGaFBEaddfEcFcBcGGfdacaaabaGhefcbFadhfcgFgGgDfbgEeafd",
"8-8-bbebfcfbdcfEdfbDecdbfFbaaacadafaddaFbcaceffDcgcbadcceagabFaGgbgccdgGdeaegFgDdgceedbGegbEeegEfGabcffdgdehbdchdhafhEhahbhchFhDhGhd");

var ZTM0KQ = new Array(
"8-8-cEdeefaBgBgFbAegbDgEcDcAbGcCeagagGcBaDfEbCddbBbFaFgCdgdcdfeeaEfGebbEaAfCaCedfBgDecdbfDfFfAcFcGaGdacabaaafaehdhgbhbhGhchdhehFhahf",
"8-8-fDbgcdafdfebgbgdgGbdbcbbcfaeddgcfEdbeFedcbdaaabacafacebfbeeagafbfGccdgdccgfcgfadaceceEgeeGagdeabfFdhfdbhcheeggahhbhchahghfhdhehh",
"8-8-gFbDadcdgeageGgbaceDccddbGffgcdceEbEecdbaebbfeaffadaaabacacEdfdegdcbcFdgbceFeagafGbFcGfdfcfbgGabebdhbdcegfedahfghFhGhEhahdhchbhe",
"8-8-ebgdcFeEaeffcCbEdEddabadeGcEfbdcbcgfcDfeedbDdbcbggfGbbfacaaabadaeafdgageeFbGcGdGecafacgcgbdFagfcbFghaheebdfgdecchdhFhEhahGhbhche",
"8-8-bbbgedbecCeceffAdecFgdfBcEaDaFdffEfFeefGebbdaAcAaBfCgebcaCgaeacGbffDgGgbcBdddcgFdbaGcDegaEgcdGdabaaacafadgbhehgfhDhEhFhChBhGhahb",
"8-8-DaFaBAFgFfBBcFbDaCFbeFFdGGeCeGGCAACBaFaEbEEAdGcCGEFcGDABaDcDaGbCdCcGFedDGFeDDbcEdEbFGAGBbGEBeECAdFDcGaEaCaBaAaFhfFfGfEabfCfDaaac",
"8-8-cgfbbEbBaFffebfdgcfcdDcdedefgegGcbcceeaeeagadbdCdFcfbaaacadafaabbFacdEgbegbGfgecbCgddGfeadbDceaGgFbbdcgffhehafchhghehdhahchfhbhh",
"8-8-fFefbgdbaabacadafagcdFbfcFgfedgdeeddcEebeggeaBdEaGaEaDbcaFfCcDccfDdGfbgGcbaCbdecbebbfEfGeagagbcGdcbhcdfcabggdeehhahGhFhchbhdhEhe"
);


var ptbl = new Array("8-8-cEdeefaBgBgFbAegbDgEcDcAbGcCeagagGcBaDfEbCddbBbFaFgCdgdcdfeeaEfGebbEaAfCaCedfBgDecdbfDfFfAcFcGaGdacabaaafaehdhgbhbhGhchdhehFhahf",
"8-8-fDbgcdafdfebgbgdgGbdbcbbcfaeddgcfEdbeFedcbdaaabacafacebfbeeagafbfGccdgdccgfcgfadaceceEgeeGagdeabfFdhfdbhcheeggahhbhchahghfhdhehh",
"8-8-gFbDadcdgeageGgbaceDccddbGffgcdceEbEecdbaebbfeaffadaaabacacEdfdegdcbcFdgbceFeagafGbFcGfdfcfbgGabebdhbdcegfedahfghFhGhEhahdhchbhe",
"8-8-ebgdcFeEaeffcCbEdEddabadeGcEfbdcbcgfcDfeedbDdbcbggfGbbfacaaabadaeafdgageeFbGcGdGecafacgcgbdFagfcbFghaheebdfgdecchdhFhEhahGhbhche",
"8-8-bbbgedbecCeceffAdecFgdfBcEaDaFdffEfFeefGebbdaAcAaBfCgebcaCgaeacGbffDgGgbcBdddcgFdbaGcDegaEgcdGdabaaacafadgbhehgfhDhEhFhChBhGhahb",
"8-8-DaFaBAFgFfBBcFbDaCFbeFFdGGeCeGGCAACBaFaEbEEAdGcCGEFcGDABaDcDaGbCdCcGFedDGFeDDbcEdEbFGAGBbGEBeECAdFDcGaEaCaBaAaFhfFfGfEabfCfDaaac",
"8-8-cgfbbEbBaFffebfdgcfcdDcdedefgegGcbcceeaeeagadbdCdFcfbaaacadafaabbFacdEgbegbGfgecbCgddGfeadbDceaGgFbbdcgffhehafchhghehdhahchfhbhh",
"8-8-fFefbgdbaabacadafagcdFbfcFgfedgdeeddcEebeggeaBdEaGaEaDbcaFfCcDccfDdGfbgGcbaCbdecbebbfEfGeagagbcGdcbhcdfcabggdeehhahGhFhchbhdhEhe"
);

var ZBZ0FB = new Array("8-8-gfeecegdefaGgcfbfFcbfcebeagadeafbFfGadbDeddFdGbEfDabaccfcGccgeecggcddbbbfEgbbGddcabaaadafadcaeegbCbcfdcgdfghagehhchbhehGhFhahdhf",
"8-8-aabacadaEaGadbafeGdGddedbccGGbGcacGeeFbeFEFBFCcCbgbbcFdeGfFDeecBebabaGcEcDecdcadFAGgdfFFaeFGbdbfGddgFacbGhagefbhffeafbfcfefgfdfh",
"8-8-dcaFeagacbfGdDcCedfdabecbggccEadbcacdGbddFgdcFgbgeeGaEdbbfdEdabaaacafacDgfbefFcGbbebeFeefcfeggaGfbddaeffccbhefghhChFhEhGhahDhBhb",
"8-8-FgFcGdCCDcDdFddFDbEbFfADFeGfbEAAACGeABCBBCGGEdaEBAGbdGFaDaaGDeBDCDcGbFbGaFGccEEfEceGEeCAcFBBFbGaEaCaBaAaEgDfGgFheFfGaadEabacadae",
"8-8-eFbcbbaEaDbEaGFBdfdedcebGdFDGaEadbcaaabadaeccEfGcDFAaFcGcFgGGeeEdgddcCbFbGeDFCgFcBFEGcaCfFGbbdeGaBdhGfcbedFaabbehGfehFfceafbfdff",
"8-8-bbaFeAcFcDbgeFeDfaaabacadadbffccaGeGfbgDaEcGdGgCbcfcdEaceBgGeEbebfdCdDfefGeCdFaDbdgBcbgFcEabgEfdgAgaeaadcdbhdcfghbhahchdhGhehFhf",
"8-8-aGFAbEGcdeaFdgcDdceeedGbfDaAbAeFGgeGdfbBfFFCbFecaEaCGeebfGcCaBcEbGaDbDbCGddbGaFBEaddfEcFcBcGGfdacaaabaGhefcbFadhfcgFgGgDfbgEeafd",
"8-8-bbebfcfbdcfEdfbDecdbfFbaaacadafaddaFbcaceffDcgcbadcceagabFaGgbgccdgGdeaegFgDdgceedbGegbEeegEfGabcffdgdehbdchdhafhEhahbhchFhDhGhd");

function t(tUe, iBe, nXe, rVe, eWe) {
		this.Ue = "",
		this.Be = 0,
		this.Xe = 0,
		this.Ve = null,
		this.We = null,
		this.ze = null,
		this.qe = null,
		this.Ye = null,
		this.Ze = 3,
		this.Ue = tUe,
		this.Be = iBe,
		this.Xe = nXe,
		this.Ve = rVe,
		this.We = eWe
	} 


	t.prototype.callbackLoadedImage = function(t, i) {
		var n = this;
		if ("i" === t && i.length === this.Ze) {
			this.ze = {};
			for (var r = 0; r < this.Ze; r++) {
				var e = "i" + r.toString();
				this.ze[e] = {
					src: i[r].src,
					width: i[r].width,
					height: i[r].height
				}
			}
			var s = [];
			for (r = 0; r < this.Ze; r++) {
				var u = this.Qe(r);
				s.push({
					resid: "i" + r.toString(),
					xsrc: 0,
					ysrc: 0,
					width: u.width,
					height: u.height,
					xdest: u.left,
					ydest: u.top
				})
			}
			this.qe = {
				width: this.Ye.width,
				height: this.Ye.height,
				coords: s
			},
			this.Ve && (this.qe.areas = this.Ve.map(function(t) {
				return {
					href: t.href,
					left: t.left * n.Ye.width / n.Be,
					top: t.top * n.Ye.height / n.Xe,
					right: t.right * n.Ye.width / n.Be,
					bottom: t.bottom * n.Ye.height / n.Xe
				}
			}))
		}
	}

	t.prototype.Qe = function(t) {
		var i = Math.floor(this.Ye.height / this.Ze)
		  , n = t * i
		  , r = t === this.Ze - 1 ? this.Ye.height : (t + 1) * i + 8;
		return {
			left: 0,
			top: n,
			width: this.Ye.width,
			height: r - n
		}
	}

	t.prototype.getImageDescrambleCoords = function(t, i, n) {
		var r = this.dt(t.src);
		if (!r || !pt())
			return null;
		var e = gt({
			width: i,
			height: n
		});
		return {
			width: e.width,
			height: e.height,
			transfers: [{
				index: 0,
				coords: r.bt({
					width: i,
					height: n
				})
			}]
		}
	}
	
	t.prototype.dt = function(t) {
		var i = [0, 0];
		if (t) {
			for (var n = t.lastIndexOf("/") + 1, r = t.length - n, e = 0; e < r; e++)
				i[e % 2] += t.charCodeAt(e + n);
			i[0] %= 8,
			i[1] %= 8
		}
		var s = ptbl[i[0]]
		  , a = ctbl[i[1]];
		return "=" === a.charAt(0) && "=" === s.charAt(0) ? new ti(a,s) : a.match(/^[0-9]/) && s.match(/^[0-9]/) ? new ti(a,s) : "" === a && "" === s ? new u : null
	}

	function ti(t, i) {
		this.Ot = null,
		this.Mt = null;
		var n = xt(t), r = xt(i);
		n && r && n.ndx === r.ndx && n.ndy === r.ndy && (this.Ot = n,this.Mt = r)
	}

	function xt(t) {
		if (!t)
			return null;
		var i = t.split("-");
		if (3 != i.length)
			return null;
		var n = parseInt(i[0], 10)
		  , r = parseInt(i[1], 10)
		  , e = i[2];
		if (e.length != n * r * 2)
			return null;
		for (var s, u, h, o, a = (n - 1) * (r - 1) - 1, f = a + (n - 1), c = f + (r - 1), l = c + 1, v = [], d = 0; d < n * r; d++)
			s = jt(e.charAt(2 * d)),
			u = jt(e.charAt(2 * d + 1)),
			d <= a ? (h = 2,
			o = 2) : d <= f ? (h = 2,
			o = 1) : d <= c ? (h = 1,
			o = 2) : d <= l && (h = 1,
			o = 1),
			v.push({
				x: s,
				y: u,
				w: h,
				h: o
			});
		return {
			ndx: n,
			ndy: r,
			piece: v
		}
	}

	function jt(t) {
		var i = 0
		  , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t);
		return n < 0 ? n = "abcdefghijklmnopqrstuvwxyz".indexOf(t) : i = 1,
		i + 2 * n
	}
	
	function pt() {
                return null !== this.Ot && null !== this.Mt
            }

    function yt(t) {
                return t.width >= 64 && t.height >= 64 && t.width * t.height >= 102400
            }

    function gt(t) {
                return t
            }
			
 Object.prototype.bt = function(t) {
                for (var i = [], n = t.width - t.width % 8, r = Math.floor((n - 1) / 7) - Math.floor((n - 1) / 7) % 8, e = n - 7 * r, s = t.height - t.height % 8, u = Math.floor((s - 1) / 7) - Math.floor((s - 1) / 7) % 8, h = s - 7 * u, o = this.Ot.piece.length, a = 0; a < o; a++) {
                    var f = this.Ot.piece[a]
                      , c = this.Mt.piece[a];
                    i.push({
                        xsrc: Math.floor(f.x / 2) * r + f.x % 2 * e,
                        ysrc: Math.floor(f.y / 2) * u + f.y % 2 * h,
                        width: Math.floor(f.w / 2) * r + f.w % 2 * e,
                        height: Math.floor(f.h / 2) * u + f.h % 2 * h,
                        xdest: Math.floor(c.x / 2) * r + c.x % 2 * e,
                        ydest: Math.floor(c.y / 2) * u + c.y % 2 * h
                    })
                }
                var l = r * (this.Ot.ndx - 1) + e
                  , v = u * (this.Ot.ndy - 1) + h;
                return l < t.width && i.push({
                    xsrc: l,
                    ysrc: 0,
                    width: t.width - l,
                    height: v,
                    xdest: l,
                    ydest: 0
                }),
                v < t.height && i.push({
                    xsrc: 0,
                    ysrc: v,
                    width: t.width,
                    height: t.height - v,
                    xdest: 0,
                    ydest: v
                }),
                i
            }

function getPreloadImages(i,t) {
		var n = {height:i.height,width:i.width}
		  , r = i;
		t.Ye = {
			width: r.width,
			height: r.height
		};
		for (var e = r.transfers[0].coords, s = [], u = 0; u < 3; u++) {
			var h = t.Qe(u)
			  , o = [];
			e.forEach(function(t) {
				var i = {
					left: t.xdest,
					top: t.ydest,
					width: t.width,
					height: t.height
				}
				  , n = intersects(h, i);
				null !== n && o.push({
					xsrc: t.xsrc + (n.left - t.xdest),
					ysrc: t.ysrc + (n.top - t.ydest),
					width: n.width,
					height: n.height,
					xdest: n.left - h.left,
					ydest: n.top - h.top
				})
			});
			var a = {
				index: 0,
				coords: o
			};
			s.push({
				width: h.width,
				height: h.height,
				transfers: [a]
			})
		}
		return s
	}
	
function intersects(t, i) {
		var n = t.left
		  , r = t.left + t.width
		  , e = t.top
		  , s = t.top + t.height
		  , u = i.left
		  , h = i.left + i.width
		  , o = i.top
		  , a = i.top + i.height;
		if (n < h && u < r && e < a && o < s) {
			var f = Math.max(n, u)
			  , c = Math.max(e, o);
			return {
				left: f,
				top: c,
				width: Math.min(r, h) - f,
				height: Math.min(s, a) - c
			}
		}
		return null
	}


module.exports = {t, getPreloadImages};	

