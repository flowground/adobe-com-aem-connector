# ![LOGO](logo.png) Adobe Experience Manager (AEM) MSP Connector

## Description

A generated MSP connector for the Adobe Experience Manager (AEM) API (version 2.5.0-pre).

Generated from: https://api.apis.guru/v2/specs/adobe.com/aem/2.5.0-pre/swagger.json<br/>
Generated at: 2019-05-07T11:15:11+03:00

## API Description

Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API

## Authorization

Supported authorization schemes:
- Basic Authentication

## Actions

### postCqActions

*Tags:* `cq`

#### Input Parameters
* `authorizableId` - _required_
* `changelog` - _required_

### postConfigAdobeGraniteSamlAuthenticationHandler

*Tags:* `sling`

#### Input Parameters
* `keyStorePassword` - _optional_
* `keyStorePassword@TypeHint` - _optional_
* `service.ranking` - _optional_
* `service.ranking@TypeHint` - _optional_
* `idpHttpRedirect` - _optional_
* `idpHttpRedirect@TypeHint` - _optional_
* `createUser` - _optional_
* `createUser@TypeHint` - _optional_
* `defaultRedirectUrl` - _optional_
* `defaultRedirectUrl@TypeHint` - _optional_
* `userIDAttribute` - _optional_
* `userIDAttribute@TypeHint` - _optional_
* `defaultGroups` - _optional_
* `defaultGroups@TypeHint` - _optional_
* `idpCertAlias` - _optional_
* `idpCertAlias@TypeHint` - _optional_
* `addGroupMemberships` - _optional_
* `addGroupMemberships@TypeHint` - _optional_
* `path` - _optional_
* `path@TypeHint` - _optional_
* `synchronizeAttributes` - _optional_
* `synchronizeAttributes@TypeHint` - _optional_
* `clockTolerance` - _optional_
* `clockTolerance@TypeHint` - _optional_
* `groupMembershipAttribute` - _optional_
* `groupMembershipAttribute@TypeHint` - _optional_
* `idpUrl` - _optional_
* `idpUrl@TypeHint` - _optional_
* `logoutUrl` - _optional_
* `logoutUrl@TypeHint` - _optional_
* `serviceProviderEntityId` - _optional_
* `serviceProviderEntityId@TypeHint` - _optional_
* `assertionConsumerServiceURL` - _optional_
* `assertionConsumerServiceURL@TypeHint` - _optional_
* `handleLogout` - _optional_
* `handleLogout@TypeHint` - _optional_
* `spPrivateKeyAlias` - _optional_
* `spPrivateKeyAlias@TypeHint` - _optional_
* `useEncryption` - _optional_
* `useEncryption@TypeHint` - _optional_
* `nameIdFormat` - _optional_
* `nameIdFormat@TypeHint` - _optional_
* `digestMethod` - _optional_
* `digestMethod@TypeHint` - _optional_
* `signatureMethod` - _optional_
* `signatureMethod@TypeHint` - _optional_
* `userIntermediatePath` - _optional_
* `userIntermediatePath@TypeHint` - _optional_

### postConfigAemPasswordReset

*Tags:* `custom`

#### Input Parameters
* `pwdreset.authorizables` - _optional_
* `pwdreset.authorizables@TypeHint` - _optional_

### postConfigAemHealthCheckServlet

*Tags:* `custom`

#### Input Parameters
* `bundles.ignored` - _optional_
* `bundles.ignored@TypeHint` - _optional_

### postConfigApacheFelixJettyBasedHttpService

*Tags:* `sling`

#### Input Parameters
* `org.apache.felix.https.nio` - _optional_
* `org.apache.felix.https.nio@TypeHint` - _optional_
* `org.apache.felix.https.keystore` - _optional_
* `org.apache.felix.https.keystore@TypeHint` - _optional_
* `org.apache.felix.https.keystore.password` - _optional_
* `org.apache.felix.https.keystore.password@TypeHint` - _optional_
* `org.apache.felix.https.keystore.key` - _optional_
* `org.apache.felix.https.keystore.key@TypeHint` - _optional_
* `org.apache.felix.https.keystore.key.password` - _optional_
* `org.apache.felix.https.keystore.key.password@TypeHint` - _optional_
* `org.apache.felix.https.truststore` - _optional_
* `org.apache.felix.https.truststore@TypeHint` - _optional_
* `org.apache.felix.https.truststore.password` - _optional_
* `org.apache.felix.https.truststore.password@TypeHint` - _optional_
* `org.apache.felix.https.clientcertificate` - _optional_
* `org.apache.felix.https.clientcertificate@TypeHint` - _optional_
* `org.apache.felix.https.enable` - _optional_
* `org.apache.felix.https.enable@TypeHint` - _optional_
* `org.osgi.service.http.port.secure` - _optional_
* `org.osgi.service.http.port.secure@TypeHint` - _optional_

### postConfigApacheHttpComponentsProxyConfiguration

*Tags:* `sling`

