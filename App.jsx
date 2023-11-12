import { useState } from 'react'
import './App.css'
import {HiOutlineChevronDown,HiDocumentText,
        HiDocumentAdd,HiClipboard, HiDocumentDuplicate,
      HiPencilAlt,HiDocumentSearch,HiOutlineChartSquareBar,
    HiLink,HiOutlineMenu,HiOutlineMenuAlt2,HiOutlineMenuAlt3} from 'react-icons/hi'

import {ImSubscript2,ImClearFormatting} from 'react-icons/im'

import {MdBorderColor} from 'react-icons/md'

import {RxLetterCaseCapitalize,RxLetterCaseToggle} from 'react-icons/rx'

import {TbSquareRotatedFilled,TbSortAscendingLetters,TbSortDescendingLetters} from 'react-icons/tb'

import{AiFillFilePdf, AiFillPrinter,AiOutlinePrinter,
AiOutlineTable,AiOutlineScan,AiOutlineSmallDash,AiOutlineMinus,
AiOutlineItalic,AiOutlineStrikethrough,AiOutlineFontColors,AiFillCaretLeft,
AiOutlineAlignCenter,AiOutlineBars,AiOutlinePlus,AiFillCaretRight} from 'react-icons/ai'
  
import{BsScissors,BsArrow90DegLeft,BsArrow90DegRight,BsPaintBucket,
BsParagraph,BsFillImageFill,BsPencilSquare,BsPencilFill,BsBucketFill,
BsFillFileBarGraphFill,BsFillChatLeftTextFill,BsCardHeading,
BsTypeUnderline,BsSubscript,BsListColumnsReverse,BsListColumns} from 'react-icons/bs'  

import {BiHealth,BiSolidNotepad,BiNotepad,
BiSolidNote} from 'react-icons/bi'

import{FaPaste,FaBroom,FaBold} from 'react-icons/fa'

import {PiTextboxFill} from 'react-icons/pi'
function App() {
const [divarq, setDivarq] = useState(false);
 const [divedt, setDivedt] = useState(false);
 const [divexb, setDivexb] = useState(false);
 const [divins, setDivins] = useState(false);
 const [divformt, setDivformt] = useState(false);
 const [divest, setDivest] = useState(false);
 const [divtbl, setDivtbl] = useState(false);
 const [divforml, setDivforml] = useState(false);
 const [divferr, setDivferr] = useState(false);
 const [divjnl, setDivjnl] = useState(false);
 const [divajuda, setDivajuda] = useState(false);

 const [novo,setNovo] = useState(false);
 const [assistente,setAssistente] = useState(false);
 const [modelo,setModelo] = useState(false)
 const [exportarcm,setExportarcm] = useState(false)
 const [enviar,setEnviar] = useState(false)
 const [assdg,setAssdg] = useState(false)
 const [colaresp, setColaresp] = useState(false)
 const [modoslc, setModoslc] = useState(false)
 const [regst, setRegst] = useState(false)
 const [anotaçao, setAnotaçao] = useState(false)
 const [referencia, setReferencia] = useState(false)
 const [objole,setObjole] =useState(false)
 const [barraf, setBarraf] = useState(false)
 const [reguas, setReguas] = useState(false)
 const [barrarlg, setBarrarlg] = useState(false);
 const [gralin, setGralin] = useState(false);
 const [zoom, setZoom] = useState(false);
 const [parag, setParag] = useState(false);
 const [ptr, setPt] =useState(false);
 const [balde,setBalde] = useState(false)

 const [pag1, setPag1] = useState(false);
 const [pag2, setPag2] = useState(false);
 const [pag3, setPag3] = useState(false);
 const [pag4, setPag4] = useState(false);
 const [pag5, setPag5] = useState(false);
 const [pag6, setPag6] = useState(false);
  const [pag7, setPag7] = useState(false);
 const [pag8, setPag8] = useState(false);
 const [pag9, setPag9] = useState(false);
  const [pag10, setPag10] = useState(false);
 const [pag11, setPag11] = useState(false);
 const [pag12, setPag12] = useState(false);
  const [pag13, setPag13] = useState(false);
 const [pag14, setPag14] = useState(false);
 const [pag15, setPag15] = useState(false);
  const [pag16, setPag16] = useState(false);
 const [pag17, setPag17] = useState(false);
 const [pag18, setPag18] = useState(false);
  const [pag19, setPag19] = useState(false);
 const [pag20, setPag20] = useState(false);
 const [pag21, setPag21] = useState(false);
  const [pag22, setPag22] = useState(false);
 const [pag23, setPag23] = useState(false);
 const [pag24, setPag24] = useState(false);
  const [pag25, setPag25] = useState(false);
 const [pag26, setPag26] = useState(false);
 const [pag27, setPag27] = useState(false);
  const [pag28, setPag28] = useState(false);
 const [pag29, setPag29] = useState(false);
 const [pag30, setPag30] = useState(false);
  const [pag31, setPag31] = useState(false);
 const [pag32, setPag32] = useState(false);
 const [pag33, setPag33] = useState(false);
 const [pag34 ,setPag34] = useState(false);
  const [pag35 ,setPag35] = useState(false);
   const [pag36 ,setPag36] = useState(false);
    const [pag37 ,setPag37] = useState(false);
     const [pag38 ,setPag38] = useState(false);
     const [pag39 ,setPag39] = useState(false);
     const [pag40 ,setPag40] = useState(false);
     const [pag41 ,setPag41] = useState(false);
     const [pag42 ,setPag42] = useState(false);
     const [pag43 ,setPag43] = useState(false);
     const [pag44 ,setPag44] = useState(false);
     const [pag45 ,setPag45] = useState(false);
     const [pag46 ,setPag46] = useState(false);
     const [pag47 ,setPag47] = useState(false);
     const [pag48 ,setPag48] = useState(false);
     const [pag49 ,setPag49] = useState(false);
     const [pag50 ,setPag50] = useState(false);
     const [size,setSize] = useState(6);
     const [bold,setBold] = useState(false);
     const [italc,setItalc] = useState(false);
     const [under,setUnder] = useState(false)
     const [tax,setTaxado] = useState(false)
     const [subb,setSubb] = useState(false);
     const [sobs,setSobs] = useState(false)
     const [cores,setCores] = useState(0)
     const [coropt,setCoropt] = useState(false)
     const [cor1,setCor1] = useState(false)
         const [cor2,setCor2] = useState(false)
             const [cor3,setCor3] = useState(false)
                 const [cor4,setCor4] = useState(false)
                     const [cor5,setCor5] = useState(false)
                     const [cor6,setCor6] = useState(false)
   const [left,setLeft] = useState(false)
   const [center,setCenter] = useState(false)
   const [right, setRight] = useState(false)
   const [justify, setJustify] = useState(false)
let negrito = "normal"
let italico = "normal"
let combo = "none"
let sobescrito = "none"
let cor_atual = "black"
let fundo_atual = "white"
let texto_central = "start"

if(bold == true){
  negrito = "bold"
}else{
  negrito = "normal"
}
if(italc ==true){
  italico = "italic"
}else{
  italico = "normal" 
}
if(under == true){
  combo = "underline"
}else if(tax == true){
 combo = "line-through"
}else{
  combo = "none"
}
if(subb == true){
  sobescrito = "50%"
}else if(sobs == true){
  sobescrito = "150%"
}else{
  sobescrito = "100%"
}
if(left == true){
  texto_central = "left"
}else if(center == true){
  texto_central = "center"
}else if(justify == true){
  texto_central = "justify"
}else if(right == true){
  texto_central = "right"
}else{
  texto_central = "left"
}


switch(cores){
case 0:
  cor_atual = "black";
break;
case 1:
  cor_atual = " #000000";
break;
case 2:
  cor_atual = "#1C1C1C";
break;
case 3:
  cor_atual = "#363636";
break;
case 4:
  cor_atual = "#4F4F4F";
break;
case 5:
  cor_atual = "#696969";
break;
case 6:
  cor_atual = "#808080";
break;
case 7:
  cor_atual = "#A9A9A9";
break;
case 8:
  cor_atual = "#C0C0C0";
break;
case 9:
  cor_atual = " #D3D3D3";
break;
case 10:
  cor_atual = "#DCDCDC";
break;
case 11:
  cor_atual = " #6A5ACD";
break;
case 12:
  cor_atual = "#836FFF";
break;
case 13:
  cor_atual = " #483D8B";
break;
case 14:
  cor_atual = " #191970";
break;
case 15:
  cor_atual = " #000080";
break;
case 16:
  cor_atual = " #00008B";
break;
case 17:
  cor_atual = "#0000CD";
break;
case 18:
  cor_atual = "#0000FF";
break;
case 19:
  cor_atual = "#6495ED";
break;
case 20:
  cor_atual = "#4169E1";
break;
case 21:
  cor_atual = " #1E90FF";
break;
case 22:
  cor_atual = "#00BFFF";
break;
case 23:
  cor_atual = " #87CEFA";
break;
case 24:
  cor_atual = "#87CEEB";
break;
case 25:
  cor_atual = "#ADD8E6";
break;
case 26:
  cor_atual = "#4682B4";
break;
case 27:
  cor_atual = "#B0C4DE";
break;
case 28:
  cor_atual = "#708090";
break;
case 29:
  cor_atual = "#778899";
break;
case 30:
  cor_atual = "#00FFFF";
break;
case 31:
  cor_atual = "#00CED1";
break;
case 32:
  cor_atual = "#40E0D0";
break;
case 33:
  cor_atual = "#48D1CC";
break;
case 34:
  cor_atual = "#20B2AA";
break;
case 35:
  cor_atual = "#008B8B";
break;
case 36:
  cor_atual = " #008080";
break;
case 37:
  cor_atual = " #7FFFD4";
break;
case 37:
  cor_atual = "#66CDAA";
break;
case 38:
  cor_atual = "#5F9EA0";
break;
case 39:
  cor_atual = " #2F4F4F";
break;
case 40:
  cor_atual = "#00FA9A";
break;
case 41:
  cor_atual = "#00FF7F";
break;
case 42:
  cor_atual = " #98FB98";
break;
case 43:
  cor_atual = " #90EE90";
break;
case 44:
  cor_atual = " #8FBC8F";
break;
case 45:
  cor_atual = " #3CB371";
break;
case 46:
  cor_atual = "#2E8B57";
break;
case 47:
  cor_atual = " #006400";
break;
case 48:
  cor_atual = " #008000";
break;
case 49:
  cor_atual = " #228B22";
break;
case 50:
  cor_atual = " #32CD32";
break;
case 51:
  cor_atual = "#00FF00";
break;
case 52:
  cor_atual = "#7CFC00";
break;
case 53:
  cor_atual = " #7FFF00";
break;
case 54:
  cor_atual = " #ADFF2F";
break;
case 55:
  cor_atual = "#9ACD32";
break;
case 56:
  cor_atual = "6B8E23";
break;
case 57:
  cor_atual = "#556B2F";
break;
case 58:
  cor_atual = "#808000";
break;
case 59:
  cor_atual = " #BDB76B";
break;
case 60:
  cor_atual = "#DAA520";
break;
case 61:
  cor_atual = "#B8860B";
break;
case 62:
  cor_atual = "#8B4513  ";
break;
case 63:
  cor_atual = " #A0522D";
break;
case 64:
  cor_atual = " #BC8F8F";
break;
case 65:
  cor_atual = " #CD853F";
break;
case 66:
  cor_atual = " #D2691E";
break;
case 67:
  cor_atual = "#F4A460";
break;
case 68:
  cor_atual = " #FFDEAD";
break;
case 69:
  cor_atual = "#F5DEB3";
break;
case 70:
  cor_atual = "#DEB887";
break;
case 71:
  cor_atual = "#D2B48C";
break;
case 72:
  cor_atual = "#7B68EE";
break;
case 73:
  cor_atual = " #9370DB";
break;
case 74:
  cor_atual = "#8A2BE2";
break;
case 75:
  cor_atual = "#4B0082";
break;
case 76:
  cor_atual = "#9400D3";
break;
case 77:
  cor_atual = "#9932CC";
break;
case 78:
  cor_atual = "#BA55D3";
break;
case 79:
  cor_atual = " #A020F0";
break;
case 80:
  cor_atual = "#8B008B";
break;
case 81:
  cor_atual = "#FF00FF";
break;
case 82:
  cor_atual = " #EE82EE";
break;
case 83:
  cor_atual = " #DA70D6";
break;
case 84:
  cor_atual = "#DDA0DD";
break;
case 85:
  cor_atual = "#C71585";
break;
case 86:
  cor_atual = " #FF1493";
break;
case 87:
  cor_atual = " #FF69B4";
break;
case 88:
  cor_atual = "#DB7093";
break;
case 89:
  cor_atual = "#FFB6C1";
break;
case 90:
  cor_atual = "#FFC0CB";
break;
case 91:
  cor_atual = "#F08080";
break;
case 92:
  cor_atual = "#CD5C5C";
break;
case 93:
  cor_atual = "#DC143C";
break;
case 94:
  cor_atual = "#800000";
break;
case 95:
  cor_atual = "#8B0000";
break;
case 96:
  cor_atual = " #B22222";
break;
case 97:
  cor_atual = "#A52A2A";
break;
case 98:
  cor_atual = "#FA8072";
break;
case 99:
  cor_atual = " #E9967A";
break;
case 100:
  cor_atual = " #FFA07A";
break;
case 101:
  cor_atual = "#FF7F50";
break;
case 102:
  cor_atual = " #FF6347";
break;
case 103:
  cor_atual = " #FF0000";
break;
case 104:
  cor_atual = "#FF4500";
break;
case 105:
  cor_atual = "#FF8C00";
break;
case 106:
  cor_atual = "#FFA500";
break;
case 107:
  cor_atual = " #FFD700";
break;
case 108:
  cor_atual = " #FFFF00";
break;
case 109:
  cor_atual = " #F0E68C";
break;
case 110:
  cor_atual = "F0F8FF";
break;
case 111:
  cor_atual = "#FFF5EE";
break;
case 112:
  cor_atual = "#F5F5DC";
break;
case 113:
  cor_atual = "#FFEBCD";
break;
case 114:
  cor_atual = "#FFFFE0";
break;
case 115:
  cor_atual = "#FFDAB9";
break;
case 116:
  cor_atual = "#D8BFD8";
break;
case 117:
  cor_atual = "#B0E0E6";
break;
case 118:
  cor_atual = "#E0FFFF";
break;
case 119:
  cor_atual = "white";
break;
case 120:
  cor_atual = "gainsboro";
break;
default:
  cor_atual = "black"
}

const vr = {
display:"none"
  }
  const vrn = {
    display:"block"
  }

if(cor1 == true){
  fundo_atual = "salmon"
}else if(cor2 == true){
  fundo_atual = "lightgreen"
}else if(cor3 == true){
  fundo_atual = "yellow"
}else if(cor4 == true){
  fundo_atual = "lightblue"
}else if(cor5 == true){
  fundo_atual = "white"
}else if(cor6 == true){
  fundo_atual = "silver"
}

function mostrar_arquivo(){
setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false);
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}

