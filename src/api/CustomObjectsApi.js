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
import CustomObject from '../models/CustomObject'

/**
* Custom_objects service.
* @module api/CustomObjectsApi
* @version 20.4
*/
export default class CustomObjectsApi {

    /**
    * Constructs a new CustomObjectsApi.
    * @alias module:api/CustomObjectsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }



    /**
     * Reads a custom object with a given object type ID and a value for the  key attribute of the object which represents its unique identifier.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the custom object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomObject} and HTTP response
     */
    getCustomObjectsByIDByIDWithHttpInfo(objectType, key) {
        const postBody = null

        // verify the required parameter 'objectType' is set
        if (objectType === undefined || objectType === null) {
            throw new Error('Missing the required parameter \'objectType\' when calling getCustomObjectsByIDByID')
        }

        // verify the required parameter 'key' is set
        if (key === undefined || key === null) {
            throw new Error('Missing the required parameter \'key\' when calling getCustomObjectsByIDByID')
        }


        const pathParams = {
            object_type: objectType,
            key
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = CustomObject

        return this.apiClient.callApi(
            '/custom_objects/{object_type}/{key}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Reads a custom object with a given object type ID and a value for the  key attribute of the object which represents its unique identifier.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the custom object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomObject}
     */
    getCustomObjectsByIDByID(objectType, key) {
        return this.getCustomObjectsByIDByIDWithHttpInfo(objectType, key)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }


}
