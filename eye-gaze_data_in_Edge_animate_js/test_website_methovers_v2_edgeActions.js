/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
         var scrollpos = 0;  
         $(window).scroll(function (event) {
       		scrollpos = $(window).scrollTop();	
      	});
      
      document.body.style.background = "#000";
      
      	var mouse = 0;
      	var y_ = 0;
      	var x_ = 0;
      	Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         
         /*
         	Update update niet echt. Dus zelf timers maken
         	Script dat de X en Y positie uitleest van JSON file gemaakt door Processing
         	Ver volgens JS code om te indexeren welke hover able items er in de hovers symbol staan
         	Strip functie om het geheel opteruimen voor Edge
         */
         
         
         if(mouse == 0){
         
                 var t=setInterval(loadJson,124,8276586238576186358237523652); //internet pc clock timer. Processing schrijf elke 100ms en schrijf/lees conflicten enz vandaar een raar getal
         
                 function loadJson(){
         				$.getJSON( "processing/data/new.json", function( data ) {
                         var items = [];
                         $.each( data, function( key, val ) {
         
                             if (key == 1){
                                 x_ = val;
                             }else if(key == 2){
                                 y_ = val + scrollpos;
         
                             }
                         });
                     });
         				// draw cursor
                    // document.getElementById("Stage_cursor").style.left=  x_+"px";
                     //document.getElementById("Stage_cursor").style.top=  y_+"px";
         
         				//check if X or Y are hovering anything
         				checkHovers();
         
                 }
         
         
         
         }else{
         	this.onMove = function( x_, y_ ){
         		document.getElementById("Stage_cursor").style.left=  x_+"px";
         		document.getElementById("Stage_cursor").style.top=  y_+"px";
         	}
         
         }
         
         
         // find divs once
         var foo = document.querySelector('#Stage_hover');
         var childNodes = foo.childNodes,
           children = [],
           i = childNodes.length;
         
         while (i--) {
           if (childNodes[i].nodeType == 1) {
         		children.unshift(childNodes[i]);
           }
         }
         
         
          //loop and strip ids once
          function checkHovers(){
         
          for(i = 0; i < childNodes.length; i++){
         
         		var idOrigin =children[i].getAttribute('id');
         		var id=idOrigin.replace("Stage_hover_", "");
         		//var id=children[i].getAttribute('id').replace("Stage_hover_", "");
         		//console.log("ID: " + id);
         		var xPosSym = sym.getSymbol("hover").getSymbol(id).getSymbolElement().position().left;
         		var yPosSym = sym.getSymbol("hover").getSymbol(id).getSymbolElement().position().top;
         		var wPosSym = sym.getSymbol("hover").getSymbol(id).getSymbolElement().width();
         		var hPosSym = sym.getSymbol("hover").getSymbol(id).getSymbolElement().height();
         		//Warning Can be 0 or -1. Even though setting to 0 in the end. Cheers to Adobe Team.
         		var tPosSym = sym.getSymbol("hover").getSymbol(id).getPosition();
         
         
         		//Reset all others
         		document.getElementsByClassName('on').className = 'noton';
         
         	 	if(x_ > xPosSym && x_ < xPosSym + wPosSym && y_ > yPosSym && y_ < yPosSym +hPosSym){
         			if(document.getElementById(idOrigin).className != 'on'){
         					document.getElementById(idOrigin).className = 'on';
         				console.log('play it');
         				sym.getSymbol("hover").getSymbol(id).play();
         								document.getElementById(idOrigin).style.zIndex =  "999";
         			}
         		}else if( document.getElementById(idOrigin).className == 'on' ){ // is niet nul
         			document.getElementById(idOrigin).className = 'noton';
         		}
         
         
         		if(tPosSym == 500 && 	document.getElementById(idOrigin).className == 'noton'){
         		//	console.log("reverse");
         			sym.getSymbol("hover").getSymbol(id).playReverse();
         				document.getElementById(idOrigin).className = 'test';
         						document.getElementById(idOrigin).style.zIndex =  "100";
         		}
         
         
         
         
         	}
         
         }
         
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         if(mouse == 1)this.onMove( e.pageX, e.pageY );
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
         // insert code for scroll event here
      
      
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hovertest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("hovertest");
   //Edge symbol end:'hovertest'

   //=========================================================
   
   //Edge symbol: 'ContentShouldHover'
   (function(symbolName) {   
   
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         stop();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         

      });
      //Edge binding end

   })("ContentShouldHover");
   //Edge symbol end:'ContentShouldHover'

   //=========================================================
   
   //Edge symbol: 'hovertest_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      })("menuv2");
   //Edge symbol end:'menuv2'

   //=========================================================
   
   //Edge symbol: 'hovertest_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      })("settingsmenuv2");
   //Edge symbol end:'settingsmenuv2'

   //=========================================================
   
   //Edge symbol: 'hovertest_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      })("blok1");
   //Edge symbol end:'blok1'

   //=========================================================
   
   //Edge symbol: 'hovers'
   (function(symbolName) {   
   
   })("hover");
   //Edge symbol end:'hover'

   //=========================================================
   
   //Edge symbol: 'settingsmenuv2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      })("starwars");
   //Edge symbol end:'starwars'

   //=========================================================
   
   //Edge symbol: 'blok1_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
         //Edge binding end
      
      

      })("blok1_starwars");
   //Edge symbol end:'blok1_starwars'

   //=========================================================
   
   //Edge symbol: 'blok1_starwars_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
            //Edge binding end

         })("blok1_latest");
   //Edge symbol end:'blok1_latest'

   //=========================================================
   
   //Edge symbol: 'blok1_starwars_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
            //Edge binding end

         })("blok1_latestv2");
   //Edge symbol end:'blok1_latestv2'

   //=========================================================
   
   //Edge symbol: 'blok1_latestv2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
            //Edge binding end

         })("blok1_latestv2_1");
   //Edge symbol end:'blok1_latestv2_1'

   //=========================================================
   
   //Edge symbol: 'blok1_latestv2_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
            //Edge binding end

         })("blok1_latestv2_2");
   //Edge symbol end:'blok1_latestv2_2'

   //=========================================================
   
   //Edge symbol: 'blok1_latestv2_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
            //Edge binding end

         })("blok1_latestv2_3");
   //Edge symbol end:'blok1_latestv2_3'

   //=========================================================
   
   //Edge symbol: 'blok1_latestv2_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

            })("blok1_latestv2_4");
   //Edge symbol end:'blok1_latestv2_4'

   //=========================================================
   
   //Edge symbol: 'blok1_latestv2_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

            })("imgblok");
   //Edge symbol end:'imgblok'

   //=========================================================
   
   //Edge symbol: 'imgblok_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

            })("imgblok_1");
   //Edge symbol end:'imgblok_1'

   //=========================================================
   
   //Edge symbol: 'imgblok_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

            })("imgblok_2");
   //Edge symbol end:'imgblok_2'

   //=========================================================
   
   //Edge symbol: 'imgblok_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

            })("imgblok_3");
   //Edge symbol end:'imgblok_3'

   //=========================================================
   
   //Edge symbol: 'imgblok_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

            })("imgblok_4");
   //Edge symbol end:'imgblok_4'

   //=========================================================
   
   //Edge symbol: 'imgblok_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

            })("imgblok_5");
   //Edge symbol end:'imgblok_5'

   //=========================================================
   
   //Edge symbol: 'imgblok_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

            })("imgblok_6");
   //Edge symbol end:'imgblok_6'

   //=========================================================
   
   //Edge symbol: 'imgblok_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

            })("imgblok_7");
   //Edge symbol end:'imgblok_7'

   //=========================================================
   
   //Edge symbol: 'imgblok_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

               })("imgblok_8");
   //Edge symbol end:'imgblok_8'

   //=========================================================
   
   //Edge symbol: 'imgblok_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

               })("imgblok_9");
   //Edge symbol end:'imgblok_9'

   //=========================================================
   
   //Edge symbol: 'imgblok_10'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

               })("imgblok_10");
   //Edge symbol end:'imgblok_10'

   //=========================================================
   
   //Edge symbol: 'imgblok_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

   })("imgblok_11");
   //Edge symbol end:'imgblok_11'

   //=========================================================
   
   //Edge symbol: 'imgblok_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

               })("imgblok_13");
   //Edge symbol end:'imgblok_13'

   //=========================================================
   
   //Edge symbol: 'imgblok_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

               })("imgblok_14");
   //Edge symbol end:'imgblok_14'

   //=========================================================
   
   //Edge symbol: 'imgblok_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

               })("imgblok_15");
   //Edge symbol end:'imgblok_15'

   //=========================================================
   
   //Edge symbol: 'imgblok_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
      
      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseenter", function(sym, e) {
         sym.play();
         
      

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();// insert code to be run when the mouse leaves an element

      });
      //Edge binding end

               })("imgblok_12");
   //Edge symbol end:'imgblok_12'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-51211398");