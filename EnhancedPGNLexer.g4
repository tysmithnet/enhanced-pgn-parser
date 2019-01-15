/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
lexer grammar EnhancedPGNLexer;

STRING
    : '"' ('\\\\' | '\\"' | ~[\\"])* '"'
    ; 

MOVE_TEXT_START
    : [0-9]+ '.' '.'? '.'? -> mode(MOVE_TEXT)
    ;

mode MOVE_TEXT;

EOL_COMMENT_START
    : ';' -> pushMode(EOL_COMMENT)
    ;

MOVE_NUM
    : [0-9]+ '.' '.'? '.'?
    ;

BLOCK_COMMENT_START 
    : '{' -> pushMode(BLOCK_COMMENT)
    ;

WS
    : (' '|'\n'|'\r') -> skip
    ;

PIECE
    : [PNBRQK]
    ;

LOCATION
    : [a-h][1-8]
    ;

SHORT_CASTLE
    : 'O-O'
    ;

LONG_CASTLE
    : 'O-O-O'
    ;

ALTERNATE_LINE_START
    : '('
    ;

ALTERNATE_LINE_END
    : ')'
    ;

mode EOL_COMMENT;

EOL_COMMENT_TEXT
    : ~('\n')+
    ;

EOL_COMMENT_END
    : '\n' -> popMode
    ;

mode BLOCK_COMMENT;

COMMAND_START
    : '[%' -> pushMode(COMMAND)
    ;

BLOCK_COMMENT_END 
    : '}' -> popMode
    ;

BLOCK_COMMENT_TEXT
    : ~('['|'}')+
    ;

mode COMMAND;

COMMAND_ID
    : [a-zA-Z0-9]+ -> pushMode(COMMAND_PARAMS)
    ;

mode COMMAND_PARAMS;

COMMAND_END
    : ']' -> popMode, popMode
    ;

COMMA
    : ','
    ;

PARAM_TEXT   
    : ~(','|']')+ 
    ;
