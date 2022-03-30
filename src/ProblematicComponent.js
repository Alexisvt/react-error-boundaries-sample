import { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

const ProblematicComponent = () => {
  const handleError = useErrorHandler();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // faking an async error
      try {
        throw new Error('Something went wrong');
      } catch (error) {
        handleError(error);
      }
    }, 5000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div>
      <p>Hola mundo</p>
    </div>
  );
};

export default ProblematicComponent;
