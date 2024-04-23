import { ArithmeticExpression, AssignmentExpression, BaseExpression, ConstantExpression, Expression, IfExpression, LogicalExpression, PrintExpression, RelationalExpression, VariableExpressionExpression } from "./ast"
import { LexicalContext } from "./context"
import { SymbolInfo } from "./symbol"

export function interpretExpressions(expressions: Expression[], interpretationContext: LexicalContext) {
    expressions.forEach(expression => {
        interpret(expression, interpretationContext)
    })
}

export function interpret(expression: Expression, context: LexicalContext): SymbolInfo {
    switch (expression.type) {
        case 'ArithmeticExpression':
            return interpretArithmeticExpression(expression as ArithmeticExpression, context)
        case 'ConstantExpression':
            return interpretConstantExpression(expression as ConstantExpression, context)
        case 'VariableExpression':
            return interpretVariableExpression(expression as VariableExpressionExpression, context)
        case 'PrintExpression':
            return interpretPrintExpression(expression as PrintExpression, context)
        case 'AssignmentExpression':
            return interpretAssignmentExpression(expression as AssignmentExpression, context)   
        case 'RelationalExpression':
            return interpretRelationalExpression(expression as RelationalExpression, context)  
        case 'LogicalExpression':
            return interpretLogicalExpression(expression as LogicalExpression, context)   
        case 'IfExpression':
            return interpretIfExpression(expression as IfExpression, context)
    }
    throw new Error(`Unknown expression type ${expression.type}`)
}

function interpretArithmeticExpression(expression: ArithmeticExpression, context: LexicalContext): SymbolInfo {
    const leftValue = interpret(expression.leftExpression, context)
    const rightValue = interpret(expression.rightExpression, context)
    let result: number | undefined = undefined;
    switch (expression.operator) {
        case '+':
            result = leftValue.numberValue! + rightValue.numberValue!
            break
        case '-':
            result = leftValue.numberValue! - rightValue.numberValue!
            break
        case '*':
            result = leftValue.numberValue! * rightValue.numberValue!
            break
        case '/':
            result = leftValue.numberValue! / rightValue.numberValue!
            break
    }

    if (result !== undefined) {
        return {
            type: 'number',
            numberValue: result
        }
    }

    throw new Error(`Unknown operator ${expression.operator}`)
}

function interpretConstantExpression(expression: ConstantExpression, context: LexicalContext): SymbolInfo {
    return {
        type: 'number',
        numberValue: expression.constant
    }
}

function interpretVariableExpression(expression: VariableExpressionExpression, context: LexicalContext): SymbolInfo {
    return context.getSymbol(expression.variableName)
}

function interpretPrintExpression(expression: PrintExpression, context: LexicalContext): SymbolInfo {
    const value = interpret(expression.expression, context)
    console.log(value.type === 'number' ? value.numberValue : value.type === 'boolean' ? value.booleanValue : 'unknown')
    return {
        type: 'number',        
    }
}

function interpretAssignmentExpression(expression: AssignmentExpression, context: LexicalContext): SymbolInfo {
    const value = interpret(expression.expression, context)
    context.setSymbol(expression.variableName, value)
    return {
        type: 'number',        
    }
}

function interpretRelationalExpression(expression: RelationalExpression, context: LexicalContext): SymbolInfo {
    const leftValue = interpret(expression.leftExpression, context)
    const rightValue = interpret(expression.rightExpression, context)
    let result: boolean | undefined = undefined;
    switch (expression.operator) {
        case '<':
            result = leftValue.numberValue! < rightValue.numberValue!
            break
        case '>':
            result = leftValue.numberValue! > rightValue.numberValue!
            break
        case '<=':
            result = leftValue.numberValue! <= rightValue.numberValue!
            break
        case '>=':
            result = leftValue.numberValue! >= rightValue.numberValue!
            break
        case '==':
            result = leftValue.numberValue === rightValue.numberValue
            break
    }

    if (result !== undefined) {
        return {
            type: 'boolean',
            booleanValue: result
        }
    }

    throw new Error(`Unknown operator ${expression.operator}`)
}

function interpretLogicalExpression(expression: LogicalExpression, context: LexicalContext): SymbolInfo {
    const leftValue = interpret(expression.leftExpression, context)
    const rightValue = interpret(expression.rightExpression, context)
    let result: boolean | undefined = undefined;
    switch (expression.operator) {
        case '&&':
            result = leftValue.booleanValue! && rightValue.booleanValue!
            break
        case '||':
            result = leftValue.booleanValue! || rightValue.booleanValue!
            break
        case '!':
            result = !rightValue.booleanValue!
            break
    }

    if (result !== undefined) {
        return {
            type: 'boolean',
            booleanValue: result
        }
    }

    throw new Error(`Unknown operator ${expression.operator}`)
}

function interpretIfExpression(expression: IfExpression, context: LexicalContext): SymbolInfo {
    const condition = interpret(expression.condition, context)
    if (condition.booleanValue) {
        interpretExpressions(expression.thenExpressions, context)
    } else {
        interpretExpressions(expression.elseExpressions, context)
    }
    return {
        type: 'void'
    }
}