// EvalError
function evalError() {
    try {
        throw new EvalError('Goodbye', 'noFile.js', 7);
    } catch (ev) {
        console.log(ev instanceof EvalError);
        console.log(ev.message);
        console.log(ev.name);
        console.log(ev.fileName);
    }
}

// RangeError
function rangeError() {

}

evalError()