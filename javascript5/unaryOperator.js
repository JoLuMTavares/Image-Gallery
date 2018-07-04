var obj = {

    x0 : +3,

    x1 : +'3',

    x2 : +'-3',

    x3 : +'3.14',

    x4 : 3/0,

    x5 : +true,

    x6 : +false,

    x7 : +'true',

    x8 : this.x5 + this.x6,

    x9 : this.x5 + this.x5 + this.x6,

    x10 : -this.x9,

    x11 : -'15+5',

    x12 : this.x0+this.x3,

    x13 : -'15' + '5',

    x14 : '-15' - '5', // Result: -20

    x15 : !false,

    x16 : !NaN,

    x17 : !this.x11,  // Result : true

    x18 : !null,  // Result : true

    x18 : !(!NaN),

    x19 : !undefined,

    x20 : !"", // Not defined

    x21 : !true,

    x22 : !0,

    x23 : !-3,

    x24 : !"-3",

    x25 : !"true",

    x26 : !{},

    x27 : ![]

};

for (var key in obj) 
    console.log(key + ' = ' + obj[key]);

var a = 4;

var b = a++;

console.log(a);
console.log(b);

var obj2 = {
    y1: typeof 2,
    y2: typeof -3.14,
    y3: typeof 0xFF,
    y4: typeof true,
    y5: typeof null,
    y6: typeof Infinity,
    y7: typeof [1,2,3],
    y8: typeof {a:1, b:2},
    y9: typeof function () {},
    y10: typeof "Megatrack",
    y11: typeof {f: function () {}},
    y12: typeof hi,
    y13: typeof (typeof this.y4)
};

for (var key in obj2)
    console.log(key + " = " + obj2[key]);

var hi = 'hi';
delete hi;

var pub = {bar : 1};
delete pub;

var code = [1,2,3,4];
delete code;

var fruit = { abc: 'apple', 2: 'mango'};
delete fruit['abc'];

function yo() {
    delete yo;
}

var numbers = [1,2,3,4,5];
delete numbers[2];
console.log('​numbers', numbers);
