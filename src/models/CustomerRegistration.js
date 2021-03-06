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
import Customer from './Customer'





/**
* The CustomerRegistration model module.
* @module models/CustomerRegistration
* @version 20.4
*/
export default class CustomerRegistration {
    /**
    * Constructs a new <code>CustomerRegistration</code>.
    * Document representing the registration information for a customer.
    * @alias module:models/CustomerRegistration
    * @class
    * @param customer {module:models/Customer} The customer registration information.  The mandatory properties for registration are login, last name and email.
    */

    constructor(customer) {





        this.customer = customer


    }

    /**
    * Constructs a <code>CustomerRegistration</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerRegistration} obj Optional instance to populate.
    * @return {module:models/CustomerRegistration} The populated <code>CustomerRegistration</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerRegistration()





            if (data.hasOwnProperty('customer')) {
                obj.customer = Customer.constructFromObject(data.customer)
            }
            if (data.hasOwnProperty('password')) {
                obj.password = ApiClient.convertToType(data.password, 'String')
            }
        }
        return obj
    }

    /**
    * The customer registration information.  The mandatory properties for registration are login, last name and email.
    * @member {module:models/Customer} customer
    */
    customer = undefined;
    /**
    * The password to authorize.
    * @member {String} password
    */
    password = undefined;








}


