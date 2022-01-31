import GenericService from './genericService';

import ForgetPasswordService from './forgetPasswordService';

export default {
    UserService: new GenericService('User'),
    ForgetPasswordService,
    AdminService: new GenericService('Admin'),
    TokenService: new GenericService('Token'),
    SSOManagerService: new GenericService('SSO'),
    SensorService: new GenericService('Sensors'),
    SensorAttributesService: new GenericService('SensorAttributes'),
    SensorReadingsService: new GenericService('SensorReadings')

};