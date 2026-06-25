'use server'
import { serverFetch } from "../core/server"

export const getAllSchedules = async()=>{
    return serverFetch('/api/all-schedules')
}


export const getSingleSchedule = async(scheduleId)=>{
    return serverFetch(`/api/single-schedule?scheduleId=${scheduleId}`)
}