#### Input Parameters
* `proxy.host` - _optional_
* `proxy.host@TypeHint` - _optional_
* `proxy.port` - _optional_
* `proxy.port@TypeHint` - _optional_
* `proxy.exceptions` - _optional_
* `proxy.exceptions@TypeHint` - _optional_
* `proxy.enabled` - _optional_
* `proxy.enabled@TypeHint` - _optional_
* `proxy.user` - _optional_
* `proxy.user@TypeHint` - _optional_
* `proxy.password` - _optional_
* `proxy.password@TypeHint` - _optional_

### postConfigApacheSlingDavExServlet

*Tags:* `sling`

#### Input Parameters
* `alias` - _optional_
* `alias@TypeHint` - _optional_
* `dav.create-absolute-uri` - _optional_
* `dav.create-absolute-uri@TypeHint` - _optional_

### postConfigApacheSlingReferrerFilter

*Tags:* `sling`

#### Input Parameters
* `allow.empty` - _optional_
* `allow.empty@TypeHint` - _optional_
* `allow.hosts` - _optional_
* `allow.hosts@TypeHint` - _optional_
* `allow.hosts.regexp` - _optional_
* `allow.hosts.regexp@TypeHint` - _optional_
* `filter.methods` - _optional_
* `filter.methods@TypeHint` - _optional_

### postConfigApacheSlingGetServlet

*Tags:* `sling`

#### Input Parameters
* `json.maximumresults` - _optional_
* `json.maximumresults@TypeHint` - _optional_
* `enable.html` - _optional_
* `enable.html@TypeHint` - _optional_
* `enable.txt` - _optional_
* `enable.txt@TypeHint` - _optional_
* `enable.xml` - _optional_
* `enable.xml@TypeHint` - _optional_

### getQuery

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `p.limit` - _required_
* `1_property` - _required_
* `1_property.value` - _required_

### postQuery

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `p.limit` - _required_
* `1_property` - _required_
* `1_property.value` - _required_

### postSetPassword

*Tags:* `crx`

#### Input Parameters
* `old` - _required_
* `plain` - _required_
* `verify` - _required_

### getInstallStatus

*Tags:* `crx`

### postPackageService

*Tags:* `crx`

#### Input Parameters
* `cmd` - _required_

### postPackageServiceJson

*Tags:* `crx`

#### Input Parameters
* `path` - _required_
* `cmd` - _required_
* `groupName` - _optional_
* `packageName` - _optional_
* `packageVersion` - _optional_
* `_charset_` - _optional_
* `force` - _optional_
* `recursive` - _optional_

### getPackageManagerServlet

*Tags:* `crx`

### postPackageUpdate

*Tags:* `crx`

#### Input Parameters
* `groupName` - _required_
* `packageName` - _required_
* `version` - _required_
* `path` - _required_
* `filter` - _optional_
* `_charset_` - _optional_

### getCrxdeStatus

*Tags:* `crx`

### getPackage

*Tags:* `sling`

#### Input Parameters
* `group` - _required_
* `name` - _required_
* `version` - _required_

### getPackageFilter

*Tags:* `sling`

#### Input Parameters
* `group` - _required_
* `name` - _required_
* `version` - _required_

### getAgents

*Tags:* `sling`

#### Input Parameters
* `runmode` - _required_

### deleteAgent

*Tags:* `sling`

#### Input Parameters
* `runmode` - _required_
* `name` - _required_

### getAgent

*Tags:* `sling`

#### Input Parameters
* `runmode` - _required_
* `name` - _required_

### postAgent

*Tags:* `sling`

#### Input Parameters
* `runmode` - _required_
* `name` - _required_
* `jcr:content/cq:distribute` - _optional_
* `jcr:content/cq:distribute@TypeHint` - _optional_
* `jcr:content/cq:name` - _optional_
* `jcr:content/cq:template` - _optional_
* `jcr:content/enabled` - _optional_
* `jcr:content/jcr:description` - _optional_
* `jcr:content/jcr:lastModified` - _optional_
* `jcr:content/jcr:lastModifiedBy` - _optional_
* `jcr:content/jcr:mixinTypes` - _optional_
* `jcr:content/jcr:title` - _optional_
* `jcr:content/logLevel` - _optional_
* `jcr:content/noStatusUpdate` - _optional_
* `jcr:content/noVersioning` - _optional_
* `jcr:content/protocolConnectTimeout` - _optional_
* `jcr:content/protocolHTTPConnectionClosed` - _optional_
* `jcr:content/protocolHTTPExpired` - _optional_
* `jcr:content/protocolHTTPHeaders` - _optional_
* `jcr:content/protocolHTTPHeaders@TypeHint` - _optional_
* `jcr:content/protocolHTTPMethod` - _optional_
* `jcr:content/protocolHTTPSRelaxed` - _optional_
* `jcr:content/protocolInterface` - _optional_
* `jcr:content/protocolSocketTimeout` - _optional_
* `jcr:content/protocolVersion` - _optional_
* `jcr:content/proxyNTLMDomain` - _optional_
* `jcr:content/proxyNTLMHost` - _optional_
* `jcr:content/proxyHost` - _optional_
* `jcr:content/proxyPassword` - _optional_
* `jcr:content/proxyPort` - _optional_
* `jcr:content/proxyUser` - _optional_
* `jcr:content/queueBatchMaxSize` - _optional_
* `jcr:content/queueBatchMode` - _optional_
* `jcr:content/queueBatchWaitTime` - _optional_
* `jcr:content/retryDelay` - _optional_
* `jcr:content/reverseReplication` - _optional_
* `jcr:content/serializationType` - _optional_
* `jcr:content/sling:resourceType` - _optional_
* `jcr:content/ssl` - _optional_
* `jcr:content/transportNTLMDomain` - _optional_
* `jcr:content/transportNTLMHost` - _optional_
* `jcr:content/transportPassword` - _optional_
* `jcr:content/transportUri` - _optional_
* `jcr:content/transportUser` - _optional_
* `jcr:content/triggerDistribute` - _optional_
* `jcr:content/triggerModified` - _optional_
* `jcr:content/triggerOnOffTime` - _optional_
* `jcr:content/triggerReceive` - _optional_
* `jcr:content/triggerSpecific` - _optional_
* `jcr:content/userId` - _optional_
* `jcr:primaryType` - _optional_
* `:operation` - _optional_

