import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EnhancedPGNParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface EnhancedPGNParserVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.parse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParse?: (ctx: ParseContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.pgn_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPgn_database?: (ctx: Pgn_databaseContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.pgn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPgn?: (ctx: PgnContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.tag_pairs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTag_pairs?: (ctx: Tag_pairsContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.tag_pair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTag_pair?: (ctx: Tag_pairContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.tag_key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTag_key?: (ctx: Tag_keyContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.tag_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTag_value?: (ctx: Tag_valueContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.move_text`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_text?: (ctx: Move_textContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.game_termination`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGame_termination?: (ctx: Game_terminationContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.white_wins`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhite_wins?: (ctx: White_winsContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.black_wins`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlack_wins?: (ctx: Black_winsContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.draw`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDraw?: (ctx: DrawContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.unknown_ending`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnknown_ending?: (ctx: Unknown_endingContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.move_text_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_text_item?: (ctx: Move_text_itemContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.turn_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTurn_item?: (ctx: Turn_itemContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.nag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNag?: (ctx: NagContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.eol_comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEol_comment?: (ctx: Eol_commentContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.eol_comment_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEol_comment_body?: (ctx: Eol_comment_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.turn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTurn?: (ctx: TurnContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.inter_san_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInter_san_item?: (ctx: Inter_san_itemContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.alternate_line`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlternate_line?: (ctx: Alternate_lineContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.alternate_line_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlternate_line_body?: (ctx: Alternate_line_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.move_num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_num?: (ctx: Move_numContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.san`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSan?: (ctx: SanContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.check_like`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheck_like?: (ctx: Check_likeContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.check`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheck?: (ctx: CheckContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.checkmate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckmate?: (ctx: CheckmateContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.move_analysis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove_analysis?: (ctx: Move_analysisContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.blunder`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlunder?: (ctx: BlunderContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.mistake`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMistake?: (ctx: MistakeContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.dubious_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDubious_move?: (ctx: Dubious_moveContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.interesting_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInteresting_move?: (ctx: Interesting_moveContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.good_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGood_move?: (ctx: Good_moveContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.brilliant_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBrilliant_move?: (ctx: Brilliant_moveContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.capture`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCapture?: (ctx: CaptureContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.pawn_capture`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPawn_capture?: (ctx: Pawn_captureContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.piece_capture`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPiece_capture?: (ctx: Piece_captureContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.pawn_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPawn_move?: (ctx: Pawn_moveContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.promotion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPromotion?: (ctx: PromotionContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.piece`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPiece?: (ctx: PieceContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.piece_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPiece_move?: (ctx: Piece_moveContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.castle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastle?: (ctx: CastleContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.block_comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock_comment?: (ctx: Block_commentContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.block_comment_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock_comment_body?: (ctx: Block_comment_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.block_comment_text`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock_comment_text?: (ctx: Block_comment_textContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommand?: (ctx: CommandContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.command_id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommand_id?: (ctx: Command_idContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.command_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommand_params?: (ctx: Command_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `EnhancedPGNParser.command_param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommand_param?: (ctx: Command_paramContext) => Result;
}
