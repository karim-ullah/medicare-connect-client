'use server'
import { serverFetch, serverMutation } from "@/lib/core/server"

export const createAppointment = async(data)=>{
    return serverMutation('/api/add-appointment', 'POST', data)
}

export const createPayment = async(data)=>{
    return serverMutation('/api/add-payment', 'POST', data)
}

export const getMyAppointments = async(patientId)=>{
    return serverFetch(`/api/my-appointment-requests?patientId=${patientId}`)
}

export const getMyPayments = async(patientId)=>{
    return serverFetch(`/api/get-my-payments?patientId=${patientId}`)
}


export const getTotalPayment = async(patientId)=>{
    return serverFetch(`/api/get-total-payment?patientId=${patientId}`)
}

export const deleteAppointment = async(appointmentId)=>{
    return serverMutation(`/api/delete-appointment?appointmentId=${appointmentId}`, 'DELETE')
}

export const updateAppointmentDay = async(appointmentId,appointmentDate)=>{
    return serverMutation(`/api/update-appointment-day?appointmentId=${appointmentId}`, 'PATCH', appointmentDate)
}