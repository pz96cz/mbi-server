import { Injectable } from '@nestjs/common';
import { Metadata, type ServerUnaryCall } from "@grpc/grpc-js";
import { GrpcMethod } from "@nestjs/microservices";

@Injectable()
export class UsersService {
    @GrpcMethod("UsersService", "insertUser")
    insertUser(data, metadata: Metadata, call: ServerUnaryCall<any, any>) {
        return {
            id: 1
        }
    }
}
