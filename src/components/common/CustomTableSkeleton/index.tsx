/* eslint-disable react/jsx-key */
import Skeleton from '@Components/RadixComponents/Skeleton';
import { v4 as uuidv4 } from 'uuid';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@Components/RadixComponents/Table';

interface ITableSkeletonProps {
  numRows?: number;
  numTableHead?: string[];
}

const CustomTableSkeleton = ({
  numRows = 7,
  numTableHead = ['10', '85', '5'],
}: ITableSkeletonProps) => {
  const tableRows = Array.from({ length: numRows });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {numTableHead.map(head => (
            <TableHead key={uuidv4} className={`w-[${head}%]`}>
              <Skeleton className="h-4" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map(() => (
          <TableRow key={uuidv4}>
            {Array.from({ length: numTableHead.length }).map(() => (
              <TableCell>
                <Skeleton className=" h-4" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTableSkeleton;
