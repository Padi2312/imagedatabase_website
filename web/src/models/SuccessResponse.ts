import IResponse from "./ResponseModel";

export interface SuccessResponse extends IResponse {
    data?: string,
    msg?: string,
}