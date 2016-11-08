var express = require ('express');
var MongoClient = require ('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();
var db = null;

MongoClient.connect("mongodb://127.0.0.1:27017/per",function(err,dbconn)
{
	if(!err)
	{
		console.log("we are connected");
		db=dbconn;
	}
	console.log(err);
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/perd', function(req,res,next)
{

	console.log(req.body.newData);

	
	db.collection('perd',function(err,percollection)
	{
		var newData=
		{
			// request from client
			requester :req.body.newData.requester,
			summary:req .body.newData.summary,
			bview: req.body.newData.businessView,
			divisions: req.body.newData.divisions,
			caseNum: req.body.newData.caseNum,
			reqCompDate: req.body.newData.reqCompDate,
			detailedDesc: req.body.newData.detailedDesc,
			outFilePref: req.body.newData.outFilePref,
			formatPattern: req.body.newData.formatPattern,
			inboundFileReq: req.body.newData.inboundFileReq,
			// map change details 
		    mapName: req.body.newData.mapName,
			testFileTP: req.files.newData.testFileTP,
			testFileClient: req.files.newData.testFileClient,
			detailsOnCodelist: req.body.newData.detailsOnCodelist,
			// new map details 
			transactionStandard: req.body.newData.transactionStandard,
			appLayout: req.body.newData.appLayout,
			existingAppLayout: req.body.newData.existingAppLayout,
			existingMap: req.body.newData.existingMap,
			testFileTPIN: req.files.newData.testFileTPIN,
			testFileTPOUT: req.files.newData.testFileTPOUT,
			specsGuidelines: req.body.newData.specsGuidelines,
			detailsOnCodelist2: req.body.newData.detailsOnCodelist2,
			// tp details
			TPcompanyName: req.body.newData.TPcompanyName,
			TPaddress: req.body.newData.TPaddress,
			TPcontactName: req.body.newData.TPcontactName,
			TPcontactPhone: req.body.newData.TPcontactPhone,
			TPcontactEmail: req.body.newData.TPcontactEmail,
			supplierNum: req.body.newData.supplierNum,
			tplookup: req.body.newData.tplookup,
			tptestsendrecid: req.body.newData.tptestsendrecid,
			tpprodsendrecid: req.body.newData.tpprodsendrecid,
			clienttestsendrecid: req.body.newData.clienttestsendrecid,
			clientprodsendrecid: req.body.newData.clientprodsendrecid,
		    commmethod: req.body.newData.commmethod,
			whichdir: req.body.newData.whichdir,
			whentestingstart: req.body.newData.whentestingstart,
			// data flow communication details
			newDataFlow: req.body.newData.newDataFlow,
			changeExistingDataFlow: req.body.newData.changeExistingDataFlow,
			newCommFlow: req.body.newData.newCommFlow,
			changeTypeOfComm: req.body.newData.changeTypeOfComm,
			dataFlowRequest: req.body.newData.dataFlowRequest,

			// archive data retrival details 
			TPidentifier: req.body.newData.TPidentifier,
			dataReqDate: req.body.newData.dataReqDate,
			dataInfo: req.body.newData.dataInfo,
			mediaOptions: req.body.newData.mediaOptions,
			deliveryLocation: req.body.newData.deliveryLocation,
			//Additional Information or Other type of work request
			notes1: req.body.newData.notes1,
			volumeEstimates: req.body.newData.volumeEstimates,
			// Deliverables/Estimates from IBM
			completedBy: req.body.newData.completedBy,
			charOfProjDeliverables: req.body.newData.charOfProjDeliverables,
			totalEstimate: req.body.newData.totalEstimate,
			notes2: req.body.newData.notes2,
			// Sign off
			custApprover: req.body.newData.custApprover,
			CustSign: req.files.newData.CUSTSIGN,
			IBMApprover: req.body.newData.IBMApprover,
			IBMSIGN: req.files.newData.IBMSIGN,
		};

	percollection.insert(newData,{w:1},function(err,perd)
	{
		return res.send();
	});
});

res.send();
});

app.listen(3000, function()
{
	console.log('Example app listening on port 3000!'); 
});

