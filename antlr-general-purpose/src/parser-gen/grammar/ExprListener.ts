// Generated from grammar/Expr.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./ExprParser";
import { ExprStatContext } from "./ExprParser";
import { IfElseStatContext } from "./ExprParser";
import { PrintStatContext } from "./ExprParser";
import { AssignStatContext } from "./ExprParser";
import { NotContext } from "./ExprParser";
import { OrContext } from "./ExprParser";
import { MulDivContext } from "./ExprParser";
import { AddSubContext } from "./ExprParser";
import { ParensContext } from "./ExprParser";
import { VarContext } from "./ExprParser";
import { AndContext } from "./ExprParser";
import { RelationalContext } from "./ExprParser";
import { IntContext } from "./ExprParser";
import { AndOpContext } from "./ExprParser";
import { OrOpContext } from "./ExprParser";
import { RelationalOpContext } from "./ExprParser";
import { AddSubOpContext } from "./ExprParser";
import { MulDivOpContext } from "./ExprParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExprParser`.
 */
export default class ExprListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by the `ExprStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterExprStat?: (ctx: ExprStatContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitExprStat?: (ctx: ExprStatContext) => void;
	/**
	 * Enter a parse tree produced by the `IfElseStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterIfElseStat?: (ctx: IfElseStatContext) => void;
	/**
	 * Exit a parse tree produced by the `IfElseStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitIfElseStat?: (ctx: IfElseStatContext) => void;
	/**
	 * Enter a parse tree produced by the `PrintStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterPrintStat?: (ctx: PrintStatContext) => void;
	/**
	 * Exit a parse tree produced by the `PrintStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitPrintStat?: (ctx: PrintStatContext) => void;
	/**
	 * Enter a parse tree produced by the `AssignStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterAssignStat?: (ctx: AssignStatContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitAssignStat?: (ctx: AssignStatContext) => void;
	/**
	 * Enter a parse tree produced by the `Not`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by the `Not`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;
	/**
	 * Enter a parse tree produced by the `Or`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `Or`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;
	/**
	 * Enter a parse tree produced by the `MulDiv`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDiv`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Enter a parse tree produced by the `Parens`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `Parens`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;
	/**
	 * Enter a parse tree produced by the `Var`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by the `Var`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
	/**
	 * Enter a parse tree produced by the `And`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `And`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;
	/**
	 * Enter a parse tree produced by the `Relational`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRelational?: (ctx: RelationalContext) => void;
	/**
	 * Exit a parse tree produced by the `Relational`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRelational?: (ctx: RelationalContext) => void;
	/**
	 * Enter a parse tree produced by the `Int`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `Int`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;
	/**
	 * Enter a parse tree produced by `ExprParser.andOp`.
	 * @param ctx the parse tree
	 */
	enterAndOp?: (ctx: AndOpContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.andOp`.
	 * @param ctx the parse tree
	 */
	exitAndOp?: (ctx: AndOpContext) => void;
	/**
	 * Enter a parse tree produced by `ExprParser.orOp`.
	 * @param ctx the parse tree
	 */
	enterOrOp?: (ctx: OrOpContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.orOp`.
	 * @param ctx the parse tree
	 */
	exitOrOp?: (ctx: OrOpContext) => void;
	/**
	 * Enter a parse tree produced by `ExprParser.relationalOp`.
	 * @param ctx the parse tree
	 */
	enterRelationalOp?: (ctx: RelationalOpContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.relationalOp`.
	 * @param ctx the parse tree
	 */
	exitRelationalOp?: (ctx: RelationalOpContext) => void;
	/**
	 * Enter a parse tree produced by `ExprParser.addSubOp`.
	 * @param ctx the parse tree
	 */
	enterAddSubOp?: (ctx: AddSubOpContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.addSubOp`.
	 * @param ctx the parse tree
	 */
	exitAddSubOp?: (ctx: AddSubOpContext) => void;
	/**
	 * Enter a parse tree produced by `ExprParser.mulDivOp`.
	 * @param ctx the parse tree
	 */
	enterMulDivOp?: (ctx: MulDivOpContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.mulDivOp`.
	 * @param ctx the parse tree
	 */
	exitMulDivOp?: (ctx: MulDivOpContext) => void;
}

