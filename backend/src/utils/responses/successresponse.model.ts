import IResponse from "./response.model";

export interface SuccessResponse extends IResponse {
    data?: string,
    msg?: string,
}