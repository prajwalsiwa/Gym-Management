function TrainerCard() {
  return (
    <div className="flex  h-[23vh]  gap-10 rounded-lg  border p-4 ">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Prajwal Siwa</span>
            <span className="text-lg font-medium">Personal Trainer</span>
          </div>
          <div className="flex justify-between gap-1">
            <div className="flex w-full flex-col items-center justify-center rounded-md border p-1 px-2">
              <span className="text-md font-semibold">3+</span>
              <span className="text-sm ">Clients</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-md border p-1 px-2">
              <span className="text-md font-semibold">2+</span>
              <span className="text-sm ">Years</span>
            </div>
          </div>
        </div>
        <div className="specialities flex gap-1 ">
          <div className="inline-flex  w-fit min-w-0 whitespace-nowrap rounded-md border  p-1 text-xs sm:text-xs">
            Motivation
          </div>
          <div className="inline-flex w-fit min-w-0 whitespace-nowrap rounded-md border  p-1 text-xs sm:text-xs">
            Motivation
          </div>
        </div>
      </div>
      <div className="h-[5rem] w-[15rem] overflow-hidden rounded-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3blk49J3qSVZ0PqeYVZBDn-o6V1Z1T_-BMw&s"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default TrainerCard;
