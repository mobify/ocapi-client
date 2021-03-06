/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient'

/**
* Sessions service.
* @module api/SessionsApi
* @version 20.4
*/
export default class SessionsApi {

    /**
    * Constructs a new SessionsApi.
    * @alias module:api/SessionsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }



    /**
     *   Exchanges a valid JWT into a new session, which is associated with the authenticated or anonymous customer. All  Set-Cookie headers for handling the session are applied on the response.      Only the JWT is used to create the new session. Any session IDs included in the request are ignored.      Once you create a session from a JWT, you can use it in parallel with stateless OCAPI calls that use the JWT.  There is no need to call the bridging resources again.      If the customer is authenticated and has a storefront basket, that basket is transferred into the session and can  be retrieved using BasketMgr.getCurrentBasket(), along with sensitive data such as addresses and payment  information. The following examples show why this behavior is important to understand as it relates to guest  customers:      Basket created after the session is created:      POST /customers/auth with type “guest”  POST /sessions  POST /baskets  Storefront request (controller with BasketMgr.getCurrentBasket())  -&gt; Sensitive data is erased from the basket due to security considerations        Basket created before the session is created:      POST /customers/auth with type “guest”  POST /baskets  POST /sessions  Storefront request (controller with BasketMgr.getCurrentBasket())  -&gt; Sensitive data is accessible because the basket is marked as secured for this session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postSessionsWithHttpInfo() {
        const postBody = null


        const pathParams = {
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = null

        return this.apiClient.callApi(
            '/sessions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     *   Exchanges a valid JWT into a new session, which is associated with the authenticated or anonymous customer. All  Set-Cookie headers for handling the session are applied on the response.      Only the JWT is used to create the new session. Any session IDs included in the request are ignored.      Once you create a session from a JWT, you can use it in parallel with stateless OCAPI calls that use the JWT.  There is no need to call the bridging resources again.      If the customer is authenticated and has a storefront basket, that basket is transferred into the session and can  be retrieved using BasketMgr.getCurrentBasket(), along with sensitive data such as addresses and payment  information. The following examples show why this behavior is important to understand as it relates to guest  customers:      Basket created after the session is created:      POST /customers/auth with type “guest”  POST /sessions  POST /baskets  Storefront request (controller with BasketMgr.getCurrentBasket())  -&gt; Sensitive data is erased from the basket due to security considerations        Basket created before the session is created:      POST /customers/auth with type “guest”  POST /baskets  POST /sessions  Storefront request (controller with BasketMgr.getCurrentBasket())  -&gt; Sensitive data is accessible because the basket is marked as secured for this session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postSessions() {
        return this.postSessionsWithHttpInfo()
            .then((response_and_data) => {
                return response_and_data.data
            })
    }


}
