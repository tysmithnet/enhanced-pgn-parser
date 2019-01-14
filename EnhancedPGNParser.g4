/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
parser grammar EnhancedPGNParser;

options {   tokenVocab = EnhancedPGNLexer; }

parse
    : alternate_line
    ;

move_num_indicator
    : MOVE_NUM_INDICATOR
    ;

alternate_line
    : ALTERNATE_LINE_START move_num_indicator san san? (move_num_indicator san san?)? ALTERNATE_LINE_END
    ;

san
    : PAWN_MOVE
    ;

pawn_move
    : PAWN_MOVE
    ;
 
piece_move
    : PIECE_MOVE
    ;

block_comment
    : BLOCK_COMMENT_START block_comment_body BLOCK_COMMENT_END
    ;

block_comment_body
    : BLOCK_COMMENT_TEXT? command* BLOCK_COMMENT_TEXT?
    ;

command
    : COMMAND_START command_id command_params COMMAND_END
    ;

command_id
    : COMMAND_ID
    ;

command_params
    : command_param (COMMA command_param)*
    ;

command_param
    : PARAM_TEXT
    | STRING
    ;