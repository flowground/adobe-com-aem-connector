/**
 * Auto-generated action file for "Adobe Experience Manager (AEM)" API.
 *
 * Generated at: 2019-05-07T14:34:46.022Z
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
 * Operation: 'postAgent'
 * Endpoint Path: '/etc/replication/agents.{runmode}/{name}'
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
    "runmode",
    "name",
    "jcr:content/cq:distribute",
    "jcr:content/cq:distribute@TypeHint",
    "jcr:content/cq:name",
    "jcr:content/cq:template",
    "jcr:content/enabled",
    "jcr:content/jcr:description",
    "jcr:content/jcr:lastModified",
    "jcr:content/jcr:lastModifiedBy",
    "jcr:content/jcr:mixinTypes",
    "jcr:content/jcr:title",
    "jcr:content/logLevel",
    "jcr:content/noStatusUpdate",
    "jcr:content/noVersioning",
    "jcr:content/protocolConnectTimeout",
    "jcr:content/protocolHTTPConnectionClosed",
    "jcr:content/protocolHTTPExpired",
    "jcr:content/protocolHTTPHeaders",
    "jcr:content/protocolHTTPHeaders@TypeHint",
    "jcr:content/protocolHTTPMethod",
    "jcr:content/protocolHTTPSRelaxed",
    "jcr:content/protocolInterface",
    "jcr:content/protocolSocketTimeout",
    "jcr:content/protocolVersion",
    "jcr:content/proxyNTLMDomain",
    "jcr:content/proxyNTLMHost",
    "jcr:content/proxyHost",
    "jcr:content/proxyPassword",
    "jcr:content/proxyPort",
    "jcr:content/proxyUser",
    "jcr:content/queueBatchMaxSize",
    "jcr:content/queueBatchMode",
    "jcr:content/queueBatchWaitTime",
    "jcr:content/retryDelay",
    "jcr:content/reverseReplication",
    "jcr:content/serializationType",
    "jcr:content/sling:resourceType",
    "jcr:content/ssl",
    "jcr:content/transportNTLMDomain",
    "jcr:content/transportNTLMHost",
    "jcr:content/transportPassword",
    "jcr:content/transportUri",
    "jcr:content/transportUser",
    "jcr:content/triggerDistribute",
    "jcr:content/triggerModified",
    "jcr:content/triggerOnOffTime",
    "jcr:content/triggerReceive",
    "jcr:content/triggerSpecific",
    "jcr:content/userId",
    "jcr:primaryType",
    ":operation"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "runmode": "runmode",
    "name": "name",
    "jcr_content_cq_distribute": "jcr:content/cq:distribute",
    "jcr_content_cq_distribute_TypeHint": "jcr:content/cq:distribute@TypeHint",
    "jcr_content_cq_name": "jcr:content/cq:name",
    "jcr_content_cq_template": "jcr:content/cq:template",
    "jcr_content_enabled": "jcr:content/enabled",
    "jcr_content_jcr_description": "jcr:content/jcr:description",
    "jcr_content_jcr_lastModified": "jcr:content/jcr:lastModified",
    "jcr_content_jcr_lastModifiedBy": "jcr:content/jcr:lastModifiedBy",
    "jcr_content_jcr_mixinTypes": "jcr:content/jcr:mixinTypes",
    "jcr_content_jcr_title": "jcr:content/jcr:title",
    "jcr_content_logLevel": "jcr:content/logLevel",
    "jcr_content_noStatusUpdate": "jcr:content/noStatusUpdate",
    "jcr_content_noVersioning": "jcr:content/noVersioning",
    "jcr_content_protocolConnectTimeout": "jcr:content/protocolConnectTimeout",
    "jcr_content_protocolHTTPConnectionClosed": "jcr:content/protocolHTTPConnectionClosed",
    "jcr_content_protocolHTTPExpired": "jcr:content/protocolHTTPExpired",
    "jcr_content_protocolHTTPHeaders": "jcr:content/protocolHTTPHeaders",
    "jcr_content_protocolHTTPHeaders_TypeHint": "jcr:content/protocolHTTPHeaders@TypeHint",
    "jcr_content_protocolHTTPMethod": "jcr:content/protocolHTTPMethod",
    "jcr_content_protocolHTTPSRelaxed": "jcr:content/protocolHTTPSRelaxed",
    "jcr_content_protocolInterface": "jcr:content/protocolInterface",
    "jcr_content_protocolSocketTimeout": "jcr:content/protocolSocketTimeout",
    "jcr_content_protocolVersion": "jcr:content/protocolVersion",
    "jcr_content_proxyNTLMDomain": "jcr:content/proxyNTLMDomain",
    "jcr_content_proxyNTLMHost": "jcr:content/proxyNTLMHost",
    "jcr_content_proxyHost": "jcr:content/proxyHost",
    "jcr_content_proxyPassword": "jcr:content/proxyPassword",
    "jcr_content_proxyPort": "jcr:content/proxyPort",
    "jcr_content_proxyUser": "jcr:content/proxyUser",
    "jcr_content_queueBatchMaxSize": "jcr:content/queueBatchMaxSize",
    "jcr_content_queueBatchMode": "jcr:content/queueBatchMode",
    "jcr_content_queueBatchWaitTime": "jcr:content/queueBatchWaitTime",
    "jcr_content_retryDelay": "jcr:content/retryDelay",
    "jcr_content_reverseReplication": "jcr:content/reverseReplication",
    "jcr_content_serializationType": "jcr:content/serializationType",
    "jcr_content_sling_resourceType": "jcr:content/sling:resourceType",
    "jcr_content_ssl": "jcr:content/ssl",
    "jcr_content_transportNTLMDomain": "jcr:content/transportNTLMDomain",
    "jcr_content_transportNTLMHost": "jcr:content/transportNTLMHost",
    "jcr_content_transportPassword": "jcr:content/transportPassword",
    "jcr_content_transportUri": "jcr:content/transportUri",
    "jcr_content_transportUser": "jcr:content/transportUser",
    "jcr_content_triggerDistribute": "jcr:content/triggerDistribute",
    "jcr_content_triggerModified": "jcr:content/triggerModified",
    "jcr_content_triggerOnOffTime": "jcr:content/triggerOnOffTime",
    "jcr_content_triggerReceive": "jcr:content/triggerReceive",
    "jcr_content_triggerSpecific": "jcr:content/triggerSpecific",
    "jcr_content_userId": "jcr:content/userId",
    "jcr_primaryType": "jcr:primaryType",
    "_operation": ":operation"
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
        operationId: 'postAgent',
        pathName: '/etc/replication/agents.{runmode}/{name}',
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