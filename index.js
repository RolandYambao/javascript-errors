// EvalError
function evalError() {
    try {
        throw new EvalError("Eval Error");
    }
    catch (error) {
        if (error instanceof EvalError) {
            console.log("<----------Eval Error Detected---------->");
            console.log(error.stack);
        }
    }
}

// RangeError
function rangeError(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("Only between -500 and 500")
    }
}
function enactRangeError() {
    try {
        rangeError(501);
    }
    catch (error) {
        if (error instanceof RangeError) {
            console.log("<----------Range Error Detected---------->")
            console.log(error.stack);
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
            console.log("<----------Reference Error Detected---------->");
            console.log(error.stack);
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
            console.log("<----------Syntax Error Detected---------->");
            console.log(error.stack);
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
            console.log("<----------Type Error Detected---------->");
            console.log(error.stack);
        }
    }
}

// URIError
function uriError() {
    try {
        decodeURIComponent('%%323%%');
    }
    catch (error) {
        if (error instanceof URIError) {
            console.log("<----------URIError Detected---------->");
            console.log(error.stack);
        }
    }
}

// AggregateError
function aggregateError() {
    Promise.any([Promise.reject(new Error("Error")),
    ]).catch(error => {
        if (error instanceof AggregateError) {
            console.log("<----------Aggregate Error Detected---------->");
            console.log(error.stack);
        }
    })
}

// InternalError
function internalError() {
    try {
        let i = 0;
        function forever(i) {
            if (i >= 9999999999999999)
                return;
            // Do not Print Anything
            forever(i + 1);
        }
        forever(i);
    }
    catch (error) {
        console.log("<----------Internal Error Detected---------->");
        console.log(error.stack);
    }
}

// Error
function error() {
    try {
        throw new Error(" Error");
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("<----------Error Detected---------->");
            console.log(error.stack);
        }
    }
}

evalError()
enactRangeError();
referenceError();
syntaxError();
typeError();
uriError();
aggregateError();
internalError();
error();