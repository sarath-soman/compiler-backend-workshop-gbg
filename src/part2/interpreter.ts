import { ArithmeticExpression, AssignmentExpression, BaseExpression, ConstantExpression, Expression, PrintExpression, VariableExpressionExpression } from "./ast"

export class InterpretationContext {
    private variables: Record<string, number> = {}

    constructor(variables: Record<string, number> = {}) {
        this.variables = {
            ...variables        
        }
    }
    
    public setVariable(name: string, value: number) {
        this.variables[name] = value
    }
    
    public getVariable(name: string): number {
        if (this.variables[name] === undefined) {
            throw new Error(`Variable ${name} is not defined`)
        }
        return this.variables[name]
    }
}

export function interpretExpressions(expressions: Expression[], interpretationContext: InterpretationContext) {
    expressions.forEach(expression => {
        interpret(expression, interpretationContext)
    })
}

export function interpret(expression: Expression, context: InterpretationContext): number {
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
    }
}

function interpretArithmeticExpression(expression: ArithmeticExpression, context: InterpretationContext): number {
    const leftValue = interpret(expression.leftExpression, context)
    const rightValue = interpret(expression.rightExpression, context)
    
    switch (expression.operator) {
        case '+':
            return leftValue + rightValue
        case '-':
            return leftValue - rightValue
        case '*':
            return leftValue * rightValue
        case '/':
            return leftValue / rightValue
    }

    throw new Error(`Unknown operator ${expression.operator}`)
}

function interpretConstantExpression(expression: ConstantExpression, context: InterpretationContext): number {
    return expression.constant
}

function interpretVariableExpression(expression: VariableExpressionExpression, context: InterpretationContext): number {
    return context.getVariable(expression.variableName)
}

function interpretPrintExpression(expression: PrintExpression, context: InterpretationContext): number {
    const value = interpret(expression.expression, context)
    console.log(value)
    return 1
}

function interpretAssignmentExpression(expression: AssignmentExpression, context: InterpretationContext): number {
    const value = interpret(expression.expression, context)
    context.setVariable(expression.variableName, value)
    return 1
}
