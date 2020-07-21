/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
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
import expect from 'expect.js'
import ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'
import * as utils from '../utils'

let instance
let client

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })
})

beforeEach(() => {
    instance = new ShopApi.SessionsApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('SessionsApi', () => {

    describe('postSessions', () => {
        it('calling postSessions with invalid JWT token should return fault', () => {
            instance.apiClient.defaultHeaders.authorization = 'Bearer EyJfdiI6IjEiLCJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJfdiI6IjEiLCJleHAiOjE1MDg4Nzg3NzcsImlhdCI6MTUwODg3Njk3NywiaXNzIjoiNTY0MGNjNmItZjVlOS00NjZlLTkxMzQtOTg1M2U5ZjlkYjkzIiwic3ViIjoie1wiX3ZcIjpcIjFcIixcImN1c3RvbWVyX2luZm9cIjp7XCJjdXN0b21lcl9pZFwiOlwiYWNBNmEzbEZYckVpM3JMUkJNbXY2OTRrTElcIixcImd1ZXN0XCI6ZmFsc2V9fSJ9.dl8XgldAVo8SGRDrrSAdndtlE5pl9YZznBuxS1zwCPpX6vxNBsTa95-lwHE9AsZdU5CTBee8ktTVwqnmtguRT_tjTIddh8xpZqet8pepaMDHqNQNW1xpcuSmgmj9qkULYCZz9EWB62fR-Vb1pTgKgjTbhRBBhy3rFH-wGno7e0Dh1KbLcx49rwBFH_lFjJEHvA0k9r70IXz4l9y4I8oqOr6uPPn5o-AKCf2xd90DkM16Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogulZ_32PBVKjycHHwich0aQuA4DRa7aei7n_UfQjWuMKErHul5q5mYxROWvSZuXo6QXzaGdUmVeDGwpX6E3AaTQT-jIXUvfXqFeN8cIBFeo-PV0l0BeMERMv3ibhRjf_6YRg5jj--cKBhLefA5FPWIJBALqWv04hHXQX_3q-aL3u58'

            return instance.postSessions()
                .catch((fault) => {
                    expect(fault.type).to.be('InvalidAccessTokenException')
                })
        })

        it('calling postSessions with expired JWT token should return fault', () => {
            instance.apiClient.defaultHeaders.authorization = 'Bearer eyJfdiI6IjEiLCJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJfdiI6IjEiLCJleHAiOjE1MDg4Nzg3NzcsImlhdCI6MTUwODg3Njk3NywiaXNzIjoiNTY0MGNjNmItZjVlOS00NjZlLTkxMzQtOTg1M2U5ZjlkYjkzIiwic3ViIjoie1wiX3ZcIjpcIjFcIixcImN1c3RvbWVyX2luZm9cIjp7XCJjdXN0b21lcl9pZFwiOlwiYWNBNmEzbEZYckVpM3JMUkJNbXY2OTRrTElcIixcImd1ZXN0XCI6ZmFsc2V9fSJ9.dl8XgldAVo8SGRDrrSAdndtlE5pl9YZznBuxS1zwCPpX6vxNBsTa95-lwHE9AsZdU5CTBee8ktTVwqnmtguRT_tjTIddh8xpZqet8pepaMDHqNQNW1xpcuSmgmj9qkULYCZz9EWB62fR-Vb1pTgKgjTbhRBBhy3rFH-wGno7e0Dh1KbLcx49rwBFH_lFjJEhvA0k9r70IXz4l9y4I8oqOr6uPPn5o-AKCf2xd90DkM16Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogulZ_32PBVKjycHHwich0aQuA4DRa7aei7n_UfQjWuMKErHul5q5mYxROWvSZuXo6QXzaGdUmVeDGwpX6E3AaTQT-jIXUvfXqFeN8cIBFeo-PV0l0BeMERMv3ibhRjf_6YRg5jj--cKBhLefA5FPWIJBALqWv04hHXQX_3q-aL3u58'

            return instance.postSessions()
                .catch((fault) => {
                    expect(fault.type).to.be('ExpiredTokenException')
                })
        })

        it('calling postSessions successfully with valid JWT token should return successfully', () =>
            utils.getGuestUserAuth(client)
                .then(instance.postSessions())
        )
    })

})
