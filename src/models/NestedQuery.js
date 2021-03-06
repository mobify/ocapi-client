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
import Query from './Query'





/**
* The NestedQuery model module.
* @module models/NestedQuery
* @version 20.4
*/
export default class NestedQuery {
    /**
    * Constructs a new <code>NestedQuery</code>.
    * A nested query queries nested documents that are part of a larger document. The classical example is a  product master with variants (in one big document) where you want to constrain a search to masters that have  variants that match multiple constraints (like color &#x3D; blue AND size &#x3D; M).  This query is not compatible with some search types.
    * @alias module:models/NestedQuery
    * @class
    * @param path {String}
    * @param query {module:models/Query}
    */

    constructor(path, query) {





        this.path = path; this.query = query


    }

    /**
    * Constructs a <code>NestedQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/NestedQuery} obj Optional instance to populate.
    * @return {module:models/NestedQuery} The populated <code>NestedQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NestedQuery()





            if (data.hasOwnProperty('path')) {
                obj.path = ApiClient.convertToType(data.path, 'String')
            }
            if (data.hasOwnProperty('query')) {
                obj.query = Query.constructFromObject(data.query)
            }
            if (data.hasOwnProperty('score_mode')) {
                obj.score_mode = ApiClient.convertToType(data.score_mode, 'String')
            }
        }
        return obj
    }

    /**
    *
    * @member {String} path
    */
    path = undefined;
    /**
    *
    * @member {module:models/Query} query
    */
    query = undefined;
    /**
    *
    * @member {module:models/NestedQuery.ScoreModeEnum} score_mode
    */
    score_mode = undefined;






    /**
    * Allowed values for the <code>score_mode</code> property.
    * @enum {String}
    * @readonly
    */
    static ScoreModeEnum = {

        /**
         * value: "avg"
         * @const
         */
        avg: 'avg',

        /**
         * value: "total"
         * @const
         */
        total: 'total',

        /**
         * value: "max"
         * @const
         */
        max: 'max',

        /**
         * value: "none"
         * @const
         */
        none: 'none'
    };



}


