/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
lexer grammar EnhancedPGNLexer;

BLOCK_COMMENT_START 
    : '{' -> pushMode(BLOCK_COMMENT)
    ;

mode BLOCK_COMMENT;

BLOCK_COMMENT_END 
    : '}' -> popMode
    ;

COMMAND_START
    : '[%' -> pushMode(COMMAND)
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
PARAM_STRING
    : '"' ('""'|~'"')* '"'
    ; 
