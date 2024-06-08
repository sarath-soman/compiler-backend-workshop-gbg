import { CommonTokenStream, CharStream, ParseTreeWalker } from 'antlr4';
import ExprLexer from './parser-gen/grammar/ExprLexer';
import ExprParser from './parser-gen/grammar/ExprParser';
import { ExprInterpreter, ExprToJsListener } from './exp-interpreter';

const startTIme = new Date().getTime();
const input = 'if ( 10 > 5) print (1 + 2 * 3);  print (1 + 10/2 * 3); else print (1);'; // replace with your input string
const chars = new CharStream(input);
const lexer = new ExprLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new ExprParser(tokens);

parser.buildParseTrees = true;
const tree = parser.prog(); // replace 'expr' with your root rule

// console.log(tree.toStringTree(parser.ruleNames, parser));

// ParseTreeWalker.DEFAULT.walk(new ExprToJsListener(), tree);
tree.accept(new ExprInterpreter());
console.log(`Time taken: ${new Date().getTime() - startTIme}ms`);
