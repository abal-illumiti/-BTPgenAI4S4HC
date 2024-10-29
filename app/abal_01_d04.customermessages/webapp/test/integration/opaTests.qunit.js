sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'abal01d04/customermessages/test/integration/FirstJourney',
		'abal01d04/customermessages/test/integration/pages/CustomerMessagesList',
		'abal01d04/customermessages/test/integration/pages/CustomerMessagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessagesList, CustomerMessagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('abal01d04/customermessages') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessagesList: CustomerMessagesList,
					onTheCustomerMessagesObjectPage: CustomerMessagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);