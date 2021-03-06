(function() {  
	//console.log('loading bb_system_yui.js is beginning');
	var testing = blackberryNew.YUItests;
	
	testing.setupFramework(generateTestCaseCallback);
	
	//We're passing in the Y parameter and expecting back an array of test cases
	function generateTestCaseCallback(Y){
		var testCases = new Array();
		var Assert = Y.Assert;
		
		testCases["suiteName"] = "blackberry.system Tests";
		
		//---------------------------------------------------------------------
		// Test methods - names must begin with "test"
		// or to contain the word "should" when a "friendly name" is used
		//---------------------------------------------------------------------
		
		//---------------------------------------------------------------------
		// blackberry.system namespace test
		//---------------------------------------------------------------------
		
		testCases[0] = new Y.Test.Case({
			name: "blackberry.system namespace test",
			
			setUp : function () {
				//Setup code goes here
			},
		 
			tearDown : function () {
				//Teardown code goes here
			},
			
			"blackberry.system namespace should exist" : function() {
				Assert.isNotUndefined(blackberry.system);
			},                 
		});
		
		//---------------------------------------------------------------------
		// blackberry.system tests
		//---------------------------------------------------------------------
		
		testCases[1] = new Y.Test.Case({
			name: "blackberry.system tests",
		
			setUp : function () {
				//Setup code goes here
			},
		 
			tearDown : function () {
				//Teardown code goes here
			},
			
			"blackberry.system.ALLOW should exist and return 0" : function() {
				Assert.areEqual(blackberry.system.ALLOW, 0);
			},
			
			"blackberry.system.DENY should exist and return 1" : function() {
				Assert.areEqual(blackberry.system.DENY, 1);
			},
			
			"blackberry.system.PROMPT should exist and return 2" : function() {
				Assert.areEqual(blackberry.system.PROMPT, 2);
			},
			
			"blackberry.system.hasCapability() should return a boolean" : function() {
				Assert.isNotUndefined(blackberry.system.hasCapability);
				Assert.isBoolean(blackberry.system.hasCapability("location.gps"));						
			},
			
			"blackberry.system.hasDataCoverage () should return a boolean" : function() {
				Assert.isNotUndefined(blackberry.system.hasDataCoverage );
				Assert.isBoolean(blackberry.system.hasDataCoverage ());						
			},
			
			"blackberry.system.hasPermission() should return ALLOW" : function() {
				Assert.isNotUndefined(blackberry.system);
				Assert.areEqual(blackberry.system.hasPermission("blackberry.system"), blackberry.system.ALLOW);						
			},
			
			"blackberry.system.isMassStorageActive () should return a boolean" : function() {
				Assert.isNotUndefined(blackberry.system.isMassStorageActive);
				Assert.isBoolean(blackberry.system.isMassStorageActive());
			},
			
			"blackberry.system.setHomeScreenBackground () should exist" : function() {
				Assert.isNotUndefined(blackberry.system.setHomeScreenBackground);
			},
			
			"blackberry.system.model should exist and be readonly" : function() {
				Assert.isNotUndefined(blackberry.system.model);
				var orig = blackberry.system.model;
				blackberry.system.model = "abcdefghijabcdefghijabcdefghij";
				Assert.areEqual(orig, blackberry.system.model);
			},
			
			"blackberry.system.scriptApiVersion should exist and be readonly" : function() {
				Assert.isNotUndefined(blackberry.system.scriptApiVersion);
				var orig = blackberry.system.scriptApiVersion;
				blackberry.system.scriptApiVersion = "abcdefghijabcdefghijabcdefghij";
				Assert.areEqual(orig, blackberry.system.scriptApiVersion);
			},
			
			"blackberry.system.softwareVersion should exist and be readonly" : function() {
				Assert.isNotUndefined(blackberry.system.softwareVersion);
				var orig = blackberry.system.softwareVersion;
				blackberry.system.softwareVersion = "abcdefghijabcdefghijabcdefghij";
				Assert.areEqual(orig, blackberry.system.softwareVersion);
			},					
		});
			
		//---------------------------------------------------------------------
		// blackberry.system.event tests
		//---------------------------------------------------------------------
			
		testCases[2] = new Y.Test.Case({
			name: "blackberry.system.event tests",
			
			setUp : function () {
				//Setup code goes here
			},
		 
			tearDown : function () {
				//Teardown code goes here
			},
			
			"blackberry.system.event.KEY_BACK should exist and return 0" : function() {
				Assert.areEqual(blackberry.system.event.KEY_BACK, 0);
			},
			
			"blackberry.system.event.KEY_MENU should exist and return 1" : function() {
				Assert.areEqual(blackberry.system.event.KEY_MENU, 1);
			},
			
			"blackberry.system.event.KEY_CONVENIENCE_1 should exist and return 2" : function() {
				Assert.areEqual(blackberry.system.event.KEY_CONVENIENCE_1, 2);
			},
			
			"blackberry.system.event.KEY_CONVENIENCE_2 should exist and return 3" : function() {
				Assert.areEqual(blackberry.system.event.KEY_CONVENIENCE_2, 3);
			},
			
			"blackberry.system.event.KEY_STARTCALL should exist and return 4" : function() {
				Assert.areEqual(blackberry.system.event.KEY_STARTCALL, 4);
			},
			
			"blackberry.system.event.KEY_ENDCALL should exist and return 5" : function() {
				Assert.areEqual(blackberry.system.event.KEY_ENDCALL, 5);
			},
			
			"blackberry.system.event.KEY_VOLUMEDOWN should exist and return 8" : function() {
				Assert.areEqual(blackberry.system.event.KEY_VOLUMEDOWN, 6);
			},
			
			"blackberry.system.event.KEY_VOLUMEUP should exist and return 7" : function() {
				Assert.areEqual(blackberry.system.event.KEY_VOLUMEUP, 7);
			},
			
			"blackberry.system.event.onCoverageChange () should exist" : function() {
				Assert.isNotUndefined(blackberry.system.event.onCoverageChange );
				blackberry.system.event.onCoverageChange (function(){ /*dummy callback function*/ });
			},
			
			"blackberry.system.event.onHardwareKey() should exist" : function() {
				Assert.isNotUndefined(blackberry.system.event.onHardwareKey);
				blackberry.system.event.onHardwareKey(blackberry.system.event.KEY_BACK, function(){ /*dummy callback function*/ });
			},													
		});     
		
		return testCases;
	}
	//console.log('loading bb_system_yui.js is done');
})();