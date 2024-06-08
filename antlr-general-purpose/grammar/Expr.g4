grammar Expr;

// Parser rules
prog:   stat+ ;
stat:   expr ';'                   # ExprStat
    |   'if' '(' expr ')' prog ('else' prog)?  # IfElseStat
    |   'print' '(' expr ')' ';'   # PrintStat
    |   ID '=' expr ';'            # AssignStat
    ;

expr:   expr andOp expr            # And
    |   expr orOp expr             # Or
    |   expr relationalOp expr     # Relational    
    |   expr mulDivOp expr         # MulDiv
    |   expr addSubOp expr         # AddSub
    |   '(' expr ')'               # Parens
    |   INT                        # Int
    |   ID                         # Var
    |   '!' expr                   # Not
    ;

andOp: '&&';
orOp: '||';
relationalOp: '==' | '!=' | '<' | '>' | '<=' | '>=';
addSubOp: '+' | '-';
mulDivOp: '*' | '/';

// Lexer rules
INT :   [0-9]+ ;                  // Matches integers
ID  :   [a-zA-Z_][a-zA-Z_0-9]* ;  // Matches identifiers
WS  :   [ \t\r\n]+ -> skip ;      // Skips whitespaces
