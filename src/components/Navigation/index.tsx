interface NavigationPropsTypes {
  headerName: string;
}

function Navigation({ headerName }: NavigationPropsTypes) {
  return (
    <div className="h-14 bg-blue-800">
      <h4 className="flex h-full items-center px-8 text-white">{headerName}</h4>
    </div>
  );
}

export default Navigation;
