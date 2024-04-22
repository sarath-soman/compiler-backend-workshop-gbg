// a + b * 10 / 2
// - precedence
const expressionString = "a + (b * (10 / 2))"

import { AssignmentExpression, Expression, PrintExpression, Token } from "./ast";
import { compileExpressionsToJs, compileExpressionToJs, Expression2JsCompilationContext } from "./expression-2-js-compiler";
import { InterpretationContext, interpret, interpretExpressions } from "./interpreter";

const expression: Expression = {
    type: 'ArithmeticExpression',
    leftExpression: {
        type: 'VariableExpression',
        variableName: 'a'
    },
    operator: Token.PLUS,
    rightExpression: {
        type: 'ArithmeticExpression',
        leftExpression: {
            type: 'VariableExpression',
            variableName: 'b'
        },
        operator: Token.MULTIPLY,
        rightExpression: {
            type: 'ArithmeticExpression',
            leftExpression: {
                type: 'ConstantExpression',
                constant: 10
            },
            operator: Token.DIVIDE,
            rightExpression: {
                type: 'ConstantExpression',
                constant: 2
            }
        }
    },    
}
const printExpression: PrintExpression = {
    type: 'PrintExpression',
    expression
}

const assignmentExpression: AssignmentExpression = {
    type: 'AssignmentExpression',
    variableName: 'a',
    expression: {
        type: 'ConstantExpression',
        constant: 50
    }
}

const expressions = [printExpression, assignmentExpression, printExpression]
console.log(JSON.stringify(printExpression, null, 2))

const interpretationContext = new InterpretationContext({
    a: 20,
    b: 2
})

interpretExpressions(expressions, interpretationContext)

const expression2JsCompilationContext = new Expression2JsCompilationContext();
const jsCode = compileExpressionsToJs(expressions, expression2JsCompilationContext)

console.log(jsCode)
