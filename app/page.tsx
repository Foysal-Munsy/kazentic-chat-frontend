import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <div>
      <PageHeader first="Menu" second="Menu" />
      <div className="m-2 text-2xl">
        <h1 className="font-semibold ">
          Welcome,
          <span className="text-[#4157FE]"> Foysal Munsy!</span>
        </h1>
      </div>
    </div>
  );
}
