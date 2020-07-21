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

/**
* The ProductType model module.
* @module models/ProductType
* @version 17.8
*/
export default class ProductType {
    /**
    * Constructs a new <code>ProductType</code>.
    * Document representing a product type.
    * @alias module:models/ProductType
    * @class
    */
    constructor() {
        /**
        * A flag indicating whether the product is a bundle.
        * @member {Boolean} bundle
        */
        this.bundle = undefined

        /**
        * A flag indicating whether the product is a standard item.
        * @member {Boolean} item
        */
        this.item = undefined

        /**
        * A flag indicating whether the product is a master.
        * @member {Boolean} master
        */
        this.master = undefined

        /**
        * A flag indicating whether the product is an option.
        * @member {Boolean} option
        */
        this.option = undefined

        /**
        * A flag indicating whether the product is a set.
        * @member {Boolean} set
        */
        this.set = undefined

        /**
        * A flag indicating whether the product is a variant.
        * @member {Boolean} variant
        */
        this.variant = undefined

        /**
        * A flag indicating whether the product is a variation group.
        * @member {Boolean} variation_group
        */
        this.variation_group = undefined
    }

    /**
    * Constructs a <code>ProductType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductType} obj Optional instance to populate.
    * @return {module:models/ProductType} The populated <code>ProductType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductType()

            if (data.hasOwnProperty('bundle')) {
                obj['bundle'] = ApiClient.convertToType(data['bundle'], 'Boolean')
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], 'Boolean')
            }
            if (data.hasOwnProperty('master')) {
                obj['master'] = ApiClient.convertToType(data['master'], 'Boolean')
            }
            if (data.hasOwnProperty('option')) {
                obj['option'] = ApiClient.convertToType(data['option'], 'Boolean')
            }
            if (data.hasOwnProperty('set')) {
                obj['set'] = ApiClient.convertToType(data['set'], 'Boolean')
            }
            if (data.hasOwnProperty('variant')) {
                obj['variant'] = ApiClient.convertToType(data['variant'], 'Boolean')
            }
            if (data.hasOwnProperty('variation_group')) {
                obj['variation_group'] = ApiClient.convertToType(data['variation_group'], 'Boolean')
            }
        }

        return obj
    }
}
