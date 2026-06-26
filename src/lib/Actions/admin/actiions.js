'use server'

import { serverFetch, serverMutation } from "@/lib/core/server"

export const getUsers = async()=>{
    return serverFetch('/api/get-users')
}

export const getDoctors = async()=>{
    return serverFetch('/api/get-doctors')
}

export const updateStatus = async(doctorId, status)=>{
    return serverMutation(`/api/update-status-doctor?doctorId=${doctorId}`, 'PATCH', status)
}