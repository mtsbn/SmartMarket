"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=PhoneConfirmation;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Components=require("../../Components");var _jsxFileName="/home/matheus/Projects/SmartMarket/src/Pages/Register/phoneConfirmation.js";function PhoneConfirmation(_ref){var navigation=_ref.navigation;return _react["default"].createElement(_Components.Container,{__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:9}},_react["default"].createElement(_Components.ContentContainer,{__self:this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:13}},_react["default"].createElement(_Components.BackButton,{onButtonPress:function onButtonPress(){navigation.goBack();},__self:this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:17}}),_react["default"].createElement(_Components.PageTitle,{text:"Confirma\xE7\xE3o do n\xFAmero",__self:this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:17}}),_react["default"].createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:17}},_react["default"].createElement(_Components.InputLabel,{text:"O n\xFAmero est\xE1 correto?",__self:this,__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:21}}),_react["default"].createElement(_Components.InputLabel,{text:"(11) 9 0101-1010",__self:this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:21}})),_react["default"].createElement(_Components.Button,{title:"Confirmar",onButtonPress:function onButtonPress(){navigation.navigate('SmsConfirmation');},__self:this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:17}})));}