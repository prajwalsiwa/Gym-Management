import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@Components/RadixComponents/ui/breadcrumb';
import { sentenceCase } from '@Utils/index';
import { useLocation } from 'react-router-dom';

function BreadCrumb() {
  const { pathname } = useLocation();
  const path = sentenceCase(pathname.replace('/', ''));
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href={`${pathname}`}>{path}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
