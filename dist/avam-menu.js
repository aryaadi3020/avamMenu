var avam;!function(a){var n;!function(a){angular.module("avam-menu",["ngAnimate"])}(n=a.menu||(a.menu={}))}(avam||(avam={}));
angular.module("avam-menu").run(["$templateCache",function(n){n.put("src/avamMenu.template.html",'<div class="avam-menu-panel" \n	ng-class="{\'avam-menu-panel-horizontal\' : !isVertical, \'avam-menu-panel-vertical\' : isVertical}">\n	<ul class="avam-menu" ng-transclude>\n	</ul>\n	<a class="glyphicon avam-layout-btn pull-right" \n		ng-class="{\'avam-layout-btn-horizontal glyphicon-menu-left\' : !isVertical, \'glyphicon-menu-up\' : isVertical}"\n		ng-show="allowMenuToggle"\n		ng-click="toggleMenuOrientation()">\n	</a>\n</div>'),n.put("src/avamMenuGroup.template.html",'<li class="avam-selectable-item avam-group-menu" ng-click="onToggleSubMenu()"\n	ng-class="{\'avam-menu-item-horizontal\' : !isVertical()}">\n	<div class="avam-noselect" >\n		<i class="glyphicon {{icon}} avam-menu-icon"></i>\n		{{label}}\n		<i class="glyphicon glyphicon-menu-left avam-menu-group-indicator"\n			ng-class="{\'glyphicon-menu-down\' : isOpen}"\n			ng-show="isVertical()"\n			></i>\n	</div>\n</li>\n<div ng-show="isOpen" class="avam-sub-menu avam-fade-in-animation" \n	ng-class="{\'avam-drop-down-menu\' :  !isVertical()}">\n	<ul ng-transclude></ul>\n</div>'),n.put("src/avamMenuItem.template.html",'<li class="avam-selectable-item" \n	ng-class="{\'avam-menu-item-horizontal\' : !isVertical()}">\n	<div class="avam-noselect">\n		<i class="glyphicon {{icon}} avam-menu-icon"></i>\n		{{label}}\n	</div>\n	<i class="glyphicon glyphicon-triangle-left avam-menu-active-indicator" \n		ng-if="isActive()"></i>\n</li>')}]);
var avam;!function(e){var t;!function(e){var t=function(){function e(){this.require="^avamMenu",this.scope={label:"@",icon:"@",route:"@"},this.templateUrl="src/avamMenuItem.template.html"}return e.instance=function(){return new e},e.prototype.link=function(e,t,n,a){e.isActive=function(){return t===a.getActiveElement()&&a.isVertical()},e.isVertical=function(){return a.isVertical()||t.parents(".avam-sub-menu").length>0},t.on("click",function(i){e.$apply(function(){a.setActiveElement(t),a.setRoute(n.route)})})},e}();angular.module("avam-menu").directive("avamMenuItem",t.instance)}(t=e.menu||(e.menu={}))}(avam||(avam={}));
var avam;!function(n){var e;!function(n){"use strict";var e=function(){function n(){this.transclude=!0,this.require="^avamMenu",this.scope={label:"@",icon:"@"},this.templateUrl="src/avamMenuGroup.template.html"}return n.instance=function(){return new n},n.prototype.link=function(n,e,t,u){n.isOpen=!1,n.onToggleSubMenu=function(){n.isOpen=!n.isOpen,n.isVertical()||0!=e.parents(".avam-sub-menu").length||(u.setGroupMenuScope(n),n.setSubMenuPosition())},n.isVertical=function(){return u.isVertical()||e.parents(".avam-sub-menu").length>0},n.closeMenu=function(){n.isOpen=!1},n.setSubMenuPosition=function(){var n=e.offset(),t=e.parents(".avam-menu-panel").height();$(".avam-sub-menu").css({left:n.left,top:t})}},n}();angular.module("avam-menu").directive("avamMenuGroup",e.instance)}(e=n.menu||(n.menu={}))}(avam||(avam={}));
var avam;!function(t){var e;!function(t){var e=function(){function t(t,e){var o=this;this.scope=t,this.rootScope=e,t.isVertical=!0,$(document).click(function(e){if(t.allowMenuToggle&&t.groupMenuItemScope&&!t.isVertical){if($(e.target).parent().hasClass("avam-group-menu"))return;t.$apply(function(){t.groupMenuItemScope.closeMenu(),e.preventDefault(),e.stopPropagation()})}}),t.toggleMenuOrientation=function(){t.isVertical=!t.isVertical,o.rootScope.$broadcast("AVAM-MENU-ORIENTATION-CHANGED",{isVertical:t.isVertical})}}return t.prototype.setActiveElement=function(t){this.activeElement=t},t.prototype.getActiveElement=function(){return this.activeElement},t.prototype.setRoute=function(t){this.rootScope.$broadcast("AVAM-MENU-ITEM-CHANGED",{route:t})},t.prototype.isVertical=function(){return this.scope.isVertical},t.prototype.setGroupMenuScope=function(t){this.scope.groupMenuItemScope=t},t.$inject=["$scope","$rootScope"],t}(),o=function(){function t(){this.transclude=!0,this.scope={allowToggle:"@",orientation:"@"},this.controller=e,this.templateUrl="src/avamMenu.template.html"}return t.instance=function(){return new t},t.prototype.link=function(t,e,o){t.allowMenuToggle=o.allowToggle&&"true"===o.allowToggle,t.isVertical=o.orientation&&"vertical"===o.orientation},t}();angular.module("avam-menu").directive("avamMenu",o.instance)}(e=t.menu||(t.menu={}))}(avam||(avam={}));