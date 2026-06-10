sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("costescenter.controller.CostCenter", {

        onInit: function () {

         var oData = {
    nodes: [
        {
            name: "AGFB: AGFB",
            budget: "1000000",
            nodes: [
                { name: "Centro Beneficio AGFB 1", budget: "250000" },
                { name: "Centro Beneficio AGFB 2", budget: "350000" }
            ]
        },
        {
            name: "GIDITEK: GIDITEK",
            budget: "850000",
            nodes: [
                { name: "Centro Beneficio GIDITEK 1", budget: "400000" },
                { name: "Centro Beneficio GIDITEK 2", budget: "200000" }
            ]
        },
      {
    name: "GRFA: GRUPO FACSA",
    nodes: [
        {
            name: "ABA: 1000 [ABA] ABASTECIMIENTOS",
            nodes: [
                {
                    name: "ABAEX: 1000 [ABAEX] EXPLOTACIONES ABASTECIMIENTOS",
                    nodes: [
                        {
                            name: "ABAEXAR: 1000 [ABAEXAR] ARAGÓN",
                            nodes: [
    {
        name: "ABAEX22: 1000 [ABAEX22] HUESCA",
        nodes: [
            {
                name: "ABAEX22JAC: 1000 [ABAEX22JAC] ETAP Y SUM. ALTA JACA",
                nodes: [
                    {
                        name: "ABAEX22001: 1000 [ABAEX22001] JACA"
                    }
                ]
            }
        ]
    },
    {
        name: "ABAEX44: 1000 [ABAEX44] TERUEL",
    }
]
                        }
                    ]
                }
            ]
        }
    ]
},
        {
            name: "MA: MA",
            budget: "500000",
            nodes: [
                { name: "Centro Beneficio MA 1", budget: "150000" },
                { name: "Centro Beneficio MA 2", budget: "200000" }
            ]
        },
        {
            name: "OBREMO: OBREMO",
            budget: "1200000",
            nodes: [
                { name: "Centro Beneficio OBREMO 1", budget: "500000" },
                { name: "Centro Beneficio OBREMO 2", budget: "450000" }
            ]
        },
        {
            name: "FS: FACILITY SERVICES",
            budget: "650000",
            nodes: [
                { name: "Centro Beneficio FACILITY SERVICE 1", budget: "200000" },
                { name: "Centro Beneficio FACILITY SERVICE 2", budget: "250000" }
            ]
        },
        {
            name: "INTUR: INTUR",
            budget: "700000",
            nodes: [
                { name: "Centro Beneficio INTUR 1", budget: "300000" },
                { name: "Centro Beneficio INTUR 2", budget: "250000" }
            ]
        },
        {
            name: "GC: GIMENO CONSTRUCCIÓN",
            budget: "900000",
            nodes: [
                { name: "Centro Beneficio GIMENO CONSTRUCCIÓN 1", budget: "350000" },
                { name: "Centro Beneficio GIMENO CONSTRUCCIÓN 2", budget: "400000" }
            ]
        },
        {
            name: "GSP-GEN: Gimeno Logística Portuaria",
            budget: "750000",
            nodes: [
                { name: "Centro Beneficio Gimeno Logística Portuaria 1", budget: "250000" },
                { name: "Centro Beneficio Gimeno Logística Portuaria 2", budget: "300000" }
            ]
        },
        {
            name: "GSC: Gimeno Servicios Compartidos",
            budget: "800000",
            nodes: [
                { name: "Centro Beneficio Gimeno Servicios Compartidos 1", budget: "250000" },
                { name: "Centro Beneficio Gimeno Servicios Compartidos 2", budget: "300000" }
            ]
        },
        {
            name: "CORPORATE: NEALIS GRUPO",
            budget: "1500000",
            nodes: [
                {
                    name: "Finance",
                    budget: "500000",
                    nodes: [
                        { name: "Centro Beneficio CORPORATE: NEALIS GRUPO 1", budget: "200000" },
                        { name: "Centro Beneficio CORPORATE: NEALIS GRUPO 2", budget: "150000" }
                    ]
                },
                {
                    name: "IT",
                    budget: "600000",
                    nodes: [
                        { name: "Centro Beneficio IT 1", budget: "250000" },
                        { name: "Centro Beneficio IT 2", budget: "300000" }
                    ]
                }
            ]
        },
        {
            name: "PORTSUR: PORTSUR",
            budget: "1100000",
            nodes: [
                { name: "Centro Beneficio PORTSUR 1", budget: "500000" },
                { name: "Centro Beneficio PORTSUR 2", budget: "300000" }
            ]
        }
    ]
};
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            this._updateCounter();
        },

        _updateCounter: function () {
            var iCount = this.getView().getModel().getProperty("/nodes").length;
            this.byId("titleCount").setText("Centro Beneficios (" + iCount + ")");
        },

 onFilterName: function (oEvent) {

    var sValue = oEvent.getParameter("newValue");
    var oTable = this.byId("treeTable");
    var oBinding = oTable.getBinding("rows");

    if (sValue) {

        oBinding.filter([
            new Filter("name", FilterOperator.Contains, sValue)
        ]);

        // Despliega todo el árbol
        oTable.expandToLevel(99);

    } else {

        oBinding.filter([]);

        // Vuelve a colapsar
        oTable.collapseAll();
    }
},

        onFilterBudget: function (oEvent) {

            var sValue = oEvent.getParameter("newValue");

            var oBinding = this.byId("treeTable").getBinding("rows");

            if (sValue) {
                oBinding.filter([
                    new Filter("budget", FilterOperator.Contains, sValue)
                ]);
            } else {
                oBinding.filter([]);
            }
        }

    });
});