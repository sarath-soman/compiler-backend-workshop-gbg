// a + b * 10 / 2
// - precedence
const expressionString = "a + (b * (10 / 2))"

import { AssignmentExpression, Expression, LogicalExpression, PrintExpression, RelationalExpression, Token } from "./ast";
import { LexicalContext } from "./context";
import { compileExpressionsToJs, compileExpressionToJs, Expression2JsCompilationContext } from "./expression-2-js-compiler";
import { interpret, interpretExpressions } from "./interpreter";
import { validateSemanticsOfExpressions } from "./semantic-validator";

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

const relationalExpression: RelationalExpression = {
    type: 'RelationalExpression',
    leftExpression: {
        type: 'VariableExpression',
        variableName: 'a'
    },
    operator: Token.LESS_THAN,
    rightExpression: {
        type: 'ConstantExpression',
        constant: 100
    }
}

const relationalExpression2: RelationalExpression = {
    type: 'RelationalExpression',
    leftExpression: {
        type: 'VariableExpression',
        variableName: 'a'
    },
    operator: Token.GREATER_THAN,
    rightExpression: {
        type: 'ConstantExpression',
        constant: 10
    }
}

const logicalExpression: LogicalExpression = {
    type: 'LogicalExpression',
    leftExpression: relationalExpression,
    operator: Token.AND,
    rightExpression: relationalExpression2
}

const expressions: Expression[] = [printExpression, assignmentExpression, printExpression, relationalExpression, relationalExpression2, logicalExpression]
console.log(JSON.stringify(printExpression, null, 2))

const semanticValidationContext = new LexicalContext({symbolTable: {
    a: {type: 'number'},
    b: {type: 'number'}
}})
validateSemanticsOfExpressions(expressions, semanticValidationContext);


// const expression2JsCompilationContext = new Expression2JsCompilationContext();
// const jsCode = compileExpressionsToJs(expressions, expression2JsCompilationContext)

// console.log(jsCode)
