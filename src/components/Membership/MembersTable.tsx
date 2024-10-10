import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@Components/RadixComponents/Table';

const MembersTable = () => {
  const members = [
    {
      id: 1,
      name: 'Prajwal Siwa',
      age: 25,
      contact: '1234567890',
      gender: 'Male',
      membershipStartDate: '2024-10-08',
      membershipDuration: 12,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Beginner',
    },
    {
      id: 2,
      name: 'John Deo',
      age: 30,
      contact: '0987654321',
      gender: 'Female',
      membershipStartDate: '2024-09-15',
      membershipDuration: 6,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 28,
      contact: '4561237890',
      gender: 'Female',
      membershipStartDate: '2024-08-20',
      membershipDuration: 9,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Advanced',
    },
    {
      id: 4,
      name: 'Michael Smith',
      age: 35,
      contact: '7894561230',
      gender: 'Male',
      membershipStartDate: '2024-07-10',
      membershipDuration: 24,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Professional',
    },
    {
      id: 5,
      name: 'Sophia Brown',
      age: 22,
      contact: '3216549870',
      gender: 'Female',
      membershipStartDate: '2024-05-12',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Beginner',
    },
    {
      id: 6,
      name: 'James Wilson',
      age: 40,
      contact: '6549873210',
      gender: 'Male',
      membershipStartDate: '2024-04-05',
      membershipDuration: 12,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 7,
      name: 'Olivia Garcia',
      age: 27,
      contact: '9873216540',
      gender: 'Female',
      membershipStartDate: '2024-03-18',
      membershipDuration: 6,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Advanced',
    },
    {
      id: 8,
      name: 'Liam Martinez',
      age: 33,
      contact: '1472583690',
      gender: 'Male',
      membershipStartDate: '2024-02-12',
      membershipDuration: 15,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Professional',
    },
    {
      id: 9,
      name: 'Emma Rodriguez',
      age: 26,
      contact: '2583691470',
      gender: 'Female',
      membershipStartDate: '2024-01-01',
      membershipDuration: 12,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Beginner',
    },
    {
      id: 10,
      name: 'Noah Davis',
      age: 29,
      contact: '3692581470',
      gender: 'Male',
      membershipStartDate: '2023-12-15',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 10,
      name: 'Noah Davis',
      age: 29,
      contact: '3692581470',
      gender: 'Male',
      membershipStartDate: '2023-12-15',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 10,
      name: 'Noah Davis',
      age: 29,
      contact: '3692581470',
      gender: 'Male',
      membershipStartDate: '2023-12-15',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 10,
      name: 'Noah Davis',
      age: 29,
      contact: '3692581470',
      gender: 'Male',
      membershipStartDate: '2023-12-15',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 10,
      name: 'Noah Davis',
      age: 29,
      contact: '3692581470',
      gender: 'Male',
      membershipStartDate: '2023-12-15',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
    {
      id: 10,
      name: 'Noah Davis',
      age: 29,
      contact: '3692581470',
      gender: 'Male',
      membershipStartDate: '2023-12-15',
      membershipDuration: 18,
      photo: 'base64_encoded_image_string',
      membershipLevel: 'Intermediate',
    },
  ];

  return (
    <div className="m-0 flex h-full w-full flex-col  rounded-2xl bg-white px-4 py-10">
      <div className="flex w-full flex-col   pb-10">
        <h2 className="text-xl md:text-2xl">Members</h2>
        <span className="text-md text-gray-400">Here is members details!</span>
      </div>
      <div className="lg w-full overflow-x-auto">
        <Table className="w-full table-auto border-collapse">
          <TableHeader className="rounded-lg border">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Membership Start Date</TableHead>
              <TableHead>Membership Duration (months)</TableHead>
              <TableHead>Membership Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.length > 0 ? (
              members.map(member => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.age}</TableCell>
                  <TableCell>{member.contact}</TableCell>
                  <TableCell>{member.gender}</TableCell>
                  <TableCell>{member.membershipStartDate}</TableCell>
                  <TableCell>{member.membershipDuration}</TableCell>
                  <TableCell>{member.membershipLevel}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  No Members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MembersTable;
