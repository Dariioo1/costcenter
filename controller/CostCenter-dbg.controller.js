sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("costescenter.controller.CostCenter", {

        onInit: function () {

            var oData = {
                nodes: [
                    {
                        name: "DATO 1",
                        budget: "1000000",
                        nodes: [
                            {
                                name: "DATO 2",
                                budget: "300000",
                                nodes: [
                                    {
                                        name: "Mini dato",
                                        budget: "100000"
                                    },
                                    {
                                        name: "Mini dato 2",
                                        budget: "200000"
                                    }
                                ]
                            },
                            {
                                name: "DATO 3",
                                budget: "700000",
                                nodes: [
                                    {
                                        name: "Infrastructure",
                                        budget: "400000"
                                    },
                                    {
                                        name: "Development",
                                        budget: "300000"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            var oModel = new JSONModel(oData);

            this.getView().setModel(oModel);

            this.byId("treeTable").bindRows({
                path: "/nodes",
                parameters: {
                    arrayNames: ["nodes"]
                }
            });

        }

    });
});