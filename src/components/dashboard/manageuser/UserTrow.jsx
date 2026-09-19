"use client";
import { updateUserStatus } from "@/lib/Actions/admin/actiions";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserTrow = ({ user }) => {
  const router = useRouter();
  const userId = user._id;
  const isSuspended = user.role === "suspended";

  const handleUser = async (role) => {
    const res = await updateUserStatus(userId, { role });
    if (res.modifiedCount > 0) {
      toast.success("User suspended");
      router.refresh();
    }
  };

  return (
    <Table.Row>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.role}</Table.Cell>
      <Table.Cell>
        <Button
          onClick={() => handleUser("suspended")}
          isDisabled={isSuspended}
          variant="outline"
          className="bg-background text-foreground"
        >
          {isSuspended ? "Suspended" : "Suspend"}
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default UserTrow;
