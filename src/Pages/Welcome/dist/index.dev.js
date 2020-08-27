"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Welcome;var _react=_interopRequireDefault(require("react"));var _Components=require("../../Components");var _styles=require("./styles");var _shoppingCart=_interopRequireDefault(require("../../Assets/images/shoppingCart.png"));var _reactNative=require("react-native");var _jsxFileName="/home/matheus/Projects/SmartMarket/src/Pages/Welcome/index.js";function Welcome(_ref){var navigation=_ref.navigation;return _react["default"].createElement(_Components.Container,{__self:this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:9}},_react["default"].createElement(_Components.ContentContainer,{__self:this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:13}},_react["default"].createElement(_Components.PageTitle,{text:"Chega de enfrentar filas no supermercado!",__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:17}}),_react["default"].createElement(_styles.Media,{source:_shoppingCart["default"],__self:this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:17}}),_react["default"].createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:17}},_react["default"].createElement(_Components.Button,{title:"Acessar o aplicativo",onButtonPress:function onButtonPress(){navigation.navigate('MainTabNavigator');},__self:this,__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:21}}),_react["default"].createElement(_Components.Button,{outline:true,title:"Desejo me cadastrar agora",onButtonPress:function onButtonPress(){navigation.navigate('Name');},__self:this,__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:21}}))));}