import dynamic from "next/dynamic";

const DatatableLayout = dynamic( () => import('@/components/DatableLayout'), { ssr: false } )

export default function Home() {
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 py-6 w-full overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Tabular Data Summary
        </h3>
        <div className="overflow-x-auto">
          <DatatableLayout />
        </div>
      </div>
  );
}
