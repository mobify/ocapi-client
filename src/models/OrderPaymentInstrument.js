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
import PaymentBankAccount from './PaymentBankAccount'
import PaymentCard from './PaymentCard'
import Status from './Status'

/**
* The OrderPaymentInstrument model module.
* @module models/OrderPaymentInstrument
* @version 17.8
*/
export default class OrderPaymentInstrument {
    /**
    * Constructs a new <code>OrderPaymentInstrument</code>.
    * Document representing an order payment instrument.
    * @alias module:models/OrderPaymentInstrument
    * @class
    */
    constructor() {
        /**
        * The payment transaction amount.
        * @member {Number} amount
        */
        this.amount = undefined

        /**
        * The authorization status of the payment transaction.
        * @member {module:models/Status} authorization_status
        */
        this.authorization_status = undefined

        /**
        * The bank routing number.
        * @member {String} bank_routing_number
        */
        this.bank_routing_number = undefined

        /**
        * The masked gift certificate code.
        * @member {String} masked_gift_certificate_code
        */
        this.masked_gift_certificate_code = undefined

        /**
        * The payment bank account.
        * @member {module:models/PaymentBankAccount} payment_bank_account
        */
        this.payment_bank_account = undefined

        /**
        * The payment card.
        * @member {module:models/PaymentCard} payment_card
        */
        this.payment_card = undefined

        /**
        * The payment instrument ID.
        * @member {String} payment_instrument_id
        */
        this.payment_instrument_id = undefined

        /**
        * The payment method id. Optional if a customer payment instrument id is specified.
        * @member {String} payment_method_id
        */
        this.payment_method_id = undefined
    }

    /**
    * Constructs a <code>OrderPaymentInstrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderPaymentInstrument} obj Optional instance to populate.
    * @return {module:models/OrderPaymentInstrument} The populated <code>OrderPaymentInstrument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentInstrument()

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number')
            }
            if (data.hasOwnProperty('authorization_status')) {
                obj['authorization_status'] = Status.constructFromObject(data['authorization_status'])
            }
            if (data.hasOwnProperty('bank_routing_number')) {
                obj['bank_routing_number'] = ApiClient.convertToType(data['bank_routing_number'], 'String')
            }
            if (data.hasOwnProperty('masked_gift_certificate_code')) {
                obj['masked_gift_certificate_code'] = ApiClient.convertToType(data['masked_gift_certificate_code'], 'String')
            }
            if (data.hasOwnProperty('payment_bank_account')) {
                obj['payment_bank_account'] = PaymentBankAccount.constructFromObject(data['payment_bank_account'])
            }
            if (data.hasOwnProperty('payment_card')) {
                obj['payment_card'] = PaymentCard.constructFromObject(data['payment_card'])
            }
            if (data.hasOwnProperty('payment_instrument_id')) {
                obj['payment_instrument_id'] = ApiClient.convertToType(data['payment_instrument_id'], 'String')
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String')
            }
        }

        return obj
    }
}