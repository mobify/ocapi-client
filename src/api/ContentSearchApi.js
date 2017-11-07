/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'
import ContentSearchResult from '../models/ContentSearchResult'

/**
 * Content_search service.
 * @module api/ContentSearchApi
 * @version 17.8
 */
export default class ContentSearchApi {

    /**
     * Constructs a new ContentSearchApi.
     * @alias module:api/ContentSearchApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Provides keyword and refinement search functionality for content assets. The search result contains only content  that is online and assigned to a folder.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;foo&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementType&#x3D;type1|type2|type3. The
     * following system refinement attribute ids are supported:
     * fdid: Allows to refine per single content folder id. Multiple folder ids are not supported.
     * @param {Array.<String>} opts.sort Parameter that represents a sorting attribute/value(s) pair. Sorting attribute id and value are
     * separated by &#39;&#x3D;&#39;. The value describes the sort direction. Possible values are &#39;asc&#39; and &#39;desc&#39;, for
     * ascending or descending sort direction. I.e. sort&#x3D;c_myAttribute&#x3D;desc. Precondition: You have to select
     * your sorting attributes in Business Manager &gt; YourSite &gt; Search Indexes &gt; Content Index &gt; Sorting
     * Attributes.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ContentSearchResult} and HTTP response
     */
    getContentSearchWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null


        const pathParams = {}
        const queryParams = {
            q: opts.q,
            sort: this.apiClient.buildCollectionParam(opts.sort, 'csv'),
            start: opts.start,
            count: opts.count,
            locale: opts.locale
        }

        const refinements = Object.keys(opts).filter((key) => /^refine/.test(key))

        if (refinements.length > 0) {
            const useSuffix = refinements.length > 1

            refinements.forEach((key, idx) => {
                if (!opts[key]) {
                    return
                }

                queryParams[`refine${useSuffix ? `_${idx + 1}` : ''}`] =
                    this.apiClient.buildCollectionParam(opts[key], 'csv')
            })
        }

        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ContentSearchResult

        return this.apiClient.callApi(
            '/content_search', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword and refinement search functionality for content assets. The search result contains only content  that is online and assigned to a folder.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;foo&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementType&#x3D;type1|type2|type3. The
     * following system refinement attribute ids are supported:
     * fdid: Allows to refine per single content folder id. Multiple folder ids are not supported.
     * @param {Array.<String>} opts.sort Parameter that represents a sorting attribute/value(s) pair. Sorting attribute id and value are
     * separated by &#39;&#x3D;&#39;. The value describes the sort direction. Possible values are &#39;asc&#39; and &#39;desc&#39;, for
     * ascending or descending sort direction. I.e. sort&#x3D;c_myAttribute&#x3D;desc. Precondition: You have to select
     * your sorting attributes in Business Manager &gt; YourSite &gt; Search Indexes &gt; Content Index &gt; Sorting
     * Attributes.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ContentSearchResult}
     */
    getContentSearch(opts) {
        return this.getContentSearchWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }
}
