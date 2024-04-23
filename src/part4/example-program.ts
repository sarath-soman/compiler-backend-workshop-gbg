import { Expression, IfExpression, LogicalExpression, PrintExpression, RelationalExpression, Token } from "./ast";
import { LexicalContext } from "./context";
import { compileExpressionsToJs, Expression2JsCompilationContext } from "./expression-2-js-compiler";
import { interpretExpressions } from "./interpreter";
import { validateSemanticsOfExpressions } from "./semantic-validator";

const printThen: PrintExpression = {
    type: 'PrintExpression',
    expression: {
        type: 'ConstantExpression',
        constant: 1
    }
}

const printElse: PrintExpression = {
    type: 'PrintExpression',
    expression: {
        type: 'ConstantExpression',
        constant: 0
    }
}

const aGreaterThan10: RelationalExpression = {
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

const bGreaterThan10: RelationalExpression = {
    type: 'RelationalExpression',
    leftExpression: {
        type: 'VariableExpression',
        variableName: 'b'
    },
    operator: Token.GREATER_THAN,
    rightExpression: {
        type: 'ConstantExpression',
        constant: 10
    }
}

const ifConditionExpression: LogicalExpression = {
    type: 'LogicalExpression',
    leftExpression: aGreaterThan10,
    operator: Token.AND,
    rightExpression: bGreaterThan10
}

const ifExpression: IfExpression = {
    type: 'IfExpression',
    condition: ifConditionExpression,
    thenExpressions: [printThen],
    elseExpressions: [printElse]
}

const expressions: Expression[] = [ifExpression]
console.log(JSON.stringify(ifExpression, null, 2))

validateSemanticsOfExpressions(expressions, new LexicalContext({symbolTable: {
    a: {type: 'number'},
    b: {type: 'number'}
}}));
interpretExpressions(expressions, new LexicalContext({symbolTable: {
    a: {type: 'number', numberValue: 11},
    b: {type: 'number', numberValue: 11}
}}));
const jsCode = compileExpressionsToJs(expressions, new Expression2JsCompilationContext())
console.log(jsCode)
