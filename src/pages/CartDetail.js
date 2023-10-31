import { CartCard } from "../components/CartCard"
export const CartDetail = () => {
  return (
    <main className="min-h-screen">
      <h1 className="text-center font-bold text-2xl mt-10">Cart Items: 2</h1>
      <div className="block m-auto max-w-6xl mt-10">
        <CartCard/>
        <CartCard/>
      </div>
    </main>
  )
}
