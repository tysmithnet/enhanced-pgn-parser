import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseContext } from "./EnhancedPGNParser";
import { Pgn_databaseContext } from "./EnhancedPGNParser";
import { PgnContext } from "./EnhancedPGNParser";
import { Tag_pairsContext } from "./EnhancedPGNParser";
import { Tag_pairContext } from "./EnhancedPGNParser";
import { Tag_keyContext } from "./EnhancedPGNParser";
import { Tag_valueContext } from "./EnhancedPGNParser";
import { Move_textContext } from "./EnhancedPGNParser";
import { Game_terminationContext } from "./EnhancedPGNParser";
import { White_winsContext } from "./EnhancedPGNParser";
import { Black_winsContext } from "./EnhancedPGNParser";
import { DrawContext } from "./EnhancedPGNParser";
import { Unknown_endingContext } from "./EnhancedPGNParser";
import { Move_text_itemContext } from "./EnhancedPGNParser";
import { Turn_itemContext } from "./EnhancedPGNParser";
import { NagContext } from "./EnhancedPGNParser";
import { CommentContext } from "./EnhancedPGNParser";
import { Eol_commentContext } from "./EnhancedPGNParser";
import { Eol_comment_bodyContext } from "./EnhancedPGNParser";
import { TurnContext } from "./EnhancedPGNParser";
import { Inter_san_itemContext } from "./EnhancedPGNParser";
import { Alternate_lineContext } from "./EnhancedPGNParser";
import { Alternate_line_bodyContext } from "./EnhancedPGNParser";
import { Move_numContext } from "./EnhancedPGNParser";
import { SanContext } from "./EnhancedPGNParser";
import { Check_likeContext } from "./EnhancedPGNParser";
import { CheckContext } from "./EnhancedPGNParser";
import { CheckmateContext } from "./EnhancedPGNParser";
import { Move_analysisContext } from "./EnhancedPGNParser";
import { BlunderContext } from "./EnhancedPGNParser";
import { MistakeContext } from "./EnhancedPGNParser";
import { Dubious_moveContext } from "./EnhancedPGNParser";
import { Interesting_moveContext } from "./EnhancedPGNParser";
import { Good_moveContext } from "./EnhancedPGNParser";
import { Brilliant_moveContext } from "./EnhancedPGNParser";
import { CaptureContext } from "./EnhancedPGNParser";
import { Pawn_captureContext } from "./EnhancedPGNParser";
import { Piece_captureContext } from "./EnhancedPGNParser";
import { Pawn_moveContext } from "./EnhancedPGNParser";
import { PromotionContext } from "./EnhancedPGNParser";
import { PieceContext } from "./EnhancedPGNParser";
import { Piece_moveContext } from "./EnhancedPGNParser";
import { CastleContext } from "./EnhancedPGNParser";
import { Block_commentContext } from "./EnhancedPGNParser";
import { Block_comment_bodyContext } from "./EnhancedPGNParser";
import { Block_comment_textContext } from "./EnhancedPGNParser";
import { CommandContext } from "./EnhancedPGNParser";
import { Command_idContext } from "./EnhancedPGNParser";
import { Command_paramsContext } from "./EnhancedPGNParser";
import { Command_paramContext } from "./EnhancedPGNParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `EnhancedPGNParser`.
 */
