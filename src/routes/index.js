import DemoBaseRoute from "./demoRoute/demoBaseRoute";
import UserBaseRoute from "./userRoute/userBaseRoute";
import AdminBaseRoute from "./adminRoute/adminBaseRoute";
import UploadBaseRoute from "./uploadRoute/uploadBaseRoute";
import SensorRoute from "./sensorRoute/sensorRoute";

const Routes = [].concat(DemoBaseRoute, UserBaseRoute, AdminBaseRoute, UploadBaseRoute, SensorRoute);

export default Routes;