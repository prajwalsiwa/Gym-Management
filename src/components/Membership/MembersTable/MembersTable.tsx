import TableRow, {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '@Components/RadixComponents/Table';
import { motion } from 'framer-motion';

const membersList = [
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
];

const MembersTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow className="h-8">
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500">
              S.N.
            </TableHead>
            <TableHead className="w-[20%] text-center !text-xs font-bold text-gray-500">
              Name
            </TableHead>
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500">
              Age
            </TableHead>
            <TableHead className="w-[15%] text-center !text-xs font-bold text-gray-500">
              Contact
            </TableHead>
            <TableHead className="w-[10%] text-center !text-xs font-bold text-gray-500">
              Gender
            </TableHead>
            <TableHead className="w-[10%] text-center !text-xs font-bold text-gray-500">
              Membership Start Date
            </TableHead>
            <TableHead className="w-[10%] text-center !text-xs font-bold text-gray-500">
              Membership Duration
            </TableHead>
            <TableHead className="w-[15%] text-center !text-xs font-bold text-gray-500">
              Membership Level
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersList.map((member, index) => (
            <motion.tr
              key={member.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TableCell className="w-[5%] text-center">{index + 1}</TableCell>
              <TableCell className="w-[20%] text-center">
                {member.name}
              </TableCell>
              <TableCell className="w-[5%] text-center">{member.age}</TableCell>
              <TableCell className="w-[15%] text-center">
                {member.contact}
              </TableCell>
              <TableCell className="w-[10%] text-center">
                {member.gender}
              </TableCell>
              <TableCell className="w-[10%] text-center">
                {member.membershipStartDate}
              </TableCell>
              <TableCell className="w-[10%] text-center">
                {member.membershipDuration}
              </TableCell>
              <TableCell className="w-[15%] text-center">
                {member.membershipLevel}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MembersTable;
