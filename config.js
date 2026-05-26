var apiList = ["https://testnet.karbo.org:2053, https://testnet.karbo.org:2083"];
var api = "https://testnet.karbo.org:2053";

var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'KRB';
var refreshDelay = 30000;
var blocksPerPage = 20;
var recentConfirmedTxBlockRange = 1000;
var avgHashrateBaselineHeight = 700000;
var avgHashrateBaselineCumulativeDifficulty = "5917824089773719";
var addressPattern = new RegExp("^K[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$");
var accountNumberPattern = new RegExp("^\\d+-\\d+-[0-9A-Za-z]$");
