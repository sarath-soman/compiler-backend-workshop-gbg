// a + b * 10 / 2
// - precedence
const expressionString = "a + (b * (10 / 2))"

import { Expression, Token } from "./ast";
import { compileExpressionToJs, Expression2JsCompilationContext } from "./expression-2-js-compiler";
import { InterpretationContext, interpretExpression } from "./interpreter";

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
console.log(JSON.stringify(expression, null, 2))

const interpretationContext = new InterpretationContext({
    a: 20,
    b: 2
})

const result = interpretExpression(expression, interpretationContext)
console.log(`${expressionString}: ${result}`)

const expression2JsCompilationContext = new Expression2JsCompilationContext();
const jsCode = compileExpressionToJs(expression, expression2JsCompilationContext)
//Choose to write to a expression.js file
console.log(jsCode)