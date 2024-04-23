export type ExpressionType =
  | "ArithmeticExpression"
  | "ConstantExpression"
  | "VariableExpression"
  | "PrintExpression"
  | "AssignmentExpression"
  | "RelationalExpression"
  | "LogicalExpression"
  | "IfExpression"
  | "WhileExpression";

export enum Token {
  //Arithmetic Operators
  PLUS = "+",
  MINUS = "-",
  MULTIPLY = "*",
  DIVIDE = "/",

  //Relational Operators
  LESS_THAN = "<",
  GREATER_THAN = ">",
  LESS_THAN_OR_EQUAL = "<=",
  GREATER_THAN_OR_EQUAL = ">=",
  EQUAL = "==",

  //Logical Operators
  AND = "&&",
  OR = "||",
  NOT = "!",
}

export type BaseExpression = {
  type: ExpressionType;
};

export type ArithmeticExpression = BaseExpression & {
  leftExpression: Expression;
  rightExpression: Expression;
  operator: Token;
};

export type Expression =
  | ArithmeticExpression
  | ConstantExpression
  | VariableExpressionExpression
  | PrintExpression
  | AssignmentExpression
  | RelationalExpression
  | LogicalExpression
  | IfExpression
  | WhileExpression;

export type ConstantExpression = BaseExpression & {
  constant: number;
};

export type VariableExpressionExpression = BaseExpression & {
  variableName: string;
};

export type PrintExpression = BaseExpression & {
  expression: Expression;
};

export type AssignmentExpression = BaseExpression & {
  variableName: string;
  expression: Expression;
};

export type RelationalExpression = BaseExpression & {
  leftExpression: Expression;
  rightExpression: Expression;
  operator:
    | Token.LESS_THAN
    | Token.GREATER_THAN
    | Token.LESS_THAN_OR_EQUAL
    | Token.GREATER_THAN_OR_EQUAL
    | Token.EQUAL;
};

export type LogicalExpression = BaseExpression & {
  leftExpression: Expression;
  rightExpression: Expression;
  operator: Token.AND | Token.OR | Token.NOT;
};

export type IfExpression = BaseExpression & {
  condition: Expression;
  thenExpressions: Expression[];
  elseExpressions: Expression[];
};


export type WhileExpression = BaseExpression & {
  condition: Expression;
  expressions: Expression[];
};