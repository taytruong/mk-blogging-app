import { ActionDelete, ActionEdit } from "components/actions";
import { Button } from "components/button";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import { collection, deleteDoc, doc, getDocs, limit, onSnapshot, query, startAfter, where } from "firebase/firestore";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userRole, userStatus } from "utils/constants";

const USER_PER_PAGE = 10; // count display per page 

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  
  const [lastDoc, setLastDoc] = useState()
const [total, setTotal] = useState(0)

const handleLoadMoreUser = async () => {
  const nextRef = query(collection(db, "users"),
      startAfter(lastDoc), // result after (lastDoc)
      limit(USER_PER_PAGE));
  
      onSnapshot(nextRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUserList([...userList,...results]); //~ values new, values old
      });
      const documentSnapshots = await getDocs(nextRef);
      const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      setLastDoc(lastVisible) 
    }

  useEffect(() => {
    async function fetchData(){
      const colRef = collection(db, "users");
      const newRef = filter
      ? query(
        colRef,
        where("fullname", ">=", filter),
        where("fullname", "<=", filter + "utf8"),
      )
      : query(colRef,limit(USER_PER_PAGE));

      const documentSnapshots = await getDocs(newRef);
      const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      // setLastDoc(lastVisible)

      onSnapshot(colRef, snapshot => {
        setTotal(snapshot.size) 
      })

      onSnapshot(newRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUserList(results);
      });
      setLastDoc(lastVisible)
    }
    fetchData()
  }, [filter]);

  const handleDeleteUser = async (user) => {
    const colRef = doc(db, "users", user.id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1DC071",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  const handleSearch = debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  return (
    <div> 
    <div className="mb-10 flex justify-end">
        <input
          type="text"
          placeholder="Search user ... "
          className="py-4 px-5 border border-gray-400 rounded-lg outline-none"
          onChange={handleSearch}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((user) => (
              <tr key={user.id}>
                <td title={user.id}>{user.id.slice(0, 5) + "..."}</td>
                <td className="whitespace-nowrap">
                  <div className="flex items-center gap-x-3">
                    <img
                      src={user?.avatar}
                      alt=""
                      className="w-10 h-10 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3>{user?.fullname}</h3>
                      <time className="text-sm text-gray-400">
                        {new Date(
                          user?.createdAt?.seconds * 1000
                        ).toLocaleDateString("vi-VI")}
                      </time>
                    </div>
                  </div>
                </td>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>
                  {user.status === userStatus.ACTIVE && (
                    <LabelStatus type="success">Active</LabelStatus>
                  )}
                  {user.status === userStatus.PENDING && (
                    <LabelStatus type="warning">Pending</LabelStatus>
                  )}
                  {user.status === userStatus.BAN && (
                    <LabelStatus type="danger">Rejected</LabelStatus>
                  )}
                </td>
                <td>
                  {user.role === userRole.ADMIN && "Admin"}
                  {user.role === userRole.MOD && "Mod"}
                  {user.role === userRole.USER && "User"}
                </td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-user?id=${user.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteUser(user)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {total > userList.length && <div className="mt-10">
        <Button onClick={handleLoadMoreUser} className="mx-auto">Load more</Button>
        {total}
        </div>}
    </div>
  );
};

export default UserTable;
