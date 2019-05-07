/**
 * Auto-generated action file for "Adobe Experience Manager (AEM)" API.
 *
 * Generated at: 2019-05-07T08:15:11.031Z
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
 * Operation: 'postSamlConfiguration'
 * Endpoint Path: '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler'
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
    "post",
    "apply",
    "delete",
    "action",
    "$location",
    "path",
    "service.ranking",
    "idpUrl",
    "idpCertAlias",
    "idpHttpRedirect",
    "serviceProviderEntityId",
    "assertionConsumerServiceURL",
    "spPrivateKeyAlias",
    "keyStorePassword",
    "defaultRedirectUrl",
    "userIDAttribute",
    "useEncryption",
    "createUser",
    "addGroupMemberships",
    "groupMembershipAttribute",
    "defaultGroups",
    "nameIdFormat",
    "synchronizeAttributes",
    "handleLogout",
    "logoutUrl",
    "clockTolerance",
    "digestMethod",
    "signatureMethod",
    "userIntermediatePath",
    "propertylist"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "post": "post",
    "apply": "apply",
    "delete": "delete",
    "action": "action",
    "_location": "$location",
    "path": "path",
    "service_ranking": "service.ranking",
    "idpUrl": "idpUrl",
    "idpCertAlias": "idpCertAlias",
    "idpHttpRedirect": "idpHttpRedirect",
    "serviceProviderEntityId": "serviceProviderEntityId",
    "assertionConsumerServiceURL": "assertionConsumerServiceURL",
    "spPrivateKeyAlias": "spPrivateKeyAlias",
    "keyStorePassword": "keyStorePassword",
    "defaultRedirectUrl": "defaultRedirectUrl",
    "userIDAttribute": "userIDAttribute",
    "useEncryption": "useEncryption",
    "createUser": "createUser",
    "addGroupMemberships": "addGroupMemberships",
    "groupMembershipAttribute": "groupMembershipAttribute",
    "defaultGroups": "defaultGroups",
    "nameIdFormat": "nameIdFormat",
    "synchronizeAttributes": "synchronizeAttributes",
    "handleLogout": "handleLogout",
    "logoutUrl": "logoutUrl",
    "clockTolerance": "clockTolerance",
    "digestMethod": "digestMethod",
    "signatureMethod": "signatureMethod",
    "userIntermediatePath": "userIntermediatePath",
    "propertylist": "propertylist"
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
        operationId: 'postSamlConfiguration',
        pathName: '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler',
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