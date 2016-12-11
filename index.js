/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

import { whenReady as whenApplicationReady } from '@volkan/smartface-core-application';

const store = {};

const SMF = global.SMF;
const Pages = global.Pages;

const log = console.log;

if ( typeof SMF === 'undefined' ) {
    log( 'Cannot find the SMF namespace; make sure that you are using the smartface.io IDE.' );
    throw new Error( 'Cannot find the SMF namespace; make sure that you are using the smartface.io IDE.' );
}

if ( typeof Pages === 'undefined' ) {
    log( 'Cannot find the Pages collection; make sure that you are using the smartface.io IDE.' );
    throw new Error( 'Cannot find the Pages collection; make sure that you are using the smartface.io IDE.' );
}

const validateProps = ( props ) => {
    if ( !props || !props.name || !props.type ) {
        log(
            'Every smartface component needs to have a type and a name. Please make sure you provide one.'
        );
        throw new Error(
            'Every smartface component needs to have a type and a name. Please make sure you provide one.'
        );
    }
};

const decorate = ( delegate ) => ( props ) => {
    validateProps( props );

    return delegate( props );
};

/**
 *
 */
store.Application = decorate(
    ( props ) => whenApplicationReady.then( () => ( { type: 'Application', ...props } ) )
);

/**
 *
 */
store.Page = decorate( ( props ) => {
    const page = Pages[ props.name ] = new SMF.UI.Page( props );

    return page;
} );

/**
 *
 */
store.TextButton = decorate( ( props ) =>  new SMF.UI.TextButton( props ) );

export default store;
