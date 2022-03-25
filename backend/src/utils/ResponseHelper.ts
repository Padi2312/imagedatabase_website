import { ErrorResponse } from "src/utils/responses/errorresponse.model";
import { SuccessResponse } from "src/utils/responses/successresponse.model";

export default class ResponseHelper {

    static createSuccess(_data?: any, _msg?: string): SuccessResponse {
        return {
            success: true,
            data: _data,
            msg: _msg
        }
    }

    static createError(_error: any, _msg?: string, _code?: number): ErrorResponse {
        return {
            success: false,
            error: _error,
            msg: _msg,
            code: _code
        }
    }

}