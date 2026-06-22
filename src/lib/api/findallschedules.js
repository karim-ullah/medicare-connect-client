import { serverFetch } from "../core/server"

export const getAllSchedules = async()=>{
    return serverFetch('/api/all-schedules')
}