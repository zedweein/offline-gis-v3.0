/**
 * 离线地图Map配置文件
 */
var confmap = {
	format : 'jpg',//瓦片格式-jpg / png等
	satellite : 'http://127.0.0.1:8080/offlinegis/offline-tiles/satellite',//默认底图-卫星图
	roadmap : 'http://127.0.0.1:8080/offlinegis/offline-tiles/roadmap',//默认底图-路网图
	copyright:false//是否显示版权信息
};

var scripts = document.getElementsByTagName("script");
var JS__FILE__ = scripts[scripts.length - 1].getAttribute("src"); // 获得当前js文件路径
confmap.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/") + 1); // 地图API主目录

(function() {
	window.BMap_loadScriptTime = (new Date).getTime();
	if(!confmap.copyright){
		document.write('<link rel="stylesheet" href="' + confmap.home + 'styles/copyright.css" type="text/css" />');
	}
	document.write('<script type="text/javascript" src="' + confmap.home + 'offline.bmap.js"></script>');
})();
