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
import CustomerPaymentInstrument from './CustomerPaymentInstrument'





/**
* The CustomerPaymentInstrumentResult model module.
* @module models/CustomerPaymentInstrumentResult
* @version 20.4
*/
export default class CustomerPaymentInstrumentResult {
    /**
    * Constructs a new <code>CustomerPaymentInstrumentResult</code>.
    * Document representing a customer payment instrument result. The payment data contained is masked where needed for security purposes.
    * @alias module:models/CustomerPaymentInstrumentResult
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>CustomerPaymentInstrumentResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerPaymentInstrumentResult} obj Optional instance to populate.
    * @return {module:models/CustomerPaymentInstrumentResult} The populated <code>CustomerPaymentInstrumentResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPaymentInstrumentResult()





            if (data.hasOwnProperty('count')) {
                obj.count = ApiClient.convertToType(data.count, 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj.data = ApiClient.convertToType(data.data, [CustomerPaymentInstrument])
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
    * The customer payment instruments list.
    * @member {Array.<module:models/CustomerPaymentInstrument>} data
    */
    data = undefined;
    /**
    * The total number of documents.
    * @member {Number} total
    */
    total = undefined;








}


