import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { EnhancedPGNParserListener } from "./EnhancedPGNParserListener";
import { EnhancedPGNParserVisitor } from "./EnhancedPGNParserVisitor";
export declare class EnhancedPGNParser extends Parser {
    static readonly TAG_START = 1;
    static readonly STRING = 2;
    static readonly MOVE_TEXT_START = 3;
    static readonly MOVE_TEXT_START_WITH_COMMENT = 4;
    static readonly NEW_LINE = 5;
    static readonly TAG_END = 6;
    static readonly TAG_VALUE = 7;
    static readonly TAG_KEY = 8;
    static readonly TAG_SPACE = 9;
    static readonly EOL_COMMENT_START = 10;
    static readonly MOVE_NUM = 11;
    static readonly BLOCK_COMMENT_START = 12;
    static readonly WS = 13;
    static readonly PIECE = 14;
    static readonly LOCATION = 15;
    static readonly PROMOTION = 16;
    static readonly RANK = 17;
    static readonly FILE = 18;
    static readonly SHORT_CASTLE = 19;
    static readonly LONG_CASTLE = 20;
    static readonly CAPTURE_MARKER = 21;
    static readonly ALTERNATE_LINE_START = 22;
    static readonly ALTERNATE_LINE_END = 23;
    static readonly BLUNDER = 24;
    static readonly MISTAKE = 25;
    static readonly DUBIOUS_MOVE = 26;
    static readonly INTERESTING_MOVE = 27;
    static readonly GOOD_MOVE = 28;
    static readonly BRILLIANT_MOVE = 29;
    static readonly CHECK = 30;
    static readonly CHECKMATE = 31;
    static readonly WHITE_WINS = 32;
    static readonly BLACK_WINS = 33;
    static readonly DRAW = 34;
    static readonly UNKOWN_ENDING = 35;
    static readonly NAG = 36;
    static readonly EOL_COMMENT_TEXT = 37;
    static readonly EOL_COMMENT_END = 38;
    static readonly COMMAND_START = 39;
    static readonly BLOCK_COMMENT_END = 40;
    static readonly BLOCK_COMMENT_TEXT = 41;
    static readonly COMMAND_ID = 42;
    static readonly COMMAND_END = 43;
    static readonly COMMA = 44;
    static readonly PARAM_TEXT = 45;
    static readonly RULE_parse = 0;
    static readonly RULE_pgn_database = 1;
    static readonly RULE_pgn = 2;
    static readonly RULE_tag_pairs = 3;
    static readonly RULE_tag_pair = 4;
    static readonly RULE_tag_key = 5;
    static readonly RULE_tag_value = 6;
    static readonly RULE_move_text = 7;
    static readonly RULE_game_termination = 8;
    static readonly RULE_white_wins = 9;
    static readonly RULE_black_wins = 10;
    static readonly RULE_draw = 11;
    static readonly RULE_unknown_ending = 12;
    static readonly RULE_move_text_item = 13;
    static readonly RULE_turn_item = 14;
    static readonly RULE_nag = 15;
    static readonly RULE_comment = 16;
    static readonly RULE_eol_comment = 17;
    static readonly RULE_eol_comment_body = 18;
    static readonly RULE_turn = 19;
    static readonly RULE_inter_san_item = 20;
    static readonly RULE_alternate_line = 21;
    static readonly RULE_alternate_line_body = 22;
    static readonly RULE_move_num = 23;
    static readonly RULE_san = 24;
    static readonly RULE_check_like = 25;
    static readonly RULE_check = 26;
    static readonly RULE_checkmate = 27;
    static readonly RULE_move_analysis = 28;
    static readonly RULE_blunder = 29;
    static readonly RULE_mistake = 30;
    static readonly RULE_dubious_move = 31;
    static readonly RULE_interesting_move = 32;
    static readonly RULE_good_move = 33;
    static readonly RULE_brilliant_move = 34;
    static readonly RULE_capture = 35;
    static readonly RULE_pawn_capture = 36;
    static readonly RULE_piece_capture = 37;
    static readonly RULE_pawn_move = 38;
    static readonly RULE_promotion = 39;
    static readonly RULE_piece = 40;
    static readonly RULE_piece_move = 41;
    static readonly RULE_castle = 42;
    static readonly RULE_block_comment = 43;
    static readonly RULE_block_comment_body = 44;
    static readonly RULE_block_comment_text = 45;
    static readonly RULE_command = 46;
    static readonly RULE_command_id = 47;
    static readonly RULE_command_params = 48;
    static readonly RULE_command_param = 49;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    parse(): ParseContext;
    pgn_database(): Pgn_databaseContext;
    pgn(): PgnContext;
    tag_pairs(): Tag_pairsContext;
    tag_pair(): Tag_pairContext;
    tag_key(): Tag_keyContext;
    tag_value(): Tag_valueContext;
    move_text(): Move_textContext;
    game_termination(): Game_terminationContext;
    white_wins(): White_winsContext;
    black_wins(): Black_winsContext;
    draw(): DrawContext;
    unknown_ending(): Unknown_endingContext;
    move_text_item(): Move_text_itemContext;
    turn_item(): Turn_itemContext;
    nag(): NagContext;
    comment(): CommentContext;
    eol_comment(): Eol_commentContext;
    eol_comment_body(): Eol_comment_bodyContext;
    turn(): TurnContext;
    inter_san_item(): Inter_san_itemContext;
    alternate_line(): Alternate_lineContext;
    alternate_line_body(): Alternate_line_bodyContext;
    move_num(): Move_numContext;
    san(): SanContext;
    check_like(): Check_likeContext;
    check(): CheckContext;
    checkmate(): CheckmateContext;
    move_analysis(): Move_analysisContext;
    blunder(): BlunderContext;
    mistake(): MistakeContext;
    dubious_move(): Dubious_moveContext;
    interesting_move(): Interesting_moveContext;
    good_move(): Good_moveContext;
    brilliant_move(): Brilliant_moveContext;
    capture(): CaptureContext;
    pawn_capture(): Pawn_captureContext;
    piece_capture(): Piece_captureContext;
    pawn_move(): Pawn_moveContext;
    promotion(): PromotionContext;
    piece(): PieceContext;
    piece_move(): Piece_moveContext;
    castle(): CastleContext;
    block_comment(): Block_commentContext;
    block_comment_body(): Block_comment_bodyContext;
    block_comment_text(): Block_comment_textContext;
    command(): CommandContext;
    command_id(): Command_idContext;
    command_params(): Command_paramsContext;
    command_param(): Command_paramContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class ParseContext extends ParserRuleContext {
    pgn_database(): Pgn_databaseContext;
    EOF(): TerminalNode;
    NEW_LINE(): TerminalNode[];
    NEW_LINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Pgn_databaseContext extends ParserRuleContext {
    pgn(): PgnContext[];
    pgn(i: number): PgnContext;
    NEW_LINE(): TerminalNode[];
    NEW_LINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class PgnContext extends ParserRuleContext {
    move_text(): Move_textContext;
    tag_pairs(): Tag_pairsContext | undefined;
    NEW_LINE(): TerminalNode[];
    NEW_LINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Tag_pairsContext extends ParserRuleContext {
    tag_pair(): Tag_pairContext[];
    tag_pair(i: number): Tag_pairContext;
    NEW_LINE(): TerminalNode[];
    NEW_LINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Tag_pairContext extends ParserRuleContext {
    TAG_START(): TerminalNode;
    tag_key(): Tag_keyContext;
    tag_value(): Tag_valueContext;
    TAG_END(): TerminalNode;
    TAG_SPACE(): TerminalNode[];
    TAG_SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Tag_keyContext extends ParserRuleContext {
    TAG_KEY(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Tag_valueContext extends ParserRuleContext {
    TAG_VALUE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Move_textContext extends ParserRuleContext {
    game_termination(): Game_terminationContext;
    move_text_item(): Move_text_itemContext[];
    move_text_item(i: number): Move_text_itemContext;
    comment(): CommentContext[];
    comment(i: number): CommentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Game_terminationContext extends ParserRuleContext {
    white_wins(): White_winsContext | undefined;
    black_wins(): Black_winsContext | undefined;
    draw(): DrawContext | undefined;
    unknown_ending(): Unknown_endingContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class White_winsContext extends ParserRuleContext {
    WHITE_WINS(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Black_winsContext extends ParserRuleContext {
    BLACK_WINS(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class DrawContext extends ParserRuleContext {
    DRAW(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Unknown_endingContext extends ParserRuleContext {
    UNKOWN_ENDING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Move_text_itemContext extends ParserRuleContext {
    turn(): TurnContext | undefined;
    comment(): CommentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Turn_itemContext extends ParserRuleContext {
    nag(): NagContext | undefined;
    comment(): CommentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class NagContext extends ParserRuleContext {
    NAG(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class CommentContext extends ParserRuleContext {
    block_comment(): Block_commentContext | undefined;
    eol_comment(): Eol_commentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Eol_commentContext extends ParserRuleContext {
    EOL_COMMENT_START(): TerminalNode;
    eol_comment_body(): Eol_comment_bodyContext;
    EOL_COMMENT_END(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Eol_comment_bodyContext extends ParserRuleContext {
    EOL_COMMENT_TEXT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class TurnContext extends ParserRuleContext {
    move_num(): Move_numContext;
    san(): SanContext[];
    san(i: number): SanContext;
    turn_item(): Turn_itemContext[];
    turn_item(i: number): Turn_itemContext;
    alternate_line(): Alternate_lineContext[];
    alternate_line(i: number): Alternate_lineContext;
    nag(): NagContext[];
    nag(i: number): NagContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Inter_san_itemContext extends ParserRuleContext {
    comment(): CommentContext | undefined;
    alternate_line(): Alternate_lineContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Alternate_lineContext extends ParserRuleContext {
    ALTERNATE_LINE_START(): TerminalNode;
    ALTERNATE_LINE_END(): TerminalNode;
    turn(): TurnContext[];
    turn(i: number): TurnContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Alternate_line_bodyContext extends ParserRuleContext {
    move_num(): Move_numContext;
    san(): SanContext;
    comment(): CommentContext[];
    comment(i: number): CommentContext;
    alternate_line(): Alternate_lineContext[];
    alternate_line(i: number): Alternate_lineContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Move_numContext extends ParserRuleContext {
    MOVE_TEXT_START(): TerminalNode | undefined;
    MOVE_NUM(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class SanContext extends ParserRuleContext {
    capture(): CaptureContext | undefined;
    check_like(): Check_likeContext | undefined;
    move_analysis(): Move_analysisContext | undefined;
    pawn_move(): Pawn_moveContext | undefined;
    piece_move(): Piece_moveContext | undefined;
    castle(): CastleContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Check_likeContext extends ParserRuleContext {
    check(): CheckContext | undefined;
    checkmate(): CheckmateContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class CheckContext extends ParserRuleContext {
    CHECK(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class CheckmateContext extends ParserRuleContext {
    CHECKMATE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Move_analysisContext extends ParserRuleContext {
    blunder(): BlunderContext | undefined;
    mistake(): MistakeContext | undefined;
    dubious_move(): Dubious_moveContext | undefined;
    interesting_move(): Interesting_moveContext | undefined;
    good_move(): Good_moveContext | undefined;
    brilliant_move(): Brilliant_moveContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class BlunderContext extends ParserRuleContext {
    BLUNDER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class MistakeContext extends ParserRuleContext {
    MISTAKE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Dubious_moveContext extends ParserRuleContext {
    DUBIOUS_MOVE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Interesting_moveContext extends ParserRuleContext {
    INTERESTING_MOVE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Good_moveContext extends ParserRuleContext {
    GOOD_MOVE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Brilliant_moveContext extends ParserRuleContext {
    BRILLIANT_MOVE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class CaptureContext extends ParserRuleContext {
    pawn_capture(): Pawn_captureContext | undefined;
    piece_capture(): Piece_captureContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Pawn_captureContext extends ParserRuleContext {
    FILE(): TerminalNode;
    CAPTURE_MARKER(): TerminalNode;
    LOCATION(): TerminalNode | undefined;
    promotion(): PromotionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Piece_captureContext extends ParserRuleContext {
    piece(): PieceContext;
    CAPTURE_MARKER(): TerminalNode;
    LOCATION(): TerminalNode;
    FILE(): TerminalNode | undefined;
    RANK(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Pawn_moveContext extends ParserRuleContext {
    LOCATION(): TerminalNode | undefined;
    promotion(): PromotionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class PromotionContext extends ParserRuleContext {
    LOCATION(): TerminalNode;
    PROMOTION(): TerminalNode;
    piece(): PieceContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class PieceContext extends ParserRuleContext {
    PIECE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Piece_moveContext extends ParserRuleContext {
    piece(): PieceContext;
    LOCATION(): TerminalNode;
    RANK(): TerminalNode | undefined;
    FILE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class CastleContext extends ParserRuleContext {
    LONG_CASTLE(): TerminalNode | undefined;
    SHORT_CASTLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Block_commentContext extends ParserRuleContext {
    block_comment_body(): Block_comment_bodyContext;
    BLOCK_COMMENT_END(): TerminalNode;
    BLOCK_COMMENT_START(): TerminalNode | undefined;
    MOVE_TEXT_START_WITH_COMMENT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Block_comment_bodyContext extends ParserRuleContext {
    block_comment_text(): Block_comment_textContext[];
    block_comment_text(i: number): Block_comment_textContext;
    command(): CommandContext[];
    command(i: number): CommandContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Block_comment_textContext extends ParserRuleContext {
    BLOCK_COMMENT_TEXT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class CommandContext extends ParserRuleContext {
    COMMAND_START(): TerminalNode;
    command_id(): Command_idContext;
    command_params(): Command_paramsContext;
    COMMAND_END(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Command_idContext extends ParserRuleContext {
    COMMAND_ID(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Command_paramsContext extends ParserRuleContext {
    command_param(): Command_paramContext[];
    command_param(i: number): Command_paramContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
export declare class Command_paramContext extends ParserRuleContext {
    PARAM_TEXT(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: EnhancedPGNParserListener): void;
    exitRule(listener: EnhancedPGNParserListener): void;
    accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result;
}
