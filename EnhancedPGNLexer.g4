/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
lexer grammar EnhancedPGNLexer;

BLOCK_COMMENT_START 
    : '{' -> pushMode(BLOCK_COMMENT)
    ;

STRING
    : '"' ('\\\\' | '\\"' | ~[\\"])* '"'
    ; 

ALTERNATE_LINE_START
    : '(' -> pushMode(ALTERNATE_LINE)
    ;

mode ALTERNATE_LINE;

PIECE
    : [PNBRQK]
    ;

FILE
    : 'a'..'g'
    ;

RANK
    : [1-8]
    ;

CAPTURES
    : 'x'
    ;

MOVE_ANALYSIS
    : BLUNDER
    | MISTAKE
    | DUBIOUS_MOVE
    | INTERESTING_MOVE
    | GOOD_MOVE
    | BRILLIANT_MOVE
    ;

CHECK_LIKE
    : CHECK
    | CHECKMATE
    ;

CHECK
    : '+'
    ;

CHECKMATE
    : '#'
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

LOCATION
    : FILE RANK
    ;

PERIOD
    : '.'
    ;

SAN
    : PIECE? FILE? RANK? CAPTURES? LOCATION CHECK_LIKE? MOVE_ANALYSIS?
    ;

PAWN_MOVE
    : [abcdefg] [1-8]
    ;

PIECE_MOVE
    : PIECE LOCATION
    ;

MOVE_NUM_INDICATOR
    : [0-9]+ PERIOD
    | [0-9]+ PERIOD PERIOD PERIOD
    ;

ALTERNATE_LINE_END
    : ')' -> popMode
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
