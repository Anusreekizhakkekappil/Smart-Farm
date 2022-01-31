/**
 * Created by Sanchit
 */
import User from './user';
import Admin from './admin';
import Token from './token';
import SSO from './sso';
import Sensors from './sensors';
import SensorAttributes from './sensorAttributes';
import SensorReadings from './sensorReadings';

const ForgetPassword = require('./forgotPasswordRequest');

export default {
    User,
    ForgetPassword,
    Admin,
    Token,
    SSO,
    Sensors,
    SensorAttributes,
    SensorReadings
}