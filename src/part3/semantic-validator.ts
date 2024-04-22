import {
  ArithmeticExpression,
  AssignmentExpression,
  ConstantExpression,
  Expression,
  LogicalExpression,
  PrintExpression,
  RelationalExpression,
  VariableExpressionExpression,
} from "./ast";
import { LexicalContext } from "./context";
import { SymbolInfo } from "./symbol";

export function validateSemanticsOfExpressions(
  expressions: Expression[],
  lexicalContext: LexicalContext
) {
  expressions.forEach((expression) => {
    validateSemantics(expression, lexicalContext);
  });
}

export function validateSemantics(
  expression: Expression,
  lexicalContext: LexicalContext
): SymbolInfo {
  switch (expression.type) {
    case "ArithmeticExpression":
      return validateArithmeticExpression(
        expression as ArithmeticExpression,
        lexicalContext
      );
    case "ConstantExpression":
      return validateConstantExpression(
        expression as ConstantExpression,
        lexicalContext
      );
    case "VariableExpression":
      return validateVariableExpression(
        expression as VariableExpressionExpression,
        lexicalContext
      );
    case "PrintExpression":
      return validatePrintExpression(
        expression as PrintExpression,
        lexicalContext
      );
    case "AssignmentExpression":
      return validateAssignmentExpression(
        expression as AssignmentExpression,
        lexicalContext
      );
    case "RelationalExpression":
      return validateRelationalExpression(
        expression as RelationalExpression,
        lexicalContext
      );

    case "LogicalExpression":
      return validateLogicalExpression(
        expression as LogicalExpression,
        lexicalContext
      );
  }
}

function validateArithmeticExpression(
  expression: ArithmeticExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  const leftSymbolInfo = validateSemantics(
    expression.leftExpression,
    lexicalContext
  );
  const rightSymbolInfo = validateSemantics(
    expression.rightExpression,
    lexicalContext
  );
  if (leftSymbolInfo.type === "number" && rightSymbolInfo.type === "number") {
    return { type: "number" };
  }
  throw new Error("Arithmetic expressions must have number operands");
}

function validateConstantExpression(
  expression: ConstantExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  return { type: "number" };
}

function validateVariableExpression(
  expression: VariableExpressionExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  return lexicalContext.getSymbol(expression.variableName);
}

function validatePrintExpression(
  expression: PrintExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  validateSemantics(expression.expression, lexicalContext);
  return { type: "void" };
}

function validateAssignmentExpression(
  expression: AssignmentExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  const expressionSymbolInfo = validateSemantics(
    expression.expression,
    lexicalContext
  );
  const variableSymbolInfo = lexicalContext.getSymbol(expression.variableName);
  if (variableSymbolInfo.type !== expressionSymbolInfo.type) {
    throw new Error(
      `Cannot assign a value of type ${expressionSymbolInfo.type} to a variable of type ${variableSymbolInfo.type}`
    );
  }
  return { type: "void" };
}

function validateRelationalExpression(
  expression: RelationalExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  const leftSymbolInfo = validateSemantics(
    expression.leftExpression,
    lexicalContext
  );
  const rightSymbolInfo = validateSemantics(
    expression.rightExpression,
    lexicalContext
  );
  if (expression.operator === "==") {
    if (
      leftSymbolInfo.type === rightSymbolInfo.type &&
      leftSymbolInfo.type !== "void" &&
      rightSymbolInfo.type !== "void"
    ) {
      return { type: "boolean" };
    } else {
      throw new Error(
        "Relational expressions with == operator must have number|boolean operands"
      );
    }
  } else {
    if (leftSymbolInfo.type === "number" && rightSymbolInfo.type === "number") {
      return { type: "boolean" };
    } else {
      throw new Error("Relational expressions must have number operands");
    }
  }
}

function validateLogicalExpression(
  expression: LogicalExpression,
  lexicalContext: LexicalContext
): SymbolInfo {
  const leftSymbolInfo = validateSemantics(
    expression.leftExpression,
    lexicalContext
  );
  const rightSymbolInfo = validateSemantics(
    expression.rightExpression,
    lexicalContext
  );
  if (leftSymbolInfo.type === "boolean" && rightSymbolInfo.type === "boolean") {
    return { type: "boolean" };
  }
  throw new Error("Logical expressions must have boolean operands");
}