function limpar_form(){
  setBold(false)
setItalc(false)
setUnder(false)
setTaxado(false)
setSobs(false);setSubb(false);
}
function mostrar_exibir(){
setDivarq(false);setDivedt(false)
setDivexb(true);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false)
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}
function mostrar_inserir(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(true);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false)
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}
function mostrar_formatar(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(true);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}
function mostrar_estilos(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(true);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false);setBalde(false);
 setCoropt(false);
}

function mostrar_tabela(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(true);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}
function mostrar_formulario(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(true);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false);setBalde(false);
 setCoropt(false);
}
function mostrar_ferramenta(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(true);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}
function mostrar_janela(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(true);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false);setBalde(false);
 setCoropt(false);
}
function mostrar_ajuda(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(true);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setBarraf(false);
setReguas(false);setBarrarlg(false);
setGralin(false);setZoom(false);
setParag(false); setCoropt(false);
setBalde(false);
}
function mostrar_editar(){
  setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_novo(){
setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(true)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_assistente(){
setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(true);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_modelo(){
setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(true)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_exportarcm(){
setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(true);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_enviar(){
 setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(true)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_assdg(){
 setDivarq(true);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(true);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_colaresp(){
setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(true)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}

function mostrar_modoslc(){
 setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(true);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}

function mostrar_regst(){
  setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(true);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_anotaçao(){
 setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(true);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_referencia(){
setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(true);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_objole(){
 setDivarq(false);setDivedt(true)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(true);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_barraf(){
  setDivarq(false);setDivedt(false)
setDivexb(true);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(true);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false)
; setCoropt(false);setBalde(false);

}
function mostrar_regua(){
    setDivarq(false);setDivedt(false)
setDivexb(true);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(true);
setBarrarlg(false);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_barrarlg(){
setDivarq(false);setDivedt(false)
setDivexb(true);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(true);setGralin(false);
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function mostrar_gralin(){
setDivarq(false);setDivedt(false)
setDivexb(true);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(true);  
setZoom(false);setParag(false);
 setCoropt(false);setBalde(false);
}
function Mostrar_pag1(){
  setPag1(true)
}
function Mostrar_pag2(){
  setPag2(true)
}
function Mostrar_pag3(){
  setPag3(true)
}
function Mostrar_pag4(){
  setPag4(true)
}
function Mostrar_pag5(){
  setPag5(true)
}
function Mostrar_pag6(){
  setPag6(true)
}
function Mostrar_pag7(){
  setPag7(true)
}
function Mostrar_pag8(){
  setPag8(true)
}
function Mostrar_pag9(){
  setPag9(true)
}
function Mostrar_pag10(){
  setPag10(true)
}
function Mostrar_pag11(){
  setPag11(true)
}
function Mostrar_pag12(){
  setPag12(true)
}
function Mostrar_pag13(){
  setPag13(true)
}
function Mostrar_pag14(){
  setPag14(true)
}
function Mostrar_pag15(){
  setPag15(true)
}
function Mostrar_pag16(){
  setPag16(true)
}
function Mostrar_pag17(){
  setPag17(true)
}
function Mostrar_pag18(){
  setPag18(true)
}
function Mostrar_pag19(){
  setPag19(true)
}
function Mostrar_pag20(){
  setPag20(true)
}
function Mostrar_pag21(){
  setPag21(true)
}
function Mostrar_pag22(){
  setPag22(true)
}
function Mostrar_pag23(){
  setPag23(true)
}
function Mostrar_pag24(){
  setPag24(true)
}
function Mostrar_pag25(){
  setPag25(true)
}
function Mostrar_pag26(){
  setPag26(true)
}
function Mostrar_pag27(){
  setPag27(true)
}
function Mostrar_pag28(){
  setPag28(true)
}
function Mostrar_pag29(){
  setPag29(true)
}
function Mostrar_pag30(){
  setPag30(true)
}
function Mostrar_pag31(){
  setPag31(true)
}
function Mostrar_pag32(){
  setPag32(true)
}
function Mostrar_pag33(){
  setPag33(true)
}
function Mostrar_pag34(){
  setPag34(true)
}
function Mostrar_pag35(){
  setPag35(true)
}
function Mostrar_pag36(){
  setPag36(true)
}
function Mostrar_pag37(){
  setPag37(true)
}
function Mostrar_pag38(){
  setPag38(true)
}
function Mostrar_pag39(){
  setPag39(true)
}
function Mostrar_pag40(){
  setPag40(true)
}
function Mostrar_pag41(){
  setPag41(true)
}
function Mostrar_pag42(){
  setPag42(true)
}
function Mostrar_pag43(){
  setPag43(true)
}
function Mostrar_pag44(){
  setPag44(true)
}
function Mostrar_pag45(){
  setPag45(true)
}
function Mostrar_pag46(){
  setPag46(true)
}
function Mostrar_pag47(){
  setPag47(true)
}
function Mostrar_pag48(){
  setPag48(true)
}
function Mostrar_pag49(){
  setPag49(true)
}
function Mostrar_pag50(){
  setPag50(true)
}

function mostrar_balde(){
  setBalde(true)
}
function mostrar_cor1(){
    setCor1(true);
  setCor2(false);
  setCor3(false);
  setCor4(false);
  setCor5(false);
  setCor6(false);
}
function mostrar_cor2(){
    setCor1(false);
  setCor2(true);
  setCor3(false);
  setCor4(false);
  setCor5(false);
  setCor6(false);
}
function mostrar_cor3(){
    setCor1(false);
  setCor2(false);
  setCor3(true);
  setCor4(false);
  setCor5(false);
  setCor6(false);
}
function mostrar_cor4(){
    setCor1(false);
  setCor2(false);
  setCor3(false);
  setCor4(true);
  setCor5(false);
  setCor6(false);
}
function mostrar_cor5(){
    setCor1(false);
  setCor2(false);
  setCor3(false);
  setCor4(false);
  setCor5(true);
  setCor6(false);
}
function mostrar_cor6(){
  setCor1(false);
  setCor2(false);
  setCor3(false);
  setCor4(false);
  setCor5(false);
  setCor6(true);
}

function mostrar_left(){
  setLeft(true);setRight(false);
  setCenter(false);setJustify(false)
}
function mostrar_right(){
  setLeft(false);setRight(true);
  setCenter(false);setJustify(false)
}
function mostrar_center(){
  setLeft(false);setRight(false);
  setCenter(true);setJustify(false)
}
function mostrar_justify(){
  setLeft(false);setRight(false);
  setCenter(false);setJustify(true)
}
function mostrar_zoom(){
  setDivarq(false);setDivedt(false)
setDivexb(true);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);setBalde(false);
setBarrarlg(false);setGralin(false);  
setZoom(true);setParag(false); setCoropt(false);

}
function mostrar_paragrafo(){
  setParag(true);
  setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setPag1(false);setPag32(false);
setPag2(false);setPag3(false);setPag4(false);
setPag5(false);setPag6(false);setPag7(false);
setPag8(false);setPag9(false);setPag10(false);
setPag11(false);setPag12(false);setPag13(false);
setPag14(false);setPag15(false);setPag16(false);
setPag17(false);setPag18(false);setPag19(false);
setPag20(false);setPag21(false);setPag22(false);
setPag23(false);setPag24(false);setPag25(false);
setPag26(false);setPag27(false);setPag28(false);
setPag29(false);setPag30(false);setPag31(false);
setPag33(false);setPag34(false);setPag35(false);
setPag36(false);setPag37(false);setPag38(false);
setPag39(false);setPag40(false);setPag41(false);
setPag42(false);setPag43(false);setPag44(false);
setPag45(false);setPag46(false);setPag47(false);
setPag48(false);setPag49(false);setPag50(false);
 setCoropt(false);setBalde(false);
}
function mostrar_pt(){
  setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setPag1(false);setPag32(false);
setPag2(false);setPag3(false);setPag4(false);
setPag5(false);setPag6(false);setPag7(false);
setPag8(false);setPag9(false);setPag10(false);
setPag11(false);setPag12(false);setPag13(false);
setPag14(false);setPag15(false);setPag16(false);
setPag17(false);setPag18(false);setPag19(false);
setPag20(false);setPag21(false);setPag22(false);
setPag23(false);setPag24(false);setPag25(false);
setPag26(false);setPag27(false);setPag28(false);
setPag29(false);setPag30(false);setPag31(false);
setPag33(false);setPag34(false);setPag35(false);
setPag36(false);setPag37(false);setPag38(false);
setPag39(false);setPag40(false);setPag41(false);
setPag42(false);setPag43(false);setPag44(false);
setPag45(false);setPag46(false);setPag47(false);
setPag48(false);setPag49(false);setPag50(false);
setParag(false); setCoropt(false);setBalde(false);
}
function mostrar_cores_font(){
 setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setPag1(false);setPag32(false);
setPag2(false);setPag3(false);setPag4(false);
setPag5(false);setPag6(false);setPag7(false);
setPag8(false);setPag9(false);setPag10(false);
setPag11(false);setPag12(false);setPag13(false);
setPag14(false);setPag15(false);setPag16(false);
setPag17(false);setPag18(false);setPag19(false);
setPag20(false);setPag21(false);setPag22(false);
setPag23(false);setPag24(false);setPag25(false);
setPag26(false);setPag27(false);setPag28(false);
setPag29(false);setPag30(false);setPag31(false);
setPag33(false);setPag34(false);setPag35(false);
setPag36(false);setPag37(false);setPag38(false);
setPag39(false);setPag40(false);setPag41(false);
setPag42(false);setPag43(false);setPag44(false);
setPag45(false);setPag46(false);setPag47(false);
setPag48(false);setPag49(false);setPag50(false);
setParag(false); setCoropt(true);setBalde(false);
}
function mostrar_nada(){
setDivarq(false);setDivedt(false)
setDivexb(false);setDivins(false);
setDivformt(false);setDivest(false);
setDivtbl(false);setDivforml(false);
setDivferr(false);setDivjnl(false);
setDivajuda(false);setNovo(false)
setAssistente(false);setModelo(false)
setExportarcm(false);setEnviar(false)
setAssdg(false);setColaresp(false)
setModoslc(false);setRegst(false);
setAnotaçao(false);setReferencia(false);
setObjole(false);setModoslc(false);
setBarraf(false);setReguas(false);
setBarrarlg(false);setGralin(false);
setZoom(false);setPag1(false);setPag32(false);
setPag2(false);setPag3(false);setPag4(false);
setPag5(false);setPag6(false);setPag7(false);
setPag8(false);setPag9(false);setPag10(false);
setPag11(false);setPag12(false);setPag13(false);
setPag14(false);setPag15(false);setPag16(false);
setPag17(false);setPag18(false);setPag19(false);
setPag20(false);setPag21(false);setPag22(false);
setPag23(false);setPag24(false);setPag25(false);
setPag26(false);setPag27(false);setPag28(false);
setPag29(false);setPag30(false);setPag31(false);
setPag33(false);setPag34(false);setPag35(false);
setPag36(false);setPag37(false);setPag38(false);
setPag39(false);setPag40(false);setPag41(false);
setPag42(false);setPag43(false);setPag44(false);
setPag45(false);setPag46(false);setPag47(false);
setPag48(false);setPag49(false);setPag50(false);
setParag(false); setCoropt(false);
setBalde(false);
}

  return (
    <>
     <section className="base_top">
  <div className="base_top1">
      <button className="btn"
      onClick={mostrar_arquivo}>arquivo</button>
      <button className="btn"
      onClick={mostrar_editar}>Editar</button>
      <button className="btn"
      onClick={mostrar_exibir}>Exibir</button>
      <button className="btn"
      onClick={mostrar_inserir}>Inserir</button>
      <button className="btn"
      onClick={mostrar_formatar}>Formatar</button>
      <button className="btn"
      onClick={mostrar_estilos}>Estilos</button>
      <button className="btn"
      onClick={mostrar_tabela}>Tabela</button>
      <button className="btn"
      onClick={mostrar_formulario}>Formulário</button>
      <button className="btn"
      onClick={mostrar_ferramenta}>Ferramentas</button>
      <button className="btn"
      onClick={mostrar_janela}>Janela</button>
      <button className="btn"
      onClick={mostrar_ajuda}>Ajuda</button>
  </div>

     <div className="base_top2">

      <div className="opçao_top2" onMouseOver={Mostrar_pag1}
      onMouseOut={mostrar_nada}>
     <HiDocumentText size="20px" color="white" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>
     
      <div className="opçao_top2"onMouseOver={Mostrar_pag2}
      onMouseOut={mostrar_nada}>
     <HiDocumentAdd size="20px" color="white" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

       <div className="opçao_top2" onMouseOver={Mostrar_pag3}
      onMouseOut={mostrar_nada}>
     <HiClipboard size="20px" color="lightgreen" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

      <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag4}
      onMouseOut={mostrar_nada}>
     <AiFillFilePdf size="20px" color="tomato" style={{margin:"1px"}}/>
      </div>

      <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag5}
      onMouseOut={mostrar_nada}>
     < AiFillPrinter size="20px" color="gainsboro" style={{margin:"1px"}}/>
      </div>

       <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag6}
      onMouseOut={mostrar_nada}>
     < AiOutlinePrinter size="20px" color="white" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag7}
      onMouseOut={mostrar_nada}>
     <BsScissors size="20px" color="silver" style={{margin:"1px"}}/>
      </div>

       <div className="opçao_top2" style={{width:32}}onMouseOver={Mostrar_pag8}
      onMouseOut={mostrar_nada}>
     < FaPaste size="17px" color="#4A5494" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

       <div className="opçao_top2" style={{width:32}} onMouseOver={Mostrar_pag9}
      onMouseOut={mostrar_nada}>
     < FaPaste size="17px" color="#7788F6" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

       <div className="opçao_top2" style={{width:25}} onMouseOver={Mostrar_pag10}
      onMouseOut={mostrar_nada}>
     < FaBroom size="20px" color="white" style={{margin:"1px"}}/>
      </div>

       <div className="opçao_top2" style={{width:30}} onMouseOver={Mostrar_pag11}
      onMouseOut={mostrar_nada}>
     < BsArrow90DegLeft size="16px" color="white" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

       <div className="opçao_top2" style={{width:30}} onMouseOver={Mostrar_pag12}
      onMouseOut={mostrar_nada}>
     <BsArrow90DegRight  size="16px" color="white" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

         <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag13}
      onMouseOut={mostrar_nada}> 
     <HiPencilAlt  size="16px" color="white" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag14}
      onMouseOut={mostrar_nada}>
     <HiDocumentSearch  size="16px" color="brown" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag15}
      onMouseOut={mostrar_nada}>
     <BsParagraph  size="16px" color="orange" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:32}} onMouseOver={Mostrar_pag16}
      onMouseOut={mostrar_nada}>
     <AiOutlineTable  size="18px" color="white" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

         <div className="opçao_top2" style={{width:19}} onMouseOver={Mostrar_pag17}
      onMouseOut={mostrar_nada}>
     <BsFillImageFill  size="16px" color="purple" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:19}} onMouseOver={Mostrar_pag18}
      onMouseOut={mostrar_nada}>
     <BsFillFileBarGraphFill  size="18px" color="purple" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" style={{width:19}} onMouseOver={Mostrar_pag19}
      onMouseOut={mostrar_nada}>
     <PiTextboxFill  size="18px" color="salmon" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" style={{width:19}} onMouseOver={Mostrar_pag20}
      onMouseOut={mostrar_nada}>
     <AiOutlineScan  size="18px" color="pink" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" onMouseOver={Mostrar_pag21}
      onMouseOut={mostrar_nada}>
     <HiOutlineChartSquareBar  size="18px" color="white" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

       <div className="opçao_top2" style={{width:32}} onMouseOver={Mostrar_pag22}
      onMouseOut={mostrar_nada}>
     <BiHealth  size="18px" color="yellow" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>
 <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag23}
      onMouseOut={mostrar_nada}>
     <HiLink  size="18px" color="white" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag24}
      onMouseOut={mostrar_nada}>
     <BiSolidNotepad  size="18px" color="orange" style={{margin:"1px"}}/>
      </div>

             <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag25}
      onMouseOut={mostrar_nada}>
     <BiNotepad size="18px" color="orange" style={{margin:"1px"}}/>
      </div>
            <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag26}
      onMouseOut={mostrar_nada}>
     <BsCardHeading size="18px" color="#9B7E59" style={{margin:"1px"}}/>
      </div>

    <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag27}
      onMouseOut={mostrar_nada}>
     <BiSolidNote size="18px" color="azure" style={{margin:"1px"}}/>
      </div>

  <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag28}
      onMouseOut={mostrar_nada}>
     <BsPencilSquare size="18px" color="orange" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag29}
      onMouseOut={mostrar_nada}>
     <BsFillChatLeftTextFill size="18px" color="tomato" style={{margin:"1px"}}/>

      </div>

        <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag30}
      onMouseOut={mostrar_nada}>
     <AiOutlineSmallDash size="18px" color="white" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" style={{width:32}} onMouseOver={Mostrar_pag31}
      onMouseOut={mostrar_nada}>
     <TbSquareRotatedFilled size="18px" color="white" style={{margin:"1px"}}/>
      <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

        <div className="opçao_top2" style={{width:20}} onMouseOver={Mostrar_pag32}
      onMouseOut={mostrar_nada}>
     <BsPencilFill  size="18px" color="#C96060" style={{margin:"1px"}}/>
      </div>
     
     </div>

     <div className="base_top3">   
     
 <div className="paragrafo_especial" style={{fontSize:13.5,lineHeight:"200%",
 textIndent:5,color:"white",fontFamily:"Arial"}}>
    Estilo de Paragrafo Padrão
      <button className="btn_especial" onClick={mostrar_paragrafo}>
         <HiOutlineChevronDown size="15px" color="white" style={{backgroundColor:" #494949",height:10,
    borderRadius:4}}/>
      </button>
      </div>

      <div className="base_paragrafo" style={parag ? vrn: vr}>
    <button className="button_opt_parag">Limpar formatação</button> 
     <button className="button_opt_parag">Estilo de parágrafo Padrão</button>
      <button className="button_opt_parag">Corpo do texto</button> 
      <button className="button_opt_parag" style={{fontWeight:"bold"}}>TITULO DO DOCUMENTO</button>
       <button className="button_opt_parag" style={{fontSize:22}}>Subtítulo</button> 
        <button className="button_opt_parag" style={{fontSize:22,fontWeight:"bold"}}>Título 1</button>
        <button className="button_opt_parag" style={{fontSize:20,fontWeight:"bold"}}>Título 2</button> 
         <button className="button_opt_parag" style={{fontSize:18,fontWeight:"bold"}}>Título 3</button>
         <button className="button_opt_parag" style={{fontSize:16,fontWeight:"bold"}}>Título 4</button> 
         <button className="button_opt_parag" style={{fontFamily:"arial san-serif",fontSize:17}}>Citações</button>
          <button className="button_opt_parag" style={{fontSize:15}}>Texto préformatado</button> 
          <button className="button_opt_parag">Outros estilos...</button>
