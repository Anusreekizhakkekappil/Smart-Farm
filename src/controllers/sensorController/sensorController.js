import Service from "../../services";
import async from "async";
import UniversalFunctions from "../../utils/universalFunctions";
import TokenManager from "../../lib/tokenManager";

const addSensor = (userData, payloadData, callback) => {

    console.log(payloadData)

    async.series(
        [
            // Verify the user

            (cb) => {
                let query = {
                    _id: userData.userId,
                };
                const options = { lean: true };
                Service.UserService.getRecord(query, {}, options, (err, data) => {
                    if (err) cb(err);
                    else {
                        if (data.length == 0) cb(ERROR.INCORRECT_ACCESSTOKEN);
                        else {
                            let customerData = (data && data[0]) || null;
                            cb();
                        }
                    }
                });
            },
            //Creating the record
            (cb) => {
                let dataToSave = {
                    sensorId: payloadData.sensorId,
                    sensorName: payloadData.sensorName,
                    location: payloadData.location,
                    status: payloadData.status,
                    description: payloadData.description
                }
                Service.SensorService.createRecord(dataToSave, (err, result) => {
                    if (err) {
                        console.log(err)
                        cb(err);
                    } else {
                        console.log("Created record: ", result)
                        cb();
                    }
                });
            }

        ],
        (err, result) => {
            if (err) callback(err);
            else callback();
        }

    )
};



const addSensorAttributes = (userData, payloadData, callback) => {

    console.log(payloadData)

    async.series(
        [
            // Verify the user

            (cb) => {
                let query = {
                    _id: userData.userId,
                };
                const options = { lean: true };
                Service.UserService.getRecord(query, {}, options, (err, data) => {
                    if (err) cb(err);
                    else {
                        if (data.length == 0) cb(ERROR.INCORRECT_ACCESSTOKEN);
                        else {
                            let customerData = (data && data[0]) || null;
                            cb();
                        }
                    }
                });
            },
            //Creating the record
            (cb) => {
                let dataToSave = {
                    sensorId: payloadData.sensorId,
                    name: payloadData.name,
                    sensorType: payloadData.sensorType,
                    metrics: payloadData.metrics,
                    description: payloadData.description
                }
                Service.SensorAttributesService.createRecord(dataToSave, (err, result) => {
                    if (err) {
                        console.log(err)
                        cb(err);
                    } else {
                        console.log("Created record: ", result)
                        cb();
                    }
                });
            }

        ],
        (err, result) => {
            if (err) callback(err);
            else callback();
        }

    )
};


const addSensorReadings = (userData, payloadData, callback) => {

    console.log(payloadData)

    async.series(
        [
            // Verify the user

            (cb) => {
                let query = {
                    _id: userData.userId,
                };
                const options = { lean: true };
                Service.UserService.getRecord(query, {}, options, (err, data) => {
                    if (err) cb(err);
                    else {
                        if (data.length == 0) cb(ERROR.INCORRECT_ACCESSTOKEN);
                        else {
                            let customerData = (data && data[0]) || null;
                            cb();
                        }
                    }
                });
            },
            //Creating the record
            (cb) => {
                let dataToSave = {
                    entry: payloadData.entry,
                    time: payloadData.time,
                    sensorId: payloadData.sensorId,
                    sensorType: payloadData.sensorType,
                    value: payloadData.value
                }
                Service.SensorReadingsService.createRecord(dataToSave, (err, result) => {
                    if (err) {
                        console.log(err)
                        cb(err);
                    } else {
                        console.log("Created record: ", result)
                        cb();
                    }
                });
            }

        ],
        (err, result) => {
            if (err) callback(err);
            else callback();
        }

    )
};

export default {
    addSensor,
    addSensorAttributes,
    addSensorReadings
}