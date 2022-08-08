import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UseScript({url}) {
  const {pathname} = useRouter()
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [pathname]);
}
