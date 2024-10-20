import { Button } from '@Components/RadixComponents/Button';
import Modal from '.';

interface deleteModalProps {
  header: string;
  subheader: string;
  onDeleteClick: () => void;
  isOpen: boolean;
  handleClose: () => void;
}

function DeleteModal({
  header,
  onDeleteClick,
  isOpen,
  subheader,
  handleClose,
}: deleteModalProps) {
  return (
    <Modal
      title={header}
      subtitle={subheader}
      show={isOpen}
      className="j flex !w-[30rem] flex-col gap-4  "
      onClose={handleClose}
      headerClassName="w-full pl-4"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full gap-4">
          <Button
            className="text-md h-11 w-full rounded-2xl bg-gray-600 hover:bg-gray-700"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="text-md h-11 w-full rounded-2xl bg-red-600 hover:bg-red-700"
            onClick={onDeleteClick}
            leftIcon="delete"
            iconClassname="!text-xl"
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
