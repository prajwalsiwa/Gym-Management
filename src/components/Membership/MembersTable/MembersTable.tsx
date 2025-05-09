import Icon from '@Components/common/Icon';
import Modal from '@Components/common/Modal';
import DeleteModal from '@Components/common/Modal/DeleteModal';
import TableRow, {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '@Components/RadixComponents/Table';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const { pathname } = useLocation();
  const [showDelete, setShowDelete] = useState(false);

  const isAddMember = pathname === '/add-membership';

  const handleOpenPayment = () => {
    setIsOpenPayment(true);
  };

  const handleClosePayment = () => {
    setIsOpenPayment(false);
  };

  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleDelete = () => {
    // console.log('member deleted');
  };

  return (
    <div
      className={`sm:w-[20rem] md:w-[30rem]   lg:w-full ${isAddMember ? 'py-[4.8rem]' : ''}`}
    >
      <Table className="w-full">
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
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500" />
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500" />
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500" />
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
              className="overflow-x-auto"
            >
              <TableCell className="w-[5%] text-center">{index + 1}</TableCell>
              <TableCell className="w-[20%] text-center ">
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
              <TableCell className="w-[5%] text-center  ">
                <Icon name="edit" className="text-teal-600" />
              </TableCell>
              <TableCell className="w-[5%] text-center ">
                <Icon
                  name="delete"
                  className="text-red-600"
                  onClick={handleShowDelete}
                />
              </TableCell>
              <TableCell className="flex w-[5%] text-center ">
                <Icon
                  name="paid"
                  className="text-blue-600"
                  onClick={handleOpenPayment}
                />
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>

      <Modal
        title="Payment"
        subtitle="Member transaction"
        show={isOpenPayment}
        onClose={handleClosePayment}
        className="custom-class !w-[26rem]"
      >
        <div className="flex flex-col gap-4">
          <div>
            <h5>Amount</h5>
            <span>5000</span>
          </div>
          <div>
            <h5>Paid on</h5>
            <span>2024/01/24</span>
          </div>
        </div>
      </Modal>
      <DeleteModal
        header="Delete Member?"
        subheader="Are you sure you want to delete?"
        isOpen={showDelete}
        handleClose={handleCloseDelete}
        onDeleteClick={handleDelete}
      />
    </div>
  );
};

export default MembersTable;
