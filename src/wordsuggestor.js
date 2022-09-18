const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, \
(_, i) => start + (i * step));
range(0,3,1)