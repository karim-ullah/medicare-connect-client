'use server'
import { serverFetch, serverMutation } from "@/lib/core/server"

export const createAppointment = async(data)=>{
    return serverMutation('/api/add-appointment', 'POST', data)
}

export const getMyAppointments = async(patientId)=>{
    return serverFetch(`/api/my-appointment-requests?patientId=${patientId}`)
}