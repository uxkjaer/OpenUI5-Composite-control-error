sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {

	"use strict";
	return UIComponent.extend("sap.ui.core.sample.XMLComposite.02.Component", {
		metadata: "json",
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});