import { Card, CardContent, CardHeader } from './ui/Card';
import { Skeleton } from './ui/Skeleton';

function CardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-5 mt-2 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 my-4 w-full" />
        <Skeleton className="h-6 my-4 w-full" />
        <Skeleton className="h-6 my-4 w-full" />
        <Skeleton className="h-6 my-4 w-full" />
      </CardContent>
    </Card>
  );
}

function TableSkeleton({ numberOfRows }: { numberOfRows?: number }) {
  return (
    <div className="space-y-4 py-8 px-4 rounded">
      {Array.from({ length: numberOfRows || 5 }).map((_, index) => (
        <Skeleton key={index} className="h-8 w-full" />
      ))}
    </div>
  );
}

export { CardSkeleton, TableSkeleton };
