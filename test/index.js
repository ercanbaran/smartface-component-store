/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

import { assert }  from 'chai';

import store from '..';

describe( 'store', () => {
    it( 'should exist', () => {
        assert(
            typeof store === 'object',
            `“store” is expected to be an “object” and it is “${typeof store}”.`
        );
    } );
} );