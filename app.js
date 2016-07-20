var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection']);
app.controller('MainCtrl', ['$scope', '$http', '$log', '$timeout', 'uiGridConstants', function ($scope, $http, $log, $timeout, uiGridConstants) {
  $scope.trades = {
    enableRowSelection: true,
    enableSelectAll: true,
    selectionRowHeaderWidth: 35,
    rowHeight: 35,
    showGridFooter:true
  };
 
  $scope.trades.data = [
    {
        "FIL TradeId": "41205201613421",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "GHYD",
		"Instrument Id": "ACC194000",
		"Status": "NEW"
    },
    {
        "FIL TradeId": "41205201613422",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "MBINC",
		"Instrument Id": "ACC194123",
		"Status": "NEW"
    },
    {
        "FIL TradeId": "41205201613423",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "MBIND",
		"Instrument Id": "ACC194124",
		"Status": "NEW"
    },
	{
        "FIL TradeId": "41205201613424",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "MBIND",
		"Instrument Id": "ACC194124",
		"Status": "NEW"
    },
	{
        "FIL TradeId": "41205201613425",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "MBIND",
		"Instrument Id": "ACC194124",
		"Status": "NEW"
    },
	{
        "FIL TradeId": "41205201613426",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "MBIND",
		"Instrument Id": "ACC194124",
		"Status": "NEW"
    },
	{
        "FIL TradeId": "41205201613427",
        "Trade Creation Date": "10/06/2016 06:39:00 BST",
        "Trading Desk": "LONDON BOND TRADERS",
		"Fund Short Name": "MBIND",
		"Instrument Id": "ACC194124",
		"Status": "NEW"
    }
];

$scope.send = function() {
      var selectedTrades = $scope.gridApi.selection.getSelectedRows();
	  for(i=0;i<selectedTrades.length;i++) {
	    var trade = selectedTrades[i];
	    console.log(trade["FIL TradeId"]);
		trade["Status"] = 'Booked';
		createTradeStatusContract(trade);
	//	$scope.trades.data.splice($scope.gridApi.grid.renderContainers.body.visibleRowCache.indexOf(trade), 1);
	  };
    };
 $scope.trades.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      
      
    };
}]);

