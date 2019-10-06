import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import {ParseTreeWalker} from "antlr4ts/tree";
import {EnhancedPGNLexer} from "./EnhancedPGNLexer";
import {EnhancedPGNParser, PgnContext, Block_commentContext, Block_comment_bodyContext} from "./EnhancedPGNParser";
import {EnhancedPGNParserListener} from "./EnhancedPGNParserListener";

// Create the lexer and parser
let inputStream = new ANTLRInputStream(`[Event "Openings Explained: Budapest Gambit: Smothered Mate Trap"]
[Site "https://lichess.org/study/QrlaRm8M"]
[Result "*"]
[UTCDate "2019.01.01"]
[UTCTime "14:10:11"]
[Variant "Standard"]
[ECO "A52"]
[Opening "Budapest Defense: Rubinstein Variation"]
[Annotator "https://lichess.org/@/EricRosen"]

1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Bf4 Nc6 5. Nf3 Bb4+ 6. Nbd2 Qe7 7. a3 Ngxe5!? 8. axb4?? (8. Nxe5 Nxe5 9. Bxe5 Bxd2+ 10. Qxd2 { [%cal Ge8g8] } 10... Qxe5 { [%cal Ge8g8,Gd7d6] }) 8... Nd3# *


[Event "Openings Explained: Budapest Declined: 3...d5?!"]
[Site "https://lichess.org/study/QrlaRm8M"]
[Result "*"]
[UTCDate "2019.01.01"]
[UTCTime "15:08:11"]
[Variant "Standard"]
[ECO "A51"]
[Opening "Indian Game: Budapest Defense"]
[Annotator "https://lichess.org/@/EricRosen"]

1. d4 Nf6 2. c4 e5 3. d5?! Bc5 4. Bg5? Bxf2+! (4... Ne4 5. Bxd8 (5. Be3 Bxe3 6. fxe3 Qh4+ 7. g3 Nxg3 8. Nf3 Qh5 9. Rg1) 5... Bxf2#) 5. Kxf2 { [%csl Gg5][%cal Gf6e4] } 5... Ne4+? { Amazingly, black may have thrown away the advantage with this move } (5... Ng4+ $19 { Wins back the piece with a dominating position }) 6. Ke1 (6. Ke3 { [%csl Ge3,Gg5] } 6... Nxg5 (6... Qxg5+ 7. Kxe4 { [%csl Ge4] } 7... d6 (7... Qg6+ 8. Ke3 Qb6+ { [%cal Ge3f3,Ge3d3] } 9. Kd3 (9. Kf3 { [%cal Gb6f6,Gf6b6,Gf3e3,Ge3f3] }) 9... Qxb2) 8. Kd3) 7. h4! { Trapping the knight } { [%csl Ge3] }) 6... Qxg5 $19 *


[Event "Berlin Four Masters"]
[Site "Berlin DEU"]
[Date "1918.04.22"]
[Round "3"]
[White "Akiba Rubinstein"]
[Black "Milan Vidmar"]
[Result "0-1"]
[UTCDate "2019.01.02"]
[UTCTime "07:08:31"]
[Variant "Standard"]
[ECO "A52"]
[Opening "Budapest Defense"]
[Annotator "https://lichess.org/@/EricRosen"]

1. d4 Nf6 2. c4 (2. Nd2 e5 3. dxe5 Ng4 4. h3 Ne3 { [%csl Gd1] } 5. fxe3 Qh4+ 6. g3 Qxg3#) 2... e5 3. dxe5 Ng4 4. Qd4 (4. Bf4 Nc6 5. Nf3 Bb4+ 6. Nbd2 (6. Nc3 Qe7 { [%csl Gd5][%cal Gb1c3,Gb1d2,Rd1d5] } 7. Qd5 Bxc3+ 8. bxc3 Qa3 { [%csl Rc3] } 9. Rc1 (9. Qd2 Qa5) 9... Qxa2 (9... f6 10. exf6 Nxf6 { [%csl Rf1,Re1,Rh1][%cal Gf6d5,Ge8g8,Ga3c3,Ga3c1,Ga3a2] } 11. Qd2 d6 { [%cal Rf4c7] } 12. Nd4 O-O 13. e3 (13. Nb5 Qa5) 13... Nxd4 14. cxd4 { [%cal Ga5e1] } 14... Ne4 { [%csl Rd2][%cal Ga5e1,Gd2c1] } 15. Qc2 Qa5+ 16. Ke2 (16. Kd1 Bd7 { [%csl Ga4][%cal Gd7a4] }) 16... Rxf4 17. exf4 Bf5 18. Qb2 Re8 19. Kf3 Nd2+ 20. Kg3 Ne4+ 21. Kh4 (21. Kf3 { [%csl Gf5,Ge4,Ga5,Ge8] } 21... h5 22. Bd3 (22. h3 h4! { What's the threat? } 23. g4 { [%csl Gg2][%cal Gf3g2] } (23. Rd1) 23... Nd2+ 24. Kg2 Be4+ { [%csl Gf3][%cal Gg2h2,Gg2g1,Gd2f3] } 25. Kg1 Nf3+ 26. Kg2 Nxd4+ 27. Kg1 Nf3+ 28. Kg2 Qc5 { [%cal Ge4c6,Ge8e1] } 29. a3 Bc6 30. Rd1 Re1 31. Rxe1 Nxe1+ 32. Kg1 Nf3+ 33. Kg2 Nd2+ { [%cal Gd2f1] } 34. Kg1 Nxf1 35. Kxf1 Bxh1) 22... Bg4+ { [%cal Gf3e3,Ge4g3] }) 21... Re6 { [%cal Ge6h6] } 22. Be2 Rh6+ 23. Bh5 Rxh5+ 24. Kxh5 { [%csl Gh5][%cal Ga5h5] } 24... Bg6+ { 0-1 White resigns. } 25. Kg4 Qh5#) 10. h3 { [%csl Rg4][%cal Gg4h6,Gf4h6] }))  (4. f4 Bc5 5. Nh3) 4... d6 5. exd6 Nc6 6. Qe4+ Be6 7. dxc7 0-1


[Event "Openings Explained: Budapest Gambit: Responding to the greedy 4.Qd4?!"]
[Site "https://lichess.org/study/QrlaRm8M"]
[Result "*"]
[UTCDate "2019.01.03"]
[UTCTime "05:19:54"]
[Variant "Standard"]
[ECO "A52"]
[Opening "Budapest Defense"]
[Annotator "https://lichess.org/@/EricRosen"]

1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 { [%csl Gg4] } 4. Qd4 { Black to move } 4... d6! { sacrificing a pawn for activity and initiative } 5. exd6 Nc6 { [%csl Gd4,Gg4][%cal Gc8g4] } 6. Qe4+ { [%csl Gd6] } 6... Be6 7. dxc7 { Black to move } 7... Qd1+ { [%csl Gd1] } 8. Kxd1 Nxf2+ 9. Ke1 Nxe4 { [%csl Gc7,Gc2,Gf2,Rc4][%cal Gc6d4,Gc6b4,Re1f2,Gf8c5] } *


[Event "Openings Explained: Do you even rook lift, bro?"]
[Site "https://lichess.org/study/QrlaRm8M"]
[Result "*"]
[UTCDate "2019.01.03"]
[UTCTime "05:21:44"]
[Variant "Standard"]
[ECO "A52"]
[Opening "Budapest Defense: Adler Variation"]
[Annotator "https://lichess.org/@/EricRosen"]

1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Nf3 Nc6 (4... Bc5 { inducing white to play e3 and making the c1 bishop a bit depressed } { [%csl Gf2][%cal Ge2e3] } 5. e3 { [%csl Rc1] } 5... Nc6 { [%csl Re5][%cal Gd1d5,Gd8e7] } 6. Nc3 Ngxe5 7. Nxe5 (7. Be2 Nxf3+ 8. Bxf3 Ne5 { [%csl Ge2][%cal Gf3e2] }) 7... Nxe5 8. Be2 O-O 9. O-O Re8 10. a3 { [%csl Gb4,Gb2][%cal Gb2b4,Gc1b2] } 10... a5 { [%csl Gb4] } 11. b3 { Black to move... what is the plan? } { [%cal Ga6h6] } 11... Ra6 { [%csl Gh6,Ge5][%cal Ga6h6,Gd8h4,Gh6h2,Gd7d6,Gc8h3] } 12. Bb2 Rh6 13. Nd5 d6 14. b4 { [%csl Gb4] } 14... Qh4 { [%csl Gh2] } 15. h3 Bxh3 16. g3 (16. gxh3 Qxh3 { [%csl Gh1,Gh2][%cal Gh3h2,Gh3h1] }) 16... Qe4 { [%csl Gg2][%cal Ge4g2] } 17. f3 { [%csl Ge3][%cal Gc5e3] } 17... Bxe3+ 18. Nxe3 Qxe3+ 19. Rf2 Qg5 { [%csl Gg3] } 20. Bxe5 (20. g4 Qh4 { [%csl Gg3][%cal Gh4g3,Gh6h1] }) 20... Rxe5 21. Bf1 Qxg3+ { Paasikangas Tella, Johanna - Maidla, Vallo, 0-1, Salo We SalSK op, 1993, https://lichess.org/io7IsbEb }) 5. Bf4 *


[Event "Openings Explained: Brutal Queen Trap"]
[Site "https://lichess.org/study/QrlaRm8M"]
[Result "*"]
[UTCDate "2019.01.03"]
[UTCTime "05:26:34"]
[Variant "Standard"]
[ECO "A45"]
[Opening "Indian Game: Lazard Gambit"]
[Annotator "https://lichess.org/@/EricRosen"]

1. d4 Nf6 2. Nd2 e5 3. dxe5 Ng4 4. h3? { Black to move! } 4... Ne3!! 5. fxe3 Qh4+ 6. g3 Qxg3# *
`);
let lexer = new EnhancedPGNLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new EnhancedPGNParser(tokenStream);

