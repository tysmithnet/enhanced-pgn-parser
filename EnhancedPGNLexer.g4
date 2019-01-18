/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
lexer grammar EnhancedPGNLexer;

TAG_START
    : '[' -> pushMode(TAG_PAIRS)
    ;

STRING
    : '"' ('\\\\' | '\\"' | ~[\\"])* '"'
    ; 

MOVE_TEXT_START
    : [0-9]+ '.' '.'? '.'? -> pushMode(MOVE_TEXT)
    ;

MOVE_TEXT_START_WITH_COMMENT
    : '{' -> pushMode(MOVE_TEXT), pushMode(BLOCK_COMMENT)
    ;

NEW_LINE
    : '\n'
    ;

mode TAG_PAIRS;

TAG_END
    : ']' -> popMode
    ;

TAG_VALUE
    : STRING
    ;

TAG_KEY
    : [a-zA-Z0-9_]+
    ;

TAG_SPACE
    : ' '
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
    : [NBRQK]
    ;

LOCATION
    : FILE RANK
    ;

PROMOTION
    : '='
    ;

RANK
    : [1-8]
    ;

FILE
    : [a-h]
    ;

SHORT_CASTLE
    : 'O-O'
    ;

LONG_CASTLE
    : 'O-O-O'
    ;

CAPTURE_MARKER
    : 'x'
    ;

ALTERNATE_LINE_START
    : '('
    ;

ALTERNATE_LINE_END
    : ')'
    ;

BLUNDER
    : '??'
    ;

MISTAKE
    : '?'
    ;

DUBIOUS_MOVE
    : '?!'
    ;

INTERESTING_MOVE
    : '!?'
    ;

GOOD_MOVE
    : '!'
    ;

BRILLIANT_MOVE
    : '!!'
    ;

CHECK
    : '+'
    ;

CHECKMATE
    : '#'
    ;

WHITE_WINS
    : '1-0' -> popMode
    ;

BLACK_WINS
    : '0-1' -> popMode
    ;

DRAW
    : '1/2-1/2' -> popMode
    ;

UNKOWN_ENDING
    : '*' -> popMode
    ;

NAG
    : '$' [0-9]+
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
