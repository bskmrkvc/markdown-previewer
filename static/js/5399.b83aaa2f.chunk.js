"use strict";(self.webpackChunkmarkdown_editor=self.webpackChunkmarkdown_editor||[]).push([[5399],{35399:function(E,t,e){function R(E){var t=[];return E.split(" ").forEach((function(E){t.push({name:E})})),t}e.r(t),e.d(t,{forth:function(){return O}});var i=R("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL"),r=R("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");function n(E,t){var e;for(e=E.length-1;e>=0;e--)if(E[e].name===t.toUpperCase())return E[e]}var O={startState:function(){return{state:"",base:10,coreWordList:i,immediateWordList:r,wordList:[]}},token:function(E,t){var e;if(E.eatSpace())return null;if(""===t.state){if(E.match(/^(\]|:NONAME)(\s|$)/i))return t.state=" compilation","builtin";if(e=E.match(/^(\:)\s+(\S+)(\s|$)+/))return t.wordList.push({name:e[2].toUpperCase()}),t.state=" compilation","def";if(e=E.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i))return t.wordList.push({name:e[2].toUpperCase()}),"def";if(e=E.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/))return"builtin"}else{if(E.match(/^(\;|\[)(\s)/))return t.state="",E.backUp(1),"builtin";if(E.match(/^(\;|\[)($)/))return t.state="","builtin";if(E.match(/^(POSTPONE)\s+\S+(\s|$)+/))return"builtin"}return(e=E.match(/^(\S+)(\s+|$)/))?void 0!==n(t.wordList,e[1])?"variable":"\\"===e[1]?(E.skipToEnd(),"comment"):void 0!==n(t.coreWordList,e[1])?"builtin":void 0!==n(t.immediateWordList,e[1])?"keyword":"("===e[1]?(E.eatWhile((function(E){return")"!==E})),E.eat(")"),"comment"):".("===e[1]?(E.eatWhile((function(E){return")"!==E})),E.eat(")"),"string"):'S"'===e[1]||'."'===e[1]||'C"'===e[1]?(E.eatWhile((function(E){return'"'!==E})),E.eat('"'),"string"):e[1]-68719476735?"number":"atom":void 0}}}}]);
//# sourceMappingURL=5399.b83aaa2f.chunk.js.map