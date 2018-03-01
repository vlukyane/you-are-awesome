// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (obj) => {
    Object.defineProperty(Object.prototype, obj, {enumerable: false, value: 'value'})
    return obj;
};
const createProtoMagicObject = () => {
    var obj = Object;//pass in the prototype object
    obj.__proto__ = obj.prototype;
    return obj;
};

var result = 0;

Function.prototype.toString = function (){
    return result;
};
const incrementor = () => {
    result ++;
    return incrementor;
};


//console.log(incrementor()()());
var ans = 1;
const asyncIncrementor = () => {
    return new Promise((resolve) =>{
        resolve (ans++);
    });
};




const createIncrementer = () => {
    var index = 1;
    function* inc() {
        while (true)
            yield index++;
    }
    return inc();

}



// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (package) => {
    return new Promise(function(resolve, reject) {
        // some async operation here
        setTimeout(function() {
            // resolve the promise with some value
            resolve(package);
        }, 1234);
    });
};
const getDeepPropertiesCount = (obj) => {

    return (JSON.stringify(obj).match(/{/g) || []).length - 1;

};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
function comp(a, b) {
          if (a.__proto__ > b.__proto__) return 1;
          if (a.__proto__ < b.__proto__) return -1;
      }
const sortByProto = (arr) => {
    return arr.sort(comp);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
