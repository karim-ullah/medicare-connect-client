'use server'
import { serverMutation } from "../core/server"

export const updateStatus = async(appointmentId, status)=>{
    return serverMutation(`/api/appointment-status?appointmentId=${appointmentId}`, 'PATCH', status)
}


export const addPrescription = async(data)=>{
    return serverMutation('/api/add-prescription', 'POST', data)
}