export interface EnhancedPGNParserListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.parse`.
     * @param ctx the parse tree
     */
    enterParse?: (ctx: ParseContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.parse`.
     * @param ctx the parse tree
     */
    exitParse?: (ctx: ParseContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.pgn_database`.
     * @param ctx the parse tree
     */
    enterPgn_database?: (ctx: Pgn_databaseContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.pgn_database`.
     * @param ctx the parse tree
     */
    exitPgn_database?: (ctx: Pgn_databaseContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.pgn`.
     * @param ctx the parse tree
     */
    enterPgn?: (ctx: PgnContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.pgn`.
     * @param ctx the parse tree
     */
    exitPgn?: (ctx: PgnContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.tag_pairs`.
     * @param ctx the parse tree
     */
    enterTag_pairs?: (ctx: Tag_pairsContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.tag_pairs`.
     * @param ctx the parse tree
     */
    exitTag_pairs?: (ctx: Tag_pairsContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.tag_pair`.
     * @param ctx the parse tree
     */
    enterTag_pair?: (ctx: Tag_pairContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.tag_pair`.
     * @param ctx the parse tree
     */
    exitTag_pair?: (ctx: Tag_pairContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.tag_key`.
     * @param ctx the parse tree
     */
    enterTag_key?: (ctx: Tag_keyContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.tag_key`.
     * @param ctx the parse tree
     */
    exitTag_key?: (ctx: Tag_keyContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.tag_value`.
     * @param ctx the parse tree
     */
    enterTag_value?: (ctx: Tag_valueContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.tag_value`.
     * @param ctx the parse tree
     */
    exitTag_value?: (ctx: Tag_valueContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.move_text`.
     * @param ctx the parse tree
     */
    enterMove_text?: (ctx: Move_textContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.move_text`.
     * @param ctx the parse tree
     */
    exitMove_text?: (ctx: Move_textContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.game_termination`.
     * @param ctx the parse tree
     */
    enterGame_termination?: (ctx: Game_terminationContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.game_termination`.
     * @param ctx the parse tree
     */
    exitGame_termination?: (ctx: Game_terminationContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.white_wins`.
     * @param ctx the parse tree
     */
    enterWhite_wins?: (ctx: White_winsContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.white_wins`.
     * @param ctx the parse tree
     */
    exitWhite_wins?: (ctx: White_winsContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.black_wins`.
     * @param ctx the parse tree
     */
    enterBlack_wins?: (ctx: Black_winsContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.black_wins`.
     * @param ctx the parse tree
     */
    exitBlack_wins?: (ctx: Black_winsContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.draw`.
     * @param ctx the parse tree
     */
    enterDraw?: (ctx: DrawContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.draw`.
     * @param ctx the parse tree
     */
    exitDraw?: (ctx: DrawContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.unknown_ending`.
     * @param ctx the parse tree
     */
    enterUnknown_ending?: (ctx: Unknown_endingContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.unknown_ending`.
     * @param ctx the parse tree
     */
    exitUnknown_ending?: (ctx: Unknown_endingContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.move_text_item`.
     * @param ctx the parse tree
     */
    enterMove_text_item?: (ctx: Move_text_itemContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.move_text_item`.
     * @param ctx the parse tree
     */
    exitMove_text_item?: (ctx: Move_text_itemContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.turn_item`.
     * @param ctx the parse tree
     */
    enterTurn_item?: (ctx: Turn_itemContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.turn_item`.
     * @param ctx the parse tree
     */
    exitTurn_item?: (ctx: Turn_itemContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.nag`.
     * @param ctx the parse tree
     */
    enterNag?: (ctx: NagContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.nag`.
     * @param ctx the parse tree
     */
    exitNag?: (ctx: NagContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.eol_comment`.
     * @param ctx the parse tree
     */
    enterEol_comment?: (ctx: Eol_commentContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.eol_comment`.
     * @param ctx the parse tree
     */
    exitEol_comment?: (ctx: Eol_commentContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.eol_comment_body`.
     * @param ctx the parse tree
     */
    enterEol_comment_body?: (ctx: Eol_comment_bodyContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.eol_comment_body`.
     * @param ctx the parse tree
     */
    exitEol_comment_body?: (ctx: Eol_comment_bodyContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.turn`.
     * @param ctx the parse tree
     */
    enterTurn?: (ctx: TurnContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.turn`.
     * @param ctx the parse tree
     */
    exitTurn?: (ctx: TurnContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.inter_san_item`.
     * @param ctx the parse tree
     */
    enterInter_san_item?: (ctx: Inter_san_itemContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.inter_san_item`.
     * @param ctx the parse tree
     */
    exitInter_san_item?: (ctx: Inter_san_itemContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.alternate_line`.
     * @param ctx the parse tree
     */
    enterAlternate_line?: (ctx: Alternate_lineContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.alternate_line`.
     * @param ctx the parse tree
     */
    exitAlternate_line?: (ctx: Alternate_lineContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.alternate_line_body`.
     * @param ctx the parse tree
     */
    enterAlternate_line_body?: (ctx: Alternate_line_bodyContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.alternate_line_body`.
     * @param ctx the parse tree
     */
    exitAlternate_line_body?: (ctx: Alternate_line_bodyContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.move_num`.
     * @param ctx the parse tree
     */
    enterMove_num?: (ctx: Move_numContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.move_num`.
     * @param ctx the parse tree
     */
    exitMove_num?: (ctx: Move_numContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.san`.
     * @param ctx the parse tree
     */
    enterSan?: (ctx: SanContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.san`.
     * @param ctx the parse tree
     */
    exitSan?: (ctx: SanContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.check_like`.
     * @param ctx the parse tree
     */
    enterCheck_like?: (ctx: Check_likeContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.check_like`.
     * @param ctx the parse tree
     */
    exitCheck_like?: (ctx: Check_likeContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.check`.
     * @param ctx the parse tree
     */
    enterCheck?: (ctx: CheckContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.check`.
     * @param ctx the parse tree
     */
    exitCheck?: (ctx: CheckContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.checkmate`.
     * @param ctx the parse tree
     */
    enterCheckmate?: (ctx: CheckmateContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.checkmate`.
     * @param ctx the parse tree
     */
    exitCheckmate?: (ctx: CheckmateContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.move_analysis`.
     * @param ctx the parse tree
     */
    enterMove_analysis?: (ctx: Move_analysisContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.move_analysis`.
     * @param ctx the parse tree
     */
    exitMove_analysis?: (ctx: Move_analysisContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.blunder`.
     * @param ctx the parse tree
     */
    enterBlunder?: (ctx: BlunderContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.blunder`.
     * @param ctx the parse tree
     */
    exitBlunder?: (ctx: BlunderContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.mistake`.
     * @param ctx the parse tree
     */
    enterMistake?: (ctx: MistakeContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.mistake`.
     * @param ctx the parse tree
     */
    exitMistake?: (ctx: MistakeContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.dubious_move`.
     * @param ctx the parse tree
     */
    enterDubious_move?: (ctx: Dubious_moveContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.dubious_move`.
     * @param ctx the parse tree
     */
    exitDubious_move?: (ctx: Dubious_moveContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.interesting_move`.
     * @param ctx the parse tree
     */
    enterInteresting_move?: (ctx: Interesting_moveContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.interesting_move`.
     * @param ctx the parse tree
     */
    exitInteresting_move?: (ctx: Interesting_moveContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.good_move`.
     * @param ctx the parse tree
     */
    enterGood_move?: (ctx: Good_moveContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.good_move`.
     * @param ctx the parse tree
     */
    exitGood_move?: (ctx: Good_moveContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.brilliant_move`.
     * @param ctx the parse tree
     */
    enterBrilliant_move?: (ctx: Brilliant_moveContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.brilliant_move`.
     * @param ctx the parse tree
     */
    exitBrilliant_move?: (ctx: Brilliant_moveContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.capture`.
     * @param ctx the parse tree
     */
    enterCapture?: (ctx: CaptureContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.capture`.
     * @param ctx the parse tree
     */
    exitCapture?: (ctx: CaptureContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.pawn_capture`.
     * @param ctx the parse tree
     */
    enterPawn_capture?: (ctx: Pawn_captureContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.pawn_capture`.
     * @param ctx the parse tree
     */
    exitPawn_capture?: (ctx: Pawn_captureContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.piece_capture`.
     * @param ctx the parse tree
     */
    enterPiece_capture?: (ctx: Piece_captureContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.piece_capture`.
     * @param ctx the parse tree
     */
    exitPiece_capture?: (ctx: Piece_captureContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.pawn_move`.
     * @param ctx the parse tree
     */
    enterPawn_move?: (ctx: Pawn_moveContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.pawn_move`.
     * @param ctx the parse tree
     */
    exitPawn_move?: (ctx: Pawn_moveContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.promotion`.
     * @param ctx the parse tree
     */
    enterPromotion?: (ctx: PromotionContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.promotion`.
     * @param ctx the parse tree
     */
    exitPromotion?: (ctx: PromotionContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.piece`.
     * @param ctx the parse tree
     */
    enterPiece?: (ctx: PieceContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.piece`.
     * @param ctx the parse tree
     */
    exitPiece?: (ctx: PieceContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.piece_move`.
     * @param ctx the parse tree
     */
    enterPiece_move?: (ctx: Piece_moveContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.piece_move`.
     * @param ctx the parse tree
     */
    exitPiece_move?: (ctx: Piece_moveContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.castle`.
     * @param ctx the parse tree
     */
    enterCastle?: (ctx: CastleContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.castle`.
     * @param ctx the parse tree
     */
    exitCastle?: (ctx: CastleContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.block_comment`.
     * @param ctx the parse tree
     */
    enterBlock_comment?: (ctx: Block_commentContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.block_comment`.
     * @param ctx the parse tree
     */
    exitBlock_comment?: (ctx: Block_commentContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.block_comment_body`.
     * @param ctx the parse tree
     */
    enterBlock_comment_body?: (ctx: Block_comment_bodyContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.block_comment_body`.
     * @param ctx the parse tree
     */
    exitBlock_comment_body?: (ctx: Block_comment_bodyContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.block_comment_text`.
     * @param ctx the parse tree
     */
    enterBlock_comment_text?: (ctx: Block_comment_textContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.block_comment_text`.
     * @param ctx the parse tree
     */
    exitBlock_comment_text?: (ctx: Block_comment_textContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.command`.
     * @param ctx the parse tree
     */
    enterCommand?: (ctx: CommandContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.command`.
     * @param ctx the parse tree
     */
    exitCommand?: (ctx: CommandContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.command_id`.
     * @param ctx the parse tree
     */
    enterCommand_id?: (ctx: Command_idContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.command_id`.
     * @param ctx the parse tree
     */
    exitCommand_id?: (ctx: Command_idContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.command_params`.
     * @param ctx the parse tree
     */
    enterCommand_params?: (ctx: Command_paramsContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.command_params`.
     * @param ctx the parse tree
     */
    exitCommand_params?: (ctx: Command_paramsContext) => void;
    /**
     * Enter a parse tree produced by `EnhancedPGNParser.command_param`.
     * @param ctx the parse tree
     */
    enterCommand_param?: (ctx: Command_paramContext) => void;
    /**
     * Exit a parse tree produced by `EnhancedPGNParser.command_param`.
     * @param ctx the parse tree
     */
    exitCommand_param?: (ctx: Command_paramContext) => void;
}
