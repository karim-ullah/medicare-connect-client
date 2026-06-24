'use server'

import { serverMutation } from "../core/server"


export const addDoctorSchedule = async(data)=>{
    const resData = await serverMutation('/api/doctor-schedule', 'POST', data)
    return resData
}


export const updateSchedule = async(scheduleId, data)=>{
    return serverMutation(`/api/update-schedule?scheduleId=${scheduleId}`, 'PATCH', data)
}

