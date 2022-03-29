import { useEffect } from "react";

const ProblematicComponent = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // faking an async error
      throw new Error("buuuu");
    }, 5000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div>
      <p>Hola mundo </p>
    </div>
  );
};

export default ProblematicComponent;
