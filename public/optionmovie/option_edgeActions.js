/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_rate1}", "click", function(sym, e) {
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.play("study");
         // マウスクリックのコードをここに挿入します

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pencil}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play("study");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rate1-text}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play("study");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rate2}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.play("goalper");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_goal}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play("goalper");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rate2-text}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play("goalper");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         sym.stop();
         // コードをここに挿入

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_user}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         // ラベルまたは特定の時間でタイムラインを再生します。例 : 
         // sym.play(500); または sym.play("myLabel");
         sym.play("goal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rate3}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play("goal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rate3-text}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play("goal");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-2656702");