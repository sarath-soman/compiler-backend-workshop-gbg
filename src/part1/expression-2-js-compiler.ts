import { ArithmeticExpression, ConstantExpression, Expression, VariableExpressionExpression } from "./ast"

export class Expression2JsCompilationContext {
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

export function compileExpressionToJs(expression: Expression, context: Expression2JsCompilationContext): string {
    switch (expression.type) {
        case 'ArithmeticExpression':
            return compileArithmeticExpressionToJs(expression as ArithmeticExpression, context)
        case 'ConstantExpression':
            return compileConstantExpressionToJs(expression as ConstantExpression, context)
        case 'VariableExpression':
            return compileVariableExpressionToJs(expression as VariableExpressionExpression, context)
    }    
}

function compileArithmeticExpressionToJs(expression: ArithmeticExpression, context: Expression2JsCompilationContext): string {
    const leftValue = compileExpressionToJs(expression.leftExpression, context)
    const rightValue = compileExpressionToJs(expression.rightExpression, context)
    
    switch (expression.operator) {
        case '+':
            return `(${leftValue} + ${rightValue})`
        case '-':
            return `(${leftValue} - ${rightValue})`
        case '*':
            return `(${leftValue} * ${rightValue})`
        case '/':
            return `(${leftValue} / ${rightValue})`
    }

    throw new Error(`Unknown operator ${expression.operator}`)
}

function compileConstantExpressionToJs(expression: ConstantExpression, context: Expression2JsCompilationContext): string {
    return expression.constant.toString()
}

function compileVariableExpressionToJs(expression: VariableExpressionExpression, context: Expression2JsCompilationContext): string {
    return expression.variableName
}