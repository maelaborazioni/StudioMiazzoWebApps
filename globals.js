
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"14A54AC7-F39D-4738-B864-D64C6805C96E"}
 */
function ma_StudioMiazzoWebApps_onSolutionOpen(arg, queryParams) 
{
	application.putClientProperty(APP_UI_PROPERTY.TABLEVIEW_WC_USE_KEY_NAVIGATION, true);
	application.putClientProperty(APP_WEB_PROPERTY.WEBCLIENT_TEMPLATES_DIR, 'red');
	
	if(!queryParams)
		queryParams = { };
	
	queryParams.mainform = 'svy_nav_fr_main';
	
	return ma_sec_onSolutionOpen(arg, queryParams);

}