</div>
      <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag33}
      onMouseOut={mostrar_nada}>
     <RxLetterCaseToggle size="20px" color="white" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag34}
      onMouseOut={mostrar_nada}>
     <RxLetterCaseCapitalize size="20px" color="white" style={{margin:"1px"}}/>
      </div>

<div className="pt_especial" style={{fontSize:15,lineHeight:"150%",
 textIndent:5,color:"white",fontFamily:"Arial"}}>
   {size}pt
        <button className="btn_especial" onClick={()=> setSize(size - 1)}>
         <AiOutlineMinus size="15px" color="white" style={{backgroundColor:" #494949",height:10,
    borderRadius:4}}/>
      </button>
       <button className="btn_especial" onClick={()=> setSize(size + 1)} style={{backgroundColor:"#3D3D3D"}}>
         <AiOutlinePlus size="15px" color="white" style={{backgroundColor:" #3D3D3D",height:10,
    borderRadius:4}}/>
      </button>
      </div>

      <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag35}
      onMouseOut={mostrar_nada} onClick={()=> setBold(!bold)}>
     <FaBold size="18px" color="white" style={{margin:"1px"}}/>
      </div>

         <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag36}
      onMouseOut={mostrar_nada} onClick={()=> setItalc(!italc)}>
     <AiOutlineItalic size="20px" color="white" style={{margin:"1px"}}/>
      </div>
     
     <div className="opçao_top2" style={{width:25}} onMouseOver={Mostrar_pag37}
      onMouseOut={mostrar_nada} onClick={()=> setUnder(!under)}>
     <BsTypeUnderline size="22px" color="gold" style={{margin:"1px"}}/>
      </div>

  <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag38}
      onMouseOut={mostrar_nada} onClick={()=> setTaxado(!tax)}>
     <AiOutlineStrikethrough size="20px" color="red" style={{margin:"1px"}}/>
      </div>

  <div className="opçao_top2" style={{width:20,height:20,marginLeft:20}} onMouseOver={Mostrar_pag39}
      onMouseOut={mostrar_nada} onClick={()=> setSubb(!subb)}>
     <TbSortAscendingLetters size="20px" color="5B55AF" style={{margin:"1px"}}/>
      </div>

  <div className="opçao_top2" style={{width:20,height:20,marginRight:10}} onMouseOver={Mostrar_pag40}
      onMouseOut={mostrar_nada} onClick={()=> setSobs(!sobs)}>
     <TbSortDescendingLetters size="20px" color="3C2EF6" style={{margin:"1px"}}/>
      </div>

  <div className="opçao_top2" style={{width:20,height:20,marginRight:10}} onMouseOver={Mostrar_pag41}
      onMouseOut={mostrar_nada} onClick={limpar_form}>
     <ImClearFormatting size="20px" color="45DF88" style={{margin:"1px"}}/>
      </div>

        <div className="opçao_top2" style={{width:35,height:20}} onMouseOver={Mostrar_pag42}>
     <AiOutlineFontColors size="20px" color={cor_atual} style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}} onClick={mostrar_cores_font}/>
      </div>


        <div className="opçao_top2" style={{width:35,height:20,marginRight:15}} onMouseOver={Mostrar_pag43}
 onClick={mostrar_balde}>
     <BsBucketFill size="18px" color="yellow" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

 <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag44}
      onMouseOut={mostrar_nada} onClick={mostrar_left}>
     <HiOutlineMenuAlt2 size="20px" color="white" style={{margin:"1px"}}/>
      </div>

       <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag45}
      onMouseOut={mostrar_nada} onClick={mostrar_center}>
     <AiOutlineAlignCenter size="20px" color="azure" style={{margin:"1px"}}/>
      </div>

 <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag46}
      onMouseOut={mostrar_nada} onClick={mostrar_right}>
     <HiOutlineMenuAlt3 size="20px" color="white" style={{margin:"1px"}}/>
      </div>

       <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag47}
      onMouseOut={mostrar_nada} onClick={mostrar_justify}>
     <HiOutlineMenu size="20px" color="azure" style={{margin:"1px"}}/>
      </div>
     
 <div className="opçao_top2" style={{width:35,height:20}} onMouseOver={Mostrar_pag48}
      onMouseOut={mostrar_nada}>
     <AiOutlineBars size="20px" color="orange" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>

       <div className="opçao_top2" style={{width:35,height:20}} onMouseOver={Mostrar_pag49}
      onMouseOut={mostrar_nada}>
     <BsListColumnsReverse size="20px" color="orange" style={{margin:"1px"}}/>
    <HiOutlineChevronDown size="12px" color="white" style={{backgroundColor:" #494949",height:19,
    borderRadius:10}}/>
      </div>
     
  <div className="opçao_top2" style={{width:20,height:20}} onMouseOver={Mostrar_pag50}
      onMouseOut={mostrar_nada}>
     <BsListColumns size="20px" color="CEAD50" style={{margin:"1px"}}/>
      </div>
     
     </div>
     
     </section>
     
     <section className="espaço_placas">
     <div className="placa1" style={pag1 ? vrn: vr}>Novo (Ctrl + N)</div>
     <div className="placa2" style={pag2 ? vrn: vr}>Abrir (Ctrl + O)</div>
     <div className="placa3" style={pag3 ? vrn: vr}>Salvar (Ctrl + S)</div>
     <div className="placa4" style={pag4 ? vrn: vr}>Exportar diretamente como PDF</div>
     <div className="placa5" style={pag5 ? vrn: vr}>Imprimir (Ctrl + P)</div>
     <div className="placa6" style={pag6 ? vrn: vr}>Alternar visualisação de impressão (Shift + Ctrl + O)</div>
     <div className="placa7" style={pag7 ? vrn: vr}>Cortar (Ctrl + X)</div>
     <div className="placa8" style={pag8 ? vrn: vr}>Copiar (Ctrl + C)</div>
     <div className="placa9" style={pag9 ? vrn: vr}>Colar (Ctrl + V)</div>
     <div className="placa10" style={pag10 ? vrn: vr}>Clonar formatação (clique duplo e Ctrl ou Cmd para alternar o comportamento)</div>
     <div className="placa11" style={pag11 ? vrn: vr}>Desfazer (Ctrl + Z)</div>
     <div className="placa12" style={pag12 ? vrn: vr}>Refazer (Ctrl + Y)</div>
     <div className="placa13" style={pag13 ? vrn: vr}>Localizar e Substituir (Ctrl + H)</div>
     <div className="placa14" style={pag14 ? vrn: vr}>Verificação ortográfica (F7)</div>
     <div className="placa15" style={pag15 ? vrn: vr}>Alterar marcas de formatação (Ctrl + F10)</div>
     <div className="placa16" style={pag16 ? vrn: vr}>Inserir tabela (Ctrl + F12)</div>
     <div className="placa17" style={pag17 ? vrn: vr}>Inserir figura</div>
     <div className="placa18" style={pag18 ? vrn: vr}>Inserir gráfico</div>
     <div className="placa19" style={pag19 ? vrn: vr}>Inserir caixa de texto</div>
     <div className="placa20" style={pag20 ? vrn: vr}>Inserir Quebra de página (Ctrl + Enter)</div>
     <div className="placa21" style={pag21 ? vrn: vr}>Inserir campo</div>
     <div className="placa22" style={pag22 ? vrn: vr}>Inserir caracteres especiais</div>
     <div className="placa23" style={pag23 ? vrn: vr}>Inserir hiperlink (Ctrl + K)</div>
     <div className="placa24" style={pag24 ? vrn: vr}>Inserir nota de rodapé</div>
     <div className="placa25" style={pag25 ? vrn: vr}>Inserir nota de fim</div>
     <div className="placa26" style={pag26 ? vrn: vr}>Inserir marca-página</div>
     <div className="placa27" style={pag27 ? vrn: vr}>Inserir referência cruzada</div>
     <div className="placa28" style={pag28 ? vrn: vr}>Inserir anotação (Ctrl + Alt + C)</div>
     <div className="placa29" style={pag29 ? vrn: vr}>Mostrar funções de registro de alterações</div>
     <div className="placa30" style={pag30 ? vrn: vr}>Inserir linha</div>
     <div className="placa31" style={pag31 ? vrn: vr}>Formas simples (Ctrl + N)</div>
     <div className="placa32" style={pag32 ? vrn: vr}>Mostrar funções de desenho</div>
     <div className="placa33" style={pag33 ? vrn : vr}>Atualizar estilo selecionado (Shifth + Ctrl +F11)</div>
       <div className="placa34" style={pag34 ? vrn : vr}>Novo estilo a partir da seleção (Shift + F11)</div>
           <div className="placa35" style={pag35 ? vrn : vr}>Negrito (Ctrl + B)</div>
           <div className="placa36" style={pag36 ? vrn : vr}>Itálico (Ctrl + I)</div>
           <div className="placa37" style={pag37 ? vrn : vr}>Sublinhado (Ctrl + U)</div>
          <div className="placa38" style={pag38 ? vrn : vr}>Tachado</div>
          <div className="placa39" style={pag39 ? vrn : vr}>Sobrescrito (Shift + Ctrl + P)</div>
          <div className="placa40" style={pag40 ? vrn : vr}>Subscrito (Shift + Ctrl + B)</div>
          <div className="placa41" style={pag41 ? vrn : vr}>Limpar formatação direta (Ctrl + M)</div>
          <div className="placa42" style={pag42 ? vrn : vr}>Cor da fonte</div>
          <div className="placa43" style={pag43 ? vrn : vr}>Cor de destaque de caracteres</div>
          <div className="placa44" style={pag44 ? vrn : vr}>Alinhar à esquerda (Ctrl + L)</div>
          <div className="placa45" style={pag45 ? vrn : vr}>Alinhar ao centro (Ctrl + E)</div>
          <div className="placa46" style={pag46 ? vrn : vr}>Alinhar a direita (Ctrl + R)</div>
          <div className="placa47" style={pag47 ? vrn : vr}>Justificado (Ctrl + J)</div>
          <div className="placa48" style={pag48 ? vrn : vr}>Alternar lista não ordenada (Shift + F12)</div>
          <div className="placa49" style={pag49 ? vrn : vr}>Alternar lista numerada (F12)</div>
         <div className="placa50" style={pag50 ? vrn : vr}>Sem lista (Shift + Ctrl + F12)</div>
       
     </section>

     <section className="espaço_div"> 
     <div className="div_arquivo" style={divarq ? vrn : vr}>
          <button className="btn_base"
          onMouseOver={mostrar_novo}>Novo</button>
          <button className="btn_base">Abrir...</button>
           <button className="btn_base">Abrir arquivo remoto ..</button>
          <button className="btn_base">Documentos recentes</button>
           <button className="btn_base"
           style={{borderBottom:"1px solid #7A7A7A"}}>Fechar</button>
          <button className="btn_base"
          onMouseOver={mostrar_assistente}>Assistentes</button>
           <button className="btn_base"
            style={{borderBottom:"1px solid #7A7A7A"}}
             onMouseOver={mostrar_modelo}>Modelos</button>
          <button className="btn_base">Recarregar</button>
           <button className="btn_base"
            style={{borderBottom:"1px solid #7A7A7A"}}>Versões...</button>
          <button className="btn_base">Salvar</button>
           <button className="btn_base">Salvar como...</button>
          <button className="btn_base">Salvar arquivo remoto...</button>
           <button className="btn_base">Salvar uma cópia...</button>
          <button className="btn_base"
           style={{borderBottom:"1px solid #7A7A7A"}}>Salvar tudo</button>
           <button className="btn_base">Exportar...</button>
          <button className="btn_base"
          onMouseOver={mostrar_exportarcm}>Exportar como</button>
           <button className="btn_base"
           onMouseOver={mostrar_enviar}>Enviar</button>
          <button className="btn_base"
           style={{borderBottom:"1px solid #7A7A7A"}}>Visualizar no navegador web</button>
           <button className="btn_base">Visualizar impressão</button>
          <button className="btn_base">Imprimir</button>
           <button className="btn_base"
            style={{borderBottom:"1px solid #7A7A7A"}}>Configurar impressora...</button>
          <button className="btn_base">Propriedades...</button>
           <button className="btn_base"
            style={{borderBottom:"1px solid #7A7A7A"}}
            onMouseOver={mostrar_assdg}>Assinaturas digitais</button>
          <button className="btn_base">Sair do LibreOffice</button>
     </div>
     
     <div className="div_editar" style={divedt ? vrn : vr}>
      <button className="btn_base">Desfazer</button>
        <button className="btn_base">Refazer</button>
          <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Repetir</button>
            <button className="btn_base">Cortar</button>
                  <button className="btn_base">Copiar</button>
        <button className="btn_base">Colar</button>
          <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}
          onMouseOver={mostrar_colaresp}>Colar especial</button>
            <button className="btn_base">Selecionar tudo</button>
            <button className="btn_base"
            onMouseOver={mostrar_modoslc}>Modo de seleção</button>
        <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}>Selecionar texto</button>
          <button className="btn_base">Localizar...</button>
            <button className="btn_base">Localizar e Substituir...</button>
                  <button className="btn_base"
                  style={{borderBottom:"1px solid #7A7A7A"}}>Ir para a página...</button>
        <button className="btn_base"
        onMouseOver={mostrar_regst}>Registrar alterações</button>
          <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}
          onMouseOver={mostrar_anotaçao}>Anotação</button>
            <button className="btn_base">Hiperlink</button>
                  <button className="btn_base"
                  onMouseOver={mostrar_referencia}>Referência</button>
        <button className="btn_base">Campos</button>
          <button className="btn_base">Links externos...</button>
            <button className="btn_base"
            onMouseOver={mostrar_objole}>Objetos OLE</button>
                  <button className="btn_base"
                  style={{borderBottom:"1px solid #7A7A7A"}}>Trocar banco de dados...</button>
        <button className="btn_base">Modo de cursor direto</button>
        <button className="btn_base">Modo de edição</button>
     </div>

     <div className="div_exibir" style={divexb ? vrn : vr}>
      <button className="btn_base">Normal</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}>Como página web</button>
      <button className="btn_base">Interface do usuário...</button>
      <button className="btn_base"
      onMouseOver={mostrar_barraf}>Barras de ferramentas</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}>Barra de status</button>
            <button className="btn_base"
            onMouseOver={mostrar_regua}>Réguas</button>
      <button className="btn_base"
      onMouseOver={mostrar_barrarlg}>Barras de rolagem</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}
        onMouseOver={mostrar_gralin}>Grade e linhas guias</button>
      <button className="btn_base">Marcas de formatação</button>
      <button className="btn_base">Limites do texto</button>
            <button className="btn_base">Limites da tabela</button>
      <button className="btn_base">Figuras e gráficos</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}>Mostrar espaços em branco</button>
      <button className="btn_base">Mostrar alterações</button>
      <button className="btn_base">Anotações</button>
            <button className="btn_base"
              style={{borderBottom:"1px solid #7A7A7A"}}>Anotações resolvidas</button>
      <button className="btn_base">Sombrear campos</button>
      <button className="btn_base">Nomes de campo</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}>Campo de parágrafos ocultos</button>
      <button className="btn_base">Barra lateral</button>
            <button className="btn_base">Estilos</button>
      <button className="btn_base">Galeria</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}>Navegador</button>
      <button className="btn_base">Tela inteira</button>
      <button className="btn_base"
        style={{borderBottom:"1px solid #7A7A7A"}}
        onMouseOver={mostrar_zoom}>Zoom</button>
      </div>

     <div className="div_inserir" style={divins ? vrn : vr}>
        <button className="btn_base">Inserir quebra de página</button>
         <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Mais quebras</button>
          <button className="btn_base">Figura...</button>
           <button className="btn_base">Gráfico...</button>
         <button className="btn_base">Multimídia</button>
          <button className="btn_base">Objeto OLE</button>
           <button className="btn_base"
           style={{borderBottom:"1px solid #7A7A7A"}}>Formas</button>
         <button className="btn_base">Seção...</button>
          <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Texto de um arquivo...</button>
           <button className="btn_base">Caixa de texto</button>
         <button className="btn_base">Anotação</button>
          <button className="btn_base">Quadro</button>
           <button className="btn_base">Fontwork...</button>
         <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Legenda...</button>
          <button className="btn_base">Hiperlink...</button>
           <button className="btn_base">Marca-páginas...</button>
         <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Referência...</button>
          <button className="btn_base">Caracteres especias...</button>
           <button className="btn_base">Marca de formatação</button>
         <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Linha horizontal</button>
          <button className="btn_base">Nota de rodapé e nota de fim</button>
           <button className="btn_base"
           style={{borderBottom:"1px solid #7A7A7A"}}>Sumário e índices</button>
         <button className="btn_base">Número de página</button>
          <button className="btn_base">Campo</button>
         <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Cabeçalho e rodapé</button>
          <button className="btn_base">Envelope...</button>
                    <button className="btn_base">Linha de assinatura...</button>
          </div>
     
     <div className="div_formatar" style={divformt ? vrn : vr}>
