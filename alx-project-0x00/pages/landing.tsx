import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-50">
         <Button title="Small Button" styles="text-sm rounded-sm" />
         <Button title="Medium Button" styles="text-base rounded-md px-5 py-2" />
         <Button title="Large Button" styles="text-lg rounded-full px-6 py-3" />
         <Button title="Extra Button" styles="text-base rounded-lg px-5 py-2" />
      </div>
    </div>
  )
}
export default Landing;