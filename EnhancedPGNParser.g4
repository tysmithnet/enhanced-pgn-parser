/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
parser grammar EnhancedPGNParser;

options {   tokenVocab = EnhancedPGNLexer; }

parse
    : block_comment
    ;

block_comment
    : BLOCK_COMMENT_START command? BLOCK_COMMENT_END
    ;

command
    : COMMAND_START COMMAND_ID command_params COMMAND_END
    ;

command_params
    : command_param (COMMA command_param)*
    ;

command_param
    : PARAM_TEXT
    | PARAM_STRING
    ;