import { AssignmentExpression, Expression, IfExpression, LogicalExpression, PrintExpression, RelationalExpression, Token, WhileExpression } from "./ast";
import { LexicalContext } from "./context";
import { compileExpressionsToJs, Expression2JsCompilationContext } from "./expression-2-js-compiler";
import { interpretExpressions } from "./interpreter";
import { validateSemanticsOfExpressions } from "./semantic-validator";

const printExpression: PrintExpression = {
    type: 'PrintExpression',
    expression: {
        type: 'VariableExpression',
        variableName: 'a'
    }
}

const assignmentExpression: AssignmentExpression = {
    type: 'AssignmentExpression',
    variableName: 'a',
    expression: {
        type: 'ArithmeticExpression',
        operator: Token.PLUS,
        leftExpression: {
            type: 'ConstantExpression',
            constant: 1
        },
        rightExpression: {
            type: 'VariableExpression',
            variableName: 'a'
        }
    }
}

const aLessThan10: RelationalExpression = {
    type: 'RelationalExpression',
    leftExpression: {
        type: 'VariableExpression',
        variableName: 'a'
    },
    operator: Token.LESS_THAN,
    rightExpression: {
        type: 'ConstantExpression',
        constant: 10
    }
}

const whileExpression: WhileExpression = {
    type: 'WhileExpression',
    condition: aLessThan10,
    expressions: [printExpression, assignmentExpression]
}

const expressions: Expression[] = [whileExpression]
console.log(JSON.stringify(whileExpression, null, 2))

validateSemanticsOfExpressions(expressions, new LexicalContext({symbolTable: {
    a: {type: 'number'},
}}));
interpretExpressions(expressions, new LexicalContext({symbolTable: {
    a: {type: 'number', numberValue: 1},    
}}));
const jsCode = compileExpressionsToJs(expressions, new Expression2JsCompilationContext())
console.log(jsCode)
