// Generated from grammar/Expr.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ExprVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by the `ExprStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprStat?: (ctx: ExprStatContext) => Result;
	/**
	 * Visit a parse tree produced by the `IfElseStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStat?: (ctx: IfElseStatContext) => Result;
	/**
	 * Visit a parse tree produced by the `PrintStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStat?: (ctx: PrintStatContext) => Result;
	/**
	 * Visit a parse tree produced by the `AssignStat`
	 * labeled alternative in `ExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStat?: (ctx: AssignStatContext) => Result;
	/**
	 * Visit a parse tree produced by the `Not`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;
	/**
	 * Visit a parse tree produced by the `Or`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;
	/**
	 * Visit a parse tree produced by the `MulDiv`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDiv?: (ctx: MulDivContext) => Result;
	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;
	/**
	 * Visit a parse tree produced by the `Parens`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;
	/**
	 * Visit a parse tree produced by the `Var`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
	/**
	 * Visit a parse tree produced by the `And`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;
	/**
	 * Visit a parse tree produced by the `Relational`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational?: (ctx: RelationalContext) => Result;
	/**
	 * Visit a parse tree produced by the `Int`
	 * labeled alternative in `ExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
	/**
	 * Visit a parse tree produced by `ExprParser.andOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndOp?: (ctx: AndOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ExprParser.orOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrOp?: (ctx: OrOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ExprParser.relationalOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOp?: (ctx: RelationalOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ExprParser.addSubOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubOp?: (ctx: AddSubOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ExprParser.mulDivOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivOp?: (ctx: MulDivOpContext) => Result;
}

