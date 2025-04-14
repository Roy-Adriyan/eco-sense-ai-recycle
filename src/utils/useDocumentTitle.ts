
import { useEffect } from 'react';

/**
 * A hook to update the document title when a component mounts
 * @param title The title to set for the document
 * @param suffix Optional suffix to append to the title
 */
export const useDocumentTitle = (
  title: string,
  suffix: string = '| EcoSense AI'
) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = suffix ? `${title} ${suffix}` : title;

    return () => {
      document.title = prevTitle;
    };
  }, [title, suffix]);
};

export default useDocumentTitle;
