var value = 0;

const inc = ()=>value++;
const dec = ()=>value--;
const getValue = ()=>value;
const restartValue = ()=>value=0;

module.exports = {
    inc, dec, getValue, restartValue
}