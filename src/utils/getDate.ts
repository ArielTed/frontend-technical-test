import { format } from 'date-fns';

export const getDate = (timestamp: number): string => {
  return format(new Date(timestamp), 'MMM dd');
};

export const getDateMessage = (timestamp: number): string => {
  return format(new Date(timestamp), 'MMM dd HH:mm');
};
