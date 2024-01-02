"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ManInformation = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <section className=" py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {data && data.length
            ? data.map((item) => (
                <section>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                  <p>Role: {item.role}</p>
                </section>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default ManInformation;
