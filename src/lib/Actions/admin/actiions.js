'use server'

import { serverFetch, serverMutation } from "@/lib/core/server"

export const getUsers = async()=>{
    return serverFetch('/api/get-users')
}

export const getDoctors = async()=>{
    return serverFetch('/api/get-doctors')
}

export const getAppointments = async()=>{
    return serverFetch('/api/all-appointments')
}

export const getPayments = async()=>{
    return serverFetch('/api/all-payment')
}

export const updateStatus = async(doctorId, status)=>{
    return serverMutation(`/api/update-status-doctor?doctorId=${doctorId}`, 'PATCH', status)
}

// suspend user

export const updateUserStatus = async(userId, role)=>{
    return serverMutation(`/api/suspend-user?userId=${userId}`, 'PATCH', role)
}