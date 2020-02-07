vom = {};
vom.add = function(container, elem, cls){

	if (typeof container == 'string') 	{	
		container = document.querySelector(container);
		}
	if (typeof elem == 'string'){
		
		elem = document.createElement(elem);
		if (cls) elem.className = cls;
		
	}
	
	container.appendChild(elem);
	
	return elem;		
};

function Elem(type_name, txt, css_cls){		
	var elem = document.createElement(type_name);	
	elem.innerText = txt;	//value
	
	if (css_cls) {
		elem.className = css_cls;
	}
	
	return elem;	
}














/*!
	 Поменять имена на более читабельные
	 Пожалуй, на этом все

*/


var slider = {
	 

	back : true,
	btn__next : true,		
	slide_id_prefix : 'slide_',
	swipe : {
		 now : false,
		 start_margin : 0,    // тип - число (х-т %)
		 onstart_x : 0,
		 onstop_x : 0,
	},
	get_nextsource : function (_src_elem, _next_){
	 
		while(_src_elem){

			_src_elem = _src_elem[_next_];
		  
			if (_src_elem && _src_elem.src) {
			
				 return _src_elem;
			}
		}							 

		return null;
	 
	},				
	arrowAssing_for : function (_src_elem, _next){
		
		if (typeof _next == typeof true){
			 
			 _flag = _next;
			 _next = _next 
				  ? 'nextSibling'
				  : 'previousSibling';
		}
		else if(_next == void 0){
			 
			 this.__ae = true;
			 
			 this.arrowAssing_for(_src_elem, true);
			 this.arrowAssing_for(_src_elem, false);
			 
			 this.__ae = false;
			 
			 return;
				  
		}
		else _flag = _next == 'nextSibling';
	  
		var mover 
		  = _flag ? 'btn__next' : 'back';
		  
		var un_mover 
		  = !_flag ? 'btn__next' : 'back';
		  
		// если возврат выкл, включаем
		if (!this.__ae && !slider[un_mover]) {

			move_enable(un_mover);
		}
		
		//если след эл-та нет, выкл кнопку
		if (!slider.get_nextsource(
			 _src_elem, 
			 _next)) 
		{
			  mover_disable(mover);
			  return false;
		}
		else if (!slider[mover]) move_enable(mover);

		return true;
							  
	},			
	init : function(elem){
	
		var img_source_id = elem.id;
		
		if (!img_source_id)
			 throw new Error('Не задан id для источника слайдера');

		var num = 
			 (img_source_id.match(/\d+/)||[]).pop();
		 
		if (num == void 0)
				 throw new Error('id источника не содержит цифр');					 
		 
		this.source_id_prefix = 
			 img_source_id.slice(
				  0, -String(num).length
			 );
			 
			 
		load_slide_by(elem, true);
		
		
		
		var _slider = document.querySelector(
			'.slide_container'
		);					
		
		_slider.style.display = 'block';
		
		setTimeout(function (){
			 
			_slider.style.opacity = '1';
		},25);
			 
	},
	/*!
		 slide_id - id текущего слайда  
		 flag - флаг направления:
			  true - вперед
			  false - назад
			  undefined - текущий (первый запуск)
		 
		 image_load - возвращает id и src для 
			  текущего слайда либо false, если больше слайдов нет
		 
	*/
	image_load : function (slide_id, flag){
		 
		 
		// demo: 
		/*
		if (flag == void 0)
			return {
				src : slide_id 
					? 'back.jpg'
					: 'sample.png',
				id : 'default'
			};						//*/  
		 

		 
		 // practic:	 
		 
		 if (flag != void 0){
			 //если задано направление
		 
		 
			 var num = slide_id.match(/\d+/).pop();
			 
			 var src_elem = document.getElementById(
				  this.source_id_prefix + num
			 );					 
		 
		 
			 //теперь нужно найти смежный элемент
			 //Если num идут по порядку, то просто +-num
			 //Если элементы имеют общего root, то
			 
			 
			 
			 var next = flag 
				  ? 'nextSibling' 
				  : 'previousSibling';
			 

			 
			src_elem = slider.get_nextsource(
				  src_elem,
				  next
			);
			 
			 
			 if (!src_elem) return false;

		 }					 
		 else{
			  
			  // если не задано, то init
			  
			  src_elem = document.getElementById(
					slide_id
			  );
			  
			  slider.arrowAssing_for(src_elem, next);
			  
		 }

		 
		 if (src_elem && src_elem.id){
			
			var num = src_elem.id.match(/\d+/).pop();			
			src_elem.focus();
			
			return {
				 id : this.slide_id_prefix + num, 
				 src : src_elem.src
			} ;
			
		 }
		 else return false;
		 
		 
	},
	__ontouch : function (elem){
	
	},
	onswipe : function (){
	
	}
}



