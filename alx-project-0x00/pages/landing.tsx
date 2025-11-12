import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Landing Buttons</h1>

        {/* Small Butttons */}
        <button title="small rounded-sm"></button>
        <button title="small rounded-md"></button>
        <button title="small rounded-lg"></button>

        {/* Medium Buttons */}
        <button title="medium rounded-sm"></button>
        <button title="medium rounded-md"></button>
        <button title="medium rounded-lg"></button>

        {/* Large Buttons */}
        <button title="large rounded-sm"></button>
        <button title="large rounded-md"></button>
        <button title="large rounded-lg"></button>
      </div>
    </div>
  )
}
export default Landing;