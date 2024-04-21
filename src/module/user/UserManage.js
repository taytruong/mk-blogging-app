import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import UserTable from "./UserTable";
import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import { userRole } from "utils/constants";

const UserManage = () => {
  // Role
  const {userInfo} = useAuth()
  if(userInfo.role !== userRole.ADMIN) return null
  
  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your user">
        <div>
          <Button kind="ghost" to="/manage/add-user">
            Add new user
          </Button>
        </div>
      </DashboardHeading>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
