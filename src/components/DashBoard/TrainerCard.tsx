function TrainerCard() {
  return (
    <div className="flex  gap-10 rounded-lg border p-4">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Prajwal Siwa</span>
            <span className="text-lg font-medium">Personal Trainer</span>
          </div>
          <div className="flex justify-between gap-1">
            <div className="flex w-full flex-col items-center justify-center rounded-md border p-1 px-2">
              <span className="text-lg font-semibold">3+</span>
              <span className="text-md font-medium">Clients</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-md border p-1 px-2">
              <span className="text-lg font-semibold">2+</span>
              <span className="text-md font-medium">Years</span>
            </div>
          </div>
        </div>
        <div className="specialities grid grid-cols-2 gap-1">
          <div className="rounded-md border p-1 text-sm">Motivation</div>
          <div className="rounded-md border p-1 text-sm">Motivation</div>
        </div>
      </div>
      <div className="h-[10rem] w-[10rem] overflow-hidden rounded-lg">
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