<button className="btn_base">Texto</button>
<button className="btn_base">Espaçamento</button>
<button className="btn_base"
style={{borderBottom:"1px solid #7A7A7A"}}>Alinhar texto</button>
<button className="btn_base">Clonar formatação</button>
<button className="btn_base"
style={{borderBottom:"1px solid #7A7A7A"}}>Linha formatação direta</button>
<button className="btn_base">Caractere...</button>
<button className="btn_base">Parágrafo...</button>
<button className="btn_base">Listas</button>
<button className="btn_base"
style={{borderBottom:"1px solid #7A7A7A"}}>Marcadores e numeração...</button>
<button className="btn_base">Estilo de página...</button>
<button className="btn_base">Página de rosto...</button>
<button className="btn_base">Anotações...</button>
<button className="btn_base">Colunas...</button>
<button className="btn_base">Marca d´agua...</button>
<button className="btn_base"
style={{borderBottom:"1px solid #7A7A7A"}}>Seções...</button>
<button className="btn_base">Figura</button>
<button className="btn_base">Caixa de texto e forma</button>
<button className="btn_base">Quadro e objeto</button>
<button className="btn_base">Nome...</button>
<button className="btn_base"
style={{borderBottom:"1px solid #7A7A7A"}}>Descrição...</button>
<button className="btn_base">Âncora</button>
<button className="btn_base">Disposição de texto</button>
<button className="btn_base">Dispor</button>
<button className="btn_base">Girar ou inverter</button>
<button className="btn_base">Agrupar</button>
     </div>
     
     <div className="div_estilos" style={divest ? vrn:vr}>
     <button className="btn_base">Corpo do texto</button>
     <button className="btn_base">Título</button>
     <button className="btn_base">Substituto</button>
     <button className="btn_base">Titulo 1</button>
     <button className="btn_base">Titulo 2</button>
     <button className="btn_base">Titulo 3</button>
     <button className="btn_base">Citações</button>
     <button className="btn_base"
     style={{borderBottom:"1px solid #7A7A7A"}}>Texto pré-formatado</button>
     <button className="btn_base">Sem estilo do caractere</button>
     <button className="btn_base">Ênfase</button>
     <button className="btn_base">Ênfase forte</button>
     <button className="btn_base">Citação</button>
     <button className="btn_base"
     style={{borderBottom:"1px solid #7A7A7A"}}>Texto fonte</button>
     <button className="btn_base">Sem lista</button>
     <button className="btn_base">Estão de lista com marcador</button>
     <button className="btn_base">Estilo lista numerada 123</button>
     <button className="btn_base">Estilo de numeração de lista ABC</button>
     <button className="btn_base">Estilo de numeração de lista abc</button>
     <button className="btn_base">Estilo de numeração de lista IVX</button>
     <button className="btn_base"
     style={{borderBottom:"1px solid #7A7A7A"}}>Estilo de numeração de lista ivx</button>
     <button className="btn_base">Editar estilo</button>
     <button className="btn_base">Atualizar estilo a partir da seleção</button>
     <button className="btn_base">Novo estilo selecionado</button>
     <button className="btn_base">Carregar estilo do modelo</button>
     <button className="btn_base">Gerenciar estilos</button>
     </div>

     <div className="div_tabela" style={divtbl ? vrn : vr}>
        <button className="btn_base">Inserir tabela...</button>
        <button className="btn_base">Inserir</button>
         <button className="btn_base">Excluir</button>
        <button className="btn_base">Selecionar</button>
         <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Tamanho</button>
        <button className="btn_base">Mesclar células</button>
         <button className="btn_base">Dividir células...</button>
        <button className="btn_base">Mesclar tabela</button>
         <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Dividir tabela...</button>
        <button className="btn_base">Proteger células</button>
         <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Desproteger células</button>
        <button className="btn_base">Estilo de autoformatação...</button>
         <button className="btn_base">Formato numérico...</button>
        <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Reconhecimento de números</button>
         <button className="btn_base">Repetir linhas de cabeçalho nas páginas</button>
        <button className="btn_base"
         style={{borderBottom:"1px solid #7A7A7A"}}>Quebra de linhas entre páginas</button>
         <button className="btn_base">Converter</button>
        <button className="btn_base">Editar fórmula</button>
         <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Ordenar...</button>
        <button className="btn_base">Propriedades...</button>
        </div>

     <div className="div_formulario" style={divforml ? vrn : vr}>
