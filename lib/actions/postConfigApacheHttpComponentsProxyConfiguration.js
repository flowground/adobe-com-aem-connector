/**
 * Auto-generated action file for "Adobe Experience Manager (AEM)" API.
 *
 * Generated at: 2019-05-07T14:34:46.016Z
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
 * Operation: 'postConfigApacheHttpComponentsProxyConfiguration'
 * Endpoint Path: '/apps/system/config/org.apache.http.proxyconfigurator.config'
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
    "proxy.host",
    "proxy.host@TypeHint",
    "proxy.port",
    "proxy.port@TypeHint",
    "proxy.exceptions",
    "proxy.exceptions@TypeHint",
    "proxy.enabled",
    "proxy.enabled@TypeHint",
    "proxy.user",
    "proxy.user@TypeHint",
    "proxy.password",
    "proxy.password@TypeHint"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "proxy_host": "proxy.host",
    "proxy_host_TypeHint": "proxy.host@TypeHint",
    "proxy_port": "proxy.port",
    "proxy_port_TypeHint": "proxy.port@TypeHint",
    "proxy_exceptions": "proxy.exceptions",
    "proxy_exceptions_TypeHint": "proxy.exceptions@TypeHint",
    "proxy_enabled": "proxy.enabled",
    "proxy_enabled_TypeHint": "proxy.enabled@TypeHint",
    "proxy_user": "proxy.user",
    "proxy_user_TypeHint": "proxy.user@TypeHint",
    "proxy_password": "proxy.password",
    "proxy_password_TypeHint": "proxy.password@TypeHint"
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
        operationId: 'postConfigApacheHttpComponentsProxyConfiguration',
        pathName: '/apps/system/config/org.apache.http.proxyconfigurator.config',
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