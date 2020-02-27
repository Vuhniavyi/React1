import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import pricingPlanItems from '../bd/pricing-plan.json';
import transactionList from '../bd/transaction-list.json';

const userData = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar:
    'http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const statsData = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <Fragment>
    <Profile userToProfile={userData} />
    <Stats title="Upload stats" stats={statsData} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactionList} />
  </Fragment>
);
export default App;
