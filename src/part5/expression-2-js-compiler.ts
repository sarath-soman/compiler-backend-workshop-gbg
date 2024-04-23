import {
  ArithmeticExpression,
  AssignmentExpression,
  ConstantExpression,
  Expression,
  IfExpression,
  LogicalExpression,
  PrintExpression,
  RelationalExpression,
  VariableExpressionExpression,
  WhileExpression,
} from "./ast";

export class Expression2JsCompilationContext {
  private variables: Record<string, number> = {};

  constructor(variables: Record<string, number> = {}) {
    this.variables = {
      ...variables,
    };
  }

  public setVariable(name: string, value: number) {
    this.variables[name] = value;
  }

  public getVariable(name: string): number {
    if (this.variables[name] === undefined) {
      throw new Error(`Variable ${name} is not defined`);
    }
    return this.variables[name];
  }
}

export function compileExpressionsToJs(
  expressions: Expression[],
  context: Expression2JsCompilationContext
): string {
  return expressions
    .map((expression) => compileExpressionToJs(expression, context))
    .join("\n");
}

export function compileExpressionToJs(
  expression: Expression,
  context: Expression2JsCompilationContext
): string {
  switch (expression.type) {
    case "ArithmeticExpression":
      return compileArithmeticExpressionToJs(
        expression as ArithmeticExpression,
        context
      );
    case "ConstantExpression":
      return compileConstantExpressionToJs(
        expression as ConstantExpression,
        context
      );
    case "VariableExpression":
      return compileVariableExpressionToJs(
        expression as VariableExpressionExpression,
        context
      );
    case "PrintExpression":
      return compilePrintExpressionToJs(expression as PrintExpression, context);
    case "AssignmentExpression":
      return compileAssignmentExpressionToJs(
        expression as AssignmentExpression,
        context
      );
    case "RelationalExpression":
      return compileRelationalExpressionToJs(
        expression as RelationalExpression,
        context
      );
    case "LogicalExpression":
      return compileLogicalExpressionToJs(
        expression as LogicalExpression,
        context
      );
    case "IfExpression":
      return compileIfExpressionToJs(expression as IfExpression, context);
    case "WhileExpression":
      return compileWhileExpressionToJs(expression as WhileExpression, context);
  }

  throw new Error(`Unknown expression type ${expression.type}`);
}

function compileArithmeticExpressionToJs(
  expression: ArithmeticExpression,
  context: Expression2JsCompilationContext
): string {
  const leftValue = compileExpressionToJs(expression.leftExpression, context);
  const rightValue = compileExpressionToJs(expression.rightExpression, context);

  switch (expression.operator) {
    case "+":
      return `(${leftValue} + ${rightValue})`;
    case "-":
      return `(${leftValue} - ${rightValue})`;
    case "*":
      return `(${leftValue} * ${rightValue})`;
    case "/":
      return `(${leftValue} / ${rightValue})`;
  }

  throw new Error(`Unknown operator ${expression.operator}`);
}

function compileConstantExpressionToJs(
  expression: ConstantExpression,
  context: Expression2JsCompilationContext
): string {
  return expression.constant.toString();
}

function compileVariableExpressionToJs(
  expression: VariableExpressionExpression,
  context: Expression2JsCompilationContext
): string {
  return expression.variableName;
}

function compilePrintExpressionToJs(
  expression: PrintExpression,
  context: Expression2JsCompilationContext
): string {
  return `console.log(${compileExpressionToJs(
    expression.expression,
    context
  )})`;
}

function compileAssignmentExpressionToJs(
  expression: AssignmentExpression,
  context: Expression2JsCompilationContext
): string {
  return `let ${expression.variableName} = ${compileExpressionToJs(
    expression.expression,
    context
  )}`;
}

function compileRelationalExpressionToJs(
  expression: RelationalExpression,
  context: Expression2JsCompilationContext
): string {
  const leftValue = compileExpressionToJs(expression.leftExpression, context);
  const rightValue = compileExpressionToJs(expression.rightExpression, context);

  switch (expression.operator) {
    case "<":
      return `(${leftValue} < ${rightValue})`;
    case ">":
      return `(${leftValue} > ${rightValue})`;
    case "<=":
      return `(${leftValue} <= ${rightValue})`;
    case ">=":
      return `(${leftValue} >= ${rightValue})`;
    case "==":
      return `(${leftValue} === ${rightValue})`;
  }

  throw new Error(`Unknown operator ${expression.operator}`);
}

function compileLogicalExpressionToJs(
  expression: LogicalExpression,
  context: Expression2JsCompilationContext
): string {
  const leftValue = compileExpressionToJs(expression.leftExpression, context);
  const rightValue = compileExpressionToJs(expression.rightExpression, context);

  switch (expression.operator) {
    case "&&":
      return `(${leftValue} && ${rightValue})`;
    case "||":
      return `(${leftValue} || ${rightValue})`;
    case "!":
      return `!(${rightValue})`;
  }

  throw new Error(`Unknown operator ${expression.operator}`);
}

function compileIfExpressionToJs(
  expression: IfExpression,
  context: Expression2JsCompilationContext
): string {
  const condition = compileExpressionToJs(expression.condition, context);
  const thenBlock = compileExpressionsToJs(expression.thenExpressions, context);
  const elseBlock = compileExpressionsToJs(expression.elseExpressions, context);

  return `if (${condition}) {
            ${thenBlock}
          } else {
            ${elseBlock}
          }`;
}

function compileWhileExpressionToJs(
  expression: WhileExpression,
  context: Expression2JsCompilationContext
): string {
  const condition = compileExpressionToJs(expression.condition, context);
  const body = compileExpressionsToJs(expression.expressions, context);

  return `while (${condition}) {
            ${body}
          }`;
}
