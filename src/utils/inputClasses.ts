import classNames from 'classnames';

export const inputClasses = (errorMessage?: string, valid?: boolean) =>
  classNames(
    'outline-none border rounded p-2 w-full bg-white focus:shadow-inputFocus focus:border-white border-gray-300',
    {
      'border-red-500': !!errorMessage,
      'border-green-500': valid,
    },
  );