<button className="btn_base">Modo de edição</button>
<button className="btn_base">Etiqueta</button>
<button className="btn_base">Caixa de texto</button>
<button className="btn_base">Caixa de seleção</button>
<button className="btn_base">Botão de opção</button>
<button className="btn_base">Caixa de lista</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Caixa de combinação</button>
<button className="btn_base">Botão de pressão</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Botão de imagem</button>
<button className="btn_base">Campo formatado</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Mais campos</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Caixa de grupo</button>
<button className="btn_base">Controle de imagem</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Seleção de arquivo</button>
<button className="btn_base">Propriedades do controle...</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Propriedades do formulário...</button>
<button className="btn_base">Navegador de formulários...</button>
<button className="btn_base"
  style={{borderBottom:"1px solid #7A7A7A"}}>Ordem de ativação...</button>
<button className="btn_base">Abrir no modo esboço</button>
<button className="btn_base" style={{borderBottom:"1px solid #7A7A7A"}}
>Controle de foco automático</button>
<button className="btn_base">Controles de conteúdo</button>
     </div>
     
     <div className="div_ferramentas" style={divferr ? vrn : vr}>
      <button className="btn_base">Ortografia...</button>
      <button className="btn_base">Verificação ortográfica automática</button>
      <button className="btn_base">Dicionário de sinônimos</button>
      <button className="btn_base">Idioma</button>
      <button className="btn_base">Contagem de palavras...</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Verificação de acessibilidade...</button>
      <button className="btn_base">Autocorreção</button>
      <button className="btn_base">Autotexto...</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Mapa de imagem</button>
      <button className="btn_base">Censurar</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Autocensurar</button>
      <button className="btn_base">Numeração de cápitulos...</button>
      <button className="btn_base">Numeração de linhas...</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Notas de rodapé e notas de fim...</button>
      <button className="btn_base">Assistente de mala direita...</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Banco de dados bibliográficos</button>
      <button className="btn_base">Atualizar</button>
      <button className="btn_base">Proteger documento</button>
      <button className="btn_base">Calcular</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Ordenar...</button>
      <button className="btn_base">Macros</button>
      <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Ferramentas de desenvolvimento</button>
      <button className="btn_base">Filtros XML...</button>
      <button className="btn_base">Gerenciador de extensões...</button>
      <button className="btn_base">Personalizar...</button>
      <button className="btn_base">Opções...</button>
     </div>
     
     <div className="div_janela" style={divjnl ? vrn : vr}>
     <button className="btn_base">Nova janela</button>
     <button className="btn_base"
          style={{borderBottom:"1px solid #7A7A7A"}}>Fechar janela</button>
     <button className="btn_base">Sem Título</button>
     </div>

     <div className="div_ajuda" style={divajuda ? vrn : vr}>
     <button className="btn_base">Ajuda do LibreOffice</button>
     <button className="btn_base">O que é isto?</button>
     <button className="btn_base">Guias do usuário</button>
     <button className="btn_base">Mostrar dica do dia</button>
     <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Pesquisar comandos</button>
     <button className="btn_base">Obter ajuda on-line</button>
      <button className="btn_base"
       style={{borderBottom:"1px solid #7A7A7A"}}>Enviar comentários</button>
     <button className="btn_base">Reparar o LibreOffice</button>
     <button className="btn_base">Participar</button>
     <button className="btn_base"
      style={{borderBottom:"1px solid #7A7A7A"}}>Doação ao projeto LibreOffice</button>
     <button className="btn_base">Informações sobre a licença</button>
     <button className="btn_base">Sobre o LibreOffice</button>
     </div>

