import UniversalFunctions from "../../utils/universalFunctions";
import Joi from "joi";
import Controller from "../../controllers";
import Config from '../../config';


const addSensor = {
    method: "POST",
    path: "/api/sensor/addSensor",
    handler: function(request, reply) {
        let userData =
            (request.auth &&
                request.auth.credentials &&
                request.auth.credentials.userData) ||
            null;
        let payloadData = request.payload;
        return new Promise((resolve, reject) => {
            Controller.SensorController.addSensor(
                userData,
                payloadData,
                function(err, data) {
                    if (!err) {
                        resolve(UniversalFunctions.sendSuccess(null, data));
                    } else {
                        reject(UniversalFunctions.sendError(err));
                    }
                }
            );

        });
    },
    options: {
        description: "add a new sensor",
        tags: ["api", "sensor"],
        auth: "UserAuth",
        validate: {
            payload: Joi.object({
                sensorId: Joi.string().required(),
                sensorName: Joi.string().required(),
                location: Joi.string().required(),
                status: Joi.string().required(),
                description: Joi.string().required(),

            }).label("Add: Sensor"),
            failAction: UniversalFunctions.failActionFunction
        },
        plugins: {
            "hapi-swagger": {
                security: [{ 'user': {} }],
                responseMessages: UniversalFunctions.CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
            }
        }
    }
};



const addSensorAttributes = {
    method: "POST",
    path: "/api/sensor/addSensorAttributes",
    handler: function(request, reply) {
        let userData =
            (request.auth &&
                request.auth.credentials &&
                request.auth.credentials.userData) ||
            null;
        let payloadData = request.payload;
        return new Promise((resolve, reject) => {
            Controller.SensorController.addSensorAttributes(
                userData,
                payloadData,
                function(err, data) {
                    if (!err) {
                        resolve(UniversalFunctions.sendSuccess(null, data));
                    } else {
                        reject(UniversalFunctions.sendError(err));
                    }
                }
            );

        });
    },
    options: {
        description: "add sensor attributes",
        tags: ["api", "sensor", "attributes"],
        auth: "UserAuth",
        validate: {
            payload: Joi.object({
                sensorId: Joi.string().required(),
                name: Joi.string().required(),
                sensorType: Joi.string().required(),
                metrics: Joi.string().required(),
                description: Joi.string().required(),

            }).label("Add: SensorAttributes"),
            failAction: UniversalFunctions.failActionFunction
        },
        plugins: {
            "hapi-swagger": {
                security: [{ 'user': {} }],
                responseMessages: UniversalFunctions.CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
            }
        }
    }
};


const addSensorReadings = {
    method: "POST",
    path: "/api/sensor/addSensorReadings",
    handler: function(request, reply) {
        let userData =
            (request.auth &&
                request.auth.credentials &&
                request.auth.credentials.userData) ||
            null;
        let payloadData = request.payload;
        // console.log(userData);
        return new Promise((resolve, reject) => {
            Controller.SensorController.addSensorReadings(
                userData,
                payloadData,
                function(err, data) {
                    if (!err) {
                        resolve(UniversalFunctions.sendSuccess(null, data));
                    } else {
                        reject(UniversalFunctions.sendError(err));
                    }
                }
            );

        });
    },
    options: {
        description: "add sensor readings",
        tags: ["api", "sensor", "readings"],
        auth: "UserAuth",
        validate: {
            payload: Joi.object({
                entry: Joi.string().required(),
                time: Joi.string().required(),
                sensorId: Joi.string().required(),
                sensorType: Joi.string().required(),
                value: Joi.string().required(),

            }).label("Add: SensorReadings"),
            failAction: UniversalFunctions.failActionFunction
        },
        plugins: {
            "hapi-swagger": {
                security: [{ 'user': {} }],
                responseMessages: UniversalFunctions.CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
            }
        }
    }
};


export default [
    addSensor,
    addSensorAttributes,
    addSensorReadings
];