'use server'
import { serverFetch } from "../core/server"


export const getDoctor = async(doctorId)=>{
    return serverFetch(`/api/my/doctor?doctorId=${doctorId}`)
    
}


export const getDoctorSchedules = async(doctorId)=>{
    return serverFetch(`/api/doctor-schedule?doctorId=${doctorId}`)
}

export const getAppointmentRequests = async(doctorId)=>{
    return serverFetch(`/api/appointment-requests?doctorId=${doctorId}`)
}

export const getDoctorPrescriptions = async(doctorId)=>{
    return serverFetch(`/api/get-doctor-prescriptions?doctorId=${doctorId}`)
}