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
import Promotion from './Promotion'





/**
* The PromotionResult model module.
* @module models/PromotionResult
* @version 20.4
*/
export default class PromotionResult {
    /**
    * Constructs a new <code>PromotionResult</code>.
    * Result document containing an array of promotions.
    * @alias module:models/PromotionResult
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>PromotionResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PromotionResult} obj Optional instance to populate.
    * @return {module:models/PromotionResult} The populated <code>PromotionResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionResult()





            if (data.hasOwnProperty('count')) {
                obj.count = ApiClient.convertToType(data.count, 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj.data = ApiClient.convertToType(data.data, [Promotion])
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
    * The array of promotion documents.
    * @member {Array.<module:models/Promotion>} data
    */
    data = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;








}