function image_expand(){			   
 
	var slide= document.querySelector('.slide');

	var fullOnScreen = slide.requestFullScreen
	  || slide.webkitRequestFullScreen
	  || slide.mozRequestFullScreen
	  || slide.msRequestFullScreen;

	if (fullOnScreen) fullOnScreen.call(slide);
	
}

// load_slide_by();

/*!
	 \brief: need for override and by slider load 
	 
	 current - текущий слайд (либо для выбора 
		  направления, если фото уже предзагружены)
		  Элемент с классом .image_container

	 flag - направление (нужно для выбора след фото)
	 
	 current && flag => init
	 current && !flag => back
	 !current && !flag => next
	 
*/
var load_slide_by = function(current, flag){

	// здесь возможна предзагрузка
	
	if (!current){
	
		var slides = document.querySelectorAll(
			 '.image_container'
		);
		
		
		
		var cur_id = slider.swipe.now
			 ? slider.swipe.start_margin / 100 
			 : slides[0].style.marginLeft.slice(1,-3);
	
	
		cur_id = cur_id || 0;
		 
		var _cur = slides[cur_id];
	
		var _next = (_cur || {}).nextSibling;
			 
		if (_next){						
			
			return true; // если он есть, то true
		}               
		//else continue next code executing:
		//for load img				
		
	 
	}
	
	if (current || _cur == void 0){
	
		 console.warn(flag);
	}

	// для swipe:
	var i_s = slider.image_load(
		 (current || _cur).id,
		 (current && flag) 
			  ? (void 0)                 // init
			  : !current ? true : false  // next:back
	);
	
	if (!i_s) return false;				
	
	if (current && !flag){               // back
	
		// добавляем новый контейнер в начало
	
		 var slide_leaf = 
			  Elem('div','', 'image_container');
		 
		 slide_leaf.style.marginLeft = '-100%';
		 
		 var parent = current.parentElement;
		 
		 parent.insertBefore(slide_leaf, current);
		 
	}
	else if (flag || flag == void 0){             					
		// init || next
		
		// добавляем новый контейнер в конец
		
		var slide_leaf = vom.add(
			  '.slide_container',
			  'div',
			  'image_container');
			  
		
	}
	
	var slide = vom.add(slide_leaf,'img','slide');
				
	slide.src = i_s.src;
	slide_leaf.id = i_s.id;
	
	slide.ondragstart = () => { return false;}
	
	//var swipe_offset = 0;
	var swipped  = false;
	var start_off__px = 0;
	var start_off__perc = 0;
	var tuner = null;
	
	
	var swipe_start = function (){
	
		 // координаты x при касании:					 
		 slider.swipe.onstart_x 
			  = (((event.touches || [])[0])|| event)
		 .screenX;
		 
		 console.log(
			  'start: '+ slider.swipe.onstart_x
		 );
		 
		 swipped = true;
		 
		 
		 tuner = document.querySelector(
			  '.image_container'
		 ); 

		 // надо сначала получить в px:
		 
		 var cv = window.getComputedStyle(
			  tuner
			  
		 ).marginLeft;					 
		 
		 start_off__px = Number.parseInt(cv);//*/
		 
		 
		 // а здесь надо получить в %:
		 
		 var _cv = tuner.style.marginLeft;
		 
		 _cv = _cv ? Number.parseInt(_cv) : 0;
		 
		 start_off__perc = _cv;		// obsolete
		 slider.swipe.start_margin = _cv;
		 slider.swipe.now = true;

		 tuner.style.transition = '0s';					 
	};
	
	var swipe_end = function (){				
		 
		 //сумм отступ для левого края левого слайда:
		 var swipe_offset = slider.swipe.onstart_x - 
			(((event.changedTouches||[])[0])||event)
		 .screenX;
		 
		 console.log(event.screenX);
		 console.log('off: '+ swipe_offset);
		 
		 if (swipped && tuner){
		 
		 
			tuner.style.transition = '1s'; //none?
		 
			if (Math.abs(swipe_offset) > 50){
					
					
					//var sgn = Math.sign(swipe_offset);
					//if (!sgn) return;//*/
					
					if (swipe_offset > 0) next_slide();
					else {
						 
						 back_slide();
					}
					
					
					/*
					tuner.style.marginLeft = 
						 (start_off__perc - sgn*100)+'%';
						 
					// + добавляем новую картинку*/
			  }
			  

			 
		 }
		 
		 swipped = false;
		 tuner = null;
		 
		 slider.swipe.onstart_x = 0;		
		 slider.swipe.start_margin = false;
		 slider.swipe.now = false;					 
	
	};
	
	var swipe_move = function(){
		 
		if (!swipped || !tuner) return;		

		 var e_screenX = 
			(((event.changedTouches||[])[0])||event)
		 .screenX;

		var onstart_x = slider.swipe.onstart_x;

		var delta = onstart_x - e_screenX;


		cv = (start_off__px - delta) + 'px';
		
		tuner.style.marginLeft = cv;					
	};				
	

	slide_leaf.addEventListener(
		  'touchstart', swipe_start
	);
	
	slide_leaf.addEventListener(
		  'touchend', swipe_end
	);
	
	slide_leaf.addEventListener(
		  'touchmove', swipe_move
	);				

	
	slide_leaf.onmousedown = swipe_start;
	slide_leaf.onmouseup  = swipe_end;
	slide_leaf.onmousemove = swipe_move;
		

	
	return true;				
}


