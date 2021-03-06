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
import DiscountRequest from './DiscountRequest'





/**
* The PriceAdjustmentRequest model module.
* @module models/PriceAdjustmentRequest
* @version 20.4
*/
export default class PriceAdjustmentRequest {
    /**
    * Constructs a new <code>PriceAdjustmentRequest</code>.
    * Document representing a price adjustment request.
    * @alias module:models/PriceAdjustmentRequest
    * @class
    * @param level {module:models/PriceAdjustmentRequest.LevelEnum} The level at which the adjustment is applied. When a product or shipping  level is specified, you must also specify the item id.
    */

    constructor(level) {





        this.level = level


    }

    /**
    * Constructs a <code>PriceAdjustmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PriceAdjustmentRequest} obj Optional instance to populate.
    * @return {module:models/PriceAdjustmentRequest} The populated <code>PriceAdjustmentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAdjustmentRequest()





            if (data.hasOwnProperty('discount')) {
                obj.discount = DiscountRequest.constructFromObject(data.discount)
            }
            if (data.hasOwnProperty('item_id')) {
                obj.item_id = ApiClient.convertToType(data.item_id, 'String')
            }
            if (data.hasOwnProperty('item_text')) {
                obj.item_text = ApiClient.convertToType(data.item_text, 'String')
            }
            if (data.hasOwnProperty('level')) {
                obj.level = ApiClient.convertToType(data.level, 'String')
            }
            if (data.hasOwnProperty('promotion_id')) {
                obj.promotion_id = ApiClient.convertToType(data.promotion_id, 'String')
            }
            if (data.hasOwnProperty('reason_code')) {
                obj.reason_code = ApiClient.convertToType(data.reason_code, 'String')
            }
        }
        return obj
    }

    /**
    * A discount that you can specify instead of a price.  When defining a discount, you must specify a type and  a value.
    * @member {module:models/DiscountRequest} discount
    */
    discount = undefined;
    /**
    * The item to which the price adjustment should be added, depending on the specified level.  If the level is 'order', you need not specify an item id. If 'shipping', specify the uuid  of the shipping item. If 'product', specify the uuid of the product item.
    * @member {String} item_id
    */
    item_id = undefined;
    /**
    * The text describing the item in more detail.
    * @member {String} item_text
    */
    item_text = undefined;
    /**
    * The level at which the adjustment is applied. When a product or shipping  level is specified, you must also specify the item id.
    * @member {module:models/PriceAdjustmentRequest.LevelEnum} level
    */
    level = undefined;
    /**
    * The id of the related promotion. Custom price adjustments  can be assigned any promotion id so long it is not  used by a price adjustment belonging to the same item  and is not used by promotion defined in the promotion engine.  If not specified, a promotion id is generated.
    * @member {String} promotion_id
    */
    promotion_id = undefined;
    /**
    * The reason why this price adjustment was made.
    * @member {module:models/PriceAdjustmentRequest.ReasonCodeEnum} reason_code
    */
    reason_code = undefined;






    /**
    * Allowed values for the <code>level</code> property.
    * @enum {String}
    * @readonly
    */
    static LevelEnum = {

        /**
         * value: "product"
         * @const
         */
        product: 'product',

        /**
         * value: "shipping"
         * @const
         */
        shipping: 'shipping',

        /**
         * value: "order"
         * @const
         */
        order: 'order'
    };

    /**
    * Allowed values for the <code>reason_code</code> property.
    * @enum {String}
    * @readonly
    */
    static ReasonCodeEnum = {

        /**
         * value: "PRICE_MATCH"
         * @const
         */
        PRICE_MATCH: 'PRICE_MATCH',

        /**
         * value: "BACKORDER"
         * @const
         */
        BACKORDER: 'BACKORDER',

        /**
         * value: "EVEN_EXCHANGE"
         * @const
         */
        EVEN_EXCHANGE: 'EVEN_EXCHANGE'
    };



}


