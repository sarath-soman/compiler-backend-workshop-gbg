// Generated from grammar/Expr.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import ExprListener from "./ExprListener.js";
import ExprVisitor from "./ExprVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ExprParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly INT = 21;
	public static readonly ID = 22;
	public static readonly WS = 23;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_andOp = 3;
	public static readonly RULE_orOp = 4;
	public static readonly RULE_relationalOp = 5;
	public static readonly RULE_addSubOp = 6;
	public static readonly RULE_mulDivOp = 7;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'if'", "'('", 
                                                            "')'", "'else'", 
                                                            "'print'", "'='", 
                                                            "'!'", "'&&'", 
                                                            "'||'", "'=='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "INT", 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "expr", "andOp", "orOp", "relationalOp", "addSubOp", "mulDivOp",
	];
	public get grammarFileName(): string { return "Expr.g4"; }
	public get literalNames(): (string | null)[] { return ExprParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ExprParser.symbolicNames; }
	public get ruleNames(): string[] { return ExprParser.ruleNames; }
	public get serializedATN(): number[] { return ExprParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ExprParser._ATN, ExprParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ExprParser.RULE_prog);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 16;
					this.stat();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 19;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ExprParser.RULE_stat);
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new ExprStatContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 21;
				this.expr(0);
				this.state = 22;
				this.match(ExprParser.T__0);
				}
				break;
			case 2:
				localctx = new IfElseStatContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 24;
				this.match(ExprParser.T__1);
				this.state = 25;
				this.match(ExprParser.T__2);
				this.state = 26;
				this.expr(0);
				this.state = 27;
				this.match(ExprParser.T__3);
				this.state = 28;
				this.prog();
				this.state = 31;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 29;
					this.match(ExprParser.T__4);
					this.state = 30;
					this.prog();
					}
					break;
				}
				}
				break;
			case 3:
				localctx = new PrintStatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 33;
				this.match(ExprParser.T__5);
				this.state = 34;
				this.match(ExprParser.T__2);
				this.state = 35;
				this.expr(0);
				this.state = 36;
				this.match(ExprParser.T__3);
				this.state = 37;
				this.match(ExprParser.T__0);
				}
				break;
			case 4:
				localctx = new AssignStatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 39;
				this.match(ExprParser.ID);
				this.state = 40;
				this.match(ExprParser.T__6);
				this.state = 41;
				this.expr(0);
				this.state = 42;
				this.match(ExprParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, ExprParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				localctx = new ParensContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 47;
				this.match(ExprParser.T__2);
				this.state = 48;
				this.expr(0);
				this.state = 49;
				this.match(ExprParser.T__3);
				}
				break;
			case 21:
				{
				localctx = new IntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 51;
				this.match(ExprParser.INT);
				}
				break;
			case 22:
				{
				localctx = new VarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 52;
				this.match(ExprParser.ID);
				}
				break;
			case 8:
				{
				localctx = new NotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 53;
				this.match(ExprParser.T__7);
				this.state = 54;
				this.expr(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 79;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 77;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
						this.state = 57;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 58;
						this.andOp();
						this.state = 59;
						this.expr(10);
						}
						break;
					case 2:
						{
						localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
						this.state = 61;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 62;
						this.orOp();
						this.state = 63;
						this.expr(9);
						}
						break;
					case 3:
						{
						localctx = new RelationalContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
						this.state = 65;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 66;
						this.relationalOp();
						this.state = 67;
						this.expr(8);
						}
						break;
					case 4:
						{
						localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
						this.state = 69;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 70;
						this.mulDivOp();
						this.state = 71;
						this.expr(7);
						}
						break;
					case 5:
						{
						localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
						this.state = 73;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 74;
						this.addSubOp();
						this.state = 75;
						this.expr(6);
						}
						break;
					}
					}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andOp(): AndOpContext {
		let localctx: AndOpContext = new AndOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ExprParser.RULE_andOp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.match(ExprParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orOp(): OrOpContext {
		let localctx: OrOpContext = new OrOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ExprParser.RULE_orOp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(ExprParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalOp(): RelationalOpContext {
		let localctx: RelationalOpContext = new RelationalOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ExprParser.RULE_relationalOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 129024) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addSubOp(): AddSubOpContext {
		let localctx: AddSubOpContext = new AddSubOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ExprParser.RULE_addSubOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			_la = this._input.LA(1);
			if(!(_la===17 || _la===18)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mulDivOp(): MulDivOpContext {
		let localctx: MulDivOpContext = new MulDivOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ExprParser.RULE_mulDivOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if(!(_la===19 || _la===20)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,23,93,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,
	0,12,0,19,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,45,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,3,2,56,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,78,8,2,10,2,12,2,81,9,2,1,3,1,3,1,4,1,
	4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,1,4,8,0,2,4,6,8,10,12,14,0,3,1,0,11,16,
	1,0,17,18,1,0,19,20,97,0,17,1,0,0,0,2,44,1,0,0,0,4,55,1,0,0,0,6,82,1,0,
	0,0,8,84,1,0,0,0,10,86,1,0,0,0,12,88,1,0,0,0,14,90,1,0,0,0,16,18,3,2,1,
	0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,
	21,22,3,4,2,0,22,23,5,1,0,0,23,45,1,0,0,0,24,25,5,2,0,0,25,26,5,3,0,0,26,
	27,3,4,2,0,27,28,5,4,0,0,28,31,3,0,0,0,29,30,5,5,0,0,30,32,3,0,0,0,31,29,
	1,0,0,0,31,32,1,0,0,0,32,45,1,0,0,0,33,34,5,6,0,0,34,35,5,3,0,0,35,36,3,
	4,2,0,36,37,5,4,0,0,37,38,5,1,0,0,38,45,1,0,0,0,39,40,5,22,0,0,40,41,5,
	7,0,0,41,42,3,4,2,0,42,43,5,1,0,0,43,45,1,0,0,0,44,21,1,0,0,0,44,24,1,0,
	0,0,44,33,1,0,0,0,44,39,1,0,0,0,45,3,1,0,0,0,46,47,6,2,-1,0,47,48,5,3,0,
	0,48,49,3,4,2,0,49,50,5,4,0,0,50,56,1,0,0,0,51,56,5,21,0,0,52,56,5,22,0,
	0,53,54,5,8,0,0,54,56,3,4,2,1,55,46,1,0,0,0,55,51,1,0,0,0,55,52,1,0,0,0,
	55,53,1,0,0,0,56,79,1,0,0,0,57,58,10,9,0,0,58,59,3,6,3,0,59,60,3,4,2,10,
	60,78,1,0,0,0,61,62,10,8,0,0,62,63,3,8,4,0,63,64,3,4,2,9,64,78,1,0,0,0,
	65,66,10,7,0,0,66,67,3,10,5,0,67,68,3,4,2,8,68,78,1,0,0,0,69,70,10,6,0,
	0,70,71,3,14,7,0,71,72,3,4,2,7,72,78,1,0,0,0,73,74,10,5,0,0,74,75,3,12,
	6,0,75,76,3,4,2,6,76,78,1,0,0,0,77,57,1,0,0,0,77,61,1,0,0,0,77,65,1,0,0,
	0,77,69,1,0,0,0,77,73,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,
	80,5,1,0,0,0,81,79,1,0,0,0,82,83,5,9,0,0,83,7,1,0,0,0,84,85,5,10,0,0,85,
	9,1,0,0,0,86,87,7,0,0,0,87,11,1,0,0,0,88,89,7,1,0,0,89,13,1,0,0,0,90,91,
	7,2,0,0,91,15,1,0,0,0,6,19,31,44,55,77,79];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExprParser.__ATN) {
			ExprParser.__ATN = new ATNDeserializer().deserialize(ExprParser._serializedATN);
		}

		return ExprParser.__ATN;
	}


	static DecisionsToDFA = ExprParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_prog;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_stat;
	}
	public copyFrom(ctx: StatContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprStatContext extends StatContext {
	constructor(parser: ExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterExprStat) {
	 		listener.enterExprStat(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitExprStat) {
	 		listener.exitExprStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitExprStat) {
			return visitor.visitExprStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfElseStatContext extends StatContext {
	constructor(parser: ExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public prog_list(): ProgContext[] {
		return this.getTypedRuleContexts(ProgContext) as ProgContext[];
	}
	public prog(i: number): ProgContext {
		return this.getTypedRuleContext(ProgContext, i) as ProgContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterIfElseStat) {
	 		listener.enterIfElseStat(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitIfElseStat) {
	 		listener.exitIfElseStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitIfElseStat) {
			return visitor.visitIfElseStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignStatContext extends StatContext {
	constructor(parser: ExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(ExprParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterAssignStat) {
	 		listener.enterAssignStat(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitAssignStat) {
	 		listener.exitAssignStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAssignStat) {
			return visitor.visitAssignStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintStatContext extends StatContext {
	constructor(parser: ExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterPrintStat) {
	 		listener.enterPrintStat(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitPrintStat) {
	 		listener.exitPrintStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitPrintStat) {
			return visitor.visitPrintStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class NotContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterNot) {
	 		listener.enterNot(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitNot) {
	 		listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public orOp(): OrOpContext {
		return this.getTypedRuleContext(OrOpContext, 0) as OrOpContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterOr) {
	 		listener.enterOr(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitOr) {
	 		listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public mulDivOp(): MulDivOpContext {
		return this.getTypedRuleContext(MulDivOpContext, 0) as MulDivOpContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterMulDiv) {
	 		listener.enterMulDiv(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitMulDiv) {
	 		listener.exitMulDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitMulDiv) {
			return visitor.visitMulDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public addSubOp(): AddSubOpContext {
		return this.getTypedRuleContext(AddSubOpContext, 0) as AddSubOpContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterAddSub) {
	 		listener.enterAddSub(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitAddSub) {
	 		listener.exitAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAddSub) {
			return visitor.visitAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterParens) {
	 		listener.enterParens(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitParens) {
	 		listener.exitParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitParens) {
			return visitor.visitParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(ExprParser.ID, 0);
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterVar) {
	 		listener.enterVar(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitVar) {
	 		listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public andOp(): AndOpContext {
		return this.getTypedRuleContext(AndOpContext, 0) as AndOpContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterAnd) {
	 		listener.enterAnd(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitAnd) {
	 		listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public relationalOp(): RelationalOpContext {
		return this.getTypedRuleContext(RelationalOpContext, 0) as RelationalOpContext;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterRelational) {
	 		listener.enterRelational(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitRelational) {
	 		listener.exitRelational(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitRelational) {
			return visitor.visitRelational(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ExprContext {
	constructor(parser: ExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(ExprParser.INT, 0);
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterInt) {
	 		listener.enterInt(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitInt) {
	 		listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndOpContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_andOp;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterAndOp) {
	 		listener.enterAndOp(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitAndOp) {
	 		listener.exitAndOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAndOp) {
			return visitor.visitAndOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrOpContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_orOp;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterOrOp) {
	 		listener.enterOrOp(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitOrOp) {
	 		listener.exitOrOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitOrOp) {
			return visitor.visitOrOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalOpContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_relationalOp;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterRelationalOp) {
	 		listener.enterRelationalOp(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitRelationalOp) {
	 		listener.exitRelationalOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitRelationalOp) {
			return visitor.visitRelationalOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddSubOpContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_addSubOp;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterAddSubOp) {
	 		listener.enterAddSubOp(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitAddSubOp) {
	 		listener.exitAddSubOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitAddSubOp) {
			return visitor.visitAddSubOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulDivOpContext extends ParserRuleContext {
	constructor(parser?: ExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ExprParser.RULE_mulDivOp;
	}
	public enterRule(listener: ExprListener): void {
	    if(listener.enterMulDivOp) {
	 		listener.enterMulDivOp(this);
		}
	}
	public exitRule(listener: ExprListener): void {
	    if(listener.exitMulDivOp) {
	 		listener.exitMulDivOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExprVisitor<Result>): Result {
		if (visitor.visitMulDivOp) {
			return visitor.visitMulDivOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
