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
import Content from './Content'
import ContentSearchRefinement from './ContentSearchRefinement'





/**
* The ContentSearchResult model module.
* @module models/ContentSearchResult
* @version 20.4
*/
export default class ContentSearchResult {
    /**
    * Constructs a new <code>ContentSearchResult</code>.
    * Document representing a content search result.
    * @alias module:models/ContentSearchResult
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>ContentSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ContentSearchResult} obj Optional instance to populate.
    * @return {module:models/ContentSearchResult} The populated <code>ContentSearchResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentSearchResult()





            if (data.hasOwnProperty('count')) {
                obj.count = ApiClient.convertToType(data.count, 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj.data = ApiClient.convertToType(data.data, [Object])
            }
            if (data.hasOwnProperty('hits')) {
                obj.hits = ApiClient.convertToType(data.hits, [Content])
            }
            if (data.hasOwnProperty('next')) {
                obj.next = ApiClient.convertToType(data.next, 'String')
            }
            if (data.hasOwnProperty('previous')) {
                obj.previous = ApiClient.convertToType(data.previous, 'String')
            }
            if (data.hasOwnProperty('query')) {
                obj.query = ApiClient.convertToType(data.query, 'String')
            }
            if (data.hasOwnProperty('refinements')) {
                obj.refinements = ApiClient.convertToType(data.refinements, [ContentSearchRefinement])
            }
            if (data.hasOwnProperty('selected_refinements')) {
                obj.selected_refinements = ApiClient.convertToType(data.selected_refinements, {String: 'String'})
            }
            if (data.hasOwnProperty('start')) {
                obj.start = ApiClient.convertToType(data.start, 'Number')
            }
            if (data.hasOwnProperty('total')) {
                obj.total = ApiClient.convertToType(data.total, 'Number')
            }
        }
        return obj
    }

    /**
    * The number of returned documents.
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {Array.<Object>} data
    */
    data = undefined;
    /**
    * The sorted array of search hits. Can be empty.
    * @member {Array.<module:models/Content>} hits
    */
    hits = undefined;
    /**
    * The URL of the next result page.
    * @member {String} next
    */
    next = undefined;
    /**
    * The URL of the previous result page.
    * @member {String} previous
    */
    previous = undefined;
    /**
    * The query String that was searched for.
    * @member {String} query
    */
    query = undefined;
    /**
    * The sorted array of search refinements. Can be empty.
    * @member {Array.<module:models/ContentSearchRefinement>} refinements
    */
    refinements = undefined;
    /**
    * Map of selected refinement attribute id/value(s) pairs. The sorting order is the same like in request URL.
    * @member {Object.<String, String>} selected_refinements
    */
    selected_refinements = undefined;
    /**
    * The zero-based index of the first search hit to include in the result.
    * @member {Number} start
    */
    start = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;








}


