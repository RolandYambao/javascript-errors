// EvalError
function evalError() {
    try {
        throw new EvalError("Eval Error");
    }
    catch (error) {
        if (error instanceof EvalError) {
            console.log("Eval Error Detected");
        }
    }
}

// RangeError
function rangeError(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}
function enactRangeError() {
    try {
        rangeError(501);
    }
    catch (error) {
        if (error instanceof RangeError) {
            console.log("Range Error Detected")
        }
    }
}

// ReferenceError
function referenceError() {
    try {
        let a = undefinedVariable;
    }
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Reference Error Detected");
        }
    }
}

// SyntaxError
function syntaxError() {
    try {
        eval("let a == 2");
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            console.log("Syntax Error Detected");
        }
    }
}

// TypeError
function typeError() {
    try {
        null.x();
    }
    catch (error) {
        if (error instanceof TypeError) {
            console.log("Type Error Detected");
        }
    }
}

evalError()
enactRangeError();
referenceError();
syntaxError();
typeError();