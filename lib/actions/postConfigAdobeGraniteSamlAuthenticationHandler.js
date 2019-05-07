/**
 * Auto-generated action file for "Adobe Experience Manager (AEM)" API.
 *
 * Generated at: 2019-05-07T14:34:46.014Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / adobe-com-aem-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postConfigAdobeGraniteSamlAuthenticationHandler'
 * Endpoint Path: '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "keyStorePassword",
    "keyStorePassword@TypeHint",
    "service.ranking",
    "service.ranking@TypeHint",
    "idpHttpRedirect",
    "idpHttpRedirect@TypeHint",
    "createUser",
    "createUser@TypeHint",
    "defaultRedirectUrl",
    "defaultRedirectUrl@TypeHint",
    "userIDAttribute",
    "userIDAttribute@TypeHint",
    "defaultGroups",
    "defaultGroups@TypeHint",
    "idpCertAlias",
    "idpCertAlias@TypeHint",
    "addGroupMemberships",
    "addGroupMemberships@TypeHint",
    "path",
    "path@TypeHint",
    "synchronizeAttributes",
    "synchronizeAttributes@TypeHint",
    "clockTolerance",
    "clockTolerance@TypeHint",
    "groupMembershipAttribute",
    "groupMembershipAttribute@TypeHint",
    "idpUrl",
    "idpUrl@TypeHint",
    "logoutUrl",
    "logoutUrl@TypeHint",
    "serviceProviderEntityId",
    "serviceProviderEntityId@TypeHint",
    "assertionConsumerServiceURL",
    "assertionConsumerServiceURL@TypeHint",
    "handleLogout",
    "handleLogout@TypeHint",
    "spPrivateKeyAlias",
    "spPrivateKeyAlias@TypeHint",
    "useEncryption",
    "useEncryption@TypeHint",
    "nameIdFormat",
    "nameIdFormat@TypeHint",
    "digestMethod",
    "digestMethod@TypeHint",
    "signatureMethod",
    "signatureMethod@TypeHint",
    "userIntermediatePath",
    "userIntermediatePath@TypeHint"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "keyStorePassword": "keyStorePassword",
    "keyStorePassword_TypeHint": "keyStorePassword@TypeHint",
    "service_ranking": "service.ranking",
    "service_ranking_TypeHint": "service.ranking@TypeHint",
    "idpHttpRedirect": "idpHttpRedirect",
    "idpHttpRedirect_TypeHint": "idpHttpRedirect@TypeHint",
    "createUser": "createUser",
    "createUser_TypeHint": "createUser@TypeHint",
    "defaultRedirectUrl": "defaultRedirectUrl",
    "defaultRedirectUrl_TypeHint": "defaultRedirectUrl@TypeHint",
    "userIDAttribute": "userIDAttribute",
    "userIDAttribute_TypeHint": "userIDAttribute@TypeHint",
    "defaultGroups": "defaultGroups",
    "defaultGroups_TypeHint": "defaultGroups@TypeHint",
    "idpCertAlias": "idpCertAlias",
    "idpCertAlias_TypeHint": "idpCertAlias@TypeHint",
    "addGroupMemberships": "addGroupMemberships",
    "addGroupMemberships_TypeHint": "addGroupMemberships@TypeHint",
    "path": "path",
    "path_TypeHint": "path@TypeHint",
    "synchronizeAttributes": "synchronizeAttributes",
    "synchronizeAttributes_TypeHint": "synchronizeAttributes@TypeHint",
    "clockTolerance": "clockTolerance",
    "clockTolerance_TypeHint": "clockTolerance@TypeHint",
    "groupMembershipAttribute": "groupMembershipAttribute",
    "groupMembershipAttribute_TypeHint": "groupMembershipAttribute@TypeHint",
    "idpUrl": "idpUrl",
    "idpUrl_TypeHint": "idpUrl@TypeHint",
    "logoutUrl": "logoutUrl",
    "logoutUrl_TypeHint": "logoutUrl@TypeHint",
    "serviceProviderEntityId": "serviceProviderEntityId",
    "serviceProviderEntityId_TypeHint": "serviceProviderEntityId@TypeHint",
    "assertionConsumerServiceURL": "assertionConsumerServiceURL",
    "assertionConsumerServiceURL_TypeHint": "assertionConsumerServiceURL@TypeHint",
    "handleLogout": "handleLogout",
    "handleLogout_TypeHint": "handleLogout@TypeHint",
    "spPrivateKeyAlias": "spPrivateKeyAlias",
    "spPrivateKeyAlias_TypeHint": "spPrivateKeyAlias@TypeHint",
    "useEncryption": "useEncryption",
    "useEncryption_TypeHint": "useEncryption@TypeHint",
    "nameIdFormat": "nameIdFormat",
    "nameIdFormat_TypeHint": "nameIdFormat@TypeHint",
    "digestMethod": "digestMethod",
    "digestMethod_TypeHint": "digestMethod@TypeHint",
    "signatureMethod": "signatureMethod",
    "signatureMethod_TypeHint": "signatureMethod@TypeHint",
    "userIntermediatePath": "userIntermediatePath",
    "userIntermediatePath_TypeHint": "userIntermediatePath@TypeHint"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['aemAuth'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: 'postConfigAdobeGraniteSamlAuthenticationHandler',
        pathName: '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}