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
    | comment
    ;

comment
    : block_comment
    | eol_comment
    ;

eol_comment
    : EOL_COMMENT_START eol_comment_body EOL_COMMENT_END
    ;

eol_comment_body
    : EOL_COMMENT_TEXT
    ;

turn
    : comment* move_num comment* san comment* alternate_line* comment* san? comment* alternate_line* comment*
    ;

inter_san_item
    : comment
    | alternate_line
    ;

alternate_line
    : ALTERNATE_LINE_START turn+ ALTERNATE_LINE_END
    ;

alternate_line_body
    : move_num comment* san alternate_line*
    ;

move_num
    : MOVE_TEXT_START
    | MOVE_NUM
    ;

san
    : capture move_extra?
    | pawn_move move_extra?
    | piece_move move_extra?
    | castle move_analysis?
    ;

move_extra
    : check move_analysis?
    | checkmate move_analysis?
    ;

check
    : CHECK
    ;

checkmate
    : CHECKMATE
    ;

move_analysis
    : blunder
    | mistake
    | dubious_move
    | interesting_move
    | good_move
    | brilliant_move
    ;

blunder
    : BLUNDER
    ;

mistake
    : MISTAKE
    ;

dubious_move
    : DUBIOUS_MOVE
    ;

interesting_move
    : INTERESTING_MOVE
    ;

good_move
    : GOOD_MOVE
    ;

brilliant_move
    : BRILLIANT_MOVE
    ;

capture
    : pawn_capture
    | piece_capture
    ;

pawn_capture
    : FILE CAPTURE_MARKER LOCATION
    ;

piece_capture
    : PIECE FILE? RANK? CAPTURE_MARKER LOCATION
    ;

pawn_move
    : LOCATION
    ;

piece_move
    : PIECE RANK? FILE? LOCATION
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