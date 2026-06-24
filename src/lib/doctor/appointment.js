import { serverMutation } from "../core/server"

export const updateStatus = async(appointmentId, status)=>{
    return serverMutation(`/api/appointment-status?appointmentId=${appointmentId}`, 'PATCH', status)
}