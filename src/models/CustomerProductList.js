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
import CustomerAddressLink from './CustomerAddressLink'
import CustomerProductListItem from './CustomerProductListItem'
import CustomerProductListItemLink from './CustomerProductListItemLink'
import CustomerProductListRegistrant from './CustomerProductListRegistrant'
import ProductListEvent from './ProductListEvent'
import ProductListShippingAddress from './ProductListShippingAddress'





/**
* The CustomerProductList model module.
* @module models/CustomerProductList
* @version 20.4
*/
export default class CustomerProductList {
    /**
    * Constructs a new <code>CustomerProductList</code>.
    * Document representing a customer product List.
    * @alias module:models/CustomerProductList
    * @class
    */

    constructor() {








    }

    /**
    * Constructs a <code>CustomerProductList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerProductList} obj Optional instance to populate.
    * @return {module:models/CustomerProductList} The populated <code>CustomerProductList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProductList()





            if (data.hasOwnProperty('co_registrant')) {
                obj.co_registrant = CustomerProductListRegistrant.constructFromObject(data.co_registrant)
            }
            if (data.hasOwnProperty('creation_date')) {
                obj.creation_date = ApiClient.convertToType(data.creation_date, 'Date')
            }
            if (data.hasOwnProperty('current_shipping_address_link')) {
                obj.current_shipping_address_link = CustomerAddressLink.constructFromObject(data.current_shipping_address_link)
            }
            if (data.hasOwnProperty('customer_product_list_items')) {
                obj.customer_product_list_items = ApiClient.convertToType(data.customer_product_list_items, [CustomerProductListItem])
            }
            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('event')) {
                obj.event = ProductListEvent.constructFromObject(data.event)
            }
            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('items_link')) {
                obj.items_link = CustomerProductListItemLink.constructFromObject(data.items_link)
            }
            if (data.hasOwnProperty('last_modified')) {
                obj.last_modified = ApiClient.convertToType(data.last_modified, 'Date')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('post_event_shipping_address_link')) {
                obj.post_event_shipping_address_link = CustomerAddressLink.constructFromObject(data.post_event_shipping_address_link)
            }
            if (data.hasOwnProperty('product_list_shipping_address')) {
                obj.product_list_shipping_address = ProductListShippingAddress.constructFromObject(data.product_list_shipping_address)
            }
            if (data.hasOwnProperty('public')) {
                obj.public = ApiClient.convertToType(data.public, 'Boolean')
            }
            if (data.hasOwnProperty('registrant')) {
                obj.registrant = CustomerProductListRegistrant.constructFromObject(data.registrant)
            }
            if (data.hasOwnProperty('shipping_address_link')) {
                obj.shipping_address_link = CustomerAddressLink.constructFromObject(data.shipping_address_link)
            }
            if (data.hasOwnProperty('type')) {
                obj.type = ApiClient.convertToType(data.type, 'String')
            }
        }
        return obj
    }

    /**
    * The coRegistrant of this product list.
    * @member {module:models/CustomerProductListRegistrant} co_registrant
    */
    co_registrant = undefined;
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined;
    /**
    * The resource link to the current shipping address of this customer product list.
    * @member {module:models/CustomerAddressLink} current_shipping_address_link
    */
    current_shipping_address_link = undefined;
    /**
    * The list of customer product list items.
    * @member {Array.<module:models/CustomerProductListItem>} customer_product_list_items
    */
    customer_product_list_items = undefined;
    /**
    * The description of this product list.
    * @member {String} description
    */
    description = undefined;
    /**
    * The event of this product list.
    * @member {module:models/ProductListEvent} event
    */
    event = undefined;
    /**
    * The id of this product list.
    * @member {String} id
    */
    id = undefined;
    /**
    * The resource link to the items of this customer product list.
    * @member {module:models/CustomerProductListItemLink} items_link
    */
    items_link = undefined;
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined;
    /**
    * The name of this product list.
    * @member {String} name
    */
    name = undefined;
    /**
    * The resource link to the post event shipping address of this customer product list.
    * @member {module:models/CustomerAddressLink} post_event_shipping_address_link
    */
    post_event_shipping_address_link = undefined;
    /**
    * The abbreviated shipping address of this product list representing what anonymous user can see.
    * @member {module:models/ProductListShippingAddress} product_list_shipping_address
    */
    product_list_shipping_address = undefined;
    /**
    * Indicates whether the owner made this product list available for access by other customers.
    * @member {Boolean} public
    */
    public = undefined;
    /**
    * The registrant of this product list.
    * @member {module:models/CustomerProductListRegistrant} registrant
    */
    registrant = undefined;
    /**
    * The resource link to the shipping address of this customer product list.
    * @member {module:models/CustomerAddressLink} shipping_address_link
    */
    shipping_address_link = undefined;
    /**
    * The type of the product list.
    * @member {module:models/CustomerProductList.TypeEnum} type
    */
    type = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {

        /**
         * value: "wish_list"
         * @const
         */
        wish_list: 'wish_list',

        /**
         * value: "gift_registry"
         * @const
         */
        gift_registry: 'gift_registry',

        /**
         * value: "shopping_list"
         * @const
         */
        shopping_list: 'shopping_list',

        /**
         * value: "custom_1"
         * @const
         */
        custom_1: 'custom_1',

        /**
         * value: "custom_2"
         * @const
         */
        custom_2: 'custom_2',

        /**
         * value: "custom_3"
         * @const
         */
        custom_3: 'custom_3'
    };



}


