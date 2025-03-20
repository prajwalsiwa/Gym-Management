import { useLocation, useNavigate } from 'react-router-dom';
import { initDomToCode } from 'dom-to-code';
import { ToastContainer } from 'react-toastify';
import { useTypedDispatch, useTypedSelector } from '@Store/hooks';
import generateRoutes from '@Routes/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/testRoutes';
import {
  setModalContent,
  setPromptDialogContent,
  toggleModal,
  togglePromptDialog,
} from '@Store/actions/common';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@Components/common/Modal';
import PromptDialog from '@Components/common/PromptDialog';
import {
  getModalContent,
  getPromptDialogContent,
} from '@Constants/modalContents';
import SideBar from '@Components/SideBar/SideBar';
import Switch from '@Components/common/Switch';
import { Label } from '@Components/common/FormUI';
import { useState } from 'react';
import Icon from '@Components/common/Icon';
import BreadCrumb from '@Components/common/BreadCrumb';
import { DropdownMenu } from '@Components/RadixComponents/DropDownMenu';
import DropdownOptions from '@Components/RadixComponents/DropdownOptions';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useTypedDispatch();
  const showModal = useTypedSelector(state => state.common.showModal);
  const modalContent = useTypedSelector(state => state.common.modalContent);
  const showPromptDialog = useTypedSelector(
    state => state.common.showPromptDialog,
  );
  const promptDialogContent = useTypedSelector(
    state => state.common.promptDialogContent,
  );

  const toggleDarkMode = (checked: boolean) => {
    setIsChecked(checked);
    document.body.classList.toggle('dark');
  };

  const routesWithoutSidebar = [
    '/login',
    '/sign-up',
    '/forgot-password',
    '/public-page',
  ];

  const hideSideBar = routesWithoutSidebar.some(url => pathname.includes(url));

  const handleModalClose = () => {
    dispatch(toggleModal());
    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 150);
  };

  const handlePromptDialogClose = () => {
    dispatch(togglePromptDialog());
    setTimeout(() => {
      dispatch(setPromptDialogContent(null));
    }, 150);
  };

  const handleSiginButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      {process.env.NODE_ENV !== 'production' &&
        !process.env.DISABLE_DOM_TO_CODE &&
        initDomToCode()}
      <div
        className={`${hideSideBar ? 'ml-0  h-screen w-screen overflow-hidden' : `ml-0 flex h-screen w-screen flex-col overflow-hidden dark:border-grey-200 dark:bg-grey-900 dark:text-white`}`}
      >
        <div
          className="flex w-full items-center justify-between   gap-4 space-x-2 border-b  py-4 pr-4 dark:border-b-grey-700 dark:bg-grey-900  dark:text-white"
          style={{ overflow: 'visible' }}
        >
          <div className=" flex items-center   pl-12">
            <button type="button" onClick={() => navigate('/')}>
              <span className="text-xl font-extrabold">HORIZON</span>{' '}
              <span className="text-xl font-medium"> GYM</span>
            </button>
          </div>
          <div className="flex gap-8 pr-8">
            <div className="flex items-center gap-2">
              <Switch
                checked={isChecked}
                className=" rounded-full"
                onCheckedChange={toggleDarkMode}
                id="airplane-mode"
              />
              <Label htmlFor="airplane-mode" className="text-gray-900">
                Dark Mode
              </Label>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 dark:border-gray-200 ">
              <Icon name="notifications" className="dark:text-white" />
            </div>
            <div className="flex h-10 w-10  items-center justify-center rounded-full border border-gray-800 dark:border-gray-200">
              <button
                className=""
                type="button"
                onClick={handleSiginButtonClick}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger>PS</DropdownMenuTrigger>
                  <DropdownMenuContent className="clear-star mr-20 mt-4  rounded-md border bg-gray-700  py-2">
                    <DropdownMenuItem className="flex h-full w-full items-center justify-center gap-2 px-4 py-2 text-white  hover:bg-gray-500 ">
                      <Icon name="logout" className="" />{' '}
                      <span className=""> Sign Out </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </button>
            </div>
            {isOpen && (
              <DropdownOptions
                options={[{ name: 'logout' }]}
                data={undefined}
              />
            )}
          </div>
        </div>
        <ToastContainer />
        <div className="flex h-full ">
          <div className=" ">{!hideSideBar && <SideBar />}</div>

          <Modal
            show={showModal}
            className={getModalContent(modalContent)?.className || ''}
            title={getModalContent(modalContent)?.title}
            onClose={handleModalClose}
            hideCloseButton={!!getModalContent(modalContent)?.hideCloseButton}
          >
            {getModalContent(modalContent)?.content}
          </Modal>

          <PromptDialog
            show={showPromptDialog}
            title={getPromptDialogContent(promptDialogContent)?.title}
            onClose={handlePromptDialogClose}
          >
            {getPromptDialogContent(promptDialogContent)?.content}
          </PromptDialog>
          <div
            className={`h-full w-full px-10 bg-gray-50 dark:bg-grey-900 ${pathname.includes('login') ? 'pt-0' : 'pt-4 '} `}
          >
            {pathname !== '/' || (pathname.includes('login') && <BreadCrumb />)}
            {generateRoutes({
              routes:
                process.env.NODE_ENV !== 'production'
                  ? [...testRoutes, ...appRoutes]
                  : appRoutes,
            })}
          </div>
        </div>
      </div>
    </>
  );
}
