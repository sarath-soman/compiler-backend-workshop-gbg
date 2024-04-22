export type ExpressionType = 'ArithmeticExpression' | 'ConstantExpression' | 'VariableExpression' | 'PrintExpression' | 'AssignmentExpression'

export enum Token {
    PLUS = '+',
    MINUS = '-',
    MULTIPLY = '*',
    DIVIDE = '/',
}

export type BaseExpression = {
    type: ExpressionType
}

export type ArithmeticExpression = BaseExpression & {    
    leftExpression: Expression
    rightExpression: Expression
    operator: Token
}

export type Expression = ArithmeticExpression | ConstantExpression | VariableExpressionExpression | PrintExpression;

export type ConstantExpression = BaseExpression & {
    constant: number
}

export type VariableExpressionExpression = BaseExpression & {    
    variableName: string
}

export type PrintExpression = BaseExpression & {
    expression: Expression
}

export type AssignmentExpression = BaseExpression & {
    variableName: string
    expression: Expression
}