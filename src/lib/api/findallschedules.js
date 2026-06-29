'use server'
import { serverFetch } from "../core/server"

export const getSchedules = async(query)=>{
    return serverFetch(`/api/schedules?${query}`)
}


export const getSingleSchedule = async(scheduleId)=>{
    return serverFetch(`/api/single-schedule?scheduleId=${scheduleId}`)
}