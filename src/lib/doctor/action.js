'use server'

import { serverMutation } from "../core/server"


export const addDoctorSchedule = async(data)=>{
    const resData = await serverMutation('/api/doctor-schedule', 'POST', data)
    return resData
}

