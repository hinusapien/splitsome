import { FC, useState } from 'react';
import './App.scss';
import { ActualExpensesCosts } from './common/types';

const App: FC = () => {
  const billingSum = 0;
  const billingSumDividedByParticipantNumber = 0;
  const firstParticipantExpenses = 0;
  const secondParticipantExpenses = 0;
  const nParticipantExpenses = 0;
  const firstParticipantDebts = 0;
  const secondParticipantDebts = 0;
  const nParticipantDebts = 0;
  const x = 'firstParticipant';
  const y = 'secondParticipant';
  const z = 'nParticipant';
  const participantNames: string[] = [x, y, z];
  const sumOfAllExpenses: number[] = [firstParticipantExpenses, secondParticipantExpenses, nParticipantExpenses];
  let participantNumber: number;
  const actualExpensesCosts: ActualExpensesCosts[] = [];

  function getParticipantNumber() {
    participantNumber = participantNames.length;
  }

  function calculateBillingSum() {
    return sumOfAllExpenses.reduce((a, b) => a + b);
  }

  function addExpense(labelName: string) {
    actualExpensesCosts.push({ label: labelName });
  }

  return <h1 data-testid="app-container">Hello World</h1>;
};

export default App;
