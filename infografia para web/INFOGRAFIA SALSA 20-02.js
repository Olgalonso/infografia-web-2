(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"INFOGRAFIA SALSA 20_02_atlas_1", frames: [[0,0,1300,1300]]},
		{name:"INFOGRAFIA SALSA 20_02_atlas_2", frames: [[962,0,500,500],[1464,0,500,500],[962,502,500,500],[1464,502,500,500],[0,0,960,960],[1099,1004,553,388],[597,1506,553,388],[0,962,595,842],[1152,1394,553,388],[597,1004,500,500]]},
		{name:"INFOGRAFIA SALSA 20_02_atlas_3", frames: [[0,390,300,210],[302,390,300,210],[1110,0,400,406],[1512,0,400,406],[0,0,553,388],[604,390,300,210],[555,0,553,388]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._6544825sinfondo = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6544900sinfondo = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bailarinesrueda = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bailarinessalsamambosinfondo = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cuencosalsacaleña = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cuencosalsacubana = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ESTILOSSALSA3 = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondosoloconguirlandaspngcopia = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ketchupcuenco = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mostazacuencopngcopia2 = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mostazasalsacubana = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Ruedacubanapngcopia = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.salsa1pngcopia = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.salsacaleñapngcopia = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Salsaenlinea = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.salsamambocuenco = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.salsamambo = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sinfondobailarines = function() {
	this.initialize(ss["INFOGRAFIA SALSA 20_02_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.salsacaleñaboton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.salsacaleñapngcopia();
	this.instance.setTransform(0,0,0.6945,0.6945);

	this.text = new cjs.Text("mmmmmmmmmmm", "28px 'Times New Roman'", "#323232");
	this.text.lineHeight = 33;
	this.text.lineWidth = 159;
	this.text.parent = this;
	this.text.setTransform(282,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26,443,295.5);


(lib.botonsalsamambo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.salsamambocuenco();
	this.instance.setTransform(0,0,1.3848,1.3848);

	this.instance_1 = new lib.salsamambo();
	this.instance_1.setTransform(139,15,0.6236,0.6236);

	this.instance_2 = new lib.sinfondobailarines();
	this.instance_2.setTransform(-20,266,0.5839,0.5839);

	this.text = new cjs.Text("La Salsa Mambo o salsa estilo Nueva York tiene solo una leve diferencia de la de los Ángeles. Ésta consiste en el golpe de ritmo en el que el bailarín comienza a bailar. Si en la salsa ,los golpes de ritmo son ocho, en el estilo de los Ángeles comienza en el primero. Y en el de Nueva York se hace en el segundo. Esta simple diferencia hace que  este tipo de salsa se parezca al mambo o al son. Le aporta una gran elegancia", "12px 'Times New Roman'", "#323232");
	this.text.lineHeight = 15;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(-95,313.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,0,580.8,558);


(lib.botonsalsaenlinea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Salsaenlinea();
	this.instance.setTransform(0,0,0.6295,0.7905);

	this.instance_1 = new lib.bailarinesrueda();
	this.instance_1.setTransform(566,113,0.548,0.548);

	this.text = new cjs.Text("La Salsa en linea o al estilos de los Ángeles recibe ese nombre porque el baile se lleva a cabo sobre un trazo imaginario reperesentando una linea recta. Es un estilo con más pautas y estructuras  que la salsa cubana.Se baila sobre todo en concursos y exhibiciones ya que muestra más claramente la ejecución de los pasos y movimientos.", "12px 'Times New Roman'", "#323232");
	this.text.lineHeight = 15;
	this.text.lineWidth = 141;
	this.text.parent = this;
	this.text.setTransform(507,138.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,840,387);


(lib.botonsalsacubana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.mostazasalsacubana();
	this.instance.setTransform(0,0,0.5283,0.5732);

	this.instance_1 = new lib._6544825sinfondo();
	this.instance_1.setTransform(432,265,0.5999,0.5999);

	this.text = new cjs.Text("La Salsa Cubana es mucho mas libre e informal. Se baila en torno a un círculo imaginario. La pareja se agarra las manos casi todo el rato y van realizando piruetas y figuras.", "12px 'Times New Roman'", "#323232");
	this.text.lineHeight = 15;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(384,327.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,732,565);


(lib.Botonruedacubana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Ruedacubanapngcopia();
	this.instance.setTransform(0,0,0.6604,0.759);

	this.instance_1 = new lib.bailarinessalsamambosinfondo();
	this.instance_1.setTransform(-171,89,0.532,0.532);

	this.text = new cjs.Text("La Salsa en Rueda cubana es similar a la salsa Cubana pero se baila en grupo,con las parejas formando un círculo, mientras se siguen los movimientos  que va indicando una persona.", "12px 'Times New Roman'", "#323232");
	this.text.lineHeight = 15;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(-249.95,150.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:22}},{t:this.text,p:{x:-249.95,y:150.2,lineWidth:137}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{y:0}},{t:this.text,p:{x:-248,y:119.3,lineWidth:145}}]},1).to({state:[{t:this.instance,p:{y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.9,0,617.1,355);


(lib.botonsalsacaleña = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.salsacaleñaboton();
	this.instance.setTransform(192,134.7,1,1,0,0,0,192,134.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.salsacaleñaboton(), 3);

	this.instance_1 = new lib._6544900sinfondo();
	this.instance_1.setTransform(494,-86,0.576,0.576);

	this.text = new cjs.Text("\nLa salsa estilo Colombia o Salsa Caleña, es muy alegre. Se baila con movimientos de los pies y caderas mucho más rápidos que en los demás tipos de estilos de salsa. Además incluye bastantes acrobacias.", "12px 'Times New Roman'", "#323232");
	this.text.lineHeight = 15;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(422,-18.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:134.7}}]}).to({state:[{t:this.instance,p:{y:121.7}},{t:this.text},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{y:134.7}}]},1).to({state:[{t:this.instance,p:{y:134.7}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-86,782,355.5);


// stage content:
(lib.RECOVER_INFOGRAFIASALSA1002 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bbcoa
	this.instance = new lib.botonsalsacaleña();
	this.instance.setTransform(258.55,553.7,1,1,0,0,0,221.5,121.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.botonsalsacaleña(), 3);

	this.instance_1 = new lib.cuencosalsacaleña();
	this.instance_1.setTransform(132,419,1.36,1.4667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// mostaza_
	this.instance_2 = new lib.botonsalsacubana();
	this.instance_2.setTransform(212.1,186.2,1,1,0,0,0,146.1,111.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.botonsalsacubana(), 3);

	this.instance_3 = new lib.cuencosalsacubana();
	this.instance_3.setTransform(116,-12,1.4122,1.5333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(2));

	// salsa_mambo
	this.instance_4 = new lib.botonsalsamambo();
	this.instance_4.setTransform(786.9,210.4,1,1,0,0,0,241.9,145.4);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.botonsalsamambo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

	// ketchup
	this.instance_5 = new lib.botonsalsaenlinea();
	this.instance_5.setTransform(116.1,400.3,1,1,0,0,0,174.1,153.3);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.botonsalsaenlinea(), 3);

	this.instance_6 = new lib.ketchupcuenco();
	this.instance_6.setTransform(100,253,0.525,0.5394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(2));

	// rueda_cubana
	this.instance_7 = new lib.Botonruedacubana();
	this.instance_7.setTransform(880.6,444.2,1,1,0,0,0,182.6,147.2);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Botonruedacubana(), 3);

	this.instance_8 = new lib.mostazacuencopngcopia2();
	this.instance_8.setTransform(644,317,0.5376,0.5376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(2));

	// Banda
	this.instance_9 = new lib.ESTILOSSALSA3();
	this.instance_9.setTransform(240,89,0.4123,0.4206);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2));

	// bote_mayo_ppal
	this.instance_10 = new lib.salsa1pngcopia();
	this.instance_10.setTransform(228,69,0.8454,0.8454);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2));

	// fondo
	this.instance_11 = new lib.fondosoloconguirlandaspngcopia();
	this.instance_11.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(422,308,641.2,647);
// library properties:
lib.properties = {
	id: '008FB3C3A7CF45468364AD024B517488',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/INFOGRAFIA SALSA 20_02_atlas_1.png", id:"INFOGRAFIA SALSA 20_02_atlas_1"},
		{src:"images/INFOGRAFIA SALSA 20_02_atlas_2.png", id:"INFOGRAFIA SALSA 20_02_atlas_2"},
		{src:"images/INFOGRAFIA SALSA 20_02_atlas_3.png", id:"INFOGRAFIA SALSA 20_02_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['008FB3C3A7CF45468364AD024B517488'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;