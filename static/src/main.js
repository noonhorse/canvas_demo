/**
 * 定义函数
 * @param  {[type]} require [description]
 * @param  {[type]} exports [description]
 * @param  {[type]} module  [description]
 * @return {[type]}         [description]
 */
define(function(require,exports,module){

		var $ = require('jquery');
  	var Lottery = require('./Lottery');

  	function canvas(){
  			//获取必要参数，初始化
  			//parentnode, cover, coverType, width, height, drawPercentCallback
  			var lottery = new Lottery($('#contain'), '#CCC', 'color', 300, 100, drawPercent);
    		//内层的 内容
    		lottery.init('http://www.baidu.com/img/bdlogo.gif', 'image');

  	}
  function drawPercent(percent){
  	if(percent >70)
  	{
  		alert('你已经刮开70%的区域')
  	}
  }
  //初始化
  canvas();


});