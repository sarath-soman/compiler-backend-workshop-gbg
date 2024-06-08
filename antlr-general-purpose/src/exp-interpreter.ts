import { Context } from './context';
import ExprListener from './parser-gen/grammar/ExprListener';
import {
  AddSubContext,
  AndContext,
  AssignStatContext,
  ExprStatContext,
  IfElseStatContext,
  IntContext,
  MulDivContext,
  NotContext,
  OrContext,
  ParensContext,
  PrintStatContext,
  ProgContext,
  RelationalContext,
  VarContext,
} from './parser-gen/grammar/ExprParser';
import ExprVisitor from './parser-gen/grammar/ExprVisitor';
import { Symbol } from './symbol';

export class ExprInterpreter extends ExprVisitor<Symbol> {
  private context: Context;

  constructor(context: Context = new Context()) {
    super();
    this.context = context;
  }

  visitProg = (ctx: ProgContext): Symbol => {
    ctx.stat_list().forEach((stat) => {
      this.visit(stat);
    });
    return {
      type: 'void',
    };
  };

  visitExprStat = (ctx: ExprStatContext): Symbol => {
    this.visit(ctx.expr());
    return {
      name: '',
      type: 'void',
    };
  };

  visitIfElseStat = (ctx: IfElseStatContext): Symbol => {
    const result = this.visit(ctx.expr());
    if (result.value) {
      this.visit(ctx.prog(0));
    } else {
      this.visit(ctx.prog(1));
    }
    return {
      name: '',
      type: 'void',
    };
  };

  visitPrintStat = (ctx: PrintStatContext): Symbol => {
    const result = this.visit(ctx.expr());
    console.log(result.value);
    return {
      name: '',
      type: 'void',
    };
  };

  visitAssignStat = (ctx: AssignStatContext): Symbol => {
    const result = this.visit(ctx.expr());
    this.context.setSymbol(ctx.ID().getText(), result);
    return null;
  };

  visitNot = (ctx: NotContext): Symbol => {
    const result = this.visit(ctx.expr());
    return {
      name: '',
      type: 'bool',
      value: !result.value,
    };
  };

  visitOr = (ctx: OrContext): Symbol => {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      name: '',
      type: 'bool',
      value: left.value || right.value,
    };
  };

  visitAddSub = (ctx: AddSubContext): Symbol => {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.addSubOp();
    if (op.getText() === '+') {
      return {
        name: '',
        type: 'int',
        value: (left.value as number) + (right.value as number),
      };
    }
    return {
      name: '',
      type: 'int',
      value: (left.value as number) - (right.value as number),
    };
  };

  visitMulDiv = (ctx: MulDivContext): Symbol => {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.mulDivOp();
    if (op.getText() === '*') {
      return {
        name: '',
        type: 'int',
        value: (left.value as number) * (right.value as number),
      };
    }
    return {
      name: '',
      type: 'int',
      value: (left.value as number) / (right.value as number),
    };
  };

  visitParens = (ctx: ParensContext): Symbol => {
    console.log('visitParens');
    return null;
  };

  visitVar = (ctx: VarContext): Symbol => {
    const symbol = this.context.getSymbol(ctx.ID().getText());
    return symbol;
  };

  visitAnd = (ctx: AndContext): Symbol => {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      name: '',
      type: 'bool',
      value: left.value && right.value,
    };
  };

  visitRelational = (ctx: RelationalContext): Symbol => {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.relationalOp();
    if (op.getText() === '<') {
      return {
        name: '',
        type: 'bool',
        value: (left.value as number) < (right.value as number),
      };
    }
    if (op.getText() === '>') {
      return {
        name: '',
        type: 'bool',
        value: (left.value as number) > (right.value as number),
      };
    }
    if (op.getText() === '<=') {
      return {
        name: '',
        type: 'bool',
        value: (left.value as number) <= (right.value as number),
      };
    }
    return {
      name: '',
      type: 'bool',
      value: (left.value as number) >= (right.value as number),
    };
  };

  visitInt = (ctx: IntContext): Symbol => {
    return {
      name: '',
      type: 'int',
      value: parseInt(ctx.INT().getText(), 10),
    };
  };
}

