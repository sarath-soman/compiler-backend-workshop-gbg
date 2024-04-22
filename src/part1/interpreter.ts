import { ArithmeticExpression, ConstantExpression, Expression, VariableExpressionExpression } from "./ast"

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

export function interpretExpression(expression: Expression, context: InterpretationContext): number {
    switch (expression.type) {
        case 'ArithmeticExpression':
            return interpretArithmeticExpression(expression as ArithmeticExpression, context)
        case 'ConstantExpression':
            return interpretConstantExpression(expression as ConstantExpression, context)
        case 'VariableExpression':
            return interpretVariableExpression(expression as VariableExpressionExpression, context)
    }
}

function interpretArithmeticExpression(expression: ArithmeticExpression, context: InterpretationContext): number {
    const leftValue = interpretExpression(expression.leftExpression, context)
    const rightValue = interpretExpression(expression.rightExpression, context)
    
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