class ExampleListener implements EnhancedPGNParserListener {
    public enterEveryRule(ctx: ParserRuleContext) {
        console.log(`${ctx.toInfoString(parser)} - ${ctx.text}`);
    }
}
/*
...
ParserRuleContextparse,pgn_database,pgn,tag_pairs,tag_pair,tag_key{start=[@1101,3186:3194='Annotator',<8>,52:1], stop=[@1101,3186:3194='Annotator',<8>,52:1]} - Annotator
ParserRuleContextparse,pgn_database,pgn,tag_pairs,tag_pair,tag_value{start=[@1103,3196:3228='"https://lichess.org/@/EricRosen"',<7>,52:11], stop=[@1103,3196:3228='"https://lichess.org/@/EricRosen"',<7>,52:11]} - "https://lichess.org/@/EricRosen"
ParserRuleContextparse,pgn_database,pgn,move_text{start=[@1107,3232:3233='1.',<3>,54:0], stop=[@1232,3572:3572='*',<35>,54:340]} - 1.d4Nf62.c4e53.dxe5Ng4{ [%csl Gg4] }4.Qd4{ Black to move }4...d6!{ sacrificing a pawn for activity and initiative }5.exd6Nc6{ [%csl Gd4,Gg4][%cal Gc8g4] }6.Qe4+{ [%csl Gd6] }6...Be67.dxc7{ Black to move }7...Qd1+{ [%csl Gd1] }8.Kxd1Nxf2+9.Ke1Nxe4{ [%csl Gc7,Gc2,Gf2,Rc4][%cal Gc6d4,Gc6b4,Re1f2,Gf8c5] }*
ParserRuleContextparse,pgn_database,pgn,move_text,move_text_item{start=[@1107,3232:3233='1.',<3>,54:0], stop=[@1110,3239:3240='f6',<15>,54:7]} - 1.d4Nf6
ParserRuleContextparse,pgn_database,pgn,move_text,move_text_item,turn{start=[@1107,3232:3233='1.',<3>,54:0], stop=[@1110,3239:3240='f6',<15>,54:7]} - 1.d4Nf6
ParserRuleContextparse,pgn_database,pgn,move_text,move_text_item,turn,move_num{start=[@1107,3232:3233='1.',<3>,54:0], stop=[@1107,3232:3233='1.',<3>,54:0]} - 1.
ParserRuleContextparse,pgn_database,pgn,move_text,move_text_item,turn,san{start=[@1108,3235:3236='d4',<15>,54:3], stop=[@1108,3235:3236='d4',<15>,54:3]} - d4
ParserRuleContextparse,pgn_database,pgn,move_text,move_text_item,turn,san,pawn_move{start=[@1108,3235:3236='d4',<15>,54:3], stop=[@1108,3235:3236='d4',<15>,54:3]} - d4
...
*/

let result = parser.parse();
var listener = new ExampleListener();
ParseTreeWalker.DEFAULT.walk<EnhancedPGNParserListener>(listener, result);
