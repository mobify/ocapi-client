/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
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
* The Query model module.
* @module models/Query
* @version 20.4
*/
export default class Query {
    /**
    * Constructs a new <code>Query</code>.
    * A boolean query allows to construct full logical expression trees consisting of other queries
    * (usually term and text  queries). A boolean query basically has 3 sets of clauses
    * that &#39;must&#39;, &#39;should&#39; and / or &#39;must not&#39; match.  If &#39;must&#39;,  &#39;must_not&#39;, or &#39;should&#39;
    * appear in the same boolean query, they are combined logically using the AND operator.
    * @alias module:models/Query
    * @class
    */

    constructor() {
        /**
        * List of queries, which must match.
        * @member {Array.<module:models/Query>} must
        */
        this.must = undefined

        /**
        * List of queries, which must not match.
        * @member {Array.<module:models/Query>} must_not
        */
        this.must_not = undefined

        /**
        * List of queries, which should match.
        * @member {Array.<module:models/Query>} should
        */
        this.should = undefined
    }

    /**
    * Constructs a <code>Query</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Query} obj Optional instance to populate.
    * @return {module:models/Query} The populated <code>Query</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Query()

            if (data.hasOwnProperty('must')) {
                obj['must'] = ApiClient.convertToType(data['must'], [Query])
            }
            if (data.hasOwnProperty('must_not')) {
                obj['must_not'] = ApiClient.convertToType(data['must_not'], [Query])
            }
            if (data.hasOwnProperty('should')) {
                obj['should'] = ApiClient.convertToType(data['should'], [Query])
            }
        }

        return obj
    }
}
