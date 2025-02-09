import { Skeleton } from "@/components/ui/skeleton";

const AddBookFormSkeleton = () => {
  return (
    <div className="space-y-5">
      <Skeleton className="h-[40px] w-full rounded-full" />
      <Skeleton className="h-[40px] w-full rounded-full" />
      <Skeleton className="h-[40px] w-full rounded-full" />
      <Skeleton className="h-[40px] w-full rounded-full" />
      <Skeleton className="h-[40px] w-full rounded-full" />
      <Skeleton className="h-[40px] w-full rounded-full" />
      <Skeleton className="h-[40px] w-full rounded-full" />
    </div>
  );
};

export default AddBookFormSkeleton;
