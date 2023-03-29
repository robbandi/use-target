import { useEffect } from 'react';

const useTarget = (anchorId, options = {}) => {
  useEffect(() => {
    const target = document.getElementById(anchorId);

    if (target) {
      const { block = 'start', inline = 'nearest', speed = 500 } = options;
      target.scrollIntoView({ behavior: 'smooth', block, inline, speed });
    }
  }, [anchorId, options]);

  const handleClick = (event) => {
    event.preventDefault();

    const target = document.getElementById(anchorId);

    if (target) {
      const { block = 'start', inline = 'nearest', speed = 500 } = options;
      target.scrollIntoView({ behavior: 'smooth', block, inline, speed });
    }
  };

  return handleClick;
};

export default useTarget;