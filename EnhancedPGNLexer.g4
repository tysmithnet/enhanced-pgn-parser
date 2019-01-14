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
