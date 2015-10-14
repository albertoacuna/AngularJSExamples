function baseGridController($http){
    this.$http = $http;
}

baseGridController.prototype.toggleToolPanel = function(){
    var isToolPanelShown = this.gridOptions.api.isToolPanelShowing();
    this.gridOptions.api.showToolPanel(!isToolPanelShown);
}

baseGridController.prototype.setGrid = function(){
    var scope = this;

    this.showGrid  = true;
    this.gridOptions.api.showLoading(true);

    this.$http.get("http://www.w3schools.com/angular/customers.php")
        .success(function(response){
            scope.gridOptions.rowData = response.records;
            scope.gridOptions.api.setRowData();
    })
}

baseGridController.prototype.resizeColumns = function() {
    this.gridOptions.api.sizeColumnsToFit();
}
