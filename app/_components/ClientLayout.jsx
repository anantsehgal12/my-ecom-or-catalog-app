'use client'

import { useEffect } from "react";
import { initFlowbite } from 'flowbite';

export default function ClientLayout({ children }) {
  useEffect(() => {
    initFlowbite();
  }, []);

  return <>{children}</>;
}
