import IResponse from "./ResponseModel";

export interface ErrorResponse extends IResponse {
    error: any,
    msg: string,
    code?: number
}