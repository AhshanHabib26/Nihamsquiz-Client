import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

import moment from "moment"; // For date formatting
import { CategoryLoader } from "@/loader/CategoryLoader";
import { TMeta } from "@/types";
import { useGetAllQuizQuery } from "@/redux/features/quiz/quizApi";
import { TQuiz } from "@/types/common.data";

interface ChartData {
  month: string;
  count: number;
}

export const HomePostChart = () => {
  const { data, isFetching } = useGetAllQuizQuery("");

  // Transform the data
  const processData = (
    data: { data: TQuiz[] | undefined; meta: TMeta | undefined } | undefined
  ): ChartData[] => {
    // Ensure data is defined and has a valid `data` property
    const posts = data?.data || [];

    // Create an object to store the post counts by month
    const monthlyPostCounts: Record<string, number> = posts.reduce(
      (acc, post) => {
        const month = moment(post.createdAt).format("MMMM");
        if (month) {
          if (!acc[month]) {
            acc[month] = 0;
          }
          acc[month]++;
        }
        return acc;
      },
      {} as Record<string, number>
    ); // Type assertion added here

    const allMonths = moment.months();
    const chartData: ChartData[] = allMonths.map((month) => ({
      month,
      count: monthlyPostCounts[month] || 0,
    }));

    return chartData;
  };

  const chartData = processData(data);

  // Bar color
  const chartConfig: ChartConfig = {
    post: {
      label: "Post",
      color: "#2563eb",
    },
  };

  return (
    <div className="my-8 shadow p-4">
      <h1 className="text-lg hind-siliguri-regular mb-4">Total Post (Month)</h1>
      {isFetching ? (
        <CategoryLoader />
      ) : (
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={true}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)} // Displaying the first 3 letters of the month
            />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-post)" radius={4} />
          </BarChart>
        </ChartContainer>
      )}
    </div>
  );
};