export class ExprToJsListener extends ExprListener {
  /**
   * Enter a parse tree produced by `ExprParser.prog`.
   * @param ctx the parse tree
   */
  enterProg?: (ctx: ProgContext) => void = (ctx: ProgContext) => {
    console.log('enterProg');
  };
  /**
   * Exit a parse tree produced by `ExprParser.prog`.
   * @param ctx the parse tree
   */
  exitProg?: (ctx: ProgContext) => void = (ctx: ProgContext) => {
    console.log('exitProg');
  };
  /**
   * Enter a parse tree produced by the `ExprStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  enterExprStat?: (ctx: ExprStatContext) => void = (ctx: ExprStatContext) => {
    console.log('enterExprStat');
  };
  /**
   * Exit a parse tree produced by the `ExprStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  exitExprStat?: (ctx: ExprStatContext) => void = (ctx: ExprStatContext) => {
    console.log('exitExprStat');
  };
  /**
   * Enter a parse tree produced by the `IfElseStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  enterIfElseStat?: (ctx: IfElseStatContext) => void = (
    ctx: IfElseStatContext,
  ) => {
    console.log('enterIfElseStat');
  };
  /**
   * Exit a parse tree produced by the `IfElseStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  exitIfElseStat?: (ctx: IfElseStatContext) => void = (
    ctx: IfElseStatContext,
  ) => {
    console.log('exitIfElseStat');
  };
  /**
   * Enter a parse tree produced by the `PrintStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  enterPrintStat?: (ctx: PrintStatContext) => void = (
    ctx: PrintStatContext,
  ) => {
    console.log('enterPrintStat');
  };
  /**
   * Exit a parse tree produced by the `PrintStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  exitPrintStat?: (ctx: PrintStatContext) => void = (ctx: PrintStatContext) => {
    console.log('exitPrintStat');
  };
  /**
   * Enter a parse tree produced by the `AssignStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  enterAssignStat?: (ctx: AssignStatContext) => void = (
    ctx: AssignStatContext,
  ) => {
    console.log('enterAssignStat');
  };
  /**
   * Exit a parse tree produced by the `AssignStat`
   * labeled alternative in `ExprParser.stat`.
   * @param ctx the parse tree
   */
  exitAssignStat?: (ctx: AssignStatContext) => void = (
    ctx: AssignStatContext,
  ) => {
    console.log('exitAssignStat');
  };
  /**
   * Enter a parse tree produced by the `Not`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterNot?: (ctx: NotContext) => void = (ctx: NotContext) => {
    console.log('enterNot');
  };
  /**
   * Exit a parse tree produced by the `Not`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitNot?: (ctx: NotContext) => void = (ctx: NotContext) => {
    console.log('exitNot');
  };
  /**
   * Enter a parse tree produced by the `Or`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterOr?: (ctx: OrContext) => void = (ctx: OrContext) => {
    console.log('enterOr');
  };
  /**
   * Exit a parse tree produced by the `Or`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitOr?: (ctx: OrContext) => void = (ctx: OrContext) => {
    console.log('exitOr');
  };
  /**
   * Enter a parse tree produced by the `AddSub`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterAddSub?: (ctx: AddSubContext) => void = (ctx: AddSubContext) => {
    console.log('enterAddSub');
  };
  /**
   * Exit a parse tree produced by the `AddSub`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitAddSub?: (ctx: AddSubContext) => void = (ctx: AddSubContext) => {
    console.log('exitAddSub');
  };
  /**
   * Enter a parse tree produced by the `MulDiv`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterMulDiv?: (ctx: MulDivContext) => void = (ctx: MulDivContext) => {
    console.log('enterMulDiv');
  };
  /**
   * Exit a parse tree produced by the `MulDiv`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitMulDiv?: (ctx: MulDivContext) => void = (ctx: MulDivContext) => {
    console.log('exitMulDiv');
  };
  /**
   * Enter a parse tree produced by the `Parens`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterParens?: (ctx: ParensContext) => void = (ctx: ParensContext) => {
    console.log('enterParens');
  };
  /**
   * Exit a parse tree produced by the `Parens`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitParens?: (ctx: ParensContext) => void = (ctx: ParensContext) => {
    console.log('exitParens');
  };
  /**
   * Enter a parse tree produced by the `Var`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterVar?: (ctx: VarContext) => void = (ctx: VarContext) => {
    console.log('enterVar');
  };
  /**
   * Exit a parse tree produced by the `Var`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitVar?: (ctx: VarContext) => void = (ctx: VarContext) => {
    console.log('exitVar');
  };
  /**
   * Enter a parse tree produced by the `And`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterAnd?: (ctx: AndContext) => void = (ctx: AndContext) => {
    console.log('enterAnd');
  };
  /**
   * Exit a parse tree produced by the `And`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitAnd?: (ctx: AndContext) => void = (ctx: AndContext) => {
    console.log('exitAnd');
  };
  /**
   * Enter a parse tree produced by the `Relational`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterRelational?: (ctx: RelationalContext) => void = (
    ctx: RelationalContext,
  ) => {
    console.log('enterRelational');
  };
  /**
   * Exit a parse tree produced by the `Relational`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitRelational?: (ctx: RelationalContext) => void = (
    ctx: RelationalContext,
  ) => {
    console.log('exitRelational');
  };
  /**
   * Enter a parse tree produced by the `Int`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  enterInt?: (ctx: IntContext) => void = (ctx: IntContext) => {
    console.log('enterInt');
  };
  /**
   * Exit a parse tree produced by the `Int`
   * labeled alternative in `ExprParser.expr`.
   * @param ctx the parse tree
   */
  exitInt?: (ctx: IntContext) => void = (ctx: IntContext) => {
    console.log('exitInt');
  };
}
