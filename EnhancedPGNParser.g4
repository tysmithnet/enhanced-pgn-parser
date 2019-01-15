/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
parser grammar EnhancedPGNParser;

options {   tokenVocab = EnhancedPGNLexer; }

parse
    : move_text
    ;

move_text
    : move_text_item*
    ;

move_text_item
    : turn
    | block_comment
    ;

turn
    : move_num san san
    ;

alternate_line
    : ALTERNATE_LINE_START alternate_line_body ALTERNATE_LINE_END
    ;

alternate_line_body
    : move_num san
    ;

move_num
    : MOVE_TEXT_START
    | MOVE_NUM
    ;

san
    : pawn_move
    | piece_move
    | castle
    ;

pawn_move
    : LOCATION
    ;

piece_move
    : PIECE LOCATION
    ;

castle
    : LONG_CASTLE
    | SHORT_CASTLE
    ;

block_comment
    : BLOCK_COMMENT_START block_comment_body BLOCK_COMMENT_END
    ;

block_comment_body
    : block_comment_text? command* block_comment_text?
    ;

block_comment_text
    : BLOCK_COMMENT_TEXT
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