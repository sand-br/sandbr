import { LoaderCircle } from "lucide-react";

interface LoadProps {
  texto: string;
};

export function Loading({texto}: LoadProps ){
  return <p
    className="flex items-center gap-1"
  >
    <LoaderCircle className="animate-spin size-5"/> {texto}
  </p>
};
