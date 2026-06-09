/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["costescenter/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
