contract TradeStatus {

    struct Trade {
        uint tradeId;
        string tradeStatus;
		string tradeDate;
		string tradeDesk;
		string fundShortName;
		string instrumentId;
    }
    event Received(uint tradeId, address recipient);
    event StatusUpdated(uint tradeId, address recipient, string status);
    Trade trade;
    
    function TradeStatus(uint tradeId,string tradeStatus,string tradeDate,string tradeDesk,string fundShortName,string instrumentId) {
        trade.tradeId = tradeId;
        trade.tradeStatus = tradeStatus;
		trade.tradeDate = tradeDate;
		trade.tradeDesk = tradeDesk;
		trade.fundShortName = fundShortName;
		trade.instrumentId = instrumentId;
        Received(tradeId,msg.sender);
    }
    
    // Change tradeStatus
    function updateStatus(string status) {
        trade.tradeStatus = status;
        StatusUpdated(trade.tradeId,msg.sender,status);
        
    }
    
    function getTradeStatus() returns(string status){
        return trade.tradeStatus;
    }
	
	function getTradeId() returns(uint tradeId){
        return trade.tradeId;
    }
	function getTradeDate() returns(string tradeDate){
        return trade.tradeDate;
    }
	function getTradingDesk() returns(string tradeDesk){
        return trade.tradeDesk;
    }
	function getInstrumentId() returns(string instrumentId){
        return trade.instrumentId;
    }
	function getFundShortName() returns(string fundShortName){
        return trade.fundShortName;
    }

    
}