/*!

	  \vector:
		  1 || void 0 - вперед
		  -1 - назад
*/
var move_slide = function(vector){

	vector = vector || 1;

	var current= 
		document.querySelector('.image_container');
	
	slider.arrowAssing_for(current, !!(1+vector));
	

	
	if (slider.swipe.now){
		 
		var margin_value = 
			 slider.swipe.start_margin - (vector)*100;
		
	}
	else{
	
		var margin_offset = current.style.marginLeft;
		
		var addend = 
			 Number.parseInt(margin_offset) || 0;	
	  
		var margin_value = addend - (vector)*100;
	
	}
	

	
	
	
	if (margin_value > 0) {
	
		return false;
	}
	
	current.style.marginLeft = margin_value + '%';
	
	return true;
	
}


function next_slide(){

	if (load_slide_by()){
	
		 move_slide();
		 
		 if (!slider.back)
			  move_enable(
					document.querySelector('.back')
			  );
	}
	else{
	
	}
		
}

function back_slide(btn) {
	 if (!move_slide(-1)){
	 
			var current= 
				document.querySelector(  
					 '.image_container'
				);
		  
		  if (load_slide_by(current)) {
				
				setTimeout(function(){
					 
					 move_slide(-1);						
				}, 10);							
		  }
		  
		  else mover_disable(btn)
		  
	 }
}


function mover_disable(btn){
	
	if (typeof btn == typeof ''){
		 
		btn = document.querySelector('.'+btn);
	}
	
	slider[btn.className] = false;
	btn.style.display = 'none';
}

function move_enable(btn){
	
	if (typeof btn == typeof ''){
		 
		btn = document.querySelector('.'+btn);
	}				
	
	slider[btn.className] = true;
	btn.style.display = 'block';
}			

function slider_close(){
	 
	 var _slider = document.querySelector(
		  '.slide_container'
	 );
	 
	 _slider.style.opacity = '0';
	 
	 setTimeout(function(){
		  
		_slider.style.display = 'none';
		
		
		
		//clean:
		var slides = _slider.querySelectorAll(
			 '.image_container'
		);

		
		var i = slides.length; while(--i >= 0) {
		
			 _slider.removeChild(slides[i]);
		};	
		
	 }, 1000);
}