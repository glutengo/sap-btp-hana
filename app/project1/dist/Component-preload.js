//@ui5-bundle project1/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"project1/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"}})});
},
	"project1/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"project1/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"project1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.5","toolsId":"e4627c09-0909-4ced-a1cd-99dca4cb923a"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProductsList","target":"ProductsList"},{"pattern":"Products({key}):?query:","name":"ProductsObjectPage","target":"ProductsObjectPage"},{"pattern":"Products({key})/texts({key2}):?query:","name":"Products_textsObjectPage","target":"Products_textsObjectPage"}],"targets":{"ProductsList":{"type":"Component","id":"ProductsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Products","variantManagement":"Page","navigation":{"Products":{"detail":{"route":"ProductsObjectPage"}}}}}},"ProductsObjectPage":{"type":"Component","id":"ProductsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Products","navigation":{"texts":{"detail":{"route":"Products_textsObjectPage"}}}}}},"Products_textsObjectPage":{"type":"Component","id":"Products_textsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Products/texts"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
