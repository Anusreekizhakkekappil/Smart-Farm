/*import Service from "../../services";
import async from "async";
import UniversalFunctions from "../../utils/universalFunctions";
import TokenManager from "../../lib/tokenManager";


const sensorUpdate = (payload, callback) => {
    const userData = payload.userData;
    const payloadData = payload.data;
    let customerData;
    async.series(
        [
            //verify user
            (cb) => {
                const query = {
                    _id: userData.userId,
                };
                const options = { lean: true };
                Service.UserService.getRecord(query, {}, options, (err, data) => {
                    if (err) cb(err);
                    else {
                        if (data.length == 0) cb(ERROR.INCORRECT_ACCESSTOKEN);
                        else {
                            customerData = (data && data[0]) || null;
                            cb();
                        }
                    }
                });
            },
            (cb) => {
                //trying to update record
                
                const options = { new: true };
                Service.SensorService.updateRecord(
                    criteria,
                    setQuery,
                    options,
                    (err, updatedData) => {
                        if (err) cb(err);
                        else {
                            if (!updatedData) cb(ERROR.INVALID_CODE);
                            else cb();
                        }
                    }
                );
            },
        ],
        (err, result) => {
            if (err) callback(err);
            else callback();
        }
    );
};


module.exports = {
    sensorUpdate: sensorUpdate
}
*/