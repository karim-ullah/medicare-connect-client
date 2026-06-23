import { serverMutation } from "@/lib/core/server"

export const createAppointment = async(data)=>{
    return serverMutation('/api/add-appointment', 'POST', data)
}