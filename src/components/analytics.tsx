import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AnalyticsCard } from "./analytics-card";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className=" w-full whitespace-nowrap shrink-0 p-2">
      <div className="w-full flex flex-row space-x-4">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total Issues"
            value={data.taskCount}
            variant={data.taskDiff > 0 ? "up" : "down"}
            increasedValue={data.taskDiff}
          />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned Issues"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.assignedTaskDiff}
          />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed Issues"
            value={data.completedTaskCount}
            variant={data.completeTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.completeTaskDiff}
          />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="OverDue Issues"
            value={data.overdueTaskCount}
            variant={data.overdueTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.overdueTaskDiff}
          />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete Issues"
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDiff > 0 ? "up" : "down"}
            increasedValue={data.incompleteTaskDiff}
          />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
