import { useState } from 'react';

function Switch({ handleActivateCard, checked }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value="undefined"
        className="sr-only peer"
        checked={checked}
        onChange={handleActivateCard}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
}

export default Switch;
