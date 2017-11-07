/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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
import ProductSearchResult from '../models/ProductSearchResult'

/**
 * Product_search service.
 * @module api/ProductSearchApi
 * @version 17.8
 */
export default class ProductSearchApi {

    /**
     * Constructs a new ProductSearchApi.
     * @alias module:api/ProductSearchApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id,
     * link and name in  the product search hit. Other search hit properties can be added by using
     * the expand parameter. The search result  contains only products that are online and assigned to site catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {Array.<String>} opts.expand The expand parameter. A comma separated list with the allowed values (availability, images,             prices, variations)
     * @param {String} opts.currency The currency mnemonic specified for price. This parameter is effective only if specified expand parameter value contains prices.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            q: opts.q,
            sort: opts.sort,
            start: opts.start,
            count: opts.count,
            expand: this.apiClient.buildCollectionParam(opts.expand, 'csv'),
            currency: opts.currency,
            locale: opts.locale
        }

        const refinements = Object.keys(opts).filter((key) => /^refine/.test(key))

        if (refinements.length > 0) {
            const useSuffix = refinements.length > 1

            refinements.forEach((key, idx) => {
                if (!opts[key]) {
                    return
                }

                queryParams[`refine${useSuffix ? `_${idx + 1}` : ''}`] =
                    this.apiClient.buildCollectionParam(opts[key], 'csv')
            })
        }

        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ProductSearchResult

        return this.apiClient.callApi(
            '/product_search', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the
     * product id, link and name in  the product search hit. Other search hit properties can be
     * added by using the expand parameter. The search result  contains only products that are online
     * and assigned to site catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {Array.<String>} opts.expand The expand parameter. A comma separated list with the allowed values (availability, images,
     * prices, variations)
     * @param {String} opts.currency The currency mnemonic specified for price. This parameter is effective only if specified expand parameter value contains prices.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearch(opts) {
        return this.getProductSearchWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id,
     * link, name and  availability information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchAvailabilityWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            q: opts.q,
            refine: this.apiClient.buildCollectionParam(opts.refine, 'csv'),
            sort: opts.sort,
            start: opts.start,
            count: opts.count,
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ProductSearchResult

        return this.apiClient.callApi(
            '/product_search/availability', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the
     * product id, link, name and  availability information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchAvailability(opts) {
        return this.getProductSearchAvailabilityWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the
     * product id, link, name and  image information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchImagesWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            q: opts.q,
            refine: this.apiClient.buildCollectionParam(opts.refine, 'csv'),
            sort: opts.sort,
            start: opts.start,
            count: opts.count,
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ProductSearchResult

        return this.apiClient.callApi(
            '/product_search/images', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the
     * product id, link, name and  image information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchImages(opts) {
        return this.getProductSearchImagesWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the
     * product id, link, name and  price information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.currency The currency mnemonic specified for price.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchPricesWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            q: opts.q,
            refine: this.apiClient.buildCollectionParam(opts.refine, 'csv'),
            sort: opts.sort,
            start: opts.start,
            count: opts.count,
            currency: opts.currency,
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ProductSearchResult

        return this.apiClient.callApi(
            '/product_search/prices', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  price information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.currency The currency mnemonic specified for price.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchPrices(opts) {
        return this.getProductSearchPricesWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchVariationsWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {}
        const queryParams = {
            q: opts.q,
            refine: this.apiClient.buildCollectionParam(opts.refine, 'csv'),
            sort: opts.sort,
            start: opts.start,
            count: opts.count,
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = ProductSearchResult

        return this.apiClient.callApi(
            '/product_search/variations', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and
     * value(s) are separated by &#39;&#x3D;&#39;. Multiple values are supported by a sub-set of refinement attributes and
     * can be provided by separating them using a pipe (URL
     * encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine
     * parameters can be provided by adding an underscore in combination with an integer counter right behind
     * the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The
     * following system refinement attribute ids are supported:
     * cgid: Allows to refine per single category id. Multiple category ids are not supported.
     * price: Allows to refine per single price range. Multiple price ranges are not supported.
     * pmid: Allows to refine per promotion id(s).
     * orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple
     * refinement values are not supported.
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchVariations(opts) {
        return this.getProductSearchVariationsWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }
}
