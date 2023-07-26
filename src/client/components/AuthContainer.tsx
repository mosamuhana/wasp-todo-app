import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AuthContainer({ children }: Props) {
  return (
    <div className="w-full h-full bg-white">
      <div className="min-w-full min-h-[75vh] flex items-center justify-center">
        <div className="w-full h-full max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
          { children }
        </div>
      </div>
    </div>
  );
}
