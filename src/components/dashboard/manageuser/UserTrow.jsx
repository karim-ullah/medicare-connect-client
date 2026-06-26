'use client'
import { updateUserStatus } from "@/lib/Actions/admin/actiions";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const UserTrow = ({user}) => {

    const router = useRouter()
    const userId = user._id
const handleUser = async(role)=>{
    const res = await updateUserStatus(userId, {role})
    if(res.modifiedCount >0){
        toast.success('suspended')
        router.refresh()

    }
}
  return (
    <Table.Row >
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.role}</Table.Cell>
      <Table.Cell className={"space-x-2"}>
        <Button onClick={()=>handleUser('suspended')} variant="outline" className={"bg-background text-foreground"}>suspend</Button>
        <Button variant="outline" className={"bg-background text-foreground"}>delete</Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default UserTrow;
