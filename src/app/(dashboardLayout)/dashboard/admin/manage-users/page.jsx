import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { getUsers } from "@/lib/Actions/admin/actiions";
import { Button, Table } from "@heroui/react";
import React from "react";

const ManageUsers = async () => {
  const users = await getUsers();

  return (
    <div className="py-10 px-6">
      <DashboardHeading
        tittle={"Manage Users"}
        description={"View, suspend, or remove registered patients"}
      />

      <div className="mt-3">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="users" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>User</Table.Column>
                <Table.Column>Contact</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {users &&
                  users.map((user) => {
                    return (
                      <Table.Row key={user._id}>
                      <Table.Cell>{user.name}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.role}</Table.Cell>
                      <Table.Cell>
                        <Button>action</Button>
                      </Table.Cell>
                    </Table.Row>
                    )
                  })}

               
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default ManageUsers;
