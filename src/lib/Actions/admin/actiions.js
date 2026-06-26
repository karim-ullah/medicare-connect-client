'use server'

import { serverFetch } from "@/lib/core/server"

export const getUsers = async()=>{
    return serverFetch('/api/get-users')
}