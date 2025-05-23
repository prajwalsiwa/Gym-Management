import Icon from '@Components/common/Icon';
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

const packageList = [
  {
    id: 1,
    name: 'Beginner Fitness Plan',
    MembershipDuration: '2024/01/01',
    packagePrice: 2500,
    discountPrice: 500,
    totalPrice: 2000,
  },
  {
    id: 2,
    name: 'Strength Training',
    MembershipDuration: '2024/02/15',
    packagePrice: 3000,
    discountPrice: 600,
    totalPrice: 2400,
  },
  {
    id: 3,
    name: 'Weight Loss Package',
    MembershipDuration: '2024/03/10',
    packagePrice: 2800,
    discountPrice: 400,
    totalPrice: 2400,
  },
  {
    id: 4,
    name: 'Muscle Gain Program',
    MembershipDuration: '2024/04/05',
    packagePrice: 3500,
    discountPrice: 700,
    totalPrice: 2800,
  },
  {
    id: 5,
    name: 'Full Body Conditioning',
    MembershipDuration: '2024/05/20',
    packagePrice: 4000,
    discountPrice: 1000,
    totalPrice: 3000,
  },
  {
    id: 6,
    name: 'Cardio and Core',
    MembershipDuration: '2024/06/10',
    packagePrice: 2700,
    discountPrice: 500,
    totalPrice: 2200,
  },
  {
    id: 7,
    name: 'Advanced Strength Program',
    MembershipDuration: '2024/07/30',
    packagePrice: 4500,
    discountPrice: 900,
    totalPrice: 3600,
  },
  {
    id: 8,
    name: 'HIIT and Mobility',
    MembershipDuration: '2024/08/15',
    packagePrice: 3200,
    discountPrice: 600,
    totalPrice: 2600,
  },
  {
    id: 9,
    name: 'Powerlifting Plan',
    MembershipDuration: '2024/09/25',
    packagePrice: 5000,
    discountPrice: 1000,
    totalPrice: 4000,
  },
  {
    id: 10,
    name: 'Endurance and Stamina',
    MembershipDuration: '2024/10/05',
    packagePrice: 2800,
    discountPrice: 400,
    totalPrice: 2400,
  },
];

const SubscriptionTable = () => {
  const { pathname } = useLocation();
  const [showDelete, setShowDelete] = useState(false);

  const isAddMember = pathname === '/add-package';

  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleDelete = () => {
    // console.log('package deleted');
  };

  return (
    <div
      className={`sm:w-[20rem] md:w-[30rem]   lg:w-full ${isAddMember ? 'py-[4.5rem]' : ''}`}
    >
      <Table className="w-full ">
        <TableHeader>
          <TableRow className="h-8 ">
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500 ">
              S.N.
            </TableHead>
            <TableHead className="w-[20%] text-center !text-xs font-bold text-gray-500">
              Name
            </TableHead>
            <TableHead className="w-[20%] text-center !text-xs font-bold text-gray-500">
              Membership Duration
            </TableHead>
            <TableHead className="w-[20%] text-center !text-xs font-bold text-gray-500">
              Package Price
            </TableHead>
            <TableHead className="w-[10%] text-center !text-xs font-bold text-gray-500">
              Discount
            </TableHead>
            <TableHead className="w-[15%] text-center !text-xs font-bold text-gray-500">
              Total Price
            </TableHead>
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500" />
            <TableHead className="w-[5%] text-center !text-xs font-bold text-gray-500" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {packageList.map((subscriptionPackage, index) => (
            <motion.tr
              key={subscriptionPackage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              className="overflow-x-auto "
            >
              <TableCell className="w-[5%] text-center dark:text-white ">
                {index + 1}
              </TableCell>
              <TableCell className="w-[20%] text-center dark:text-white ">
                {subscriptionPackage.name}
              </TableCell>
              <TableCell className="w-[20%] text-center dark:text-white">
                {subscriptionPackage.MembershipDuration}
              </TableCell>
              <TableCell className="w-[20%] text-center dark:text-white">
                {subscriptionPackage.packagePrice}
              </TableCell>
              <TableCell className="w-[10%] text-center dark:text-white">
                {subscriptionPackage.discountPrice}
              </TableCell>
              <TableCell className="w-[15%] text-center dark:text-white">
                {subscriptionPackage.totalPrice}
              </TableCell>
              <TableCell className="w-[5%] text-center">
                <Icon name="edit" className="text-teal-600" />
              </TableCell>
              <TableCell className="w-[5%] text-center">
                <Icon
                  name="delete"
                  className="text-red-600"
                  onClick={handleShowDelete}
                />
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
      <DeleteModal
        header="Delete Package?"
        subheader="Are you sure you want to delete?"
        isOpen={showDelete}
        handleClose={handleCloseDelete}
        onDeleteClick={handleDelete}
      />
    </div>
  );
};

export default SubscriptionTable;
