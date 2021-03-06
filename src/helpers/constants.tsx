export const apiConstants = {
    // baseUrl: process.env.NODE_ENV === 'production' ? 'http://YOUR-DOMAIN-BACKEND/api' : 'http://localhost:8000/api',
    // baseUrl: 'http://ceremonyapps.cafe24.com/html/public/api',
    baseUrl: 'http://127.0.0.1:8000/api'
}

export const externalConstants = {
    google_map_api_key: 'AIzaSyAUYWuBFtEocKQYr0_LLCOia7c4Z9RG12Q',
    PAYPAL_CLIENT_ID: '',
    RAZORPAY_ID: '',
}

export const authConstants = {
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR',
    LOGOUT: 'USERS_LOGOUT',
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    VERIFY_REQUEST: 'USERS_VERIFY_REQUEST',
    VERIFY_SUCCESS: 'USERS_VERIFY_SUCCESS',
    VERIFY_FAILURE: 'USERS_VERIFY_FAILURE',

    UPDATE_AVATAR: 'UPDATE_AVATAR',

    SET_DEFAULT_ADDRESS: 'SET_DEFAULT_ADDRESS',

    SET_FCM_TOKEN: 'SET_FCM_TOKEN',
};

export const cartConstants = {
    ITEM_INCREMENT: 'ITEM_INCREMENT',
    ITEM_DECREMENT: 'ITEM_DECREMENT',
    
    ADDONS_SHOW: 'ADDONS_SHOW',
    ADDONS_HIDE: 'ADDONS_HIDE',

    COUPON_ADD: 'COUPON_ADD',
    COUPON_REMOVE: 'COUPON_REMOVE',

    GRAND_TOTAL: 'GRAND_TOTAL',

    PLACE_ORDER: 'PLACE_ORDER',
    ORDER_SUCCESS: 'ORDER_SUCCESS'
};

export const alertConstants = {
    FULLPAGE_LOADER: 'FULLPAGE_LOADER',
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR',
    LOGOUT: 'USERS_LOGOUT',
};


export default {
    authConstants,
    apiConstants,
    cartConstants,
    externalConstants,
    alertConstants
}