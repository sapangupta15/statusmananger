var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection']);
app.controller('MainCtrl', ['$scope', '$http', '$log', '$timeout', 'uiGridConstants', function ($scope, $http, $log, $timeout, uiGridConstants) {
  
  $scope.trades = {
	        enableSorting: true,
	        enableRowSelection: true,
	        enableSelectAll: true,
	        showGridFooter:false,
	        rowHeight: 35,
	        columnDefs: [
	          { name:'TradeId', field: 'tradeId', minWidth: 130 },
	          { name:'Company', field: 'company' },
	          { name:'FundId', field: 'fundIdentifier'},
	          { name:'SecurityId', field: 'instrumentId'},
	          { name:'Status', field: 'status'}
	        ],
	        data : [      {
				        	"tradeId": "41205201613421",
				            "company": "FIL",
				    		"fundIdentifier": "GHYD",
				    		"instrumentId": "ACC194000",
				    		"status": "NEW"
	                       },
	                       {
	                           "tradeId": "41205201613422",
	                           "company": "FIL",
	                   		"fundIdentifier": "MBINC",
	                   		"instrumentId": "ACC194123",
	                   		"status": "NEW"
	                       },
	                       {
	                           "tradeId": "41205201613423",
	                           "company": "FIL",
	                   		"fundIdentifier": "MBIND",
	                   		"instrumentId": "ACC194124",
	                   		"status": "NEW"
	                       },
	                   	{
	                           "tradeId": "41205201613424",
	                           "company": "FMR",
	                   		"fundIdentifier": "MBIND",
	                   		"instrumentId": "ACC194124",
	                   		"status": "NEW"
	                       },
	                   	{
	                           "tradeId": "41205201613425",
	                           "company": "FMR",
	                   		"fundIdentifier": "MBIND",
	                   		"instrumentId": "ACC194124",
	                   		"status": "NEW"
	                       },
	                   	{
	                           "tradeId": "41205201613426",
	                           "company": "FIL",
	                   		"fundIdentifier": "MBIND",
	                   		"instrumentId": "ACC194124",
	                   		"status": "NEW"
	                       },
	                   	{
	                           "tradeId": "41205201613427",
	                           "company": "FIL",
	                   		"fundIdentifier": "MBIND",
	                   		"instrumentId": "ACC194124",
	                   		"status": "NEW"
	                       } 
	                   ]
  }

$scope.send = function() {
      var selectedTrades = $scope.gridApi.selection.getSelectedRows();
	  for(i=0;i<selectedTrades.length;i++) {
	    var trade = selectedTrades[i];
	    console.log(trade["tradeId"]);
		trade["status"] = 'Booked';
		createTradeStatusContract(trade);
	//	$scope.trades.data.splice($scope.gridApi.grid.renderContainers.body.visibleRowCache.indexOf(trade), 1);
	  };
    };
 $scope.trades.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      
      
    };
}]);