### postTreeActivation

*Tags:* `sling`

#### Input Parameters
* `ignoredeactivated` - _required_
* `onlymodified` - _required_
* `path` - _required_

### postTruststorePKCS12

*Tags:* `sling`

### getTruststore

*Tags:* `sling`

### getLoginPage

*Tags:* `cq`

### postAuthorizables

*Tags:* `sling`

#### Input Parameters
* `authorizableId` - _required_
* `intermediatePath` - _required_
* `createUser` - _optional_
* `createGroup` - _optional_
* `rep:password` - _optional_
* `profile/givenName` - _optional_

### postTruststore

*Tags:* `sling`

#### Input Parameters
* `:operation` - _optional_
* `newPassword` - _optional_
* `rePassword` - _optional_
* `keyStoreType` - _optional_
* `removeAlias` - _optional_

### getTruststoreInfo

*Tags:* `sling`

### postBundle

*Tags:* `console`

#### Input Parameters
* `name` - _required_
* `action` - _required_

### postSamlConfiguration

*Tags:* `console`

#### Input Parameters
* `post` - _optional_
* `apply` - _optional_
* `delete` - _optional_
* `action` - _optional_
* `$location` - _optional_
* `path` - _optional_
* `service.ranking` - _optional_
* `idpUrl` - _optional_
* `idpCertAlias` - _optional_
* `idpHttpRedirect` - _optional_
* `serviceProviderEntityId` - _optional_
* `assertionConsumerServiceURL` - _optional_
* `spPrivateKeyAlias` - _optional_
* `keyStorePassword` - _optional_
* `defaultRedirectUrl` - _optional_
* `userIDAttribute` - _optional_
* `useEncryption` - _optional_
* `createUser` - _optional_
* `addGroupMemberships` - _optional_
* `groupMembershipAttribute` - _optional_
* `defaultGroups` - _optional_
* `nameIdFormat` - _optional_
* `synchronizeAttributes` - _optional_
* `handleLogout` - _optional_
* `logoutUrl` - _optional_
* `clockTolerance` - _optional_
* `digestMethod` - _optional_
* `signatureMethod` - _optional_
* `userIntermediatePath` - _optional_
* `propertylist` - _optional_

### postJmxRepository

*Tags:* `console`

#### Input Parameters
* `action` - _required_

### getAemProductInfo

*Tags:* `console`

### getAemHealthCheck

*Tags:* `custom`

#### Input Parameters
* `tags` - _optional_
* `combineTagsOr` - _optional_

### postAuthorizableKeystore

*Tags:* `sling`

#### Input Parameters
* `intermediatePath` - _required_
* `authorizableId` - _required_
* `:operation` - _optional_
* `currentPassword` - _optional_
* `newPassword` - _optional_
* `rePassword` - _optional_
* `keyPassword` - _optional_
* `keyStorePass` - _optional_
* `alias` - _optional_
* `newAlias` - _optional_
* `removeAlias` - _optional_

### getAuthorizableKeystore

*Tags:* `sling`

#### Input Parameters
* `intermediatePath` - _required_
* `authorizableId` - _required_

### getKeystore

*Tags:* `sling`

#### Input Parameters
* `intermediatePath` - _required_
* `authorizableId` - _required_

### postPath

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `jcr:primaryType` - _required_
* `:name` - _required_

### deleteNode

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `name` - _required_

### getNode

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `name` - _required_

### postNode

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `name` - _required_
* `:operation` - _optional_
* `deleteAuthorizable` - _optional_

### postNodeRw

*Tags:* `sling`

#### Input Parameters
* `path` - _required_
* `name` - _required_
* `addMembers` - _optional_

## License

flowground :- Telekom iPaaS / adobe-com-aem-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
