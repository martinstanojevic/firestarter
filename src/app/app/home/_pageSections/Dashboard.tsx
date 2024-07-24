import SummaryCard from './SummaryCard';
import { Icons } from '@/components/Icons';
import { RecentSales } from '../../_pageSections/RecentSales';

const Dashboard = () => {
  return (
    <div className="w-11/12 space-y-6">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          card_title={'Revenue'}
          icon={<Icons.CircleDollarSign />}
          content_main={45596}
          content_secondary={'+6.1% from last month'}
        />
        <SummaryCard
          card_title={'Subscriptions'}
          icon={<Icons.Users />}
          content_main={10298}
          content_secondary={'+18.1% from last month'}
        />
        <SummaryCard
          card_title={'Posts'}
          icon={<Icons.ScreenShare />}
          content_main={28353}
          content_secondary={'+10.1% from last month'}
        />
      </div>
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
        <RecentSales />
      </div>
    </div>
  );
};

export default Dashboard;
