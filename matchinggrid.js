var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection']);
app.controller('MainCtrl', ['$scope', '$http', '$log', '$timeout', 'uiGridConstants', function ($scope, $http, $log, $timeout, uiGridConstants) {
  $scope.trades = {
    enableRowSelection: true,
    enableSelectAll: true,
    selectionRowHeaderWidth: 35,
    rowHeight: 35,
    showGridFooter:true
  };
 
  $scope.trades.data = [];

$scope.addTrade = function(tradeStatusContract) {
    var n = $scope.trades.data.length + 1;
	var tradeDate = tradeStatusContract.getTradeDate.call();
	var tradeId = JSON.stringify(tradeStatusContract.getTradeId.call());
	var status = JSON.stringify(tradeStatusContract.getTradeStatus.call());
	$scope.$apply(function() {
    $scope.trades.data.push({
        "FIL TradeId": tradeId.replace(/['"]+/g, ''),
        "Trade Creation Date": tradeDate,
        "Trading Desk": tradeStatusContract.getTradingDesk.call(),
		"Fund Short Name": tradeStatusContract.getFundShortName.call(),
		"Instrument Id": tradeStatusContract.getInstrumentId.call(), 
		"Status": status.replace(/['"]+/g, '')
     });
    });};

$scope.updateTrade = function(result) {
    console.log("trade id ---update trade" + result.args.tradeId);
	
    $scope.trades.data.forEach(function(currentTrade) {
	 console.log("update trade " + currentTrade["FIL TradeId"]);
	 $scope.$apply(function() {
	 if(JSON.stringify(currentTrade["FIL TradeId"]) == JSON.stringify(result.args.tradeId)) {
	    console.log("update trade " + currentTrade["FIL TradeId"]);
		var status = JSON.stringify(result.args.status);
	    currentTrade["Status"] = status.replace(/['"]+/g, '');
	 }
	 });
	 });
};

$scope.send = function(status) {
      var selectedTrades = $scope.gridApi.selection.getSelectedRows();
	  for(i=0;i<selectedTrades.length;i++) {
	    var trade = selectedTrades[i];
	    console.log(trade["FIL TradeId"]);
		trade["Status"] = status;
		updateTradeStatusContract(trade,status);
		$scope.trades.data.splice($scope.gridApi.grid.renderContainers.body.visibleRowCache.indexOf(trade), 1);
	  };
    };	
 $scope.trades.onRegisterApi = function(gridApi){
      //set gridApi on scope
      $scope.gridApi = gridApi;
      
      
    };
}]);

