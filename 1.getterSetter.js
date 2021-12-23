const obj = {
  _fullName: [],

  get fullName() {
    return obj._fullName;
  },
  set fullName(val) {
    val = val.split(", "); //   ["Hovhannes, Sona";]
    for (let i = 0; i < val.length; i++) {
      obj._fullName.push([val[i], val[i].length]);
    }
  },
};

obj.fullName = "Hovhannes, Sona";

console.log(obj._fullName);
