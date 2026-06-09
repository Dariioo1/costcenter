/*global QUnit*/

sap.ui.define([
	"costescenter/controller/CostCenter.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CostCenter Controller");

	QUnit.test("I should test the CostCenter controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
