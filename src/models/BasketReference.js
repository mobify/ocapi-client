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
* The BasketReference model module.
* @module models/BasketReference
* @version 20.4
*/
export default class BasketReference {
    /**
    * Constructs a new <code>BasketReference</code>.
    * Reference to a basket.
    * @alias module:models/BasketReference
    * @class
    * @param basketId {String} The unique identifier for the basket.
    * @param customerId {String} The unique identifier for the customer.
    */

    constructor(basketId, customerId) {





        this.basket_id = basketId; this.customer_id = customerId


    }

    /**
    * Constructs a <code>BasketReference</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/BasketReference} obj Optional instance to populate.
    * @return {module:models/BasketReference} The populated <code>BasketReference</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasketReference()





            if (data.hasOwnProperty('basket_id')) {
                obj.basket_id = ApiClient.convertToType(data.basket_id, 'String')
            }
            if (data.hasOwnProperty('customer_id')) {
                obj.customer_id = ApiClient.convertToType(data.customer_id, 'String')
            }
        }
        return obj
    }

    /**
    * The unique identifier for the basket.
    * @member {String} basket_id
    */
    basket_id = undefined;
    /**
    * The unique identifier for the customer.
    * @member {String} customer_id
    */
    customer_id = undefined;








}


