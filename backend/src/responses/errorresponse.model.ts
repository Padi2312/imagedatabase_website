import IResponse from "./response.model";

export interface ErrorResponse extends IResponse {
    error: any,
    msg: string,
    code?: number
}