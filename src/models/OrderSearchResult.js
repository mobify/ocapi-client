/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
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
import OrderSearchHit from './OrderSearchHit'
import Query from './Query'
import ResultPage from './ResultPage'
import Sort from './Sort'

/**
* The OrderSearchResult model module.
* @module models/OrderSearchResult
* @version 17.8
*/
export default class OrderSearchResult {
    /**
    * Constructs a new <code>OrderSearchResult</code>.
    * Document representing an order search result.
    * @alias module:models/OrderSearchResult
    * @class
    */
    constructor() {
        /**
        * The number of returned documents.
        * @member {Number} count
        */
        this.count = undefined

        /**
        * @member {Array.<Object>} data
        */
        this.data = undefined

        /**
        * The list of expands set for the search request. Expands are optional.
        * @member {Array.<String>} expand
        */
        this.expand = undefined

        /**
        * The sorted array of search hits. This array can be empty.
        * @member {Array.<module:models/OrderSearchHit>} hits
        */
        this.hits = undefined

        /**
        * The data that can be used (as parameters on the search request) to retrieve the next result page.
        * @member {module:models/ResultPage} next
        */
        this.next = undefined

        /**
        * The data that can be used to retrieve the previous result page (as parameters on the search request).
        * @member {module:models/ResultPage} previous
        */
        this.previous = undefined

        /**
        * The query passed into the search
        * @member {module:models/Query} query
        */
        this.query = undefined

        /**
        * The fields that you want to select.
        * @member {String} select
        */
        this.select = undefined

        /**
        * The list of sort clauses configured for the search request. Sort clauses are optional.
        * @member {Array.<module:models/Sort>} sorts
        */
        this.sorts = undefined

        /**
        * The zero-based index of the first search hit to include in the result.
        * @member {Number} start
        */
        this.start = undefined

        /**
        * The total number of documents.
        * @member {Number} total
        */
        this.total = undefined
    }

    /**
    * Constructs a <code>OrderSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderSearchResult} obj Optional instance to populate.
    * @return {module:models/OrderSearchResult} The populated <code>OrderSearchResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResult()

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object])
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], ['String'])
            }
            if (data.hasOwnProperty('hits')) {
                obj['hits'] = ApiClient.convertToType(data['hits'], [OrderSearchHit])
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ResultPage.constructFromObject(data['next'])
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ResultPage.constructFromObject(data['previous'])
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = Query.constructFromObject(data['query'])
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], 'String')
            }
            if (data.hasOwnProperty('sorts')) {
                obj['sorts'] = ApiClient.convertToType(data['sorts'], [Sort])
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number')
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number')
            }
        }

        return obj
    }
}
