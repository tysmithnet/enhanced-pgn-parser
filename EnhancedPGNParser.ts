// Generated from EnhancedPGNParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { EnhancedPGNParserListener } from "./EnhancedPGNParserListener";
import { EnhancedPGNParserVisitor } from "./EnhancedPGNParserVisitor";


export class EnhancedPGNParser extends Parser {
	public static readonly TAG_START = 1;
	public static readonly STRING = 2;
	public static readonly MOVE_TEXT_START = 3;
	public static readonly MOVE_TEXT_START_WITH_COMMENT = 4;
	public static readonly NEW_LINE = 5;
	public static readonly TAG_END = 6;
	public static readonly TAG_VALUE = 7;
	public static readonly TAG_KEY = 8;
	public static readonly TAG_SPACE = 9;
	public static readonly EOL_COMMENT_START = 10;
	public static readonly MOVE_NUM = 11;
	public static readonly BLOCK_COMMENT_START = 12;
	public static readonly WS = 13;
	public static readonly PIECE = 14;
	public static readonly LOCATION = 15;
	public static readonly PROMOTION = 16;
	public static readonly RANK = 17;
	public static readonly FILE = 18;
	public static readonly SHORT_CASTLE = 19;
	public static readonly LONG_CASTLE = 20;
	public static readonly CAPTURE_MARKER = 21;
	public static readonly ALTERNATE_LINE_START = 22;
	public static readonly ALTERNATE_LINE_END = 23;
	public static readonly BLUNDER = 24;
	public static readonly MISTAKE = 25;
	public static readonly DUBIOUS_MOVE = 26;
	public static readonly INTERESTING_MOVE = 27;
	public static readonly GOOD_MOVE = 28;
	public static readonly BRILLIANT_MOVE = 29;
	public static readonly CHECK = 30;
	public static readonly CHECKMATE = 31;
	public static readonly WHITE_WINS = 32;
	public static readonly BLACK_WINS = 33;
	public static readonly DRAW = 34;
	public static readonly UNKOWN_ENDING = 35;
	public static readonly NAG = 36;
	public static readonly EOL_COMMENT_TEXT = 37;
	public static readonly EOL_COMMENT_END = 38;
	public static readonly COMMAND_START = 39;
	public static readonly BLOCK_COMMENT_END = 40;
	public static readonly BLOCK_COMMENT_TEXT = 41;
	public static readonly COMMAND_ID = 42;
	public static readonly COMMAND_END = 43;
	public static readonly COMMA = 44;
	public static readonly PARAM_TEXT = 45;
	public static readonly RULE_parse = 0;
	public static readonly RULE_pgn_database = 1;
	public static readonly RULE_pgn = 2;
	public static readonly RULE_tag_pairs = 3;
	public static readonly RULE_tag_pair = 4;
	public static readonly RULE_tag_key = 5;
	public static readonly RULE_tag_value = 6;
	public static readonly RULE_move_text = 7;
	public static readonly RULE_game_termination = 8;
	public static readonly RULE_white_wins = 9;
	public static readonly RULE_black_wins = 10;
	public static readonly RULE_draw = 11;
	public static readonly RULE_unknown_ending = 12;
	public static readonly RULE_move_text_item = 13;
	public static readonly RULE_turn_item = 14;
	public static readonly RULE_nag = 15;
	public static readonly RULE_comment = 16;
	public static readonly RULE_eol_comment = 17;
	public static readonly RULE_eol_comment_body = 18;
	public static readonly RULE_turn = 19;
	public static readonly RULE_inter_san_item = 20;
	public static readonly RULE_alternate_line = 21;
	public static readonly RULE_alternate_line_body = 22;
	public static readonly RULE_move_num = 23;
	public static readonly RULE_san = 24;
	public static readonly RULE_check_like = 25;
	public static readonly RULE_check = 26;
	public static readonly RULE_checkmate = 27;
	public static readonly RULE_move_analysis = 28;
	public static readonly RULE_blunder = 29;
	public static readonly RULE_mistake = 30;
	public static readonly RULE_dubious_move = 31;
	public static readonly RULE_interesting_move = 32;
	public static readonly RULE_good_move = 33;
	public static readonly RULE_brilliant_move = 34;
	public static readonly RULE_capture = 35;
	public static readonly RULE_pawn_capture = 36;
	public static readonly RULE_piece_capture = 37;
	public static readonly RULE_pawn_move = 38;
	public static readonly RULE_promotion = 39;
	public static readonly RULE_piece = 40;
	public static readonly RULE_piece_move = 41;
	public static readonly RULE_castle = 42;
	public static readonly RULE_block_comment = 43;
	public static readonly RULE_block_comment_body = 44;
	public static readonly RULE_block_comment_text = 45;
	public static readonly RULE_command = 46;
	public static readonly RULE_command_id = 47;
	public static readonly RULE_command_params = 48;
	public static readonly RULE_command_param = 49;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "pgn_database", "pgn", "tag_pairs", "tag_pair", "tag_key", "tag_value", 
		"move_text", "game_termination", "white_wins", "black_wins", "draw", "unknown_ending", 
		"move_text_item", "turn_item", "nag", "comment", "eol_comment", "eol_comment_body", 
		"turn", "inter_san_item", "alternate_line", "alternate_line_body", "move_num", 
		"san", "check_like", "check", "checkmate", "move_analysis", "blunder", 
		"mistake", "dubious_move", "interesting_move", "good_move", "brilliant_move", 
		"capture", "pawn_capture", "piece_capture", "pawn_move", "promotion", 
		"piece", "piece_move", "castle", "block_comment", "block_comment_body", 
		"block_comment_text", "command", "command_id", "command_params", "command_param",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "' '", "';'", undefined, "'{'", undefined, undefined, 
		undefined, "'='", undefined, undefined, "'O-O'", "'O-O-O'", "'x'", "'('", 
		"')'", "'??'", "'?'", "'?!'", "'!?'", "'!'", "'!!'", "'+'", "'#'", "'1-0'", 
		"'0-1'", "'1/2-1/2'", "'*'", undefined, undefined, undefined, "'[%'", 
		"'}'", undefined, undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TAG_START", "STRING", "MOVE_TEXT_START", "MOVE_TEXT_START_WITH_COMMENT", 
		"NEW_LINE", "TAG_END", "TAG_VALUE", "TAG_KEY", "TAG_SPACE", "EOL_COMMENT_START", 
		"MOVE_NUM", "BLOCK_COMMENT_START", "WS", "PIECE", "LOCATION", "PROMOTION", 
		"RANK", "FILE", "SHORT_CASTLE", "LONG_CASTLE", "CAPTURE_MARKER", "ALTERNATE_LINE_START", 
		"ALTERNATE_LINE_END", "BLUNDER", "MISTAKE", "DUBIOUS_MOVE", "INTERESTING_MOVE", 
		"GOOD_MOVE", "BRILLIANT_MOVE", "CHECK", "CHECKMATE", "WHITE_WINS", "BLACK_WINS", 
		"DRAW", "UNKOWN_ENDING", "NAG", "EOL_COMMENT_TEXT", "EOL_COMMENT_END", 
		"COMMAND_START", "BLOCK_COMMENT_END", "BLOCK_COMMENT_TEXT", "COMMAND_ID", 
		"COMMAND_END", "COMMA", "PARAM_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(EnhancedPGNParser._LITERAL_NAMES, EnhancedPGNParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return EnhancedPGNParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "EnhancedPGNParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return EnhancedPGNParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return EnhancedPGNParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(EnhancedPGNParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, EnhancedPGNParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.pgn_database();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EnhancedPGNParser.NEW_LINE) {
				{
				{
				this.state = 101;
				this.match(EnhancedPGNParser.NEW_LINE);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(EnhancedPGNParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pgn_database(): Pgn_databaseContext {
		let _localctx: Pgn_databaseContext = new Pgn_databaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, EnhancedPGNParser.RULE_pgn_database);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.pgn();
			this.state = 118;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 110;
						this.match(EnhancedPGNParser.NEW_LINE);
						}
						}
						this.state = 113;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === EnhancedPGNParser.NEW_LINE);
					this.state = 115;
					this.pgn();
					}
					}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pgn(): PgnContext {
		let _localctx: PgnContext = new PgnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, EnhancedPGNParser.RULE_pgn);
		let _la: number;
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.MOVE_TEXT_START:
			case EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT:
			case EnhancedPGNParser.EOL_COMMENT_START:
			case EnhancedPGNParser.MOVE_NUM:
			case EnhancedPGNParser.BLOCK_COMMENT_START:
			case EnhancedPGNParser.WHITE_WINS:
			case EnhancedPGNParser.BLACK_WINS:
			case EnhancedPGNParser.DRAW:
			case EnhancedPGNParser.UNKOWN_ENDING:
			case EnhancedPGNParser.NAG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.move_text();
				}
				break;
			case EnhancedPGNParser.TAG_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.tag_pairs();
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 123;
					this.match(EnhancedPGNParser.NEW_LINE);
					}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === EnhancedPGNParser.NEW_LINE);
				this.state = 128;
				this.move_text();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag_pairs(): Tag_pairsContext {
		let _localctx: Tag_pairsContext = new Tag_pairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, EnhancedPGNParser.RULE_tag_pairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 132;
				this.tag_pair();
				this.state = 133;
				this.match(EnhancedPGNParser.NEW_LINE);
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EnhancedPGNParser.TAG_START);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag_pair(): Tag_pairContext {
		let _localctx: Tag_pairContext = new Tag_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, EnhancedPGNParser.RULE_tag_pair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(EnhancedPGNParser.TAG_START);
			this.state = 140;
			this.tag_key();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 141;
				this.match(EnhancedPGNParser.TAG_SPACE);
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === EnhancedPGNParser.TAG_SPACE);
			this.state = 146;
			this.tag_value();
			this.state = 147;
			this.match(EnhancedPGNParser.TAG_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag_key(): Tag_keyContext {
		let _localctx: Tag_keyContext = new Tag_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, EnhancedPGNParser.RULE_tag_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(EnhancedPGNParser.TAG_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag_value(): Tag_valueContext {
		let _localctx: Tag_valueContext = new Tag_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, EnhancedPGNParser.RULE_tag_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(EnhancedPGNParser.TAG_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move_text(): Move_textContext {
		let _localctx: Move_textContext = new Move_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, EnhancedPGNParser.RULE_move_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.MOVE_TEXT_START) | (1 << EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT) | (1 << EnhancedPGNParser.EOL_COMMENT_START) | (1 << EnhancedPGNParser.MOVE_NUM) | (1 << EnhancedPGNParser.BLOCK_COMMENT_START))) !== 0) || _la === EnhancedPGNParser.NAG) {
				{
				{
				this.state = 153;
				this.move_text_item();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 159;
			this.game_termination();
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT) | (1 << EnhancedPGNParser.EOL_COMMENT_START) | (1 << EnhancedPGNParser.BLOCK_COMMENT_START))) !== 0)) {
				{
				{
				this.state = 160;
				this.comment();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public game_termination(): Game_terminationContext {
		let _localctx: Game_terminationContext = new Game_terminationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, EnhancedPGNParser.RULE_game_termination);
		try {
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.WHITE_WINS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.white_wins();
				}
				break;
			case EnhancedPGNParser.BLACK_WINS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.black_wins();
				}
				break;
			case EnhancedPGNParser.DRAW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 168;
				this.draw();
				}
				break;
			case EnhancedPGNParser.UNKOWN_ENDING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 169;
				this.unknown_ending();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public white_wins(): White_winsContext {
		let _localctx: White_winsContext = new White_winsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, EnhancedPGNParser.RULE_white_wins);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(EnhancedPGNParser.WHITE_WINS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public black_wins(): Black_winsContext {
		let _localctx: Black_winsContext = new Black_winsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, EnhancedPGNParser.RULE_black_wins);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(EnhancedPGNParser.BLACK_WINS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public draw(): DrawContext {
		let _localctx: DrawContext = new DrawContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, EnhancedPGNParser.RULE_draw);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(EnhancedPGNParser.DRAW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unknown_ending(): Unknown_endingContext {
		let _localctx: Unknown_endingContext = new Unknown_endingContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, EnhancedPGNParser.RULE_unknown_ending);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(EnhancedPGNParser.UNKOWN_ENDING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move_text_item(): Move_text_itemContext {
		let _localctx: Move_text_itemContext = new Move_text_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, EnhancedPGNParser.RULE_move_text_item);
		try {
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.turn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this.comment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public turn_item(): Turn_itemContext {
		let _localctx: Turn_itemContext = new Turn_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, EnhancedPGNParser.RULE_turn_item);
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.NAG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.nag();
				}
				break;
			case EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT:
			case EnhancedPGNParser.EOL_COMMENT_START:
			case EnhancedPGNParser.BLOCK_COMMENT_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.comment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nag(): NagContext {
		let _localctx: NagContext = new NagContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, EnhancedPGNParser.RULE_nag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(EnhancedPGNParser.NAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, EnhancedPGNParser.RULE_comment);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT:
			case EnhancedPGNParser.BLOCK_COMMENT_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.block_comment();
				}
				break;
			case EnhancedPGNParser.EOL_COMMENT_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.eol_comment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eol_comment(): Eol_commentContext {
		let _localctx: Eol_commentContext = new Eol_commentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, EnhancedPGNParser.RULE_eol_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(EnhancedPGNParser.EOL_COMMENT_START);
			this.state = 195;
			this.eol_comment_body();
			this.state = 196;
			this.match(EnhancedPGNParser.EOL_COMMENT_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eol_comment_body(): Eol_comment_bodyContext {
		let _localctx: Eol_comment_bodyContext = new Eol_comment_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, EnhancedPGNParser.RULE_eol_comment_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(EnhancedPGNParser.EOL_COMMENT_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public turn(): TurnContext {
		let _localctx: TurnContext = new TurnContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, EnhancedPGNParser.RULE_turn);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT) | (1 << EnhancedPGNParser.EOL_COMMENT_START) | (1 << EnhancedPGNParser.BLOCK_COMMENT_START))) !== 0) || _la === EnhancedPGNParser.NAG) {
				{
				{
				this.state = 200;
				this.turn_item();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.move_num();
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT) | (1 << EnhancedPGNParser.EOL_COMMENT_START) | (1 << EnhancedPGNParser.BLOCK_COMMENT_START))) !== 0) || _la === EnhancedPGNParser.NAG) {
				{
				{
				this.state = 207;
				this.turn_item();
				}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this.san();
			this.state = 217;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 214;
					this.turn_item();
					}
					}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 224;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 222;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case EnhancedPGNParser.ALTERNATE_LINE_START:
						{
						this.state = 220;
						this.alternate_line();
						}
						break;
					case EnhancedPGNParser.NAG:
						{
						this.state = 221;
						this.nag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 227;
					this.turn_item();
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.PIECE) | (1 << EnhancedPGNParser.LOCATION) | (1 << EnhancedPGNParser.FILE) | (1 << EnhancedPGNParser.SHORT_CASTLE) | (1 << EnhancedPGNParser.LONG_CASTLE))) !== 0)) {
				{
				this.state = 233;
				this.san();
				}
			}

			this.state = 239;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 236;
					this.turn_item();
					}
					}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 246;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 244;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case EnhancedPGNParser.ALTERNATE_LINE_START:
						{
						this.state = 242;
						this.alternate_line();
						}
						break;
					case EnhancedPGNParser.NAG:
						{
						this.state = 243;
						this.nag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 249;
					this.turn_item();
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inter_san_item(): Inter_san_itemContext {
		let _localctx: Inter_san_itemContext = new Inter_san_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, EnhancedPGNParser.RULE_inter_san_item);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT:
			case EnhancedPGNParser.EOL_COMMENT_START:
			case EnhancedPGNParser.BLOCK_COMMENT_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.comment();
				}
				break;
			case EnhancedPGNParser.ALTERNATE_LINE_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.alternate_line();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternate_line(): Alternate_lineContext {
		let _localctx: Alternate_lineContext = new Alternate_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, EnhancedPGNParser.RULE_alternate_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(EnhancedPGNParser.ALTERNATE_LINE_START);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 260;
				this.turn();
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.MOVE_TEXT_START) | (1 << EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT) | (1 << EnhancedPGNParser.EOL_COMMENT_START) | (1 << EnhancedPGNParser.MOVE_NUM) | (1 << EnhancedPGNParser.BLOCK_COMMENT_START))) !== 0) || _la === EnhancedPGNParser.NAG);
			this.state = 265;
			this.match(EnhancedPGNParser.ALTERNATE_LINE_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternate_line_body(): Alternate_line_bodyContext {
		let _localctx: Alternate_line_bodyContext = new Alternate_line_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, EnhancedPGNParser.RULE_alternate_line_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.move_num();
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT) | (1 << EnhancedPGNParser.EOL_COMMENT_START) | (1 << EnhancedPGNParser.BLOCK_COMMENT_START))) !== 0)) {
				{
				{
				this.state = 268;
				this.comment();
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 274;
			this.san();
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EnhancedPGNParser.ALTERNATE_LINE_START) {
				{
				{
				this.state = 275;
				this.alternate_line();
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move_num(): Move_numContext {
		let _localctx: Move_numContext = new Move_numContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, EnhancedPGNParser.RULE_move_num);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			_la = this._input.LA(1);
			if (!(_la === EnhancedPGNParser.MOVE_TEXT_START || _la === EnhancedPGNParser.MOVE_NUM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public san(): SanContext {
		let _localctx: SanContext = new SanContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, EnhancedPGNParser.RULE_san);
		let _la: number;
		try {
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.capture();
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === EnhancedPGNParser.CHECK || _la === EnhancedPGNParser.CHECKMATE) {
					{
					this.state = 284;
					this.check_like();
					}
				}

				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.BLUNDER) | (1 << EnhancedPGNParser.MISTAKE) | (1 << EnhancedPGNParser.DUBIOUS_MOVE) | (1 << EnhancedPGNParser.INTERESTING_MOVE) | (1 << EnhancedPGNParser.GOOD_MOVE) | (1 << EnhancedPGNParser.BRILLIANT_MOVE))) !== 0)) {
					{
					this.state = 287;
					this.move_analysis();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.pawn_move();
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === EnhancedPGNParser.CHECK || _la === EnhancedPGNParser.CHECKMATE) {
					{
					this.state = 291;
					this.check_like();
					}
				}

				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.BLUNDER) | (1 << EnhancedPGNParser.MISTAKE) | (1 << EnhancedPGNParser.DUBIOUS_MOVE) | (1 << EnhancedPGNParser.INTERESTING_MOVE) | (1 << EnhancedPGNParser.GOOD_MOVE) | (1 << EnhancedPGNParser.BRILLIANT_MOVE))) !== 0)) {
					{
					this.state = 294;
					this.move_analysis();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 297;
				this.piece_move();
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === EnhancedPGNParser.CHECK || _la === EnhancedPGNParser.CHECKMATE) {
					{
					this.state = 298;
					this.check_like();
					}
				}

				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.BLUNDER) | (1 << EnhancedPGNParser.MISTAKE) | (1 << EnhancedPGNParser.DUBIOUS_MOVE) | (1 << EnhancedPGNParser.INTERESTING_MOVE) | (1 << EnhancedPGNParser.GOOD_MOVE) | (1 << EnhancedPGNParser.BRILLIANT_MOVE))) !== 0)) {
					{
					this.state = 301;
					this.move_analysis();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 304;
				this.castle();
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === EnhancedPGNParser.CHECK || _la === EnhancedPGNParser.CHECKMATE) {
					{
					this.state = 305;
					this.check_like();
					}
				}

				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << EnhancedPGNParser.BLUNDER) | (1 << EnhancedPGNParser.MISTAKE) | (1 << EnhancedPGNParser.DUBIOUS_MOVE) | (1 << EnhancedPGNParser.INTERESTING_MOVE) | (1 << EnhancedPGNParser.GOOD_MOVE) | (1 << EnhancedPGNParser.BRILLIANT_MOVE))) !== 0)) {
					{
					this.state = 308;
					this.move_analysis();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public check_like(): Check_likeContext {
		let _localctx: Check_likeContext = new Check_likeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, EnhancedPGNParser.RULE_check_like);
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.CHECK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.check();
				}
				break;
			case EnhancedPGNParser.CHECKMATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.checkmate();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public check(): CheckContext {
		let _localctx: CheckContext = new CheckContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, EnhancedPGNParser.RULE_check);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(EnhancedPGNParser.CHECK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkmate(): CheckmateContext {
		let _localctx: CheckmateContext = new CheckmateContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, EnhancedPGNParser.RULE_checkmate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(EnhancedPGNParser.CHECKMATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move_analysis(): Move_analysisContext {
		let _localctx: Move_analysisContext = new Move_analysisContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, EnhancedPGNParser.RULE_move_analysis);
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.BLUNDER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.blunder();
				}
				break;
			case EnhancedPGNParser.MISTAKE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.mistake();
				}
				break;
			case EnhancedPGNParser.DUBIOUS_MOVE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.dubious_move();
				}
				break;
			case EnhancedPGNParser.INTERESTING_MOVE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 324;
				this.interesting_move();
				}
				break;
			case EnhancedPGNParser.GOOD_MOVE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 325;
				this.good_move();
				}
				break;
			case EnhancedPGNParser.BRILLIANT_MOVE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 326;
				this.brilliant_move();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blunder(): BlunderContext {
		let _localctx: BlunderContext = new BlunderContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, EnhancedPGNParser.RULE_blunder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(EnhancedPGNParser.BLUNDER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mistake(): MistakeContext {
		let _localctx: MistakeContext = new MistakeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, EnhancedPGNParser.RULE_mistake);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(EnhancedPGNParser.MISTAKE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dubious_move(): Dubious_moveContext {
		let _localctx: Dubious_moveContext = new Dubious_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, EnhancedPGNParser.RULE_dubious_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(EnhancedPGNParser.DUBIOUS_MOVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interesting_move(): Interesting_moveContext {
		let _localctx: Interesting_moveContext = new Interesting_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, EnhancedPGNParser.RULE_interesting_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(EnhancedPGNParser.INTERESTING_MOVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public good_move(): Good_moveContext {
		let _localctx: Good_moveContext = new Good_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, EnhancedPGNParser.RULE_good_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(EnhancedPGNParser.GOOD_MOVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public brilliant_move(): Brilliant_moveContext {
		let _localctx: Brilliant_moveContext = new Brilliant_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, EnhancedPGNParser.RULE_brilliant_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(EnhancedPGNParser.BRILLIANT_MOVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, EnhancedPGNParser.RULE_capture);
		try {
			this.state = 343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case EnhancedPGNParser.FILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.pawn_capture();
				}
				break;
			case EnhancedPGNParser.PIECE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.piece_capture();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pawn_capture(): Pawn_captureContext {
		let _localctx: Pawn_captureContext = new Pawn_captureContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, EnhancedPGNParser.RULE_pawn_capture);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 345;
				this.match(EnhancedPGNParser.FILE);
				this.state = 346;
				this.match(EnhancedPGNParser.CAPTURE_MARKER);
				this.state = 347;
				this.match(EnhancedPGNParser.LOCATION);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
				this.match(EnhancedPGNParser.FILE);
				this.state = 349;
				this.match(EnhancedPGNParser.CAPTURE_MARKER);
				this.state = 350;
				this.promotion();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public piece_capture(): Piece_captureContext {
		let _localctx: Piece_captureContext = new Piece_captureContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, EnhancedPGNParser.RULE_piece_capture);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.piece();
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EnhancedPGNParser.FILE) {
				{
				this.state = 354;
				this.match(EnhancedPGNParser.FILE);
				}
			}

			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EnhancedPGNParser.RANK) {
				{
				this.state = 357;
				this.match(EnhancedPGNParser.RANK);
				}
			}

			this.state = 360;
			this.match(EnhancedPGNParser.CAPTURE_MARKER);
			this.state = 361;
			this.match(EnhancedPGNParser.LOCATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pawn_move(): Pawn_moveContext {
		let _localctx: Pawn_moveContext = new Pawn_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, EnhancedPGNParser.RULE_pawn_move);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 363;
				this.match(EnhancedPGNParser.LOCATION);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 364;
				this.promotion();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public promotion(): PromotionContext {
		let _localctx: PromotionContext = new PromotionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, EnhancedPGNParser.RULE_promotion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(EnhancedPGNParser.LOCATION);
			this.state = 368;
			this.match(EnhancedPGNParser.PROMOTION);
			this.state = 369;
			this.piece();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public piece(): PieceContext {
		let _localctx: PieceContext = new PieceContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, EnhancedPGNParser.RULE_piece);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(EnhancedPGNParser.PIECE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public piece_move(): Piece_moveContext {
		let _localctx: Piece_moveContext = new Piece_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, EnhancedPGNParser.RULE_piece_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.piece();
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EnhancedPGNParser.RANK) {
				{
				this.state = 374;
				this.match(EnhancedPGNParser.RANK);
				}
			}

			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EnhancedPGNParser.FILE) {
				{
				this.state = 377;
				this.match(EnhancedPGNParser.FILE);
				}
			}

			this.state = 380;
			this.match(EnhancedPGNParser.LOCATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castle(): CastleContext {
		let _localctx: CastleContext = new CastleContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, EnhancedPGNParser.RULE_castle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			_la = this._input.LA(1);
			if (!(_la === EnhancedPGNParser.SHORT_CASTLE || _la === EnhancedPGNParser.LONG_CASTLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block_comment(): Block_commentContext {
		let _localctx: Block_commentContext = new Block_commentContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, EnhancedPGNParser.RULE_block_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			_la = this._input.LA(1);
			if (!(_la === EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT || _la === EnhancedPGNParser.BLOCK_COMMENT_START)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 385;
			this.block_comment_body();
			this.state = 386;
			this.match(EnhancedPGNParser.BLOCK_COMMENT_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block_comment_body(): Block_comment_bodyContext {
		let _localctx: Block_comment_bodyContext = new Block_comment_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, EnhancedPGNParser.RULE_block_comment_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 388;
				this.block_comment_text();
				}
				break;
			}
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EnhancedPGNParser.COMMAND_START) {
				{
				{
				this.state = 391;
				this.command();
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === EnhancedPGNParser.BLOCK_COMMENT_TEXT) {
				{
				this.state = 397;
				this.block_comment_text();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block_comment_text(): Block_comment_textContext {
		let _localctx: Block_comment_textContext = new Block_comment_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, EnhancedPGNParser.RULE_block_comment_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(EnhancedPGNParser.BLOCK_COMMENT_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, EnhancedPGNParser.RULE_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(EnhancedPGNParser.COMMAND_START);
			this.state = 403;
			this.command_id();
			this.state = 404;
			this.command_params();
			this.state = 405;
			this.match(EnhancedPGNParser.COMMAND_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_id(): Command_idContext {
		let _localctx: Command_idContext = new Command_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, EnhancedPGNParser.RULE_command_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(EnhancedPGNParser.COMMAND_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_params(): Command_paramsContext {
		let _localctx: Command_paramsContext = new Command_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, EnhancedPGNParser.RULE_command_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.command_param();
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === EnhancedPGNParser.COMMA) {
				{
				{
				this.state = 410;
				this.match(EnhancedPGNParser.COMMA);
				this.state = 411;
				this.command_param();
				}
				}
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_param(): Command_paramContext {
		let _localctx: Command_paramContext = new Command_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, EnhancedPGNParser.RULE_command_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			_la = this._input.LA(1);
			if (!(_la === EnhancedPGNParser.STRING || _la === EnhancedPGNParser.PARAM_TEXT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03/\u01A6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02" +
		"\x03\x02\x07\x02i\n\x02\f\x02\x0E\x02l\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x06\x03r\n\x03\r\x03\x0E\x03s\x03\x03\x07\x03w\n\x03\f\x03\x0E\x03" +
		"z\v\x03\x03\x04\x03\x04\x03\x04\x06\x04\x7F\n\x04\r\x04\x0E\x04\x80\x03" +
		"\x04\x03\x04\x05\x04\x85\n\x04\x03\x05\x03\x05\x03\x05\x06\x05\x8A\n\x05" +
		"\r\x05\x0E\x05\x8B\x03\x06\x03\x06\x03\x06\x06\x06\x91\n\x06\r\x06\x0E" +
		"\x06\x92\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x07" +
		"\t\x9D\n\t\f\t\x0E\t\xA0\v\t\x03\t\x03\t\x07\t\xA4\n\t\f\t\x0E\t\xA7\v" +
		"\t\x03\n\x03\n\x03\n\x03\n\x05\n\xAD\n\n\x03\v\x03\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xB9\n\x0F\x03\x10\x03\x10" +
		"\x05\x10\xBD\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\xC3\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x07\x15\xCC\n\x15" +
		"\f\x15\x0E\x15\xCF\v\x15\x03\x15\x03\x15\x07\x15\xD3\n\x15\f\x15\x0E\x15" +
		"\xD6\v\x15\x03\x15\x03\x15\x07\x15\xDA\n\x15\f\x15\x0E\x15\xDD\v\x15\x03" +
		"\x15\x03\x15\x07\x15\xE1\n\x15\f\x15\x0E\x15\xE4\v\x15\x03\x15\x07\x15" +
		"\xE7\n\x15\f\x15\x0E\x15\xEA\v\x15\x03\x15\x05\x15\xED\n\x15\x03\x15\x07" +
		"\x15\xF0\n\x15\f\x15\x0E\x15\xF3\v\x15\x03\x15\x03\x15\x07\x15\xF7\n\x15" +
		"\f\x15\x0E\x15\xFA\v\x15\x03\x15\x07\x15\xFD\n\x15\f\x15\x0E\x15\u0100" +
		"\v\x15\x03\x16\x03\x16\x05\x16\u0104\n\x16\x03\x17\x03\x17\x06\x17\u0108" +
		"\n\x17\r\x17\x0E\x17\u0109\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18\u0110" +
		"\n\x18\f\x18\x0E\x18\u0113\v\x18\x03\x18\x03\x18\x07\x18\u0117\n\x18\f" +
		"\x18\x0E\x18\u011A\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0120" +
		"\n\x1A\x03\x1A\x05\x1A\u0123\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0127\n\x1A" +
		"\x03\x1A\x05\x1A\u012A\n\x1A\x03\x1A\x03\x1A\x05\x1A\u012E\n\x1A\x03\x1A" +
		"\x05\x1A\u0131\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0135\n\x1A\x03\x1A\x05\x1A" +
		"\u0138\n\x1A\x05\x1A\u013A\n\x1A\x03\x1B\x03\x1B\x05\x1B\u013E\n\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u014A\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03$\x03$\x03%\x03%\x05%\u015A\n%\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u0162\n&\x03\'\x03\'\x05\'\u0166\n\'\x03\'\x05\'\u0169\n\'" +
		"\x03\'\x03\'\x03\'\x03(\x03(\x05(\u0170\n(\x03)\x03)\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x05+\u017A\n+\x03+\x05+\u017D\n+\x03+\x03+\x03,\x03,\x03-" +
		"\x03-\x03-\x03-\x03.\x05.\u0188\n.\x03.\x07.\u018B\n.\f.\x0E.\u018E\v" +
		".\x03.\x05.\u0191\n.\x03/\x03/\x030\x030\x030\x030\x030\x031\x031\x03" +
		"2\x032\x032\x072\u019F\n2\f2\x0E2\u01A2\v2\x033\x033\x033\x02\x02\x02" +
		"4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02\x02\x06\x04\x02\x05\x05\r\r\x03\x02\x15\x16\x04\x02\x06\x06" +
		"\x0E\x0E\x04\x02\x04\x04//\u01AD\x02f\x03\x02\x02\x02\x04o\x03\x02\x02" +
		"\x02\x06\x84\x03\x02\x02\x02\b\x89\x03\x02\x02\x02\n\x8D\x03\x02\x02\x02" +
		"\f\x97\x03\x02\x02\x02\x0E\x99\x03\x02\x02\x02\x10\x9E\x03\x02\x02\x02" +
		"\x12\xAC\x03\x02\x02\x02\x14\xAE\x03\x02\x02\x02\x16\xB0\x03\x02\x02\x02" +
		"\x18\xB2\x03\x02\x02\x02\x1A\xB4\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02" +
		"\x1E\xBC\x03\x02\x02\x02 \xBE\x03\x02\x02\x02\"\xC2\x03\x02\x02\x02$\xC4" +
		"\x03\x02\x02\x02&\xC8\x03\x02\x02\x02(\xCD\x03\x02\x02\x02*\u0103\x03" +
		"\x02\x02\x02,\u0105\x03\x02\x02\x02.\u010D\x03\x02\x02\x020\u011B\x03" +
		"\x02\x02\x022\u0139\x03\x02\x02\x024\u013D\x03\x02\x02\x026\u013F\x03" +
		"\x02\x02\x028\u0141\x03\x02\x02\x02:\u0149\x03\x02\x02\x02<\u014B\x03" +
		"\x02\x02\x02>\u014D\x03\x02\x02\x02@\u014F\x03\x02\x02\x02B\u0151\x03" +
		"\x02\x02\x02D\u0153\x03\x02\x02\x02F\u0155\x03\x02\x02\x02H\u0159\x03" +
		"\x02\x02\x02J\u0161\x03\x02\x02\x02L\u0163\x03\x02\x02\x02N\u016F\x03" +
		"\x02\x02\x02P\u0171\x03\x02\x02\x02R\u0175\x03\x02\x02\x02T\u0177\x03" +
		"\x02\x02\x02V\u0180\x03\x02\x02\x02X\u0182\x03\x02\x02\x02Z\u0187\x03" +
		"\x02\x02\x02\\\u0192\x03\x02\x02\x02^\u0194\x03\x02\x02\x02`\u0199\x03" +
		"\x02\x02\x02b\u019B\x03\x02\x02\x02d\u01A3\x03\x02\x02\x02fj\x05\x04\x03" +
		"\x02gi\x07\x07\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x07\x02\x02" +
		"\x03n\x03\x03\x02\x02\x02ox\x05\x06\x04\x02pr\x07\x07\x02\x02qp\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02uw\x05\x06\x04\x02vq\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02" +
		"\x02\x02xy\x03\x02\x02\x02y\x05\x03\x02\x02\x02zx\x03\x02\x02\x02{\x85" +
		"\x05\x10\t\x02|~\x05\b\x05\x02}\x7F\x07\x07\x02\x02~}\x03\x02\x02\x02" +
		"\x7F\x80\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02" +
		"\x81\x82\x03\x02\x02\x02\x82\x83\x05\x10\t\x02\x83\x85\x03\x02\x02\x02" +
		"\x84{\x03\x02\x02\x02\x84|\x03\x02\x02\x02\x85\x07\x03\x02\x02\x02\x86" +
		"\x87\x05\n\x06\x02\x87\x88\x07\x07\x02\x02\x88\x8A\x03\x02\x02\x02\x89" +
		"\x86\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B" +
		"\x8C\x03\x02\x02\x02\x8C\t\x03\x02\x02\x02\x8D\x8E\x07\x03\x02\x02\x8E" +
		"\x90\x05\f\x07\x02\x8F\x91\x07\v\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x92" +
		"\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94" +
		"\x03\x02\x02\x02\x94\x95\x05\x0E\b\x02\x95\x96\x07\b\x02\x02\x96\v\x03" +
		"\x02\x02\x02\x97\x98\x07\n\x02\x02\x98\r\x03\x02\x02\x02\x99\x9A\x07\t" +
		"\x02\x02\x9A\x0F\x03\x02\x02\x02\x9B\x9D\x05\x1C\x0F\x02\x9C\x9B\x03\x02" +
		"\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA5\x05\x12" +
		"\n\x02\xA2\xA4\x05\"\x12\x02\xA3\xA2\x03\x02\x02\x02\xA4\xA7\x03\x02\x02" +
		"\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\x11\x03\x02\x02" +
		"\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAD\x05\x14\v\x02\xA9\xAD\x05\x16\f\x02" +
		"\xAA\xAD\x05\x18\r\x02\xAB\xAD\x05\x1A\x0E\x02\xAC\xA8\x03\x02\x02\x02" +
		"\xAC\xA9\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02" +
		"\xAD\x13\x03\x02\x02\x02\xAE\xAF\x07\"\x02\x02\xAF\x15\x03\x02\x02\x02" +
		"\xB0\xB1\x07#\x02\x02\xB1\x17\x03\x02\x02\x02\xB2\xB3\x07$\x02\x02\xB3" +
		"\x19\x03\x02\x02\x02\xB4\xB5\x07%\x02\x02\xB5\x1B\x03\x02\x02\x02\xB6" +
		"\xB9\x05(\x15\x02\xB7\xB9\x05\"\x12\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB7" +
		"\x03\x02\x02\x02\xB9\x1D\x03\x02\x02\x02\xBA\xBD\x05 \x11\x02\xBB\xBD" +
		"\x05\"\x12\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\x1F" +
		"\x03\x02\x02\x02\xBE\xBF\x07&\x02\x02\xBF!\x03\x02\x02\x02\xC0\xC3\x05" +
		"X-\x02\xC1\xC3\x05$\x13\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02\x02" +
		"\x02\xC3#\x03\x02\x02\x02\xC4\xC5\x07\f\x02\x02\xC5\xC6\x05&\x14\x02\xC6" +
		"\xC7\x07(\x02\x02\xC7%\x03\x02\x02\x02\xC8\xC9\x07\'\x02\x02\xC9\'\x03" +
		"\x02\x02\x02\xCA\xCC\x05\x1E\x10\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCF\x03" +
		"\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03" +
		"\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD4\x050\x19\x02\xD1\xD3\x05" +
		"\x1E\x10\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03" +
		"\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD4\x03" +
		"\x02\x02\x02\xD7\xDB\x052\x1A\x02\xD8\xDA\x05\x1E\x10\x02\xD9\xD8\x03" +
		"\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03" +
		"\x02\x02\x02\xDC\xE2\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE1\x05" +
		",\x17\x02\xDF\xE1\x05 \x11\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02" +
		"\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02" +
		"\x02\x02\xE3\xE8\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE7\x05\x1E" +
		"\x10\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02" +
		"\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02" +
		"\x02\x02\xEB\xED\x052\x1A\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\xF1\x03\x02\x02\x02\xEE\xF0\x05\x1E\x10\x02\xEF\xEE\x03\x02" +
		"\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02" +
		"\x02\x02\xF2\xF8\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xF7\x05," +
		"\x17\x02\xF5\xF7\x05 \x11\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF5\x03\x02" +
		"\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02" +
		"\x02\x02\xF9\xFE\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFD\x05\x1E" +
		"\x10\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03" +
		"\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF)\x03\x02\x02\x02\u0100\xFE\x03" +
		"\x02\x02\x02\u0101\u0104\x05\"\x12\x02\u0102\u0104\x05,\x17\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104+\x03\x02\x02" +
		"\x02\u0105\u0107\x07\x18\x02\x02\u0106\u0108\x05(\x15\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x07" +
		"\x19\x02\x02\u010C-\x03\x02\x02\x02\u010D\u0111\x050\x19\x02\u010E\u0110" +
		"\x05\"\x12\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02" +
		"\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03" +
		"\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0118\x052\x1A\x02\u0115" +
		"\u0117\x05,\x17\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02" +
		"\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119/\x03" +
		"\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011C\t\x02\x02\x02\u011C" +
		"1\x03\x02\x02\x02\u011D\u011F\x05H%\x02\u011E\u0120\x054\x1B\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0122\x03\x02" +
		"\x02\x02\u0121\u0123\x05:\x1E\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123" +
		"\x03\x02\x02\x02\u0123\u013A\x03\x02\x02\x02\u0124\u0126\x05N(\x02\u0125" +
		"\u0127\x054\x1B\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02" +
		"\x02\u0127\u0129\x03\x02\x02\x02\u0128\u012A\x05:\x1E\x02\u0129\u0128" +
		"\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u013A\x03\x02\x02\x02" +
		"\u012B\u012D\x05T+\x02\u012C\u012E\x054\x1B\x02\u012D\u012C\x03\x02\x02" +
		"\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0131" +
		"\x05:\x1E\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u013A\x03\x02\x02\x02\u0132\u0134\x05V,\x02\u0133\u0135\x054\x1B" +
		"\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137" +
		"\x03\x02\x02\x02\u0136\u0138\x05:\x1E\x02\u0137\u0136\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u011D\x03" +
		"\x02\x02\x02\u0139\u0124\x03\x02\x02\x02\u0139\u012B\x03\x02\x02\x02\u0139" +
		"\u0132\x03\x02\x02\x02\u013A3\x03\x02\x02\x02\u013B\u013E\x056\x1C\x02" +
		"\u013C\u013E\x058\x1D\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013C\x03" +
		"\x02\x02\x02\u013E5\x03\x02\x02\x02\u013F\u0140\x07 \x02\x02\u01407\x03" +
		"\x02\x02\x02\u0141\u0142\x07!\x02\x02\u01429\x03\x02\x02\x02\u0143\u014A" +
		"\x05<\x1F\x02\u0144\u014A\x05> \x02\u0145\u014A\x05@!\x02\u0146\u014A" +
		"\x05B\"\x02\u0147\u014A\x05D#\x02\u0148\u014A\x05F$\x02\u0149\u0143\x03" +
		"\x02\x02\x02\u0149\u0144\x03\x02\x02\x02\u0149\u0145\x03\x02\x02\x02\u0149" +
		"\u0146\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u0148\x03\x02" +
		"\x02\x02\u014A;\x03\x02\x02\x02\u014B\u014C\x07\x1A\x02\x02\u014C=\x03" +
		"\x02\x02\x02\u014D\u014E\x07\x1B\x02\x02\u014E?\x03\x02\x02\x02\u014F" +
		"\u0150\x07\x1C\x02\x02\u0150A\x03\x02\x02\x02\u0151\u0152\x07\x1D\x02" +
		"\x02\u0152C\x03\x02\x02\x02\u0153\u0154\x07\x1E\x02\x02\u0154E\x03\x02" +
		"\x02\x02\u0155\u0156\x07\x1F\x02\x02\u0156G\x03\x02\x02\x02\u0157\u015A" +
		"\x05J&\x02\u0158\u015A\x05L\'\x02\u0159\u0157\x03\x02\x02\x02\u0159\u0158" +
		"\x03\x02\x02\x02\u015AI\x03\x02\x02\x02\u015B\u015C\x07\x14\x02\x02\u015C" +
		"\u015D\x07\x17\x02\x02\u015D\u0162\x07\x11\x02\x02\u015E\u015F\x07\x14" +
		"\x02\x02\u015F\u0160\x07\x17\x02\x02\u0160\u0162\x05P)\x02\u0161\u015B" +
		"\x03\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0162K\x03\x02\x02\x02\u0163" +
		"\u0165\x05R*\x02\u0164\u0166\x07\x14\x02\x02\u0165\u0164\x03\x02\x02\x02" +
		"\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02\x02\x02\u0167\u0169\x07" +
		"\x13\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016B\x07\x17\x02\x02\u016B\u016C\x07\x11" +
		"\x02\x02\u016CM\x03\x02\x02\x02\u016D\u0170\x07\x11\x02\x02\u016E\u0170" +
		"\x05P)\x02\u016F\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170" +
		"O\x03\x02\x02\x02\u0171\u0172\x07\x11\x02\x02\u0172\u0173\x07\x12\x02" +
		"\x02\u0173\u0174\x05R*\x02\u0174Q\x03\x02\x02\x02\u0175\u0176\x07\x10" +
		"\x02\x02\u0176S\x03\x02\x02\x02\u0177\u0179\x05R*\x02\u0178\u017A\x07" +
		"\x13\x02\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017C\x03\x02\x02\x02\u017B\u017D\x07\x14\x02\x02\u017C\u017B\x03\x02" +
		"\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E" +
		"\u017F\x07\x11\x02\x02\u017FU\x03\x02\x02\x02\u0180\u0181\t\x03\x02\x02" +
		"\u0181W\x03\x02\x02\x02\u0182\u0183\t\x04\x02\x02\u0183\u0184\x05Z.\x02" +
		"\u0184\u0185\x07*\x02\x02\u0185Y\x03\x02\x02\x02\u0186\u0188\x05\\/\x02" +
		"\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u018C\x03" +
		"\x02\x02\x02\u0189\u018B\x05^0\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018E" +
		"\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02" +
		"\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0191\x05" +
		"\\/\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
		"[\x03\x02\x02\x02\u0192\u0193\x07+\x02\x02\u0193]\x03\x02\x02\x02\u0194" +
		"\u0195\x07)\x02\x02\u0195\u0196\x05`1\x02\u0196\u0197\x05b2\x02\u0197" +
		"\u0198\x07-\x02\x02\u0198_\x03\x02\x02\x02\u0199\u019A\x07,\x02\x02\u019A" +
		"a\x03\x02\x02\x02\u019B\u01A0\x05d3\x02\u019C\u019D\x07.\x02\x02\u019D" +
		"\u019F\x05d3\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02" +
		"\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1c\x03\x02" +
		"\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A4\t\x05\x02\x02\u01A4e" +
		"\x03\x02\x02\x024jsx\x80\x84\x8B\x92\x9E\xA5\xAC\xB8\xBC\xC2\xCD\xD4\xDB" +
		"\xE0\xE2\xE8\xEC\xF1\xF6\xF8\xFE\u0103\u0109\u0111\u0118\u011F\u0122\u0126" +
		"\u0129\u012D\u0130\u0134\u0137\u0139\u013D\u0149\u0159\u0161\u0165\u0168" +
		"\u016F\u0179\u017C\u0187\u018C\u0190\u01A0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EnhancedPGNParser.__ATN) {
			EnhancedPGNParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(EnhancedPGNParser._serializedATN));
		}

		return EnhancedPGNParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public pgn_database(): Pgn_databaseContext {
		return this.getRuleContext(0, Pgn_databaseContext);
	}
	public EOF(): TerminalNode { return this.getToken(EnhancedPGNParser.EOF, 0); }
	public NEW_LINE(): TerminalNode[];
	public NEW_LINE(i: number): TerminalNode;
	public NEW_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EnhancedPGNParser.NEW_LINE);
		} else {
			return this.getToken(EnhancedPGNParser.NEW_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_parse; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pgn_databaseContext extends ParserRuleContext {
	public pgn(): PgnContext[];
	public pgn(i: number): PgnContext;
	public pgn(i?: number): PgnContext | PgnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PgnContext);
		} else {
			return this.getRuleContext(i, PgnContext);
		}
	}
	public NEW_LINE(): TerminalNode[];
	public NEW_LINE(i: number): TerminalNode;
	public NEW_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EnhancedPGNParser.NEW_LINE);
		} else {
			return this.getToken(EnhancedPGNParser.NEW_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_pgn_database; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPgn_database) {
			listener.enterPgn_database(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPgn_database) {
			listener.exitPgn_database(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPgn_database) {
			return visitor.visitPgn_database(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PgnContext extends ParserRuleContext {
	public move_text(): Move_textContext {
		return this.getRuleContext(0, Move_textContext);
	}
	public tag_pairs(): Tag_pairsContext | undefined {
		return this.tryGetRuleContext(0, Tag_pairsContext);
	}
	public NEW_LINE(): TerminalNode[];
	public NEW_LINE(i: number): TerminalNode;
	public NEW_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EnhancedPGNParser.NEW_LINE);
		} else {
			return this.getToken(EnhancedPGNParser.NEW_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_pgn; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPgn) {
			listener.enterPgn(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPgn) {
			listener.exitPgn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPgn) {
			return visitor.visitPgn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tag_pairsContext extends ParserRuleContext {
	public tag_pair(): Tag_pairContext[];
	public tag_pair(i: number): Tag_pairContext;
	public tag_pair(i?: number): Tag_pairContext | Tag_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tag_pairContext);
		} else {
			return this.getRuleContext(i, Tag_pairContext);
		}
	}
	public NEW_LINE(): TerminalNode[];
	public NEW_LINE(i: number): TerminalNode;
	public NEW_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EnhancedPGNParser.NEW_LINE);
		} else {
			return this.getToken(EnhancedPGNParser.NEW_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_tag_pairs; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterTag_pairs) {
			listener.enterTag_pairs(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitTag_pairs) {
			listener.exitTag_pairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitTag_pairs) {
			return visitor.visitTag_pairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tag_pairContext extends ParserRuleContext {
	public TAG_START(): TerminalNode { return this.getToken(EnhancedPGNParser.TAG_START, 0); }
	public tag_key(): Tag_keyContext {
		return this.getRuleContext(0, Tag_keyContext);
	}
	public tag_value(): Tag_valueContext {
		return this.getRuleContext(0, Tag_valueContext);
	}
	public TAG_END(): TerminalNode { return this.getToken(EnhancedPGNParser.TAG_END, 0); }
	public TAG_SPACE(): TerminalNode[];
	public TAG_SPACE(i: number): TerminalNode;
	public TAG_SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EnhancedPGNParser.TAG_SPACE);
		} else {
			return this.getToken(EnhancedPGNParser.TAG_SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_tag_pair; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterTag_pair) {
			listener.enterTag_pair(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitTag_pair) {
			listener.exitTag_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitTag_pair) {
			return visitor.visitTag_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tag_keyContext extends ParserRuleContext {
	public TAG_KEY(): TerminalNode { return this.getToken(EnhancedPGNParser.TAG_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_tag_key; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterTag_key) {
			listener.enterTag_key(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitTag_key) {
			listener.exitTag_key(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitTag_key) {
			return visitor.visitTag_key(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tag_valueContext extends ParserRuleContext {
	public TAG_VALUE(): TerminalNode { return this.getToken(EnhancedPGNParser.TAG_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_tag_value; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterTag_value) {
			listener.enterTag_value(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitTag_value) {
			listener.exitTag_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitTag_value) {
			return visitor.visitTag_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Move_textContext extends ParserRuleContext {
	public game_termination(): Game_terminationContext {
		return this.getRuleContext(0, Game_terminationContext);
	}
	public move_text_item(): Move_text_itemContext[];
	public move_text_item(i: number): Move_text_itemContext;
	public move_text_item(i?: number): Move_text_itemContext | Move_text_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Move_text_itemContext);
		} else {
			return this.getRuleContext(i, Move_text_itemContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_move_text; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterMove_text) {
			listener.enterMove_text(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitMove_text) {
			listener.exitMove_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitMove_text) {
			return visitor.visitMove_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Game_terminationContext extends ParserRuleContext {
	public white_wins(): White_winsContext | undefined {
		return this.tryGetRuleContext(0, White_winsContext);
	}
	public black_wins(): Black_winsContext | undefined {
		return this.tryGetRuleContext(0, Black_winsContext);
	}
	public draw(): DrawContext | undefined {
		return this.tryGetRuleContext(0, DrawContext);
	}
	public unknown_ending(): Unknown_endingContext | undefined {
		return this.tryGetRuleContext(0, Unknown_endingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_game_termination; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterGame_termination) {
			listener.enterGame_termination(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitGame_termination) {
			listener.exitGame_termination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitGame_termination) {
			return visitor.visitGame_termination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class White_winsContext extends ParserRuleContext {
	public WHITE_WINS(): TerminalNode { return this.getToken(EnhancedPGNParser.WHITE_WINS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_white_wins; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterWhite_wins) {
			listener.enterWhite_wins(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitWhite_wins) {
			listener.exitWhite_wins(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitWhite_wins) {
			return visitor.visitWhite_wins(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Black_winsContext extends ParserRuleContext {
	public BLACK_WINS(): TerminalNode { return this.getToken(EnhancedPGNParser.BLACK_WINS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_black_wins; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterBlack_wins) {
			listener.enterBlack_wins(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitBlack_wins) {
			listener.exitBlack_wins(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitBlack_wins) {
			return visitor.visitBlack_wins(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrawContext extends ParserRuleContext {
	public DRAW(): TerminalNode { return this.getToken(EnhancedPGNParser.DRAW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_draw; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterDraw) {
			listener.enterDraw(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitDraw) {
			listener.exitDraw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitDraw) {
			return visitor.visitDraw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unknown_endingContext extends ParserRuleContext {
	public UNKOWN_ENDING(): TerminalNode { return this.getToken(EnhancedPGNParser.UNKOWN_ENDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_unknown_ending; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterUnknown_ending) {
			listener.enterUnknown_ending(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitUnknown_ending) {
			listener.exitUnknown_ending(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitUnknown_ending) {
			return visitor.visitUnknown_ending(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Move_text_itemContext extends ParserRuleContext {
	public turn(): TurnContext | undefined {
		return this.tryGetRuleContext(0, TurnContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_move_text_item; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterMove_text_item) {
			listener.enterMove_text_item(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitMove_text_item) {
			listener.exitMove_text_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitMove_text_item) {
			return visitor.visitMove_text_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Turn_itemContext extends ParserRuleContext {
	public nag(): NagContext | undefined {
		return this.tryGetRuleContext(0, NagContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_turn_item; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterTurn_item) {
			listener.enterTurn_item(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitTurn_item) {
			listener.exitTurn_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitTurn_item) {
			return visitor.visitTurn_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NagContext extends ParserRuleContext {
	public NAG(): TerminalNode { return this.getToken(EnhancedPGNParser.NAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_nag; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterNag) {
			listener.enterNag(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitNag) {
			listener.exitNag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitNag) {
			return visitor.visitNag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public block_comment(): Block_commentContext | undefined {
		return this.tryGetRuleContext(0, Block_commentContext);
	}
	public eol_comment(): Eol_commentContext | undefined {
		return this.tryGetRuleContext(0, Eol_commentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_comment; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eol_commentContext extends ParserRuleContext {
	public EOL_COMMENT_START(): TerminalNode { return this.getToken(EnhancedPGNParser.EOL_COMMENT_START, 0); }
	public eol_comment_body(): Eol_comment_bodyContext {
		return this.getRuleContext(0, Eol_comment_bodyContext);
	}
	public EOL_COMMENT_END(): TerminalNode { return this.getToken(EnhancedPGNParser.EOL_COMMENT_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_eol_comment; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterEol_comment) {
			listener.enterEol_comment(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitEol_comment) {
			listener.exitEol_comment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitEol_comment) {
			return visitor.visitEol_comment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eol_comment_bodyContext extends ParserRuleContext {
	public EOL_COMMENT_TEXT(): TerminalNode { return this.getToken(EnhancedPGNParser.EOL_COMMENT_TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_eol_comment_body; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterEol_comment_body) {
			listener.enterEol_comment_body(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitEol_comment_body) {
			listener.exitEol_comment_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitEol_comment_body) {
			return visitor.visitEol_comment_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TurnContext extends ParserRuleContext {
	public move_num(): Move_numContext {
		return this.getRuleContext(0, Move_numContext);
	}
	public san(): SanContext[];
	public san(i: number): SanContext;
	public san(i?: number): SanContext | SanContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SanContext);
		} else {
			return this.getRuleContext(i, SanContext);
		}
	}
	public turn_item(): Turn_itemContext[];
	public turn_item(i: number): Turn_itemContext;
	public turn_item(i?: number): Turn_itemContext | Turn_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Turn_itemContext);
		} else {
			return this.getRuleContext(i, Turn_itemContext);
		}
	}
	public alternate_line(): Alternate_lineContext[];
	public alternate_line(i: number): Alternate_lineContext;
	public alternate_line(i?: number): Alternate_lineContext | Alternate_lineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Alternate_lineContext);
		} else {
			return this.getRuleContext(i, Alternate_lineContext);
		}
	}
	public nag(): NagContext[];
	public nag(i: number): NagContext;
	public nag(i?: number): NagContext | NagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NagContext);
		} else {
			return this.getRuleContext(i, NagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_turn; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterTurn) {
			listener.enterTurn(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitTurn) {
			listener.exitTurn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitTurn) {
			return visitor.visitTurn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inter_san_itemContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public alternate_line(): Alternate_lineContext | undefined {
		return this.tryGetRuleContext(0, Alternate_lineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_inter_san_item; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterInter_san_item) {
			listener.enterInter_san_item(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitInter_san_item) {
			listener.exitInter_san_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitInter_san_item) {
			return visitor.visitInter_san_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alternate_lineContext extends ParserRuleContext {
	public ALTERNATE_LINE_START(): TerminalNode { return this.getToken(EnhancedPGNParser.ALTERNATE_LINE_START, 0); }
	public ALTERNATE_LINE_END(): TerminalNode { return this.getToken(EnhancedPGNParser.ALTERNATE_LINE_END, 0); }
	public turn(): TurnContext[];
	public turn(i: number): TurnContext;
	public turn(i?: number): TurnContext | TurnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TurnContext);
		} else {
			return this.getRuleContext(i, TurnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_alternate_line; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterAlternate_line) {
			listener.enterAlternate_line(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitAlternate_line) {
			listener.exitAlternate_line(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitAlternate_line) {
			return visitor.visitAlternate_line(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alternate_line_bodyContext extends ParserRuleContext {
	public move_num(): Move_numContext {
		return this.getRuleContext(0, Move_numContext);
	}
	public san(): SanContext {
		return this.getRuleContext(0, SanContext);
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	public alternate_line(): Alternate_lineContext[];
	public alternate_line(i: number): Alternate_lineContext;
	public alternate_line(i?: number): Alternate_lineContext | Alternate_lineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Alternate_lineContext);
		} else {
			return this.getRuleContext(i, Alternate_lineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_alternate_line_body; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterAlternate_line_body) {
			listener.enterAlternate_line_body(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitAlternate_line_body) {
			listener.exitAlternate_line_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitAlternate_line_body) {
			return visitor.visitAlternate_line_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Move_numContext extends ParserRuleContext {
	public MOVE_TEXT_START(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.MOVE_TEXT_START, 0); }
	public MOVE_NUM(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.MOVE_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_move_num; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterMove_num) {
			listener.enterMove_num(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitMove_num) {
			listener.exitMove_num(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitMove_num) {
			return visitor.visitMove_num(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SanContext extends ParserRuleContext {
	public capture(): CaptureContext | undefined {
		return this.tryGetRuleContext(0, CaptureContext);
	}
	public check_like(): Check_likeContext | undefined {
		return this.tryGetRuleContext(0, Check_likeContext);
	}
	public move_analysis(): Move_analysisContext | undefined {
		return this.tryGetRuleContext(0, Move_analysisContext);
	}
	public pawn_move(): Pawn_moveContext | undefined {
		return this.tryGetRuleContext(0, Pawn_moveContext);
	}
	public piece_move(): Piece_moveContext | undefined {
		return this.tryGetRuleContext(0, Piece_moveContext);
	}
	public castle(): CastleContext | undefined {
		return this.tryGetRuleContext(0, CastleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_san; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterSan) {
			listener.enterSan(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitSan) {
			listener.exitSan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitSan) {
			return visitor.visitSan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Check_likeContext extends ParserRuleContext {
	public check(): CheckContext | undefined {
		return this.tryGetRuleContext(0, CheckContext);
	}
	public checkmate(): CheckmateContext | undefined {
		return this.tryGetRuleContext(0, CheckmateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_check_like; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCheck_like) {
			listener.enterCheck_like(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCheck_like) {
			listener.exitCheck_like(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCheck_like) {
			return visitor.visitCheck_like(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckContext extends ParserRuleContext {
	public CHECK(): TerminalNode { return this.getToken(EnhancedPGNParser.CHECK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_check; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCheck) {
			listener.enterCheck(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCheck) {
			listener.exitCheck(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCheck) {
			return visitor.visitCheck(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckmateContext extends ParserRuleContext {
	public CHECKMATE(): TerminalNode { return this.getToken(EnhancedPGNParser.CHECKMATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_checkmate; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCheckmate) {
			listener.enterCheckmate(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCheckmate) {
			listener.exitCheckmate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCheckmate) {
			return visitor.visitCheckmate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Move_analysisContext extends ParserRuleContext {
	public blunder(): BlunderContext | undefined {
		return this.tryGetRuleContext(0, BlunderContext);
	}
	public mistake(): MistakeContext | undefined {
		return this.tryGetRuleContext(0, MistakeContext);
	}
	public dubious_move(): Dubious_moveContext | undefined {
		return this.tryGetRuleContext(0, Dubious_moveContext);
	}
	public interesting_move(): Interesting_moveContext | undefined {
		return this.tryGetRuleContext(0, Interesting_moveContext);
	}
	public good_move(): Good_moveContext | undefined {
		return this.tryGetRuleContext(0, Good_moveContext);
	}
	public brilliant_move(): Brilliant_moveContext | undefined {
		return this.tryGetRuleContext(0, Brilliant_moveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_move_analysis; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterMove_analysis) {
			listener.enterMove_analysis(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitMove_analysis) {
			listener.exitMove_analysis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitMove_analysis) {
			return visitor.visitMove_analysis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlunderContext extends ParserRuleContext {
	public BLUNDER(): TerminalNode { return this.getToken(EnhancedPGNParser.BLUNDER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_blunder; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterBlunder) {
			listener.enterBlunder(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitBlunder) {
			listener.exitBlunder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitBlunder) {
			return visitor.visitBlunder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MistakeContext extends ParserRuleContext {
	public MISTAKE(): TerminalNode { return this.getToken(EnhancedPGNParser.MISTAKE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_mistake; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterMistake) {
			listener.enterMistake(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitMistake) {
			listener.exitMistake(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitMistake) {
			return visitor.visitMistake(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dubious_moveContext extends ParserRuleContext {
	public DUBIOUS_MOVE(): TerminalNode { return this.getToken(EnhancedPGNParser.DUBIOUS_MOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_dubious_move; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterDubious_move) {
			listener.enterDubious_move(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitDubious_move) {
			listener.exitDubious_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitDubious_move) {
			return visitor.visitDubious_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interesting_moveContext extends ParserRuleContext {
	public INTERESTING_MOVE(): TerminalNode { return this.getToken(EnhancedPGNParser.INTERESTING_MOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_interesting_move; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterInteresting_move) {
			listener.enterInteresting_move(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitInteresting_move) {
			listener.exitInteresting_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitInteresting_move) {
			return visitor.visitInteresting_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Good_moveContext extends ParserRuleContext {
	public GOOD_MOVE(): TerminalNode { return this.getToken(EnhancedPGNParser.GOOD_MOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_good_move; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterGood_move) {
			listener.enterGood_move(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitGood_move) {
			listener.exitGood_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitGood_move) {
			return visitor.visitGood_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Brilliant_moveContext extends ParserRuleContext {
	public BRILLIANT_MOVE(): TerminalNode { return this.getToken(EnhancedPGNParser.BRILLIANT_MOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_brilliant_move; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterBrilliant_move) {
			listener.enterBrilliant_move(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitBrilliant_move) {
			listener.exitBrilliant_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitBrilliant_move) {
			return visitor.visitBrilliant_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaptureContext extends ParserRuleContext {
	public pawn_capture(): Pawn_captureContext | undefined {
		return this.tryGetRuleContext(0, Pawn_captureContext);
	}
	public piece_capture(): Piece_captureContext | undefined {
		return this.tryGetRuleContext(0, Piece_captureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_capture; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCapture) {
			listener.enterCapture(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCapture) {
			listener.exitCapture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCapture) {
			return visitor.visitCapture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pawn_captureContext extends ParserRuleContext {
	public FILE(): TerminalNode { return this.getToken(EnhancedPGNParser.FILE, 0); }
	public CAPTURE_MARKER(): TerminalNode { return this.getToken(EnhancedPGNParser.CAPTURE_MARKER, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.LOCATION, 0); }
	public promotion(): PromotionContext | undefined {
		return this.tryGetRuleContext(0, PromotionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_pawn_capture; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPawn_capture) {
			listener.enterPawn_capture(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPawn_capture) {
			listener.exitPawn_capture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPawn_capture) {
			return visitor.visitPawn_capture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Piece_captureContext extends ParserRuleContext {
	public piece(): PieceContext {
		return this.getRuleContext(0, PieceContext);
	}
	public CAPTURE_MARKER(): TerminalNode { return this.getToken(EnhancedPGNParser.CAPTURE_MARKER, 0); }
	public LOCATION(): TerminalNode { return this.getToken(EnhancedPGNParser.LOCATION, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.FILE, 0); }
	public RANK(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.RANK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_piece_capture; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPiece_capture) {
			listener.enterPiece_capture(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPiece_capture) {
			listener.exitPiece_capture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPiece_capture) {
			return visitor.visitPiece_capture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pawn_moveContext extends ParserRuleContext {
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.LOCATION, 0); }
	public promotion(): PromotionContext | undefined {
		return this.tryGetRuleContext(0, PromotionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_pawn_move; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPawn_move) {
			listener.enterPawn_move(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPawn_move) {
			listener.exitPawn_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPawn_move) {
			return visitor.visitPawn_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PromotionContext extends ParserRuleContext {
	public LOCATION(): TerminalNode { return this.getToken(EnhancedPGNParser.LOCATION, 0); }
	public PROMOTION(): TerminalNode { return this.getToken(EnhancedPGNParser.PROMOTION, 0); }
	public piece(): PieceContext {
		return this.getRuleContext(0, PieceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_promotion; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPromotion) {
			listener.enterPromotion(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPromotion) {
			listener.exitPromotion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPromotion) {
			return visitor.visitPromotion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PieceContext extends ParserRuleContext {
	public PIECE(): TerminalNode { return this.getToken(EnhancedPGNParser.PIECE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_piece; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPiece) {
			listener.enterPiece(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPiece) {
			listener.exitPiece(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPiece) {
			return visitor.visitPiece(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Piece_moveContext extends ParserRuleContext {
	public piece(): PieceContext {
		return this.getRuleContext(0, PieceContext);
	}
	public LOCATION(): TerminalNode { return this.getToken(EnhancedPGNParser.LOCATION, 0); }
	public RANK(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.RANK, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.FILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_piece_move; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterPiece_move) {
			listener.enterPiece_move(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitPiece_move) {
			listener.exitPiece_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitPiece_move) {
			return visitor.visitPiece_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastleContext extends ParserRuleContext {
	public LONG_CASTLE(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.LONG_CASTLE, 0); }
	public SHORT_CASTLE(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.SHORT_CASTLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_castle; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCastle) {
			listener.enterCastle(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCastle) {
			listener.exitCastle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCastle) {
			return visitor.visitCastle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_commentContext extends ParserRuleContext {
	public block_comment_body(): Block_comment_bodyContext {
		return this.getRuleContext(0, Block_comment_bodyContext);
	}
	public BLOCK_COMMENT_END(): TerminalNode { return this.getToken(EnhancedPGNParser.BLOCK_COMMENT_END, 0); }
	public BLOCK_COMMENT_START(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.BLOCK_COMMENT_START, 0); }
	public MOVE_TEXT_START_WITH_COMMENT(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.MOVE_TEXT_START_WITH_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_block_comment; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterBlock_comment) {
			listener.enterBlock_comment(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitBlock_comment) {
			listener.exitBlock_comment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitBlock_comment) {
			return visitor.visitBlock_comment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_comment_bodyContext extends ParserRuleContext {
	public block_comment_text(): Block_comment_textContext[];
	public block_comment_text(i: number): Block_comment_textContext;
	public block_comment_text(i?: number): Block_comment_textContext | Block_comment_textContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Block_comment_textContext);
		} else {
			return this.getRuleContext(i, Block_comment_textContext);
		}
	}
	public command(): CommandContext[];
	public command(i: number): CommandContext;
	public command(i?: number): CommandContext | CommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandContext);
		} else {
			return this.getRuleContext(i, CommandContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_block_comment_body; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterBlock_comment_body) {
			listener.enterBlock_comment_body(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitBlock_comment_body) {
			listener.exitBlock_comment_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitBlock_comment_body) {
			return visitor.visitBlock_comment_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_comment_textContext extends ParserRuleContext {
	public BLOCK_COMMENT_TEXT(): TerminalNode { return this.getToken(EnhancedPGNParser.BLOCK_COMMENT_TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_block_comment_text; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterBlock_comment_text) {
			listener.enterBlock_comment_text(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitBlock_comment_text) {
			listener.exitBlock_comment_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitBlock_comment_text) {
			return visitor.visitBlock_comment_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public COMMAND_START(): TerminalNode { return this.getToken(EnhancedPGNParser.COMMAND_START, 0); }
	public command_id(): Command_idContext {
		return this.getRuleContext(0, Command_idContext);
	}
	public command_params(): Command_paramsContext {
		return this.getRuleContext(0, Command_paramsContext);
	}
	public COMMAND_END(): TerminalNode { return this.getToken(EnhancedPGNParser.COMMAND_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_command; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_idContext extends ParserRuleContext {
	public COMMAND_ID(): TerminalNode { return this.getToken(EnhancedPGNParser.COMMAND_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_command_id; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCommand_id) {
			listener.enterCommand_id(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCommand_id) {
			listener.exitCommand_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCommand_id) {
			return visitor.visitCommand_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_paramsContext extends ParserRuleContext {
	public command_param(): Command_paramContext[];
	public command_param(i: number): Command_paramContext;
	public command_param(i?: number): Command_paramContext | Command_paramContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Command_paramContext);
		} else {
			return this.getRuleContext(i, Command_paramContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(EnhancedPGNParser.COMMA);
		} else {
			return this.getToken(EnhancedPGNParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_command_params; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCommand_params) {
			listener.enterCommand_params(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCommand_params) {
			listener.exitCommand_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCommand_params) {
			return visitor.visitCommand_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_paramContext extends ParserRuleContext {
	public PARAM_TEXT(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.PARAM_TEXT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(EnhancedPGNParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return EnhancedPGNParser.RULE_command_param; }
	// @Override
	public enterRule(listener: EnhancedPGNParserListener): void {
		if (listener.enterCommand_param) {
			listener.enterCommand_param(this);
		}
	}
	// @Override
	public exitRule(listener: EnhancedPGNParserListener): void {
		if (listener.exitCommand_param) {
			listener.exitCommand_param(this);
		}
	}
	// @Override
	public accept<Result>(visitor: EnhancedPGNParserVisitor<Result>): Result {
		if (visitor.visitCommand_param) {
			return visitor.visitCommand_param(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


