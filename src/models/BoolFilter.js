/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
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
import Filter from './Filter'

/**
* The BoolFilter model module.
* @module models/BoolFilter
* @version 17.8
*/
export default class BoolFilter {
    /**
    * Constructs a new <code>BoolFilter</code>.
    * Document representing a boolean filter.
    * @alias module:models/BoolFilter
    * @class
    * @param operator {module:models/BoolFilter.OperatorEnum} The logical operator the filters are combined with.
    */
    constructor(operator) {
        /**
        * A list of filters, which are logically combined by an operator.
        * @member {Array.<module:models/Filter>} filters
        */
        this.filters = undefined

        /**
        * The logical operator the filters are combined with.
        * @member {module:models/BoolFilter.OperatorEnum} operator
        */
        this.operator = operator
    }

    /**
    * Constructs a <code>BoolFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/BoolFilter} obj Optional instance to populate.
    * @return {module:models/BoolFilter} The populated <code>BoolFilter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BoolFilter()

            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter])
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String')
            }
        }
        return obj
    }
}

/**
* Allowed values for the <code>operator</code> property.
* @enum {String}
* @readonly
*/
BoolFilter.OperatorEnum = {

    /**
     * value: "and"
     * @const
     */
    and: 'and',

    /**
     * value: "or"
     * @const
     */
    or: 'or',

    /**
     * value: "not"
     * @const
     */
    not: 'not'
}