<div className="base_cores" style={coropt ? vrn :vr}>
<h1 style={{fontSize:14,fontFamily:"monospace",color:"white"}}>Cor da fonte</h1>
<div style={{display:"flex",flexWrap:"wrap",width:168,backgroundColor:"#393939"
,height:20,borderRadius:5,border:"2px solid none",marginLeft:5}}>

<div style={{backgroundColor:"black",border:"1px solid white",
width:10,height:10,margin:5}}></div>
<button style={{border:"none",backgroundColor:"#393939",color:"white",
fontSize:14,height:20}}>Automatico</button>
</div>

<div style={{marginTop:10,backgroundColor:"#393939",display:"flex",flexWrap:"wrap"}}>
<button className="cores_pixel" style={{backgroundColor:" #000000"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #1C1C1C"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#363636"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#4F4F4F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #696969"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #808080"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#A9A9A9"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#C0C0C0"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#D3D3D3"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #DCDCDC"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #6A5ACD"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#836FFF"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#6959CD"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #483D8B"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #191970"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #000080"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #00008B"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#0000CD"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #0000FF"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #6495ED"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #4169E1"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #1E90FF"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #00BFFF"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#87CEFA"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#87CEEB"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #ADD8E6"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #4682B4"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#B0C4DE"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#708090"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#778899"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #00FFFF"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#00CED1"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #40E0D0"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #48D1CC"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#20B2AA"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #008B8B"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#008080"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #7FFFD4"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#66CDAA"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#5F9EA0"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #2F4F4F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #00FA9A"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #00FF7F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #98FB98"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#90EE90"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #8FBC8F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #3CB371"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #2E8B57"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #006400"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #008000"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#228B22"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #32CD32"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #00FF00"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#7CFC00"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #7FFF00"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #ADFF2F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #9ACD32"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #6B8E23"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#556B2F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #808000"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #BDB76B"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#DAA520"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#B8860B"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#8B4513"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #A0522D"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #BC8F8F"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#CD853F"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #D2691E"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#F4A460"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #FFDEAD"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#F5DEB3"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #DEB887"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#D2B48C"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#7B68EE"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #9370DB"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#8A2BE2"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#4B0082"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#9400D3"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#9932CC"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#BA55D3"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#A020F0"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#8B008B"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF00FF"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#EE82EE"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#DA70D6"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#DDA0DD"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#C71585"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #FF1493"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF69B4"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#DB7093"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFB6C1"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #FFC0CB"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #F08080"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#CD5C5C"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #DC143C"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#800000"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#8B0000"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#B22222"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#A52A2A"}}></button>
<button className="cores_pixel" style={{backgroundColor:" #FA8072"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#E9967A"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFA07A"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF7F50"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF6347"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF0000"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF4500"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FF8C00"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFA500"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFD700"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFFF00"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#F0E68C"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#F0F8FF"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFF5EE"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#F5F5DC"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFEBCD"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFFFE0"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#FFDAB9"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#D8BFD8"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#B0E0E6"}}></button>
<button className="cores_pixel" style={{backgroundColor:"#E0FFFF"}}></button>
</div>

<AiFillCaretLeft className="seleçao_cores" size="30" color="white" 
onClick={()=> setCores(cores - 1)}/>
<AiOutlineFontColors className="seleçao_cores" size="30" color={cor_atual}/>
<AiFillCaretRight className="seleçao_cores" size="30" color="white"
onClick={()=> setCores(cores + 1)}/>
</div>


<div className="cor_balde" style={balde ? vrn : vr}>
<div className="sobre_balde">
<div className="opt_balde" style={{backgroundColor:"salmon"}} onClick={mostrar_cor1}></div>
<div className="opt_balde" style={{backgroundColor:"lightgreen"}} onClick={mostrar_cor2}></div>
<div className="opt_balde" style={{backgroundColor:"yellow"}} onClick={mostrar_cor3}></div>
<div className="opt_balde" style={{backgroundColor:"lightblue"}} onClick={mostrar_cor4}></div>
<div className="opt_balde" style={{backgroundColor:"white"}} onClick={mostrar_cor5}></div>
<div className="opt_balde" style={{backgroundColor:"silver"}} onClick={mostrar_cor6}></div></div>
</div>
     </section>

     <section className="espaço_sub">
     <div className="div_sub_NOVO"
     style={novo? vrn:vr}>
     <button className="btn_sub">Documento de texto</button>
      <button className="btn_sub">Planilha</button>
       <button className="btn_sub">Apresentação</button>
        <button className="btn_sub">Desenho</button>
         <button className="btn_sub"
         style={{borderBottom:"1px solid #7A7A7A"}}>Fórmula</button>
          <button className="btn_sub">Documento HTML</button>
           <button className="btn_sub"
              style={{borderBottom:"1px solid #7A7A7A"}}>Formulário XML</button>
            <button className="btn_sub">Etiquetas</button>
             <button className="btn_sub"
                style={{borderBottom:"1px solid #7A7A7A"}}>Cartões de visita</button>
              <button className="btn_sub">Documento mestre</button>
               <button className="btn_sub">Modelos...</button>
     </div>
     <div className="div_sub_ASSISTENTES" style={assistente ? vrn : vr}
     onMouseOver={mostrar_assistente}>
      <button className="btn_sub">Carta...</button>
      <button className="btn_sub">Fax...</button>
       <button className="btn_sub">Agenda...</button>
        <button className="btn_sub">Conversor de documentos...</button>
     </div>

     <div className="div_sub_MODELOS" style={modelo ? vrn : vr}>
<button className="btn_sub">Editar modelo...</button>
      <button className="btn_sub">Salvar como modelo...</button>
       <button className="btn_sub">Gerenciar modelos...</button>
     </div>

     <div className="div_sub_EXPORTARCM" style={exportarcm ? vrn : vr}>
      <button className="btn_sub">Exportar como PDF...</button>
       <button className="btn_sub">Exportar diretamente como PDF...</button>
           <button className="btn_sub">Exportar como EPUB...</button>
       <button className="btn_sub">Exportar diretamente como EPUB...</button>
     </div>

      <div className="div_sub_ENVIAR" style={enviar ? vrn : vr}>
      <button className="btn_sub">Enviar documento por Email...</button>
       <button className="btn_sub" style={{fontSize:12}}>Por e-mail como documento de texto..</button>
      <button className="btn_sub">Por e-mail como Microsoft Word...</button>
       <button className="btn_sub">Por e-mail como PDF...</button>
         <button className="btn_sub" 
          style={{borderBottom:"1px solid #7A7A7A"}}>Enviar por bluetooth...</button>
           <button className="btn_sub">Criar documento mestre</button>
             <button className="btn_sub"
              style={{borderBottom:"1px solid #7A7A7A"}}>Criar documento HTML</button>
               <button className="btn_sub">Tópicos para apresentação...</button>
                <button className="btn_sub"
                 style={{borderBottom:"1px solid #7A7A7A"}}>
                 Estrutura de tópicos ... transferência</button>
             <button className="btn_sub">Criar Autoressumo...</button>
              <button className="btn_sub">Autoressumo para apresentação...</button>
     </div>
     <div className="div_sub_ASSINATURADG" style={assdg ? vrn : vr}>
      <button className="btn_sub">Criar documento HTML</button>
       <button className="btn_sub">Criar documento HTML</button>
       </div>

       <div className="div_sub_COLAR_ESP"
       style={colaresp? vrn:vr}>
       <button className="btn_sub">Colar texto sem formatação</button>
       <button className="btn_sub">Colar especial...</button>
       <button className="btn_sub">Colar como tabela embutida</button>
       <button className="btn_sub">Colar como linhas acima</button>
       <button className="btn_sub">Colar como colunas antes</button>
       </div>

       <div className="div_sub_MODOSLC"
        style={modoslc? vrn:vr}>
        <button className="btn_sub">Padrão</button>
       <button className="btn_sub">Bloco</button>
       </div>

       <div className="div_sub_REGISTRAR_ALT"
       style={regst ? vrn:vr}>
          <button className="btn_sub">Registrar</button>
       <button className="btn_sub"
       style={{borderBottom:"1px solid #7A7A7A"}}>Mostrar</button>
          <button className="btn_sub">Gerenciar</button>
       <button className="btn_sub">Anterior</button>
          <button className="btn_sub">Próxima</button>
       <button className="btn_sub">Aceitar</button>
          <button className="btn_sub">Aceitar e avançar para a seguinte</button>
       <button className="btn_sub">Aceitar todas</button>
          <button className="btn_sub">Rejeitar</button>
       <button className="btn_sub">Rejeitar e avançar para a seguinte</button>
          <button className="btn_sub"
          style={{borderBottom:"1px solid #7A7A7A"}}>Rejeitar todas</button>
       <button className="btn_sub">Anotação...</button>
          <button className="btn_sub"
          style={{borderBottom:"1px solid #7A7A7A"}}>Proteger...</button>
       <button className="btn_sub">Comparar documento...</button>
          <button className="btn_sub">Mesclar documento...</button>
       </div>

       <div className="div_sub_ANOTAÇAO"
       style={anotaçao ? vrn:vr}>
        <button className="btn_sub">Responder à anotação</button>
       <button className="btn_sub">Resolvido</button>
        <button className="btn_sub">Sequência resolvida</button>
       <button className="btn_sub">Excluir anotação</button>
        <button className="btn_sub">Excluir sequência de anotações</button>
       <button className="btn_sub">Excluir todas as anotações autor</button>
        <button className="btn_sub">Excluir todas anotações</button>
       </div>

       <div className="div_sub_REFERENCIA"
       style={referencia ? vrn : vr}>
         <button className="btn_sub">Notas de rodapé e notas de fim...</button>
       <button className="btn_sub">Entrada de índice...</button>
         <button className="btn_sub">Entrada bibliográfica...</button>
       </div>

       <div className="div_sub_OBJETO_OLE"
       style={objole ? vrn:vr}>
       <button className="btn_sub">[Sem seleção possível]</button>
       </div>

       <div className="div_sub_BARRA_FERRAMENTAS" style={barraf ? vrn : vr}>
        <button className="btn_sub">Alinhar Objetos</button>
        <button className="btn_sub">Classificação de segurança</button>
        <button className="btn_sub">Configurações 3D</button>
        <button className="btn_sub">Controles de Formulário</button>
        <button className="btn_sub">Desenho</button>
         <button className="btn_sub">Editar pontos</button>
        <button className="btn_sub">Esboço de formulário</button>
        <button className="btn_sub">Ferramentas</button>
        <button className="btn_sub">Figuras</button>
        <button className="btn_sub">Fontwork</button>
         <button className="btn_sub">Formatação</button>
        <button className="btn_sub">Formatação (estilos)</button>
        <button className="btn_sub">Inserir</button>
        <button className="btn_sub">Localizar</button>
        <button className="btn_sub">Mala Direita</button>
         <button className="btn_sub">Marcadores e numeração</button>
        <button className="btn_sub">Navegação de formulário</button>
        <button className="btn_sub">Objeto de texto</button>
        <button className="btn_sub">Objeto OLE</button>
        <button className="btn_sub">Padrão</button>
         <button className="btn_sub">Padrão (modo único)</button>
        <button className="btn_sub">Propriedades do objeto de desenho</button>
        <button className="btn_sub">Quadro</button>
        <button className="btn_sub">Registrar alterações</button>
        <button className="btn_sub">Reprodução de mídia</button>
         <button className="btn_sub"
          style={{borderBottom:"1px solid #7A7A7A"}}>Tabela</button>
        <button className="btn_sub">Personalizar...</button>
        <button className="btn_sub">Reproduzir</button>
        <button className="btn_sub">Travar barra de tarefas</button>
       </div>
     
       <div className="div_sub_REGUAS" style={reguas ? vrn : vr}>
         <button className="btn_sub">Régua</button>
        <button className="btn_sub">Régua vertical</button>
       </div>

       <div className="div_sub_BARRA_ROLAGEM" style={barrarlg ? vrn : vr}>
          <button className="btn_sub">Barra de rolagem horizontal</button>
          <button className="btn_sub">Barra de rolagem vertical</button>
       </div>

       <div className="div_sub_GRADES_LINHAS" style={gralin ? vrn : vr}>
       <button className="btn_sub">Exibir grade</button>
       <button className="btn_sub">Encaixar na grade</button>
       <button className="btn_sub">Guias ao mover objeto</button>
       </div>

       <div className="div_sub_ZOOM" style={zoom ? vrn: vr}>
        <button className="btn_sub">Página inteira</button>
         <button className="btn_sub">Largura da página</button>
          <button className="btn_sub"
          style={{borderBottom:"1px solid #7A7A7A"}}>Ideal</button>
            <button className="btn_sub">50%</button>
         <button className="btn_sub">75%</button>
          <button className="btn_sub">100%</button>
            <button className="btn_sub">150%</button>
         <button className="btn_sub"
         style={{borderBottom:"1px solid #7A7A7A"}}>200%</button>
          <button className="btn_sub">Zoom...</button>
       </div>
     </section>
     
     <section className="espaço_folha" onClick={mostrar_nada}>
     <textarea name="" id="" cols="30" rows="10" style={{fontSize:size,
     fontWeight:negrito,fontStyle:italico,textDecoration:combo,
     lineHeight:sobescrito,color:cor_atual,backgroundColor:fundo_atual,
     textAlign:texto_central}}></textarea>
     </section>
    </>
  )
}

export default App
