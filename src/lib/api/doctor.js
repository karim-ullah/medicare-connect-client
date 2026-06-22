import { serverFetch } from "../core/server"


export const getDoctor = async(doctorId)=>{
    return serverFetch(`/api/my/doctor?doctorId=${doctorId}`)
    
}


export const getDoctorSchedules = async(doctorId)=>{
    return serverFetch(`/api/doctor-schedule?doctorId=${doctorId}`)
}