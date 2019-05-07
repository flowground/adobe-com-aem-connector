/**
 * Auto-generated action file for "Adobe Experience Manager (AEM)" API.
 *
 * Generated at: 2019-05-07T14:34:46.015Z
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
 * Operation: 'postConfigApacheFelixJettyBasedHttpService'
 * Endpoint Path: '/apps/system/config/org.apache.felix.http'
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
    "org.apache.felix.https.nio",
    "org.apache.felix.https.nio@TypeHint",
    "org.apache.felix.https.keystore",
    "org.apache.felix.https.keystore@TypeHint",
    "org.apache.felix.https.keystore.password",
    "org.apache.felix.https.keystore.password@TypeHint",
    "org.apache.felix.https.keystore.key",
    "org.apache.felix.https.keystore.key@TypeHint",
    "org.apache.felix.https.keystore.key.password",
    "org.apache.felix.https.keystore.key.password@TypeHint",
    "org.apache.felix.https.truststore",
    "org.apache.felix.https.truststore@TypeHint",
    "org.apache.felix.https.truststore.password",
    "org.apache.felix.https.truststore.password@TypeHint",
    "org.apache.felix.https.clientcertificate",
    "org.apache.felix.https.clientcertificate@TypeHint",
    "org.apache.felix.https.enable",
    "org.apache.felix.https.enable@TypeHint",
    "org.osgi.service.http.port.secure",
    "org.osgi.service.http.port.secure@TypeHint"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "org_apache_felix_https_nio": "org.apache.felix.https.nio",
    "org_apache_felix_https_nio_TypeHint": "org.apache.felix.https.nio@TypeHint",
    "org_apache_felix_https_keystore": "org.apache.felix.https.keystore",
    "org_apache_felix_https_keystore_TypeHint": "org.apache.felix.https.keystore@TypeHint",
    "org_apache_felix_https_keystore_password": "org.apache.felix.https.keystore.password",
    "org_apache_felix_https_keystore_password_TypeHint": "org.apache.felix.https.keystore.password@TypeHint",
    "org_apache_felix_https_keystore_key": "org.apache.felix.https.keystore.key",
    "org_apache_felix_https_keystore_key_TypeHint": "org.apache.felix.https.keystore.key@TypeHint",
    "org_apache_felix_https_keystore_key_password": "org.apache.felix.https.keystore.key.password",
    "org_apache_felix_https_keystore_key_password_TypeHint": "org.apache.felix.https.keystore.key.password@TypeHint",
    "org_apache_felix_https_truststore": "org.apache.felix.https.truststore",
    "org_apache_felix_https_truststore_TypeHint": "org.apache.felix.https.truststore@TypeHint",
    "org_apache_felix_https_truststore_password": "org.apache.felix.https.truststore.password",
    "org_apache_felix_https_truststore_password_TypeHint": "org.apache.felix.https.truststore.password@TypeHint",
    "org_apache_felix_https_clientcertificate": "org.apache.felix.https.clientcertificate",
    "org_apache_felix_https_clientcertificate_TypeHint": "org.apache.felix.https.clientcertificate@TypeHint",
    "org_apache_felix_https_enable": "org.apache.felix.https.enable",
    "org_apache_felix_https_enable_TypeHint": "org.apache.felix.https.enable@TypeHint",
    "org_osgi_service_http_port_secure": "org.osgi.service.http.port.secure",
    "org_osgi_service_http_port_secure_TypeHint": "org.osgi.service.http.port.secure@TypeHint"
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
        operationId: 'postConfigApacheFelixJettyBasedHttpService',
        pathName: '/apps/system/config/org.apache.felix.http',
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