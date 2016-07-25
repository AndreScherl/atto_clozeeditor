YUI.add("moodle-atto_cloze-button",function(e,t){var n="atto_cloze",r={WIDTH:"800px"},i='<form class="{{CSS.FORM}}"><fieldset><div style="float:left; width: 50%;"><label for="{{elementid}}_atto_cloze_type">{{get_string "type" component}}</label><select style="width: 90%" class="{{CSS.TYPE}}" id="atto_cloze_type" /><option value="1" selected="selected">{{get_string "shortanswer" component}}</option><option value="2">{{get_string "shortanswer_c" component}}</option><option value="3">{{get_string "multichoice" component}}</option><option value="4">{{get_string "multichoice_v" component}}</option><option value="5">{{get_string "multichoice_h" component}}</option><option value="6">{{get_string "numerical" component}}</option></select></div><div style="float:left; width: 50%;"><label for="{{elementid}}_atto_cloze_points">{{get_string "points" component}}</label><select style="width: 20%" class="{{CSS.POINTS}}" id="atto_cloze_points" /><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></fieldset></div><br/><div><div style="float:left; width: 40%;"><label for="answer_0">{{get_string "answer" component}}</label></div><div style="float:left; width: 20%;"><label for="{{elementid}}_atto_cloze_percentage">{{get_string "percentage" component}}</label></div><div style="float:left; width: 40%;"><label for="{{elementid}}_atto_cloze_feedback">{{get_string "feedback" component}}</label></div></div><div class="{{CSS.OBJANSWER}}" id="atto_cloze_answers" ><fieldset id="atto_cloze_fieldset_answer"><div style="float:left; width: 40%;"><input class="{{CSS.ANSWER}}" style="width: 90%;" id="answer_0" /></div><div style="float:left; width: 20%;"><select style="width: 80%;" class="{{CSS.PERCENTAGE}}" id="{{elementid}}_atto_cloze_percentage" /><option value="100" selected="selected">100%</option><option value="75">75%</option><option value="67">66,6%</option><option value="50">50%</option><option value="34">33,3%</option><option value="25">25%</option><option value="0">0%</option></select></div><div style="float:left; width: 40%;"><input class="{{CSS.FEEDBACK}}" style="width: 100%;" id="{{elementid}}_atto_cloze_feedback" /></div></fieldset></div><br/><div id="addanswers"> </div><div class="mdl-align"><br/><button class="submit" type="submit">{{get_string "createcloze" component}}</button></div></form>',s={TYPE:"type",POINTS:"points",OBJANSWER:"objanswer",ANSWER:"answer",PERCENTAGE:"percentage",FEEDBACK:"feedback",ADD:"add",SUBMIT:"submit",FORM:"atto_form",WIDTH:"customwidth",WIDTHUNIT:"%"},o={TYPE:"."+s.TYPE,POINTS:"."+s.POINTS,OBJANSWER:"."+s.OBJANSWER,ANSWER:"."+s.ANSWER,PERCENTAGE:"."+s.PERCENTAGE,FEEDBACK:"."+s.FEEDBACK,ADD:".add",SUBMIT:".submit",FORM:"."+s.FORM,WIDTH:"."+s.WIDTH};e.namespace("M.atto_cloze").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,_contextMenu:null,_lastTarget:null,_menuOptions:null,initializer:function(){this.addButton({icon:"e/help",callback:this._displayDialogue}),this.get("host").on("atto:selectionchanged",function(){this._existingCloze()?this.highlightButtons():this.unHighlightButtons()},this)},_storeCloze:function(t){var n,r,i,s,o=new Array(3),u=new Array(3);if(this._getClozeSpan()){t.clozeSpan=this.get("host").getSelectionParentNode().parentNode;var a=t.clozeSpan.innerHTML,f=a.indexOf("{"),l=a.indexOf("}");a=a.slice(f+1,l)}else if(this._getTinyCloze()){var a=this.get("host").getSelection().toString();a=a.slice(1,a.length-1)}u=a.split(":"),u[1]==="SHORTANSWER"?u[1]=1:u[1]==="SHORTANSWER_C"?u[1]=2:u[1]==="MULTICHOICE"?u[1]=3:u[1]==="MULTICHOICE_V"?u[1]=4:u[1]==="MULTICHOICE_H"?u[1]=5:u[1]==="NUMERICAL"?u[1]=6:u[1]=1,e.one("#atto_cloze_type").set("value",u[1]),e.one("#atto_cloze_points").set("value",u[0]),u[2]=u[2].split("~");for(var c=0;c<u[2].length;c++){u[2][c]=u[2][c].slice(1,u[2][c].length),i=u[2][c].indexOf("%"),s=u[2][c].indexOf("#"),o[0]=u[2][c].substring(i+1,s),o[1]=u[2][c].substring(0,i),o[2]=u[2][c].substring(s+1,u[2][c].length),u[2][c]=[];for(k=0;k<o.length;k++)u[2][c][k]=o[k]}for(m=0;m<u[2].length;m++){for(var h=0;h<3;h++)e.one("#atto_cloze_answers").get("children").item(m).get("children").item(h).get("children").item(0).set("value",u[2][m][h]);this._addAnswer()}return u},_getClozeSpan:function(e){return this.get("host").getSelectionParentNode().parentNode.nodeName.toLowerCase()==="span"&&this.get("host").getSelectionParentNode().parentNode.getAttribute("name")==="cloze"?!0:!1},_getTinyCloze:function(e){var t=this.get("host").getSelection().toString();return t.length>1&&t[0]==="{"&&t[t.length-1]==="}"?!0:!1},_existingCloze:function(e){var t=this.get("host").getSelectionParentNode(),n=this.get("host").getSelection();return this.get("host").isActive()?t?!n||n.length===0?!1:this._getClozeSpan()||this._getTinyCloze()?!0:!1:!1:!1},_displayDialogue:function(e){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1)return;var t=this.getDialogue({headerContent:M.util.get_string("createcloze",n),focusAfterHide:!0,width:r.WIDTH},!0);t.set("bodyContent",this._getDialogueContent(e)).show();if(this._getClozeSpan()||this._getTinyCloze())var i=this._storeCloze(e)},_getDialogueContent:function(t){var r=e.Handlebars.compile(i);return this._content=e.Node.create(r({CSS:s,elementid:this.get("host").get("elementid"),component:n})),this._content.one("#answer_0").on("valuechange",this._addAnswer,this),this._content.one(".submit").on("click",this._submitCloze,this),this._content},_submitCloze:function(t){var n=!1,r,i,s;t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var u=e.guid();this.get("host").setSelection(this._currentSelection),r=t.currentTarget.ancestor(o.FORM).one(o.TYPE),i=t.currentTarget.ancestor(o.FORM).one(o.POINTS),s="{"+i.get("value");switch(parseInt(r.get("value"))){case 1:s+=":SHORTANSWER:";break;case 2:s+=":SHORTANSWER_C:";break;case 3:s+=":MULTICHOICE:";break;case 4:s+=":MULTICHOICE_V:";break;case 5:s+=":MULTICHOICE_H:"
;break;case 6:s+=":NUMERICAL:";break;default:s+=":SHORTANSWER:"}for(var a=0;a<this._content.one("#atto_cloze_answers").get("children").size();a++)tmpNode=this._content.one("#atto_cloze_answers").get("children").item(a),tmpNode.get("children").item(0).get("children").item(0).get("value")&&(n&&(s+="~",n=!1),s+="%"+tmpNode.get("children").item(1).get("children").item(0).get("value")+"%"+tmpNode.get("children").item(0).get("children").item(0).get("value")+"#"+tmpNode.get("children").item(2).get("children").item(0).get("value"),n=!0);s+="}",this._getClozeSpan()?this.get("host").getSelectionParentNode().parentNode.innerHTML=s:(s='<span name="cloze">'+s+"</span>",this.get("host").insertContentAtFocusPoint(s)),this.markUpdated()},_addAnswer:function(){this._content.one("#atto_cloze_answers").purge(!0,"valuechange"),tmpNode=e.one("#atto_cloze_fieldset_answer").cloneNode(!0),tmpNode.get("children").item(0).get("children").item(0).set("value",""),tmpNode.get("children").item(2).get("children").item(0).set("value",""),tmpNode.get("children").item(0).get("children").item(0).on("valuechange",this._addAnswer,this),e.one("#atto_cloze_answers").appendChild(tmpNode);return}},{})},"@VERSION@",{requires:["moodle-editor_atto-plugin","moodle-editor_atto-menu","event","event-valuechange"]});